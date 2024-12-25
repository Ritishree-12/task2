import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const data=[
  {
      "id": 1,
      "name": "Ultra HD Smart TV",
      "price": 899.99,
      "brand": "Samsung",
      "category": "Electronics",
      "stock": 45,
      "rating": 4.5,
      "status": "available",
      "weight": 15.6,
      "sku": "TV-SAM-4K55",
      "imageUrl":"https://www.lg.com/content/dam/channel/wcms/in/images/tvs/55un7350ptd_atr_eail_in_c/features/55UN7350PTD-01-Real-4K-D.jpg"
    },
    {
      "id": 2,
      "name": "OLED Smart TV",
      "price": 1299.99,
      "brand": "LG",
      "category": "Electronics",
      "stock": 30,
      "rating": 4.7,
      "status": "available",
      "weight": 18,
      "sku": "TV-LG-OLED65",
      "imageUrl":"https://images.samsung.com/is/image/samsung/p6pim/in/qa55q70daulxl/gallery/in-qled-q70d-qa55q70daulxl-539990475?$650_519_PNG$"
    },
    {
      "id": 3,
      "name": "QLED Smart TV",
      "price": 999.99,
      "brand": "Samsung",
      "category": "Electronics",
      "stock": 20,
      "rating": 4.6,
      "status": "available",
      "weight": 16.5,
      "sku": "TV-SAM-QLED65",
      "imageUrl":"https://images.samsung.com/is/image/samsung/p6pim/in/qa55q70daulxl/gallery/in-qled-q70d-qa55q70daulxl-539990475?$650_519_PNG$"
    },
    {
      "id": 4,
      "name": "4K HDR Smart TV",
      "price": 749.99,
      "brand": "Sony",
      "category": "Electronics",
      "stock": 25,
      "rating": 4.4,
      "status": "available",
      "weight": 14.2,
      "sku": "TV-SONY-4K50",
      "imageUrl":"https://m.media-amazon.com/images/I/71RxCmvnrbL.jpg"
    },
    {
      "id": 5,
      "name": "Full HD LED TV",
      "price": 499.99,
      "brand": "TCL",
      "category": "Electronics",
      "stock": 50,
      "rating": 4.2,
      "status": "available",
      "weight": 12,
      "sku": "TV-TCL-FHD40",
      "imageUrl":"https://m.media-amazon.com/images/I/71RxCmvnrbL.jpg"
    },
    {
      "id": 6,
      "name": "8K Ultra HD TV",
      "price": 1999.99,
      "brand": "Samsung",
      "category": "Electronics",
      "stock": 10,
      "rating": 4.8,
      "status": "available",
      "weight": 20,
      "sku": "TV-SAM-8K75",
      "imageUrl":"https://m.media-amazon.com/images/I/71RxCmvnrbL.jpg"
    },
    {
      "id": 7,
      "name": "Smart LED TV",
      "price": 349.99,
      "brand": "Hisense",
      "category": "Electronics",
      "stock": 40,
      "rating": 4.1,
      "status": "available",
      "weight": 10.8,
      "sku": "TV-HIS-LED32","imageUrl":"https://m.media-amazon.com/images/I/71RxCmvnrbL.jpg"
    },
    {
      "id": 8,
      "name": "4K QLED TV",
      "price": 1099.99,
      "brand": "Sony",
      "category": "Electronics",
      "stock": 15,
      "rating": 4.6,
      "status": "available",
      "weight": 17.5,
      "sku": "TV-SONY-QLED65",
      "imageUrl":"https://m.media-amazon.com/images/I/71RxCmvnrbL.jpg"
    },
    {
      "id": 9,
      "name": "Full HD Smart TV",
      "price": 599.99,
      "brand": "LG",
      "category": "Electronics",
      "stock": 35,
      "rating": 4.3,
      "status": "available",
      "weight": 13,
      "sku": "TV-LG-FHD43",
      "imageUrl":"https://m.media-amazon.com/images/I/71RxCmvnrbL.jpg"
    },
    {
      "id": 10,
      "name": "Curved LED TV",
      "price": 849.99,
      "brand": "Samsung",
      "category": "Electronics",
      "stock": 22,
      "rating": 4.4,
      "status": "available",
      "weight": 15,
      "sku": "TV-SAM-CRV55",
      "imageUrl":"https://m.media-amazon.com/images/I/71RxCmvnrbL.jpg"
    },
    {
      "id": 11,
      "name": "LED Smart TV",
      "price": 399.99,
      "brand": "TCL",
      "category": "Electronics",
      "stock": 60,
      "rating": 4.2,
      "status": "available",
      "weight": 11.5,
      "sku": "TV-TCL-LED40",
      "imageUrl":"https://m.media-amazon.com/images/I/71RxCmvnrbL.jpg"
    },
    {
      "id": 12,
      "name": "NanoCell 4K TV",
      "price": 899.99,
      "brand": "LG",
      "category": "Electronics",
      "stock": 18,
      "rating": 4.5,
      "status": "available",
      "weight": 16.2,
      "sku": "TV-LG-NANO55",
      "imageUrl":"https://m.media-amazon.com/images/I/71RxCmvnrbL.jpg"
    },
    {
      "id": 13,
      "name": "Android Smart TV",
      "price": 649.99,
      "brand": "Sony",
      "category": "Electronics",
      "stock": 28,
      "rating": 4.3,
      "status": "available",
      "weight": 13.5,
      "sku": "TV-SONY-AND50",
      "imageUrl":"https://m.media-amazon.com/images/I/71RxCmvnrbL.jpg"
    },
    {
      "id": 14,
      "name": "HDR Smart TV",
      "price": 999.99,
      "brand": "Samsung",
      "category": "Electronics",
      "stock": 14,
      "rating": 4.6,
      "status": "available",
      "weight": 17,
      "sku": "TV-SAM-HDR65",
      "imageUrl":"https://m.media-amazon.com/images/I/71RxCmvnrbL.jpg"
    },
    {
      "id": 15,
      "name": "Quantum Dot TV",
      "price": 1199.99,
      "brand": "Sony",
      "category": "Electronics",
      "stock": 12,
      "rating": 4.7,
      "status": "available",
      "weight": 18,
      "sku": "TV-SONY-QD65",
      "imageUrl":"https://m.media-amazon.com/images/I/71RxCmvnrbL.jpg"
    },
    {
      "id": 16,
      "name": "Budget LED TV",
      "price": 299.99,
      "brand": "Hisense",
      "category": "Electronics",
      "stock": 70,
      "rating": 4,
      "status": "available",
      "weight": 10,
      "sku": "TV-HIS-BUDGET32",
      "imageUrl":"https://m.media-amazon.com/images/I/71RxCmvnrbL.jpg"
    },
    {
      "id": 17,
      "name": "4K UHD TV",
      "price": 899.99,
      "brand": "Samsung",
      "category": "Electronics",
      "stock": 26,
      "rating": 4.5,
      "status": "available",
      "weight": 15.6,
      "sku": "TV-SAM-UHD55",
      "imageUrl":"https://m.media-amazon.com/images/I/71RxCmvnrbL.jpg"
    },
    {
      "id": 18,
      "name": "Mini LED Smart TV",
      "price": 1499.99,
      "brand": "LG",
      "category": "Electronics",
      "stock": 8,
      "rating": 4.8,
      "status": "available",
      "weight": 19,
      "sku": "TV-LG-MINI75",
      "imageUrl":"https://m.media-amazon.com/images/I/71RxCmvnrbL.jpg"
    },
    {
      "id": 19,
      "name": "Compact LED TV",
      "price": 199.99,
      "brand": "TCL",
      "category": "Electronics",
      "stock": 80,
      "rating": 3.9,
      "status": "available",
      "weight": 8,
      "sku": "TV-TCL-COMP24",
      "imageUrl":"https://m.media-amazon.com/images/I/71RxCmvnrbL.jpg"
    },
    {
      "id": 20,
      "name": "High-Performance Smart TV",
      "price": 1799.99,
      "brand": "Sony",
      "category": "Electronics",
      "stock": 5,
      "rating": 4.9,
      "status": "available",
      "weight": 21,
      "sku": "TV-SONY-HP75",
      "imageUrl":"https://m.media-amazon.com/images/I/71RxCmvnrbL.jpg"
    }
]

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilterOption, setSelectedFilterOption] = useState(null);

  const filterOptions = {
    'Name': data.map(item => item.name),
    'Brand': Array.from(new Set(data.map(item => item.brand))),
    'Category': Array.from(new Set(data.map(item => item.category))),
  };

  const filteredData = data.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      !filterType ||
      (filterType === 'Name' && item.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (filterType === 'Brand' && item.brand.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (filterType === 'Category' && item.category.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch && matchesFilter;
  });

  const renderFilterOptions = () => {
    if (selectedFilterOption) {
      const options = filterOptions[selectedFilterOption];
      return (
        <FlatList
          data={options}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => {
                setSearchQuery(item); 
                setModalVisible(false);
                setSelectedFilterOption(null); 
              }}
            >
              <Text style={styles.modalOptionText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      );
    }
    return (
      <View style={styles.modalContent}>
        {Object.keys(filterOptions).map((type) => (
          <TouchableOpacity
            key={type}
            style={styles.modalOption}
            onPress={() => {
              setFilterType(type);
              setSelectedFilterOption(type); 
            }}
          >
            <Text style={styles.modalOptionText}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchFilterContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.filterButtonText}>Filter</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Details', { item })}
          >
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.cardImage}
            />
            <View style={styles.cardDetailsContainer}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardDetails}>Brand: {item.brand}</Text>
              <Text style={styles.cardDetails}>Category: {item.category}</Text>
              <View style={styles.ratingContainer}>
                {Array.from({ length: 5 }, (_, index) => (
                  <Icon
                    key={index}
                    name={index < Math.round(item.rating) ? 'star' : 'star-border'}
                    size={20}
                    color={index < Math.round(item.rating) ? '#FFD700' : '#ccc'}
                  />
                ))}
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Filter by:</Text>
          {renderFilterOptions()}
          <TouchableOpacity
            style={styles.modalOption}
            onPress={() => {
              setFilterType(null);
              setModalVisible(false);
              setSelectedFilterOption(null); 
            }}
          >
            <Text style={styles.modalOptionText}>Clear Filter</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  searchFilterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 8,
  },
  filterButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardImage: {
    width: 150,
    height: 85,
    borderRadius: 10,
    marginRight: 16,
  },
  cardDetailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDetails: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue', 
    borderRadius: 10,         
    marginHorizontal: 20,     
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
    color: '#000',
  },
  modalOption: {
    padding: 15,
    backgroundColor: '#f5f5f5',  // Background color for modal options
    marginVertical: 5,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  modalOptionText: {
    fontSize: 16,
    color: '#000',
  },
});


export default HomeScreen;
