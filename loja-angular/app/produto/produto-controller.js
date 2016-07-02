angular
  .module('lojaApp.produto')
  .controller('ProdutoController', ProdutoController);

ProdutoController.$inject = ['$http', '$routeParams', 'ProdutoFactory'];

function ProdutoController($http, $routeParams, ProdutoFactory){
  var vm = this;

  vm.produto = {};
  vm.avaliacoes = [];
  vm.avaliacao = {};
  vm.enviarAvaliacao = enviarAvaliacao;

  buscarAvaliacoes();

  //=======================================================

  function buscarAvaliacoes(){
    ProdutoFactory.buscarAvaliacoesDoProduto($routeParams.id)
      .then(function(resposta){
        vm.avaliacoes = resposta.data;
      })
      .catch(function(resposta){
        console.log('Erro ao buscar as avaliações.');
        console.log(resposta);
      });
  }

  function enviarAvaliacao(){
    // Complementar com produto e usuário
    vm.avaliacao.produtoId = $routeParams.id;
    // TODO: Pegar o id do usuário logado
    vm.avaliacao.usuario = {id: 1};
    ProdutoFactory.enviarAvaliacao(vm.avaliacao)
      .then(function(resposta){
        notificar('Avaliação enviada com sucesso', 'success');
        vm.avaliacao = {};
        buscarAvaliacoes();
      })
      .catch(function(resposta){
        notificar(resposta.data.error, 'error');
      });
  }

  ProdutoFactory.buscarProdutoPorId($routeParams.id)
    .then(function(resposta){
      vm.produto = resposta.data;
    })
    .catch(function(resposta){
      console.log('Erro ao buscar o produto.');
      console.log(resposta);
    });

}
