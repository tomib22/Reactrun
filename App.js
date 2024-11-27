import React, { useEffect } from 'react'
import { Button, View, StyleSheet } from 'react-native'
import { authenticate } from './Components/api/auth'
import useAuthStore from './Components/state/useAuthStore'
import AppNavigator from './Components/Navigation/AppNavigator'
export default function App() {
  const { token, setToken } = useAuthStore()

  useEffect(() => {
    if (!token) {
      authenticate().then((data) => setToken(data.access_token))
    }
  }, [token])

  if (!token) {
    return (
      <View style={styles.container}>
        <Button title="Iniciar Sesión con Strava" onPress={() => authenticate()} />
      </View>
    )
  }

  return <AppNavigator />
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})
