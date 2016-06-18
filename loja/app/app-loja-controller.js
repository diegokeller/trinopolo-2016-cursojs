angular.module('lojaApp')
  .controller('lojaAppController',
    ['$scope', '$rootScope', '$location', 'Autenticacao',
    function($scope, $rootScope, $location, Autenticacao){

    var self = this;
    this.autenticado = Autenticacao.getAutenticado();

    $rootScope.$on('autenticacao', function(event, autenticado){
      console.log('Evento de Autenticação: ' + autenticado);
      self.autenticado = autenticado;
    });

    if(Autenticacao.getAutenticado() === true){
      $location.path( "/home" );
    } else {
      $location.path( "/login" );
    }

  }]);
