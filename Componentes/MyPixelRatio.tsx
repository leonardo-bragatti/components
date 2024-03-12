import {PixelRatio, Image, ScrollView, Text, View} from 'react-native';

const size = 50;

const cat = {
  uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
  width: size,
  height: size,
};

const MyPixelRatio = () => {
  return (
    <ScrollView>
      <View>
        <Text>Current pixel ratio is: {PixelRatio.get()}</Text>
        <Text>Current font scale is: {PixelRatio.getFontScale()}</Text>
        <View>
          <Text>On this device images with a layout width of {size}</Text>
          <Image source={cat} />
        </View>
        <View>
          <Text>
            requires images with a pixel width of{' '}
            {PixelRatio.getPixelSizeForLayoutSize(size)}
          </Text>
          <Image
            source={cat}
            style={{
              width: PixelRatio.getPixelSizeForLayoutSize(size),
              height: PixelRatio.getPixelSizeForLayoutSize(size),
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default MyPixelRatio;
