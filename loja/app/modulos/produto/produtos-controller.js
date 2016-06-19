angular.module('produto')
  .controller('produtosController', ['ProdutoApi', function(ProdutoApi){

    var self = this;

    this.produtos = []

    ProdutoApi.buscarProdutos().then(function(response){
      self.produtos = response.data;
    }, function(){
      self.produtos = [];
    });

    this.buscarProdutosPorCategoria = function(categoria){
      ProdutoApi.buscarProdutosPorCategoria(categoria).then(function(response){
        self.produtos = response.data;
      }, function(){
        self.produtos = [];
      });
    };

  }]);
