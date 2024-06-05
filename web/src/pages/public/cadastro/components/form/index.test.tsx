import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ThemeProvider } from "../../../../../contexts/themeContext";
import { BrowserRouter } from "react-router-dom";
import { Form } from ".";

describe('Inputs login', () => {
    it('should be able to type in the input', () => {
        render(
            <ThemeProvider>
                <BrowserRouter>
                    <Form />
                </BrowserRouter>
            </ThemeProvider>
        )

        const inputNome = screen.getByTestId('nome_input') as HTMLInputElement
        fireEvent.change(inputNome, { target: { value: "nome usuario" } })
        expect(inputNome.value).toBe("nome usuario")

        const inputSobrenome = screen.getByTestId('sobrenome_input') as HTMLInputElement
        fireEvent.change(inputSobrenome, { target: { value: "sobrenome usuario" } })
        expect(inputSobrenome.value).toBe("sobrenome usuario")

        const inputLogin = screen.getByTestId('login_input') as HTMLInputElement
        fireEvent.change(inputLogin, { target: { value: "login"} })
        expect(inputLogin.value).toBe("login")


        const inputEmail = screen.getByTestId('email_input') as HTMLInputElement
        fireEvent.change(inputEmail, { target: { value: "nome@email.com" } })
        expect(inputEmail.value).toBe("nome@email.com")

        const inputSenha = screen.getByTestId('senha_input') as HTMLInputElement
        fireEvent.change(inputSenha, { target: { value: "minhaSenha" } })
        expect(inputSenha.value).toBe("minhaSenha")

        const inputTelefone = screen.getByTestId('telefone_input') as HTMLInputElement
        fireEvent.change(inputTelefone, { target: { value: "799898x548" } })
        expect(inputTelefone.value).toBe("799898x548")

        const inputPais = screen.getByTestId('pais_input') as HTMLInputElement
        fireEvent.change(inputPais, { target: { value: "Brasil" } })
        expect(inputPais.value).toBe("Brasil")

    })
})