import { NavScrollComponent } from "../../../components"
import { ContainerSobre } from "./styles"


export const Sobre = () => {
  return (
    <ContainerSobre>
        <NavScrollComponent />
        <Sobre />
    </ContainerSobre>
  )
}
