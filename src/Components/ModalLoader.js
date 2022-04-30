import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator,
  StatusBar,
  Image,
} from 'react-native';

class ModalLoader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Modal
          back
          transparent={true}
          animationType={'none'}
          visible={this.props.visible}
          onRequestClose={() => {}}>
          <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
              <ActivityIndicator color={'#97e89b'} size="small" />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#eeeeee',
    padding: 25,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default ModalLoader;
