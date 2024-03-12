import {ActivityIndicator, View} from 'react-native';

const MyActivityIndicator = () => {
  return (
    <View>
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" />
      <ActivityIndicator size="large" color="#00ffff" />
    </View>
  );
};

export default MyActivityIndicator;
