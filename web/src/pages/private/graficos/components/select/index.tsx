import { useEffect, useRef, useState } from "react";
import { BotoesStyle, CoresStyle, DadosStyle, GraficoStyle, SelectContainer, SelectStyle } from "./styles";
import { useGlobalHDMContext } from "../../../../../contexts/HDMContext";
import { Anisotrpia } from "../../../../../utils";
import { VictoryAxis, VictoryChart, VictoryLabel, VictoryLegend, VictoryScatter } from "victory";
import { PiMagnifyingGlassPlus, PiMagnifyingGlassMinus } from "react-icons/pi";
import { MdFilterCenterFocus } from "react-icons/md";

export const Select = () => {
    const selectGrandezas = useRef<HTMLSelectElement>(null);
    const selectAnisotropia = useRef<HTMLSelectElement>(null);

    const [grandeza, setGrandeza] = useState<string>("");
    const [anisotropia, setAnisotropia] = useState<string>("");
    const [data, setData] = useState<{ x: number; y: number; }[]>([]);
    const [cor, setCor] = useState<string>('#5bc431')
    const [corBack, setCorBack] = useState<string>('#ffffff')
    const { dados, PegarDados, setDados } = useGlobalHDMContext();

    const [valorXX, setValorXX] = useState<number>(0)
    const [valorXY, setValorXY] = useState<number>(6)
    const [valorYY, setValorYY] = useState<number>(0)
    const [valorYX, setValorYX] = useState<number>(1)

    const plotar = () => {
        if (selectAnisotropia.current && selectGrandezas.current) {
            setGrandeza(selectGrandezas.current.value);
            setAnisotropia(selectAnisotropia.current.value);
        }
    };

    useEffect(() => {
        const verDados = async () => {
            if (anisotropia !== "") {
                const result = await PegarDados(`${Anisotrpia(anisotropia)}`);
                setDados(result);
            }
        };
        verDados();
    }, [anisotropia, PegarDados, setDados]);

    useEffect(() => {
        if (grandeza === 'magnetizacao') {
            setData(
                dados.map(item => ({
                    x: item.temperatura,
                    y: item.magnetizacao
                }))
            );
        } else if (grandeza === 'energia') {
            setData(
                dados.map(item => ({
                    x: item.temperatura,
                    y: item.energia
                }))
            );
        } else if (grandeza === 'suscetibilidade') {
            setData(
                dados.map(item => ({
                    x: item.temperatura,
                    y: item.suscetibilidade
                }))
            );
        } else if (grandeza === 'inverso') {
            setData(
                dados.map(item => ({
                    x: item.temperatura,
                    y: item.inverso
                }))
            );
        }
    }, [grandeza, dados]);

    const plus = () => {
        setValorXY(prevs => prevs + 0.5)
        setValorXX(prevs => prevs + 0.5)
        setValorYX(prevs => prevs + 0.5)
        setValorYY(prevs => prevs + 0.5)
    }

    const less = () => {
        setValorXY(prevs => prevs - 0.5)
        setValorXX(prevs => prevs - 0.5)
        setValorYX(prevs => prevs - 0.5)
        setValorYY(prevs => prevs - 0.5)
    }

    const centering = () => {
        setValorXY(6)
        setValorXX(0)
        setValorYX(1)
        setValorYY(0)
    }

    const exportCSV = () => {
        const csvRows = [];
        csvRows.push(`$kT/J, ${grandeza}`);
        data.forEach(row => {
            csvRows.push(`${row.x},${row.y}`);
        });

        const csvString = csvRows.join("\n");
        const blob = new Blob([csvString], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.setAttribute("hidden", "");
        a.setAttribute("href", url);
        a.setAttribute("download", `dados_${grandeza}_anisotropia_${anisotropia}.csv`);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <SelectContainer>
            <DadosStyle>
                <SelectStyle name="select_grandezas" ref={selectGrandezas}>
                    <option value="magnetizacao">Magnetização</option>
                    <option value="energia">Energia</option>
                    <option value="suscetibilidade">Suscetibilidade</option>
                    <option value="inverso">Inverso suscetibilidade</option>
                </SelectStyle>
                <SelectStyle name="select_anisotropia" ref={selectAnisotropia}>
                    <option value="0">0</option>
                    <option value="0.8">0.8</option>
                    <option value="1.0">1.0</option>
                    <option value="2.0">2.0</option>
                    <option value="3.0">3.0</option>
                    <option value="3.38">3.38</option>
                </SelectStyle>
                <button onClick={plotar}>Plotar Gráfico</button>
                <button onClick={exportCSV}>Exportar Dados</button>
                <CoresStyle>
                    <h3>Cor:</h3>
                    <input type="color" name="" id="" value={cor} onChange={(e) => setCor(e.target.value)} />
                    <h3>Background: </h3>
                    <input type="color" name="" id="" value={corBack} onChange={(e) => setCorBack(e.target.value)} />
                </CoresStyle>
            </DadosStyle>
            <GraficoStyle>
                <VictoryChart style={{ parent: { background: corBack } }}>
                    <VictoryLabel
                        text="KT/J"
                        x={225}
                        y={295}
                        textAnchor="middle"
                    />
                    <VictoryLabel
                        text={grandeza}
                        x={5}
                        y={150}
                        angle={-90}
                        textAnchor="middle"
                    />
                    <VictoryAxis
                        domain={[valorXX, valorXY]}
                    />
                    <VictoryAxis
                        dependentAxis
                        domain={[valorYX, valorYY]}
                    />
                    <VictoryScatter data={data} style={{ data: { fill: cor } }} />
                    <VictoryLegend
                        x={50 + valorXX}
                        y={80 + valorXX}
                        orientation="horizontal"
                        style={{ title: { fontSize: 15 } }}
                        data={[{ name: `D = ${anisotropia}`, symbol: { fill: cor } }]}
                    />
                </VictoryChart>
                <BotoesStyle>
                    <div onClick={plus}><PiMagnifyingGlassPlus /></div>
                    <div onClick={less}><PiMagnifyingGlassMinus /></div>
                    <div onClick={centering}><MdFilterCenterFocus /></div>
                </BotoesStyle>
            </GraficoStyle>
        </SelectContainer>
    );
};
