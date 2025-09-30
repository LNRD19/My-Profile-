import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Timezone from './components/Timezone';
import Weather from './components/Weather';
import { profileData } from './data/profileData';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.appTitle}>My Professional Profile</Text>
        </View>
        
        <Bio data={profileData.bio} />
        <Timezone />
        <Weather />
        <Skills data={profileData.skills} />
        <Projects data={profileData.projects} />
        <Contact data={profileData.contact} />
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 {profileData.bio.name}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  appTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    letterSpacing: 0.5,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#999',
  },
});
