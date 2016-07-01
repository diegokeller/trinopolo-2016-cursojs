angular
  .module('lojaApp.produto')
  .controller('ProdutoController', ProdutoController);

ProdutoController.$inject = ['$http', '$routeParams', 'ProdutoFactory'];

function ProdutoController($http, $routeParams, ProdutoFactory){
  var vm = this;

  vm.produto = {};
  vm.avaliacoes = [];

  ProdutoFactory.buscarProdutoPorId($routeParams.id)
    .then(function(resposta){
      vm.produto = resposta.data;
    })
    .catch(function(resposta){
      console.log('Erro ao buscar o produto.');
      console.log(resposta);
    });

  ProdutoFactory.buscarAvaliacoesDoProduto($routeParams.id)
    .then(function(resposta){
      vm.avaliacoes = resposta.data;
    })
    .catch(function(resposta){
      console.log('Erro ao buscar as avaliações.');
      console.log(resposta);
    });

}
