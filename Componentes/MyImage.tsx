import {View, Image} from 'react-native';

const MyImage = () => {
  return (
    <View style={{padding: 20}}>
      <Image
        style={{width: 50, height: 50}}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
          width: 66,
          height: 58,
        }}
      />
    </View>
  );
};

export default MyImage;
