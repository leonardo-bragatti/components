import {View, Button, Alert} from 'react-native';

const showDialog = () => {
  Alert.alert('Alert title', 'My alert message', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel pressed'),
      style: 'cancel',
    },
    {
      text: 'Ok',
      onPress: () => console.log('Ok pressed'),
    },
  ]);
};

const showDestructiveDialog = () => {
  Alert.alert('Alert title', 'My alert message', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel pressed'),
      style: 'cancel',
    },
    {
      text: 'Close',
      onPress: () => console.log('Close pressed'),
      style: 'destructive',
    },
    {
      text: 'Ok',
      onPress: () => console.log('Ok pressed'),
    },
  ]);
};

const MyAlert = () => {
  return (
    <View>
      <Button title="2-button alert" onPress={showDialog} />
      <Button title="3-button alert" onPress={showDestructiveDialog} />
    </View>
  );
};

export default MyAlert;
