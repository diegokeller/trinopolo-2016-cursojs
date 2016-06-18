const URL_REST_AUTENTICACAO = URL_REST + '/autenticacao';
const URL_REST_RECUPERAR_SENHA = URL_REST + '/recuperar_senha';
const URL_REST_TROCAR_SENHA = URL_REST + '/trocar_senha';

angular.module('acesso')
  .factory('AcessoApi', ['$http', function($http){

    return {

      login: function(email, senha){
        return $http.post(URL_REST_AUTENTICACAO, {
          email: email,
          senha: senha
        });
      },

      recuperarSenha: function(email){
        return $http.post(URL_REST_RECUPERAR_SENHA, {
          email: email
        });
      },

      trocarSenha: function(usuarioId, atual, nova, confirmacao){
        return $http.post(URL_REST_TROCAR_SENHA, {
          usuarioId: usuarioId,
          atual: atual,
          nova: nova,
          confirmacao: confirmacao
        });
      }

    };

  }]);
