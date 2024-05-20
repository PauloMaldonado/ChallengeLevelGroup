import { View, Text, StyleSheet } from 'react-native';
import Header from '../Complementos/Header';

const Sobre = () => (
  <View style={styles.container}>
    <Header />
    <Text style={styles.text}>Nossa missão é simplificar o processo de orçamento de móveis para empresas de construção, design de interiores e clientes individuais. Trabalhamos em parceria com lojas exclusivas, oferecendo uma ampla variedade de móveis planejados</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff' 
  },
  text: {
    fontSize: 16,
    textAlign: 'center' 
  },
});

export default Sobre;

