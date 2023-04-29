describe('Тестирование негативного кейса авторизации', function () {
    it('Проверка - при вводе правильных логина и не правильного пароля авторизация не происходит ', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('ekfnifeoiwef');
         cy.get('#loginButton').click();
         cy.get('#message').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon');
 })
})