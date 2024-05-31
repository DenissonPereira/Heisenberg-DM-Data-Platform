import React from "react";
import { useMostrarSenha } from "../../../../../hooks/useMostrarSenha";
import { useHandleLogin } from "../../../../../hooks/useHangleLogin";
import { BotaoPrincipal } from "../../../../../components/custom/BotaoPrincipal.style";
import { BotaoSecundario } from "../../../../../components/custom/BotaoSecundario.style";
import { BordaInputs } from "../../../../../components/custom/BordaInputs.style";
import { InputFormulario } from "../../../../../components/custom/Inputs.style";
import { FcBusinessman, FcLock, FcUnlock } from "react-icons/fc";
import { CheckBox, EsqueceuSenha, FormStyle, InputContainer, RememberContainer, Senha, TituloInput } from "./styles";

export const Form = () => {
  const { verSenha, mostrarSenha } = useMostrarSenha();
  const { login, setLogin, senha, setSenha, handleLogin, navigate } = useHandleLogin();

  // Função para salvar os dados do usuário no localStorage
  const salvarDadosUsuario = () => {
    localStorage.setItem("login", login);
    localStorage.setItem("senha", senha);
  };

  // Função para carregar os dados do usuário do localStorage
  const carregarDadosUsuario = () => {
    const loginSalvo = localStorage.getItem("login");
    const senhaSalva = localStorage.getItem("senha");
    if (loginSalvo && senhaSalva) {
      setLogin(loginSalvo);
      setSenha(senhaSalva);
    }
  };

  // Checa se os dados do usuário devem ser carregados ao iniciar o componente
  React.useEffect(() => {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    if (rememberMe) {
      carregarDadosUsuario();
    }
  });

  // Função para lidar com a mudança do checkbox "Remember me"
  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      salvarDadosUsuario();
    } else {
      localStorage.removeItem("login");
      localStorage.removeItem("senha");
    }
    localStorage.setItem("rememberMe", isChecked.toString());
  };

  return (
    <FormStyle onSubmit={handleLogin}>
      <InputContainer>
        <TituloInput>Username</TituloInput>
        <BordaInputs>
          <FcBusinessman />
          <InputFormulario
            type="text"
            id="login_id"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
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
            type={verSenha ? "text" : "password"}
            id="senha_id"
            placeholder="Password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </BordaInputs>
      </InputContainer>
      <RememberContainer>
        <CheckBox>
          <input
            type="checkbox"
            name="check"
            id="check_id"
            onChange={handleRememberMeChange}
          />
          <p>Remember me</p>
        </CheckBox>
        <EsqueceuSenha>Esqueceu a Senha?</EsqueceuSenha>
      </RememberContainer>
      <BotaoPrincipal type="submit">ENTRAR</BotaoPrincipal>
      <BotaoSecundario onClick={() => navigate("/cadastro")} type="button">
        CADASTRAR
      </BotaoSecundario>
    </FormStyle>
  );
};
