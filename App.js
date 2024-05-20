import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Login from './components/Login'
import Cadastro from './components/Cadastro'
import Rotas from './components/Rota/Rotas'
import Home from './components/Telas/Home.Js'
import Contato from './components/Telas/Contato.Js'
import Sobre from './components/Telas/Sobre.Js'



const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Rotas" component={Rotas}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Contato" component={Contato}/>
        <Stack.Screen name="Sobre" component={Sobre}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

