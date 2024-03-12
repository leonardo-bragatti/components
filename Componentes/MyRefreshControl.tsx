import {useState, useCallback} from 'react';

import {RefreshControl, ScrollView, Text} from 'react-native';

const MyRefreshControl = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 3000);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }>
      <Text>Pull down to refresh</Text>
    </ScrollView>
  );
};

export default MyRefreshControl;
