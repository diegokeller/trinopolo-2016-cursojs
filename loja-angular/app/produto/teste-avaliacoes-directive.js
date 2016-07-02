angular
  .module('lojaApp.produto')
  .directive('testeAvaliacoes', TesteAvaliacoesDirective);

TesteAvaliacoesDirective.$inject = [];

function TesteAvaliacoesDirective(){

  var directive = {
    restrict: 'E',
    templateUrl: 'app/produto/teste-avaliacoes.html',
    scope: {
      avaliacoes: '@avaliacoes',
      nota: '@nota'
    }
  };
  return directive;

}
