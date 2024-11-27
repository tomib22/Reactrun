
import * as AuthSession from 'expo-auth-session';

const clientId = 'YOUR_CLIENT_ID';
const clientSecret = 'YOUR_CLIENT_SECRET';
const redirectUri = AuthSession.makeRedirectUri({
  scheme: 'reactnativeoauth',
});

export async function authenticate() {
  const authUrl = `https://www.strava.com/oauth/mobile/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=activity:read_all`;
  const result = await AuthSession.startAsync({ authUrl });

  if (result.type === 'success') {
    const response = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: result.params.code,
        grant_type: 'authorization_code',
      }),
    });
    return await response.json() // Devuelve el token de acceso
  } else {
    throw new Error('Autenticación fallida')
  }
}
