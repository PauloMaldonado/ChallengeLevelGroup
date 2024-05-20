import { Text, SafeAreaView, StyleSheet, TextInput, TouchableHighlight, View } from 'react-native';
import { useState } from 'react'


import firebase from 'firebase'
import * as Animatable from 'react-native-animatable';


const config = {
  apiKey: 'AIzaSyDlNnDN4e0uCi-LtRPCKaVlsmlbO0suV5k',
  authDomain: 'aulamobile-d800b.appspot.com',
  projectId: 'aulamobile-d800b',
  databaseURL: 'https://aulamobile-d800b-default-rtdb.firebaseio.com/'
}

export default function Cadastro({ navigation }) {
  if (!firebase.apps.length)
    firebase.initializeApp(config)

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [cadastroError, setCadastroError] = useState('');

  const criarUsuario = () => {
    if (!nome.trim() || !email.trim() || !senha.trim()) {
      setCadastroError('Todos os campos devem ser preenchidos.');
      return;
    }

    if (senha.length < 10) {
      setCadastroError('A senha deve ter no mínimo 10 caracteres.');
      return;
    }

    firebase.auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(user => saveUserToDatabase(nome, email, user))
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setCadastroError('Este email já está em uso. Por favor, tente outro.');
        } else {
          setCadastroError('Insira um email válido');
        }
      });
  }

  const saveUserToDatabase = (nome, email, user) => {
    firebase.database()
      .ref(`users/${user.user.uid}`)
      .set({
        nome: nome,
        email: email
      })
      .then(() => {
        navigation.navigate("Login");
      })
      .catch(error => {
        setCadastroError(error.message);
      });
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={600} style={styles.containerHeader}>
          <Text style={styles.message}>Compare agora os preços de forma prática</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={600} style={styles.containerForm}>
          {cadastroError ? <Text style={styles.error}>{cadastroError}</Text> : null}
          <Text style={styles.title}>Digite seu nome</Text>
          <TextInput
            style={styles.inputText}
            placeholder='Digite seu nome'
            onChangeText={nome => setNome(nome)}
          />

          <Text style={styles.title}>Email</Text>
          <TextInput
            style={styles.inputText}
            placeholder='Digite seu email'
            onChangeText={email => setEmail(email)}
          />

          <Text style={styles.title}>Senha</Text>
          <TextInput
            style={styles.inputText}
            placeholder='Crie uma senha (mínimo 10 caracteres)'
            onChangeText={senha => setSenha(senha)}
            secureTextEntry={true}
          />

          <TouchableHighlight
            onPress={() => {
              criarUsuario();
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>Cadastre-se</Text>
          </TouchableHighlight>
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
