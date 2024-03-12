import {useState} from 'react';

import {View, Modal, Text, Button, StyleSheet} from 'react-native';

const MyModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onModalClosed = () => setIsVisible(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onModalClosed}>
        <View style={{...styles.centeredView, backgroundColor: '#ff0000'}}>
          <Text style={styles.textStyle}>Hello world!</Text>
          <Button title="Close Modal" onPress={() => setIsVisible(false)} />
        </View>
      </Modal>
      <Button title="Show Modal" onPress={() => setIsVisible(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MyModal;
