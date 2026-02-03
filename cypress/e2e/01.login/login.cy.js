//тест на вход в систему
describe('Вход в систему', () => {
    let testData;
    before(() => {
        cy.fixtures('test_usets').then((data) => {
            testData = data;
        });
    });
    beforeEach(() => {
        cy.visit(`${testData.baseUrl}/web/index.php/auth/login`);
        cy.get('input[name="username"]').should('be.visible');
    })

    //тест успешного входа
    it('Успешная авторизация', () => {
        cy.get('input[name="username"]').type(testData.validUser.username);
        cy.get('input[name="password"]').type(testData.validUser.password);
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard');
        cy.get('.oxd-topbar-header-breadcrumb').should('contain', 'Dashboard');
    })
});
