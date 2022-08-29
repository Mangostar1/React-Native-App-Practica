import React from 'react';
import { StyleSheet, View } from 'react-native';

import Menu from './components/Menu';

export default function App() {
  return (
    <View style={styles.container}>
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: '10%',
    marginHorizontal: 16,
  }
});
