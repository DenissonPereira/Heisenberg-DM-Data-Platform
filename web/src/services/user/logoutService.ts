import { DMBDSTORE_TOKEN, DMBDSTORE_USER } from "../../core"

export async function logoutService() {
    try {
        await localStorage.removeItem(DMBDSTORE_USER)
        await localStorage.removeItem(DMBDSTORE_TOKEN)
    } catch(error) {
        console.log(error)
        return
    }
}