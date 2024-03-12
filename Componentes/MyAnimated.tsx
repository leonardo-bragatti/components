import {useRef} from 'react';
import {Animated, Text, View, Button} from 'react-native';

const MyAnimated = () => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View style={{opacity: fadeAnimation}}>
        <Text>Fading text</Text>
        <Text>Another fading text</Text>
      </Animated.View>
      <View>
        <Button title="Fade in text" onPress={fadeIn} />
        <Button title="Fade out text" onPress={fadeOut} />
      </View>
    </View>
  );
};

export default MyAnimated;
