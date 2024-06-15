import AsyncStorage from "@react-native-async-storage/async-storage"
import { DMBDSTORE_TOKEN, DMBDSTORE_USER } from "../../core"

export async function logoutService() {
    try {
        await AsyncStorage.removeItem(DMBDSTORE_USER)
        await AsyncStorage.removeItem(DMBDSTORE_TOKEN)
    } catch(error) {
        console.log(error)
        return
    }
}