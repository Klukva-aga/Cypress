describe('Тестирование https://login.qa.studio/', function () {

    it('Проверка на негативный кейс авторизации, неправильный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('klukvaaga@gmail.com')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon')
    })
})