angular
  .module('lojaApp.produto')
  .factory('ProdutoFactory', ProdutoFactory);

ProdutoFactory.$inject = ['$http'];

function ProdutoFactory($http){
  var factory = {
    buscarTodosProdutos: buscarTodosProdutos
  };
  return factory;

  function buscarTodosProdutos(){
    return $http.get(URL_REST + '/produtos');
  }
}
