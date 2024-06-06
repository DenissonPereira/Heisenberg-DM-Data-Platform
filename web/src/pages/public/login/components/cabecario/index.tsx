import { BotaoTrocarTema, TrocarLinguagem } from "../../../../../components"
import { useTranslation } from "react-i18next";
import { Botoes, TituloContainer, TituloText } from "./styles"
import Logo from '../../../../../assets/images/logo_nome.png'

export const Cabecario = () => {

  const { t } = useTranslation()

  return (
    <TituloContainer>
      <img src={Logo} alt="Logo" />
      <Botoes>
        <BotaoTrocarTema />
        <TrocarLinguagem />
      </Botoes>
    </TituloContainer>
  )
}
