import { ContainerModelo, Texto } from "./styles"

export const Modelo = () => {
    return (
        <ContainerModelo>
            <Texto>
                <h2>Modelo de Heisenberg com Campo Aleatório e Interação Dzyaloshinskii-Moriya</h2>
                <p>O modelo de Heisenberg descreve a interação magnética em termos dos spins dos átomos. Quando consideramos um campo magnético aleatório, adicionamos uma variabilidade à direção e intensidade desse campo em diferentes pontos do sistema.</p>
                <p>A interação Dzyaloshinskii-Moriya é uma contribuição que surge em sistemas magnéticos com falta de inversão de simetria. Ela leva em conta a assimetria cristalina e pode causar torções nos spins dos átomos, resultando em fenômenos como a quebra de simetria magnética e a formação de estruturas magnéticas complexas.</p>
                <p>Esse tipo de modelo é fundamental para entender fenômenos magnéticos em materiais complexos, como os materiais magnéticos frustrados, onde as interações magnéticas competitivas e as quebras de simetria podem levar a comportamentos magnéticos não triviais.</p>
            </Texto>
        </ContainerModelo>
    )
}