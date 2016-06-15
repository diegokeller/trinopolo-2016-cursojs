angular.module('acesso')
  .controller('loginController', ['$scope', '$http', '$location', '$window', function($scope, $http, $location, $window) {

    self = this;

    this.email = 'keller.diego+joao@gmail.com';
    this.senha = 'senha';

    this.mensagem = '';
    this.tipoMensagem = 'danger';

    this.entrar = function(){
      $http.post(URL_REST_AUTENTICACAO, {
        email: self.email,
        senha: self.senha
      })
      .then(function(response) {
        $location.path( "/home" );
      }, function(response){
        self.tipoMensagem = 'danger';
        self.mensagem = response.data.error;
      });
    };

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
      $http.post(URL_REST_RECUPERACAO_SENHA, {
        email: self.email
      })
      .then(function(response) {
        self.tipoMensagem = 'success';
        self.mensagem = 'Uma nova senha foi enviada para seu e-mail.';
      }, function(response){
        self.tipoMensagem = 'danger';
        self.mensagem = response.data.error;
      });
    };

  }]);
