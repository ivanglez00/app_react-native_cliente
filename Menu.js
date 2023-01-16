import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LOGIN from "./Login";
import LISTAPRO from './ListaPro';
import VISTAPRODUCTO from './VistaProducto';
import REGISTRO from './Registro';
import PEDIDOCONF from './PedidoConf';


const Stack = createNativeStackNavigator();

function App() {

    return (
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="Login" component={LOGIN} options={{headerShown:false}} />
          <Stack.Screen name="ListaPro" component={LISTAPRO} options={{headerShown:false}} />
          <Stack.Screen name="VistaProducto" component={VISTAPRODUCTO} options={{headerShown:false}} />
          <Stack.Screen name="Registro" component={REGISTRO} options={{headerShown:false}} />
          <Stack.Screen name="PedidoConf" component={PEDIDOCONF} options={{headerShown:false}} />

          </Stack.Navigator>  
        </NavigationContainer>
    );
}

export default App;