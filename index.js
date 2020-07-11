import React from 'react'
import Modal from 'react-native-modal';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import styles from './styles';

function ActionSheet(props) {
  const {
    isVisible = false,
    onClose = () => { },
    options = [],
    onChange = () => { },
    hideCancel = false,
    cancelText = 'Cancel',
    cancelTextStyle = {},
    cancelContainerStyle = {},
    optionsTextStyle = {},
    optionsContainerStyle = {},
    modalProps = {}
  } = props

  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.3}
      style={[styles.modelStyle, { padding: 10 }]}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      backdropTransitionOutTiming={1}
      transparent={true}
      {...modalProps}>
      {options.map((data, key) => {
        const { value, extraData = {} } = data
        return (
          <View
            key={key}
            style={[key === 0 ? styles.actionFirstOption : '',
            key === options.length - 1 ? styles.actionLastOption : '',
            styles.bgWhite, { borderTopWidth: key === 0 ? 0 : 0.5 }, optionsContainerStyle]}>
            <TouchableOpacity onPress={() => {
              onChange(value, extraData)
            }}
              style={[key === 0 ? styles.actionFirstOption : '',
              key === options.length - 1 ? styles.actionLastOption : '',
              styles.alignCenter, styles.pv15, styles.bgWhite, optionsContainerStyle
              ]}
            >
              <Text style={[styles.actionOptionText, optionsTextStyle]}>{data.name}</Text>
            </TouchableOpacity>
          </View>
        )
      })}
      <View style={styles.pv5}></View>
      {!hideCancel &&
        <View style={[styles.actionOptionsView]}>
          <TouchableOpacity onPress={onClose} style={[styles.alignCenter, styles.pv15, styles.actionOptionsView, cancelContainerStyle]}>
            <Text style={[styles.actionOptionCancelText, cancelTextStyle]}>{cancelText}</Text>
          </TouchableOpacity>
        </View>}
    </Modal >
  )
}
export default ActionSheet