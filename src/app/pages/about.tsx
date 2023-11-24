import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import image from '../../../assets/profile.jpg';

const AboutScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Image
          source={{
            uri: 'https://cdn-4.motorsport.com/images/amp/6xAE1Z10/s1200/f1-abu-dhabi-gp-2017-f1-logo-6615780.webp',
          }}
          style={styles.logo}
        />
        <Text style={[styles.text, { textAlign: 'justify' }]}>
          F1 Mania adalah sebuah Aplikasi yang berisi informasi mengenai Statistik tentang pertandingan Formula 1. Aplikasi ini berisi statistik hasil balapan di semua sirkuit pada tahun 2023. Statistik tersebut berisi urutan dari pembalap beserta interval waktunya baik dalam race-nya maupun kualifikasinya. Aplikasi ini juga menampilkan layout dari semua sirkuit yang menggelarkan pertandingan balap Formula 1 pada tahun 2023
        </Text>
      </View>
      <View style={styles.profileSection}>
        <View style={styles.profileLeft}>
          <Image source={image} style={styles.profileImage} />
        </View>
        <View style={styles.profileRight}>
          <Text style={styles.profileText}>Nama: Enrico Tobias</Text>
          <Text style={styles.profileText}>NIM: 21120121140113</Text>
          <Text style={styles.profileText}>Kelompok : 39</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
  },
  section: {
    marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  text: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'justify',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileLeft: {
    flex: 0.75,
    alignItems: 'center',
  },
  profileRight: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 10, // Add some margin between the image and text
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 75,
  },
  profileText: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default AboutScreen;
