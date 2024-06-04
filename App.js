import { StyleSheet } from 'react-native';
import Route from './src/Route';
import { NavigationContainer } from '@react-navigation/native';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

export default function App() {
  return (
    <NavigationContainer>
      <ExpoStatusBar />
      <Route />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
