const URL_REST_PRODUTOS = URL_REST + '/produtos';

angular.module('produto')
  .factory('ProdutoApi', ['$http', function($http){

    return {

      buscarProdutos: function(){
        return $http.get(URL_REST_PRODUTOS);
      },

      buscarProdutosPorCategoria: function(categoria){
        return $http.get(URL_REST_PRODUTOS + '/' + categoria);
      }

    }

  }]);
