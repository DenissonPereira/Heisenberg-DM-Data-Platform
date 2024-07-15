import { createStackNavigator } from "@react-navigation/stack"

import { Dados, Docs, Home, Login, Perfil, Sobre } from "../screens";

const Stack = createStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: 'red'
            }}
        >
            <Stack.Screen
                name="home"
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="1"
                component={Docs}
                options={{
                    headerShown: true,
                    headerTitle: 'Docs'
                }}
            />

            <Stack.Screen
                name="2"
                component={Dados}
                options={{
                    headerShown: true,
                    headerTitle: 'Dados'
                }}
            />

            <Stack.Screen
                name="3"
                component={Perfil}
                options={{
                    headerShown: true,
                    headerTitle: 'Perfil'
                }}
            />

            <Stack.Screen
                name="4"
                component={Sobre}
                options={{
                    headerShown: true,
                    headerTitle: 'Sobre'
                }}
            />

            <Stack.Screen
                name="login"
                component={Login}
                options={{
                    headerShown: true,
                }}
            />
        </Stack.Navigator>
    )
}