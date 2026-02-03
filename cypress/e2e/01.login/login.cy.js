//тест на вход в систему
describe('Вход в систему', () => {
    let testData;
    before(() => {
        cy.fixtures('test_usets').then((data) => {
            testData = data;
        });
    });
    beforeEach(() => {
        cy.visit(testData.baseUrl)/web/index.php/auth/login
        cy.wait(5000);
    })

    //тест успешного входа
    it('Успешная авторизация', () => {
        cy.get('[class-"oxd-input oxd-input--active"]').type(login)
    })
});
