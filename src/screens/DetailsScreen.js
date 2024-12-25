import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const DetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.detailsContainer}>
      <View style={styles.box}>
        <Text style={styles.detailsTitle}>{item.name}</Text>

        <Image
          source={{ uri: item.imageUrl }}
          style={styles.image}
        />

        <View style={styles.gridContainer}>
          <View style={styles.gridItem}>
            <Text style={styles.detailsText}>Brand:</Text>
            <Text style={styles.detailsValue}>{item.brand}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.detailsText}>Category:</Text>
            <Text style={styles.detailsValue}>{item.category}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.detailsText}>Price:</Text>
            <Text style={styles.detailsValue}>${item.price}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.detailsText}>Stock:</Text>
            <Text style={styles.detailsValue}>{item.stock}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.detailsText}>Rating:</Text>
            <Text style={styles.detailsValue}>{item.rating} / 5</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.detailsText}>SKU:</Text>
            <Text style={styles.detailsValue}>{item.sku}</Text>
          </View>
        </View>
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
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  detailsValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
