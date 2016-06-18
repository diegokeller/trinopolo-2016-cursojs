angular.module('acesso')
  .factory('Autenticacao',
    ['$rootScope', '$window',
    function($rootScope, $window) {

    return {

      setAutenticado: function(autenticado, usuarioId){
        $window.sessionStorage.autenticado = autenticado;
        $window.sessionStorage.usuarioId = usuarioId;
        $rootScope.$broadcast('autenticacao', autenticado);
      },

      getAutenticado: function(){
        return $window.sessionStorage.autenticado === 'true';
      },

      getUsuarioId: function(){
        return $window.sessionStorage.usuarioId;
      }

    };

  }]);
