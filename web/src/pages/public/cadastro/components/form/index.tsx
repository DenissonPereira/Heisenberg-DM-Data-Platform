import { FcBusinessman, FcAddressBook, FcConferenceCall, FcReading, FcUnlock, FcPhone, FcDepartment, FcLock } from "react-icons/fc";
import { CheckBox, CheckContainer, ForcaSenha, FormStyle, Forte, Fraca, InputContainer, Media, Senha, Vazia } from "./styles"
import { FaMapLocationDot } from "react-icons/fa6";
import { forcaDaSenha } from "../../../../../utils/helpers/forcaDaSenha";
import { BotaoSecundario, BotaoPrincipal, InputFormulario, BordaInputs } from "../../../../../components";
import { useHangleCadastro, useMostrarSenha } from "../../../../../hooks";

export const Form = () => {

    const {nome, setNome, sobrenome, setSobrenome, login, setLogin, email, setEmail, senha, setSenha, telefone, setTelefone, endereco, setEndereco, cidade, setCidade, estado, setEstado, pais, setPais, handleCadastro, navigate} = useHangleCadastro()

    const forca = forcaDaSenha(senha)

    const { verSenha, mostrarSenha } = useMostrarSenha()

    return (
        <FormStyle onSubmit={handleCadastro}>
            <InputContainer>
                <BordaInputs>
                    <FcBusinessman />
                    <InputFormulario
                        type='text'
                        id='nome_id'
                        placeholder='Nome'
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        required
                    />
                </BordaInputs>
            </InputContainer>
            <InputContainer>
                <BordaInputs>
                    <FcConferenceCall />
                    <InputFormulario
                        type='text'
                        id='sobrenome_id'
                        placeholder='Sobrenome'
                        value={sobrenome}
                        onChange={e => setSobrenome(e.target.value)}
                        required
                    />
                </BordaInputs>
            </InputContainer>
            <InputContainer>
                <BordaInputs>
                    <FcReading />
                    <InputFormulario
                        type='text'
                        id='login_id'
                        placeholder='Login'
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                        required
                    />
                </BordaInputs>
            </InputContainer>
            <InputContainer>
                <BordaInputs>
                    <FcAddressBook />
                    <InputFormulario
                        type='email'
                        id='email_id'
                        placeholder='E-mail'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </BordaInputs>
            </InputContainer>
            <InputContainer>
                <BordaInputs>
                    <Senha onClick={mostrarSenha}>
                        {verSenha ? <FcUnlock /> : <FcLock />}
                    </Senha>
                    <InputFormulario
                        type={verSenha ? 'text' : 'password'}
                        id='senha_id'
                        placeholder='Senha'
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        required
                    />
                </BordaInputs>
            </InputContainer>
            <ForcaSenha>
                {forca === 'vazia' && <Vazia></Vazia>}
                {forca === 'fraca' && <Fraca></Fraca>}
                {forca === 'media' && <Media></Media>}
                {forca === 'forte' && <Forte></Forte>}
            </ForcaSenha>
            <InputContainer>
                <BordaInputs>
                    <FcPhone />
                    <InputFormulario
                        type='text'
                        id='telefone_id'
                        placeholder='Telefone'
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)}
                        required
                    />
                </BordaInputs>
            </InputContainer>
            <InputContainer>
                <BordaInputs>
                    <FaMapLocationDot style={{ color: 'grey' }} />
                    <InputFormulario
                        type='text'
                        id='pais_id'
                        placeholder='País'
                        value={pais}
                        onChange={e => setPais(e.target.value)}
                        required
                    />
                </BordaInputs>
            </InputContainer>
            <InputContainer>
                <BordaInputs>
                    <FaMapLocationDot style={{ color: 'grey' }} />
                    <InputFormulario
                        type='text'
                        id='estado_id'
                        placeholder='Estado'
                        value={estado}
                        onChange={e => setEstado(e.target.value)}
                        required
                    />
                </BordaInputs>
            </InputContainer>
            <InputContainer>
                <BordaInputs>
                    <FaMapLocationDot style={{ color: 'grey' }} />
                    <InputFormulario
                        type='text'
                        id='cidade_id'
                        placeholder='Cidade'
                        value={cidade}
                        onChange={e => setCidade(e.target.value)}
                        required
                    />
                </BordaInputs>
            </InputContainer>
            <InputContainer>
                <BordaInputs>
                    <FcDepartment />
                    <InputFormulario
                        type='text'
                        id='endereco_id'
                        placeholder='Endereço'
                        value={endereco}
                        onChange={e => setEndereco(e.target.value)}
                        required
                    />
                </BordaInputs>
            </InputContainer>
            <CheckContainer>
                <CheckBox>
                    <input type="checkbox" name="check" id="check_id" required />
                    <p>Ao informar seus dados e seguir para a próxima etapa, você automaticamente concorda com nossa <span>Política de Privacidade</span> e com os <span>Termos de Uso</span>.</p>
                </CheckBox>
            </CheckContainer>
            <BotaoPrincipal type="submit">CADASTRAR</BotaoPrincipal>
            <BotaoSecundario type="button" onClick={() => navigate('/')}>VOLTAR</BotaoSecundario>
        </FormStyle>
    )
}
