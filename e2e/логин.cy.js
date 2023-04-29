describe('Тестирование позитивноко кейса авторизации', function () {
    it('Проверка - при вводе правильных логина и пароля происходит авторизация', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#message').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon');
     })
 })
 