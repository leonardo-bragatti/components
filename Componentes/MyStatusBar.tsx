import {useState} from 'react';
import {Button, View, Text, StatusBar, StatusBarStyle} from 'react-native';

const STYLES: StatusBarStyle[] = ['default', 'light-content', 'dark-content'];

const MyStatusBar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);

  const changeStatusBarVisibility = () => setIsHidden(!isHidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    setStatusBarStyle(styleId === STYLES.length ? STYLES[0] : STYLES[styleId]);
  };

  return (
    <View style={{padding: 20}}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={statusBarStyle}
        hidden={isHidden}
      />
      <Text>Status Bar Visibility: {isHidden ? 'hidden' : 'visible'}</Text>
      <Text>Status Bar style: {statusBarStyle}</Text>
      <View>
        <Button title="Toggle status bar" onPress={changeStatusBarVisibility} />
        <Button
          title="Change status bar style"
          onPress={changeStatusBarStyle}
        />
      </View>
    </View>
  );
};

export default MyStatusBar;
