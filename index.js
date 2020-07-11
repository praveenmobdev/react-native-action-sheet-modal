import React from 'react'
import Modal from 'react-native-modal';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import styles from './styles';
// import { useSafeArea } from 'react-native-safe-area-context';

function ActionSheet(props) {
//   const insets = useSafeArea();
  const { isVisible = false, modelClose = () => { }, options = [], onChange = () => { } } = props

  return (
      <Modal
        isVisible={isVisible}
        backdropOpacity={0.30}
        style={[styles.modelStyle, { padding: 10}]}
        onBackButtonPress={modelClose}
        onBackdropPress={modelClose}
        backdropTransitionOutTiming={1}
        transparent={true}>
        {options.map((data, key) => {
          const {value, extraData={}} = data
          return (
            <View
              key={key}
              style={[key === 0 ? styles.actionFirstOption : '',
              key === options.length - 1 ? styles.actionLastOption : '',
             styles.bgWhite, { borderTopWidth: key === 0 ? 0 : 0.5 }]}>
              <TouchableOpacity onPress={() => {
                  onChange(value, extraData)
              }}
                style={[key === 0 ? styles.actionFirstOption : '',
                key === options.length - 1 ? styles.actionLastOption : '',
                styles.alignCenter, styles.pv15, styles.bgWhite,
                ]}
              >
                <Text style={styles.actionOptionText}>{data.name}</Text>
              </TouchableOpacity>
            </View>
          )
        })}
        <View style={styles.pv5}></View>
        <View style={[styles.actionOptionsView]}>
          <TouchableOpacity onPress={modelClose} style={[styles.alignCenter, styles.pv15]}>
            <Text style={styles.actionOptionCancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal >
  )
}
export default ActionSheet