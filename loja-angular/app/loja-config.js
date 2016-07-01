const URL_REST = 'http://lojawebrest-diegokeller.rhcloud.com/rest';
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
        });
    }
  ]);
