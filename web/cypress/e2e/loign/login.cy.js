describe('Teste de Login', () => {
  it('Deve fazer login com sucesso', () => {
      // Carregar os dados do fixture
      cy.fixture('user').then((user) => {
          // Visita a página de login
          cy.visit(user.url_base);
      
          // Preenche o campo de login
          cy.get('#login_id').type(user.login);
      
          // Preenche o campo de senha
          cy.get('#senha_id').type(user.senha);
      
          // Marca o checkbox "Remember me"
          cy.get('#check_id').check();
      
          // Clica no botão de login
          cy.get('button[type="submit"]').click();
      
          // Verifica se a página de destino após o login foi carregada
          cy.url().should('include', user.url_base); // Substitua '/dashboard' pela URL correta da página de destino após o login
      });
  });
});
