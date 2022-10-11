describe('Тестирование https://login.qa.studio/', function () {

    it('Автотест на проверку логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.contains('Забыли пароль').click();
        cy.get('#mailForgot').type('klukvaaga@gmail.com')
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon');
    })
})