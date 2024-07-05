import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StackRoutes from './stack.routes';
import { Feather, MaterialIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { View } from 'react-native';
import { Dados, Docs, Home, Sobre } from '../screens';

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
                    height: 100,
                },
                tabBarActiveTintColor: '#6546DC',
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
                name='servicosTab'
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='shield-car' color={color} size={size} />
                }}
            />
            
            <Tab.Screen 
                name='categoriasTab'
                component={Dados}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View style={{
                            backgroundColor: '#6546DC',
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
                name='marcasTab'
                component={Docs}
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialIcons name='directions-car' color={color} size={size} />
                }}
            />
            
            <Tab.Screen 
                name='menuTab'
                component={Sobre}
                options={{
                    tabBarIcon: ({ color, size }) => <Entypo name='menu' color={color} size={size} />
                }}
            />

        </Tab.Navigator>
    )
}