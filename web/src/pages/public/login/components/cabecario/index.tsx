import { BotaoTrocarTema } from "../../../../../components"
import { TituloContainer, TituloText } from "./styles"


export const Cabecario = () => {
  return (
    <TituloContainer>
        <TituloText>FAÇA SEU LOGIN <span>.</span></TituloText>
        <BotaoTrocarTema />
    </TituloContainer>
  )
}
