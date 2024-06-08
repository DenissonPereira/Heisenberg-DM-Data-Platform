import React from 'react';
import { Botoes, CentralContainer, DescrisaoCurta, DescrisaoMaior, Titulo } from './styles';
import { UseMaquinaDeEscrever } from '../../../../../hooks/useMaquinaDeEscrever';
import { BotaoPrincipal, BotaoSecundario, BotaoTerciario } from '../../../../../components';

export const Central: React.FC = () => {
    const titulo = UseMaquinaDeEscrever('Heisenberg DM Data Platform', 100);

    return (
        <CentralContainer>
            <DescrisaoCurta>
                <p>Transforme dados em <span>insights</span> valiosos com nossa plataforma de <span>gerenciamento de dados</span>.</p>
                <BotaoTerciario style={{ borderRadius: 50, width: 150 }}>Descubra mais</BotaoTerciario>
            </DescrisaoCurta>
            <Titulo>{titulo}</Titulo>
            <DescrisaoMaior>
                <p>Nossa plataforma oferece ferramentas poderosas para <span>coleta, armazenamento, análise e visualização de dados</span>. Você poderá obter dados das soluções dos principais modelos estatísticos e utilizá-los em suas pesquisas.</p>
            </DescrisaoMaior>
            <Botoes>
                <BotaoPrincipal style={{ width: 150 }}>Get Started</BotaoPrincipal>
                <BotaoSecundario style={{ width: 150 }}>Learn HDM</BotaoSecundario>
            </Botoes>
        </CentralContainer>
    );
};
