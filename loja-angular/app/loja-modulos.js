// Módulo de carrinho
angular
  .module('lojaApp.carrinho', []);

// Módulo de produtos
angular
  .module('lojaApp.produto', ['lojaApp.carrinho']);

// Módulo principal da Loja
angular
  .module('lojaApp', ['ngRoute',
    'lojaApp.produto', 'lojaApp.carrinho']);
