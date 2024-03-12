import {View} from 'react-native';

const ViewBoxesWithColor = () => {
  return (
    <View style={{flexDirection: 'row', height: 100, padding: 20}}>
      <View style={{backgroundColor: 'blue', flex: 0.3}} />
      <View style={{backgroundColor: 'red', flex: 0.7}} />
    </View>
  );
};

export default ViewBoxesWithColor;
