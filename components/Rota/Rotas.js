import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../Telas/Home.Js'
import Contato from '../Telas/Contato.Js'; 
import Sobre from '../Telas/Sobre.Js'; 

const Tab = createMaterialBottomTabNavigator();

const App = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    barStyle={{ backgroundColor: '#4169e1' }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Inicio',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Contato"
      component={Contato}
      options={{
        tabBarLabel: 'Contato',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="phone" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Sobre"
      component={Sobre}
      options={{
        tabBarLabel: 'Sobre',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="information" color={color} size={25} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default App;
