import React, { useState } from 'react';
import { Image, StyleSheet, ScrollView, Platform, Text, View, TextInput, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Banners } from '@/components/Banners';
import { Announcement } from '@/components/Announcement';
import { HotAnnouncement } from '@/components/HotAnnouncement';

export default function HomeScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  const openSearchModal = () => setModalVisible(true);
  const closeSearchModal = () => setModalVisible(false);

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={openSearchModal}>
        <Ionicons name="search" size={25} color="#808080" />
        <Text style={styles.buttonText}>Поиск по вакансиям</Text>
      </TouchableOpacity>
      <Banners />
      <HotAnnouncement />
      <Announcement />
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeSearchModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={closeSearchModal} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              placeholder="Введите запрос..."
              placeholderTextColor="#999"
            />
            <Text style={styles.searchResults}>Поиск вакансий</Text>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingBottom: 60,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E6E6E6",
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#b3b3b3',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  searchInput: {
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    fontSize: 16,
    color: '#333',
  },
  searchResults: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
});

