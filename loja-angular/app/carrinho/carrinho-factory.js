

angular
  .module('lojaApp.carrinho')
  .factory('CarrinhoFactory', CarrinhoFactory);

CarrinhoFactory.$inject = ['$http'];

function CarrinhoFactory($http){
  var factory = {
  };
  return factory;

}
