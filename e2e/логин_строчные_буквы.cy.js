describe('Тестирование ввода логина ', function () {
    it('Проверка - при вводе логина  заглавными буквами  происходит замена на строчные', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('GerMan@Dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#message').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon');
     })
 })
 