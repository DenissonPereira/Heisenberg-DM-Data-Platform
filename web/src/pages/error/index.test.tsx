import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect } from "vitest";
import { Error } from ".";
import { ThemeProvider } from "../../contexts/themeContext";

describe('Erro page', () => {
    it('should render the Error page correctly', () => {
        render(
            <ThemeProvider>
                <BrowserRouter>
                    <Error />
                </BrowserRouter>
            </ThemeProvider>
        )

        const erroID = screen.getByTestId('erro_page')
        expect(erroID).toBeInTheDocument()
    })
})