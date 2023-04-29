describe('Тестирование негативного кейса валидации', function () {
    it('Проверка - при вводе логина без @  получаем сообщение с ошибкой', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('germandolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#message').contains('Нужно исправить проблему валидации');
         
 })
})