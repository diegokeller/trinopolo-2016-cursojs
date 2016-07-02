angular
  .module('lojaApp.produto')
  .directive('avaliacoesProduto', AvaliacoesProdutoDirective);
AvaliacoesProdutoDirective.$inject = []; // Dependências
function AvaliacoesProdutoDirective(){
  var directive = {
    restrict: 'E',
    templateUrl: 'app/produto/avaliacoes.html',
    scope: {
      avaliacoes: '@avaliacoes',
      nota: '@nota'
    }
  };
  return directive;
}
