import { NavScrollComponent } from "../../../components"
import { Central } from "./components"
import { HomeBackground } from "./styles"

export const Home = () => {

  return (
    <HomeBackground>
      <NavScrollComponent />
      <Central />
    </HomeBackground>
  )
}
