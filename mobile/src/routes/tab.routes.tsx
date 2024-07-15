import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StackRoutes from './stack.routes';
import { Feather, MaterialIcons, Entypo, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'
import { View } from 'react-native';
import { Dados, Docs, Home, Perfil, Sobre } from '../screens';

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabel: () => null,
                tabBarStyle: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    height:100,
                },
                tabBarActiveTintColor: '#596FDC',
            }}
        >
            <Tab.Screen
                name='homeTab'
                component={StackRoutes}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />
                }}
            />

            <Tab.Screen 
                name='sobreTab'
                component={Sobre}
                options={{
                    tabBarIcon: ({ color, size }) => <Entypo name='magnet' color={color} size={size} />
                }}
            />
            
            <Tab.Screen 
                name='dadosTab'
                component={Dados}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View style={{
                            backgroundColor: '#596FDC',
                            borderRadius: 50,
                            padding: 10,
                            overflow: 'hidden'
                        }}>
                            <MaterialIcons name='category' color={'white'} size={size} />
                        </View>
                    )
                }}
            />

            <Tab.Screen 
                name='docsTab'
                component={Docs}
                options={{
                    tabBarIcon: ({ color, size }) => <FontAwesome name='book' color={color} size={size} />
                }}
            />
            
            <Tab.Screen 
                name='perfilTab'
                component={Perfil}
                options={{
                    tabBarIcon: ({ color, size }) => <FontAwesome name='user' color={color} size={size} />
                }}
            />

        </Tab.Navigator>
    )
}