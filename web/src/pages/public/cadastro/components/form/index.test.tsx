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
    })
})