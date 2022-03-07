import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Servicos from './pages/Servicos/Servicos';
import Carrinho from './pages/Carrinho/Carrinho';

import {cores} from './estilos';

const Tab = createBottomTabNavigator();

export default function Rotas(){
    return (
        <NavigationContainer>
            <Tab.Navigator
            tabBarOptions={{
                activeTintColor: cores.roxo,
                inativeTintColor: cores.claro,
                activeBackgroundColor:cores.roxo,
                inativeBackgroundColor:cores.roxo,
                style: {
                    height: 70,
                },
                labelStyle: {
                    width: '100%',
                    flex: 1,
                    fontWeight: 'bold',
                    fontSize: 16,
                    lineHeight: 21,
                    marginTop: 3,
                    paddingTop: 21,
                    backgroundColor: cores.laranja
                },
                keyboardHidesTabBar: true,
            }}
            >
                <Tab.Screen name='Servicos' component={Servicos} />
                <Tab.Screen name='Carrinho' component={Carrinho} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}