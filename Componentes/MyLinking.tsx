import {useCallback} from 'react';
import {Alert, Button, Linking, View} from 'react-native';

const supportedURL = 'https://www.google.com';
const unsupportedURL = 'slack://open?team=12345';

type ButtonProps = {url: string; title: string};

const OpenURLButton = ({url, title}: ButtonProps) => {
  const handleClick = useCallback(async () => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to handle this url: ${url}`);
    }
  }, [url]);

  return <Button title={title} onPress={handleClick} />;
};

const MyLinking = () => {
  return (
    <View>
      <OpenURLButton title="Open supported URL" url={supportedURL} />
      <OpenURLButton title="Open unsupported URL" url={unsupportedURL} />
    </View>
  );
};

export default MyLinking;
