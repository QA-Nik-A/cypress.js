describe('Тестирование восстановления пароля', function () {
    it('Проверка работоспособности механизма восстановления пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type('nansyforester@gmail.com');
         cy.get('#restoreEmailButton').click();
         cy.get('#message').contains('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton')
         cy.get('#exitMessageButton > .exitIcon')
     })
 })
 