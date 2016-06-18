angular.module('acesso')
  .controller('loginController',
    ['$scope', '$rootScope', '$http', '$location', '$window', 'AcessoApi', 'Autenticacao',
    function($scope, $rootScope, $http, $location, $window, AcessoApi, Autenticacao) {

    self = this;

    // Inicialização
    this.email = 'keller.diego+joao@gmail.com';
    this.senha = 'senha';

    this.mensagem = '';
    this.tipoMensagem = 'danger';
    this.processando = false;

    // Login
    this.entrar = function(){

      self.tipoMensagem = 'warning';
      self.mensagem = 'Aguarde! Efetuando login.';

      AcessoApi.login(self.email, self.senha)
      .then(function(response) {
        Autenticacao.setAutenticado(true, response.data.usuarioId);
        $location.path( "/home" );
      }, function(response){
        self.tipoMensagem = 'danger';
        self.mensagem = response.data.error;
      });

    };

    // Recuperação de senha
    this.recuperarSenha = function(){

      if(self.email.trim().length === 0){
        self.tipoMensagem = 'danger';
        self.mensagem = 'Informe seu endereço de e-mail no campo abaixo e clique novamente para gerar uma nova senha.';
        return;
      }

      if(!$window.confirm('Uma nova senha será gerada e enviada para o seu e-mail cadastrado. Você confirma?')){
        return;
      }

      self.tipoMensagem = 'warning';
      self.mensagem = 'Aguarde! Estamos gerando uma nova senha.';
      AcessoApi.recuperarSenha(self.email)
      .then(function(response) {
        self.tipoMensagem = 'success';
        self.mensagem = 'Uma nova senha foi enviada para seu e-mail.';
      }, function(response){
        self.tipoMensagem = 'danger';
        self.mensagem = response.data.error;
      });

    };

  }]);
