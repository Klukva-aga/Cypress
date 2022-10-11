describe('Тестирование staya', function () {
    
    it('Проверка, что авторизация работает', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('shyne4a@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('Tvoridobro1');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.get('.profile-orders__title')
        })
})
