import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import { fetchActivities } from '../utils/stravaAPI'

export default function ActivitiesScreen() {
  const { data, isLoading, error } = useQuery(['activities'], fetchActivities);

  if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <Text>Name: {item.name}</Text>
          <Text>Date: {item.start_date}</Text>
          <Text>Distance: {item.distance} meters</Text>
        </View>
      )}
    />
  )
}
