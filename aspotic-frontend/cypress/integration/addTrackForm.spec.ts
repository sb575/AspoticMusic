describe('addTrackForm', () => {
  beforeEach(() => {
    cy.request('http://mycnsamastertaii.tech').then((response) => {
      expect(response.status).to.eq(200);
    });

    cy.visit('http://mycnsamastertaii.tech/');
    cy.wait(5000);
    cy.viewport(1006, 816);

  });

  it('addTrackForm', () => {
    cy.contains('Sign In').should('be.visible');
    cy.contains('Sign In').click();
    cy.contains('email-input').should('be.visible');
    cy.contains('email-input').click().type('sokaina12@gmail.com');
    cy.get('(//ion-item[@id="item"])[2]').click();
    cy.contains('password-input').type('123456');
    cy.contains('signIn-btn').click();
    cy.get('#tab-button-tab2').click();
    cy.get('.custom-floating-btn > .md').click();
    cy.get('ion-input[name="ion-input-2"]').click().type('Vas a quedarte');
    cy.get('ion-input[name="ion-input-3"]').click().type('Aitana');
    cy.get('ion-input[name="ion-input-4"]').click().type('Aitana');
    cy.get('ion-input[name="ion-input-5"]').click().type('https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/11/27/15433342485852.jpg');
    cy.get('.ion-activated', { timeout: 50000 }).click();
    cy.window().scrollTo(0, 0);
  });
});
