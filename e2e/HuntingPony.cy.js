describe('', function () {
    it('', function () {
         cy.visit('https://huntingpony.com/');
         cy.get('[href="/collection/lezhanki"] > .banner-list__item-title').click();
         cy.get('[data-product-id="350328854"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').trigger('mouseover');
         cy.contains('Выбрать').click({force: true} );
         cy.get('.add-cart-counter__btn').trigger('mouseover');
         cy.wait(3000)
         cy.contains('В корзину').click({force: true} );
         cy.wait(5000)
         cy.get('.add-cart-counter__detail').contains('В корзине 1 шт');
         cy.get('[data-add-cart-counter-plus=""]').click();
         cy.wait(1000)
         cy.get('.add-cart-counter__detail-text').contains('В корзине 2 шт');
         cy.wait(1000);
         cy.get('.header__cart').click();
         cy.wait(1000);
         cy.get('.cart-controls > .button').click();
         cy.wait(1000);
         cy.get('.co-section--checkout_header').contains('Оформление заказа');
         
         //cy.get('.header__cart > .icon').click();

         //cy.wait(3000);

         //cy.get('.is-count-up').click();
         
        //cy.get('.add-cart-counter__btn-label').contains('В корзину').click();
     })
 })



 