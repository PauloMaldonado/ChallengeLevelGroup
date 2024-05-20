import { View, Text, StyleSheet } from 'react-native';

const Home = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Home Page</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'fff'

  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home;
