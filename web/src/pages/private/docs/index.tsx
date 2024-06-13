import { NavScrollComponent } from "../../../components"
import { DocsContainer, DocsContent, Funcionalidades, Uso, Exemplos } from "./styles"

export const Docs = () => {
  return (
    <DocsContainer>
      <NavScrollComponent />
      <DocsContent>
        <h1>Documentação</h1>
        <Funcionalidades>
          <h2>Funcionalidades</h2>
          <p>Aqui estão as principais funcionalidades do aplicativo:</p>
          <ul>
            <li>Plotagem de gráficos baseados em dados específicos.</li>
            <li>Seleção de grandezas e anisotropia para análise.</li>
            <li>Exportação de dados e gráficos para uso externo.</li>
            <li>Personalização de cores e estilos dos gráficos.</li>
            <li>Zoom e centralização dos gráficos para análise detalhada.</li>
          </ul>
        </Funcionalidades>
        <Uso>
          <h2>Como Usar</h2>
          <p>Para usar o aplicativo, siga os passos abaixo:</p>
          <ol>
            <li>Selecione a grandeza e anisotropia desejadas nos respectivos menus.</li>
            <li>Clique em "Plotar Gráfico" para gerar o gráfico com base nos dados selecionados.</li>
            <li>Personalize as cores do gráfico e do fundo conforme preferência.</li>
            <li>Utilize os botões de zoom e centralização para análise detalhada.</li>
            <li>Exporte os dados ou gráfico usando os botões correspondentes.</li>
          </ol>
        </Uso>
        <Exemplos>
          <h2>Exemplos</h2>
          <p>Aqui estão alguns exemplos de como usar o aplicativo:</p>
          <ul>
            <li>Para analisar a magnetização em função da temperatura, selecione "Magnetização" e uma anisotropia específica.</li>
            <li>Para estudar a energia em relação à temperatura, escolha "Energia" e a anisotropia desejada.</li>
            <li>Para investigar a suscetibilidade em diferentes temperaturas, utilize a opção "Suscetibilidade".</li>
            <li>Para analisar a inverso da suscetibilidade, selecione "Inverso suscetibilidade".</li>
          </ul>
        </Exemplos>
      </DocsContent>
    </DocsContainer>
  )
}
