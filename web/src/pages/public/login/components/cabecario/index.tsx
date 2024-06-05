import { BotaoTrocarTema } from "../../../../../components"
import { useTranslation } from "react-i18next";
import { TituloContainer, TituloText } from "./styles"

export const Cabecario = () => {

  const { t } = useTranslation()

  return (
    <TituloContainer>
        <TituloText data-testid="titulo_cabecario">{t("login.titulo")}<span>.</span></TituloText>
        <BotaoTrocarTema />
    </TituloContainer>
  )
}
