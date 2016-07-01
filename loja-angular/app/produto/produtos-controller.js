angular
  .module('lojaApp.produto')
  .controller('ProdutosController', ProdutosController);

ProdutosController.$inject = ['$http', 'ProdutoFactory'];

function ProdutosController($http, ProdutoFactory){
  var vm = this;

  vm.produtos = [];
  vm.ordem = 'nome';

  ProdutoFactory.buscarTodosProdutos()
    .then(function(resposta){
      vm.produtos = resposta.data;
    })
    .catch(function(resposta){
      console.log('Erro ao buscar produtos');
      console.log(resposta);
    });
}
