import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight },
  searchContainer: { padding: 16 },
  list: { flex: 1, backgroundColor: 'teal', padding: 16 },
});
