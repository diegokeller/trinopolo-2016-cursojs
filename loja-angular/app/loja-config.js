// const URL_REST = 'http://lojawebrest-diegokeller.rhcloud.com/rest';
const URL_REST = 'http://loja-rest.jelastic.websolute.net.br/loja-web-rest/rest';
angular
  .module('lojaApp')
  .config(['$locationProvider', '$routeProvider', '$httpProvider',
    function config($locationProvider, $routeProvider, $httpProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider
        .when('/produtos', {
          templateUrl : "app/produto/produtos.html",
          controller: 'ProdutosController',
          controllerAs: 'vmProdutos'
        })
        .when('/produto/:id', {
          templateUrl : "app/produto/produto.html",
          controller: 'ProdutoController',
          controllerAs: 'vmProduto'
        })
        .when('/carrinho', {
          templateUrl : "app/carrinho/carrinho.html",
          controller: 'CarrinhoController',
          controllerAs: 'vmCarrinho'
        });
    }
  ]);
