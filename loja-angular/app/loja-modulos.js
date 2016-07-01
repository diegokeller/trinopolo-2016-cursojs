// Módulo de produtos
angular
  .module('lojaApp.produto', []);

// Módulo principal da Loja
angular
  .module('lojaApp', ['ngRoute', 'lojaApp.produto']);
