import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getAllPets } from '../utils/database';

export default function PetListScreen() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getAllPets(setPets);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🐶🐱 Pets para Adoção</Text>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name} ({item.type})</Text>
            <Text>{item.breed} - {item.age} ano(s)</Text>
            <Text>{item.description}</Text>
            <Text style={styles.location}>📍 {item.location}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, textAlign: 'center', marginBottom: 20 },
  card: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  name: { fontSize: 18, fontWeight: 'bold' },
  location: { fontStyle: 'italic', marginTop: 5 }
});
