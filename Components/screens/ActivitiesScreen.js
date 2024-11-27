// src/screens/ActivitiesScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import { fetchActivities } from './api/activities'

const ActivitiesScreen = () => {
  const { token } = useAuthStore();  // Obtener token de Zustand
  const { data, isLoading, error } = useQuery(['activities'], () => fetchActivities(token));

  if (isLoading) return <Text>Cargando...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item.name}</Text>
          <Text>{(item.distance / 1000).toFixed(2)} km</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: { padding: 16, borderBottomWidth: 1, borderColor: '#ddd' },
});

export default ActivitiesScreen
