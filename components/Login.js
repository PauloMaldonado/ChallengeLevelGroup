import { Text, SafeAreaView, StyleSheet, TextInput, TouchableHighlight, View, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Cadastro from './Cadastro'

const Stack = createStackNavigator()

import firebase from 'firebase'
import * as Animatable from 'react-native-animatable';


const config = {
  apiKey: 'AIzaSyDlNnDN4e0uCi-LtRPCKaVlsmlbO0suV5k',
  authDomain: 'aulamobile-d800b.appspot.com',
  projectId: 'aulamobile-d800b',
  databaseURL: 'https://aulamobile-d800b-default-rtdb.firebaseio.com/'
}

export default function Login({ navigation }) {
  if (!firebase.apps.length)
    firebase.initializeApp(config)

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loginError, setLoginError] = useState('');

  const loginUsuario = () => {
    if (!email.trim() || !senha.trim()) {
      setLoginError('*Todos os campos devem ser preenchidos.');
      return;
    }

    firebase.auth()
      .signInWithEmailAndPassword(email, senha)
      .then(user => {
        navigation.navigate("Rotas");
        console.log(user);
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          setLoginError('Email ou senha incorretos. Por favor, verifique suas credenciais e tente novamente.');
        } else {
          setLoginError('Ocorreu um erro durante o login. Tente novamente');
        }
      });
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={600} style={styles.containerHeader}>
          <Text style={styles.message}>A melhor cotação para os seus movéis está aqui</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={600} style={styles.containerForm}>
          {loginError ? <Text style={styles.error}>{loginError}</Text> : null} 
          <Text style={styles.title}>Email</Text>
          <TextInput
            style={styles.inputText}
            placeholder='Digite seu Email'
            onChangeText={email => setEmail(email)}
          />

          <Text style={styles.title}>Senha</Text>
          <TextInput
            style={styles.inputText}
            placeholder='Digite sua senha'
            onChangeText={senha => setSenha(senha)}
            secureTextEntry={true}
          />

          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              loginUsuario();
            }}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableHighlight>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Cadastro")}>
            <Text style={styles.buttonText}>Cadastre-se</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4169e1',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  containerForm: {
    backgroundColor: 'white',
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingStart: '10%',
    paddingEnd: '10%',
  },
  title: {
    fontSize: 25,
    marginTop: 30,
  },
  inputText: {
    borderBottomWidth: 1,
    height: 50,
  },
  button: {
    backgroundColor: '#4169e1',
    width: '100%',
    borderRadius: 5,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginTop: 10,
    marginBottom: 10,
  },
});
