describe('Тестирование staya', function () {
    
    it('Проверка на негативный кейс авторизации, неправильный пароль', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('shyne4a@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('Tvoridobro2');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.')
        })
})
