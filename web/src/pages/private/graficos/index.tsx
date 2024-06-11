import { NavScrollComponent } from "../../../components"
import { Select } from "./components"
import { GraficosContainer } from "./styles"


export const Graficos = () => {
  return (
    <GraficosContainer>
        <NavScrollComponent />
        <Select />
    </GraficosContainer>
  )
}
