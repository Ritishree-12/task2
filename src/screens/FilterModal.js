import { StyleSheet, Text, View, Modal, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';

const FilterModal = ({
  visible,
  onClose,
  filterOptions,
  onFilterSelect,
  onClearFilter,
}) => {
  const [selectedFilterOption, setSelectedFilterOption] = useState(null);

  const renderOptions = () => {
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
                onFilterSelect(selectedFilterOption, item);
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
            onPress={() => setSelectedFilterOption(type)}
          >
            <Text style={styles.modalOptionText}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.sidebarContainer}>
          <Text style={styles.modalTitle}>Filter by:</Text>
          {renderOptions()}
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => {
              onClearFilter();
              setSelectedFilterOption(null);
            }}
          >
            <Text style={styles.clearButtonText}>Clear Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sidebarContainer: {
    flex: 1,
    width: '70%', // Adjust width as per your need
    backgroundColor: 'white',
    position: 'absolute',
    left: 0, // Sidebar starts from the left
    top: 0,
    bottom: 0,
    padding: 20,
  },
  modalContent: {
    marginTop: 20,
  },
  modalOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  modalOptionText: {
    fontSize: 16,
    color: '#333',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  clearButton: {
    padding: 10,
    backgroundColor: '#f44336',
    marginTop: 10,
    borderRadius: 5,
  },
  clearButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  closeButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    marginTop: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});
