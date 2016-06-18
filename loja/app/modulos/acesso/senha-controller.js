angular.module('acesso')
  .controller('senhaController',
    ['$scope', '$rootScope', '$http', '$location', '$window', 'AcessoApi', 'Autenticacao',
    function($scope, $rootScope, $http, $location, $window, AcessoApi, Autenticacao) {

    self = this;

    // Inicialização
    this.atual = null;
    this.nova = null;
    this.confirmacao = null;

    this.mensagem = 'Informe sua senha atual e a nova senha.';
    this.tipoMensagem = 'warning';

    // Troca de senha
    this.trocar = function(){
      AcessoApi.trocarSenha(Autenticacao.getUsuarioId(), self.atual, self.nova, self.confirmacao).then(
        function(response){
          self.mensagem = 'Senha alterada com sucesso!';
          self.tipoMensagem = 'success';
        }, function(response){
          self.mensagem = response.data.error;
          self.tipoMensagem = 'danger';
        }
      );
    };

  }]);
