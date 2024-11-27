
export async function fetchActivities(token) {
    const response = await fetch('https://www.strava.com/api/v3/athlete/activities', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json()
  }
  