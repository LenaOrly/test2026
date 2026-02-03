//тест на вход в систему
describe('Вход в систему', () => {
    let testData;
    before(() => {
        cy.fixture('test_user').then((data) => {
            testData = data;
        });
    });
    beforeEach(() => {
        cy.visit(`${testData.baseUrl}/web/index.php/auth/login`);
        cy.get('input[name="username"]').should('be.visible');
    })

    //тест успешного входа
    it('Успешная авторизация', () => {
        cy.get('input[name="username"]').type(testData.validUser.login);
        cy.get('input[name="password"]').type(testData.validUser.password);
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard');
        cy.get('.oxd-topbar-header-breadcrumb').should('contain', 'Dashboard');
    });

    //тест неуспешного входа
    it('Неуспешная авторизация', () => {
        cy.get('input[name="username"]').type(testData.invalidUser.login);
        cy.get('input[name="password"]').type(testData.invalidUser.password);
        cy.get('button[type="submit"]').click();
        cy.get('div[role="alert"]').should('contain', 'Invalid credentials');
    })
});
