import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ThemeProvider } from '../contexts/themeContext';
import { Login } from '../pages';
import { BrowserRouter } from 'react-router-dom';

describe('Login Component', () => {
  it('should render the Login component correctly', () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
            <Login />
        </BrowserRouter>
      </ThemeProvider>
    );

    const texto = screen.getByText( /heisenbergdm@suporte.com/ );
    expect(texto).toBeInTheDocument();

  });
});
