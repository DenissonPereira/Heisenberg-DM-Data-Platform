import { BordaInputs } from '../../../../../components/custom/BordaInputs.style'
import { InputFormulario } from '../../../../../components/custom/Inputs.style'
import { FcBusinessman, FcLock, FcUnlock } from "react-icons/fc";
import { CheckBox, EsqueceuSenha, FormStyle, InputContainer, RememberContainer, Senha, TituloInput } from './styles'
import { BotaoPrincipal } from '../../../../../components/custom/BotaoPrincipal.style';
import { BotaoSecundario } from '../../../../../components/custom/BotaoSecundario.style';
import { useMostrarSenha } from '../../../../../hooks/useMostrarSenha';
import { useHandleLogin } from '../../../../../hooks/useHangleLogin';


export const Form = () => {

    const {verSenha, mostrarSenha} = useMostrarSenha()
    const {login, setLogin, senha, setSenha, handleLogin, navigate} = useHandleLogin()

    return (
        <FormStyle onSubmit={handleLogin}>
            <InputContainer>
                <TituloInput>Username</TituloInput>
                <BordaInputs>
                    <FcBusinessman />
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
                <TituloInput>Password</TituloInput>
                <BordaInputs>
                    <Senha onClick={mostrarSenha}>
                        {verSenha ? <FcUnlock /> : <FcLock />}
                    </Senha>
                    <InputFormulario
                        type={verSenha ? 'text' : 'password'}
                        id='senha_id'
                        placeholder='Password'
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        required
                    />
                </BordaInputs>
            </InputContainer>
            <RememberContainer>
                <CheckBox>
                    <input type="checkbox" name="check" id="check_id" />
                    <p>Remember me</p>
                </CheckBox>
                <EsqueceuSenha>Esqueceu a Senha?</EsqueceuSenha>
            </RememberContainer>
            <BotaoPrincipal type='submit'>ENTRAR</BotaoPrincipal>
            <BotaoSecundario onClick={() => navigate('/cadastro')} type='button'>CADASTRAR</BotaoSecundario>
        </FormStyle>
    )
}
