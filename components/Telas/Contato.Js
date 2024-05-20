import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from '../Complementos/Header';

const Contato = () => {
  return (
       
    <View style={styles.container}>
      <Header />
    <Text style={styles.infoHeaderText}>Caso tenha algum problema ou dúvida com a plataforma, entre em contato através de um dos nossos canais de atendimento:</Text>
      <View style={styles.infoContainer}>
        <MaterialCommunityIcons name="phone" size={26} color="#4169e1" />
        <Text style={styles.contactInfo}>+55 11 4002-8922</Text>
      </View>
      <View style={styles.infoContainer}>
        <MaterialCommunityIcons name="email" size={26} color="#4169e1" />
        <Text style={styles.contactInfo}>furniflow@gmail.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff' 
  },
  infoHeaderText: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactInfo: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default Contato;


