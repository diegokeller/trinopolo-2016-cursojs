angular.module('acesso')
  .directive('sair', ['$rootScope', 'Autenticacao', function($rootScope, Autenticacao) {
    return {
      restrict: 'A',
      scope: {},
      controller: ['$scope', '$location', 'Autenticacao', function($scope, $location, Autenticacao) {
        this.sair = function(){
          Autenticacao.setAutenticado(false, null);
          $location.path( "/login" );
        };
      }],
      template: '<a href="#" ng-click="senhaCtrl.sair()">Sair</a>',
      controllerAs: 'senhaCtrl'
    };
  }]);
