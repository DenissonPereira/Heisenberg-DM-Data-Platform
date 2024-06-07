import React, { useState } from "react"
import { cadastroService } from "../services/user/cadastroService";
import { useNavigate } from "react-router";

export const useHangleCadastro = () => {
    const [nome, setNome] = useState<string>('');
    const [sobrenome, setSobrenome] = useState<string>('');
    const [login, setLogin] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [endereco, setEndereco] = useState<string>('');
    const [cidade, setCidade] = useState<string>('');
    const [estado, setEstado] = useState<string>('');
    const [pais, setPais] = useState<string>('')

    const navigate = useNavigate()

    async function handleCadastro(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const usuarioDados = {
            nome, sobrenome, login, email, senha, telefone, endereco, cidade, estado, pais
        }

        try {
            const response = await cadastroService(usuarioDados)
            console.log('Usuário cadastrado com sucesso: ', response)
            alert('Usuário cadastrado com sucesso!')
            
            navigate('/')

        } catch(error) {
            console.error('Erro ao cadastrar usuário: ', error)
        }
    }

    return {nome, setNome, sobrenome, setSobrenome, login, setLogin, email, setEmail, senha, setSenha, telefone, setTelefone, endereco, setEndereco, cidade, setCidade, estado, setEstado, handleCadastro, pais, setPais, navigate}

}