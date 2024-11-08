import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

const iconNames = [
  'document-text-outline',
  'airplane-outline',
  'cash-outline',
  'business-outline',
  'location-outline',
  'book-outline'
];

// Color pairs: [background color, icon color]
const colorPairs = [
  ['#FFD5D5', '#FF6B6B'], // Very soft pink -> Darker pink
  ['#D5E6FF', '#4A90E2'], // Very soft blue -> Darker blue
  ['#E0F0E0', '#4CAF50'], // Very soft green -> Deeper green
  ['#FFE8D0', '#FF9838'], // Very soft orange -> Darker orange
  ['#EDD5FF', '#9B51E0'], // Very soft purple -> Deeper purple
  ['#FFF2D5', '#FFB103'], // Very soft yellow -> Deeper yellow
];

const BannerItem = ({ iconName, title, colorPair }) => {
  return (
    <ThemedView style={styles.bannerItem}>
      <View style={[styles.iconContainer, { backgroundColor: colorPair[0] }]}>
        <Ionicons name={iconName} size={20} color={colorPair[1]} />
      </View>
      <ThemedText style={styles.bannerTitle}>{title}</ThemedText>
    </ThemedView>
  );
};

export function Banners() {
  const bannerData = [
    { 
      iconName: iconNames[0], 
      title: 'Создать резюме',
      colorPair: colorPairs[0]
    },
    { 
      iconName: iconNames[1], 
      title: 'Работа в ЕС 2024',
      colorPair: colorPairs[1]
    },
    { 
      iconName: iconNames[2], 
      title: 'Топ зарплаты',
      colorPair: colorPairs[2]
    },
    { 
      iconName: iconNames[3], 
      title: 'Лучшие компании',
      colorPair: colorPairs[3]
    },
    { 
      iconName: iconNames[4], 
      title: 'Польша VS Чехия',
      colorPair: colorPairs[4]
    },
    { 
      iconName: iconNames[5], 
      title: 'Гайд по визам',
      colorPair: colorPairs[5]
    },
  ];

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {bannerData.map((item, index) => (
          <BannerItem 
            key={index} 
            iconName={item.iconName} 
            title={item.title} 
            colorPair={item.colorPair}
          />
        ))}
      </ScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  scrollContainer: {
  },
  bannerItem: {
    width: 130,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginRight: 10,
    borderColor: "#e6e6e6",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerTitle: {
    marginTop: 7,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 18,
  }
});
