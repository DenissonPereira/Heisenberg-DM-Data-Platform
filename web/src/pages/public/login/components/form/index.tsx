import { BordaInputs } from '../../../../../components/custom/BordaInputs.style'
import { InputFormulario } from '../../../../../components/custom/Inputs.style'
import { FcBusinessman, FcLock, FcUnlock } from "react-icons/fc";
import { CheckBox, EsqueceuSenha, FormStyle, InputContainer, RememberContainer, Senha, TituloInput } from './styles'
import { BotaoPrincipal } from '../../../../../components/custom/BotaoPrincipal.style';
import { BotaoSecundario } from '../../../../../components/custom/BotaoSecundario.style';
import { useMostrarSenha } from '../../../../../hooks/useMostrarSenha';
import { useNavigate } from 'react-router';
import { loginService } from '../../../../../services/loginService';
import { useState } from 'react';
import { useGlobalHDMContext } from '../../../../../contexts/HDMContext';


export const Form = () => {
    
    const navigate = useNavigate()
    const { verSenha, mostrarSenha } = useMostrarSenha()

    const { setUsuario } = useGlobalHDMContext()

    const [login, setLogin] = useState<string>('')
    const [senha, setSenha] = useState<string>('')

    async function handleLogin() {
        event?.preventDefault()
        const data = await loginService(login, senha, setUsuario)
        console.log(data)

        if (data.usuario) navigate('/home')
        else alert(data)
    }

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
            <BotaoSecundario type='button'>CADASTRAR</BotaoSecundario>
        </FormStyle>
    )
}
