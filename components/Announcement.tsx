import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function Announcement() {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Старший Frontend Разработчик</Text>
        <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
          <Ionicons 
            name={isFavorite ? "heart" : "heart-outline"} 
            size={24} 
            color={isFavorite ? "#FF4444" : "#666666"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>€65,000 - €85,000 / в день</Text>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.infoCard}>
          <View style={styles.infoIconContainer}>
            <Ionicons name="location-outline" size={18} color="#3B82F6" />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Локация</Text>
            <Text style={styles.infoText}>Берлин, Германия</Text>
          </View>
        </View>
        
        <View style={styles.infoCard}>
          <View style={styles.infoIconContainer}>
            <Ionicons name="business-outline" size={18} color="#10B981" />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Компания</Text>
            <Text style={styles.infoText}>TechCorp Solutions GmbH</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Ionicons name="time-outline" size={16} color="#666666" />
        <Text style={styles.footerText}>Опубликовано: 15 октября 2024</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    marginTop: 10,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderWidth: 1,
    borderColor: "#e6e6e6",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 16,
    marginTop: 10,
    color: '#1F2937',
  },
  favoriteButton: {
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EBF5FF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    gap: 4,
  },
  badgeGreen: {
    backgroundColor: '#D1FAE5',
  },
  badgePurple: {
    backgroundColor: '#EDE9FE',
  },
  badgeText: {
    fontSize: 18,
    fontWeight: '500',
  },
  detailsContainer: {
    gap: 12,
    marginBottom: 16,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 7,
    gap: 7,
  },
  infoIconContainer: {
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 11,
    color: '#6B7280',
    marginBottom: 2,
  },
  infoText: {
    fontSize: 14,
    color: '#1F2937',
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    gap: 4,
  },
  footerText: {
    fontSize: 12,
    color: '#6B7280',
  },
});
