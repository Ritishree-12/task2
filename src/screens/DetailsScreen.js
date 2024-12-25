import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const DetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.detailsContainer}>
      <View style={styles.box}>
      <Text style={styles.detailsTitle}>{item.imageUrl}</Text>
        <Text style={styles.detailsTitle}>{item.name}</Text>
        <Text style={styles.detailsText}>Brand: {item.brand}</Text>
        <Text style={styles.detailsText}>Category: {item.category}</Text>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  box: {
    width: '90%',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  detailsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});
