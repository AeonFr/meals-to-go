import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text>Our react native blank canvas</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="dark" />
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight },
  search: { backgroundColor: 'blue', padding: 16 },
  list: { flex: 1, backgroundColor: 'teal', padding: 16 },
});
