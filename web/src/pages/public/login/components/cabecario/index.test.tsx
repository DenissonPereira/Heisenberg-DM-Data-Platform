import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import { ThemeProvider } from "../../../../../contexts/themeContext";
import { BrowserRouter } from "react-router-dom";
import { Cabecario } from ".";

describe('Cabecario Component', () => {
    it('should render the Cabecario component correctly', () => {
        render(
            <ThemeProvider>
                <BrowserRouter>
                    <Cabecario />
                </BrowserRouter>
            </ThemeProvider>
        );
            
        const tituloID = screen.getByTestId( 'titulo_cabecario' );
        expect(tituloID).toBeInTheDocument();
    })
})