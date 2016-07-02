angular
  .module('lojaApp.carrinho')
  .controller('CarrinhoController', CarrinhoController);

CarrinhoController.$inject = ['$http', '$window', '$scope', '$routeParams', 'CarrinhoFactory'];

function CarrinhoController($http, $window, $scope, $routeParams, CarrinhoFactory){
  var vm = this;

  vm.itens = [];
  vm.total = 0;
  vm.remover = remover;
  vm.atualizarQuantidade = atualizarQuantidade;

  buscarItens();

  $scope.$watch(function(){
    return vm.itens;
  }, atualizarTotal, true);

  //=======================================================

  function atualizarQuantidade(item, quantidade){
    var novaQuantidade = item.quantidade + quantidade;
    if(novaQuantidade == 0){
      return;
    }
    item.quantidade = novaQuantidade;
  }

  function atualizarTotal(){
    var total = 0;
    for (var item of vm.itens) {
      total += (item.produto.preco * item.quantidade);
    }
    vm.total = total;
  }

  function remover(itemId){
    if(!$window.confirm('Tem certeza que deseja remover?')){
      return;
    }
    CarrinhoFactory.removerItemDoCarrinho(itemId)
      .then(function(resposta){
        notificar('Removido com sucesso', 'success');
        buscarItens();
      })
      .catch(function(resposta){
        notificar('Erro ao remover', 'error');
      });
  }

  function buscarItens(){
    CarrinhoFactory.buscarItensCarrinhoPorUsuario(1)
      .then(function(resposta){
        vm.itens = resposta.data;
        atualizarTotal();
      })
      .catch(function(resposta){
        notificar('Erro ao buscar itens do carrinho.', 'error');
      });
  }

}
