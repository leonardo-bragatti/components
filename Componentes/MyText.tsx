import {useState} from 'react';
import {Text} from 'react-native';

const MyText = () => {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = 'This is not really a bird nest';

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };

  return (
    <Text style={{fontFamily: 'Cochin'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}} onPress={onPressTitle}>
        {titleText}
        {'\n'}
        {'\n'}
      </Text>
      <Text numberOfLines={5}>
        {bodyText}
        {'\n'}
      </Text>
      <Text numberOfLines={5}>Leonardo, Eduardo, Lucca, Angelica, Alysson</Text>
    </Text>
  );
};

export default MyText;
