angular
  .module('lojaApp.produto')
  .factory('ProdutoFactory', ProdutoFactory);

ProdutoFactory.$inject = ['$http'];

function ProdutoFactory($http){
  var factory = {
    buscarTodosProdutos: buscarTodosProdutos,
    buscarProdutoPorId: buscarProdutoPorId,
    buscarAvaliacoesDoProduto: buscarAvaliacoesDoProduto,
    enviarAvaliacao: enviarAvaliacao
  };
  return factory;

  function buscarTodosProdutos(){
    return $http.get(URL_REST + '/produtos');
  }

  function buscarProdutoPorId(id){
    return $http.get(URL_REST + '/produto/' + id);
  }

  function buscarAvaliacoesDoProduto(id){
    return $http.get(URL_REST + '/avaliacoes/' + id);
  }

  function enviarAvaliacao(avaliacao){
    return $http.put(URL_REST + '/avaliacao', avaliacao);
  }
}
