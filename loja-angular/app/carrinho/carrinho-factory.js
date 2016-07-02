angular
  .module('lojaApp.carrinho')
  .factory('CarrinhoFactory', CarrinhoFactory);

CarrinhoFactory.$inject = ['$http'];

function CarrinhoFactory($http){
  var factory = {
    adicionarAoCarrinho: adicionarAoCarrinho,
    buscarItensCarrinhoPorUsuario: buscarItensCarrinhoPorUsuario,
    removerItemDoCarrinho: removerItemDoCarrinho
  };
  return factory;

  //==================================================

  function removerItemDoCarrinho(itemId){
    return $http.delete(URL_REST + '/carrinho/' + itemId);
  }

  function buscarItensCarrinhoPorUsuario(usuarioId){
    return $http.get(URL_REST + '/carrinho/' + usuarioId);
  }

  function adicionarAoCarrinho(produtoId, usuarioId, quantidade){
    var item = {
      produto: {
        id: produtoId
      },
      usuario: {
        id: usuarioId
      },
      quantidade: quantidade
    };
    return $http.put(URL_REST + '/carrinho', item);
  }

}
