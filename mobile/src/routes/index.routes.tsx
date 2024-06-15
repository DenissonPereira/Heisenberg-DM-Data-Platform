import { NavigationContainer } from "@react-navigation/native";
import { TabRoutes } from "./tab.routes";
import { useGlobalHDMContext } from "../contexts/HDMContext";
import { Login } from "../screens";


export default function Routes() {

    const { usuario } = useGlobalHDMContext()

    return (
        <NavigationContainer>
            {usuario?.id ? <TabRoutes /> : <Login />}
        </NavigationContainer>
    )
}