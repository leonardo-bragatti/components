import {SectionList, View, Text} from 'react-native';

type ItemProps = {
  id: number;
  name: string;
  title: string;
  items: string[];
  sessions: number[];
};

const DATA = [
  {
    id: 1,
    title: 'Main Dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    id: 2,
    title: 'Side Dishes',
    data: ['French Fries', 'Fried Shrimp', 'Onion Rings'],
  },
  {
    id: 3,
    title: 'Drinks',
    data: ['Coke', 'Water', 'Beer'],
  },
];

const Header = ({title}: ItemProps) => {
  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
    </View>
  );
};

const Item = ({title}: ItemProps) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

const MySectionList = () => {
  return (
    <SectionList
      sections={DATA}
      renderSectionHeader={item => <Header title={item.section.title} />}
      renderItem={({item}) => <Item title={item} />}
    />
  );
};

export default MySectionList;
