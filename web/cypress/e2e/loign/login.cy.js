// Arquivo de teste Cypress para o formulário de login

describe('Teste de Login', () => {
    it('Deve fazer login com sucesso', () => {
      // Visita a página de login
      cy.visit('http://localhost:5173/'); // Substitua pela URL correta da sua aplicação
  
      // Preenche o campo de login
      cy.get('#login_id').type('eliane1');
  
      // Preenche o campo de senha
      cy.get('#senha_id').type('123456');
  
      // Marca o checkbox "Remember me"
      cy.get('#check_id').check();
  
      // Clica no botão de login
      cy.get('button[type="submit"]').click();
  
      // Verifica se a página de destino após o login foi carregada
      cy.url().should('include', 'http://localhost:5173/'); // Substitua '/dashboard' pela URL correta da página de destino após o login
    });
  });
  