angular
  .module('lojaApp.produto')
  .controller('ProdutoController', ProdutoController);

ProdutoController.$inject = ['$http', '$routeParams',
  'ProdutoFactory', 'CarrinhoFactory'];

function ProdutoController($http, $routeParams,
    ProdutoFactory, CarrinhoFactory){
  var vm = this;

  vm.produto = {};
  vm.avaliacoes = [];
  vm.avaliacao = {};
  vm.enviarAvaliacao = enviarAvaliacao;
  vm.adicionarAoCarrinho = adicionarAoCarrinho;

  buscarAvaliacoes();

  //=======================================================

  function adicionarAoCarrinho(){
    CarrinhoFactory.adicionarAoCarrinho($routeParams.id, 1, 1)
      .then(function(resposta){
        notificar('Adicionado ao carrinho com sucesso', 'success');
      })
      .catch(function(resposta){
        notificar(respota.data.error, 'error');
      });
  }

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
