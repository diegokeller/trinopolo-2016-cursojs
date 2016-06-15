const URL_REST = 'http://192.168.0.9:8080/loja-web-rest/rest';
const URL_REST_AUTENTICACAO = URL_REST + '/autenticacao';
const URL_REST_RECUPERACAO_SENHA = URL_REST + '/recuperacao_senha';

angular.
  module('lojaApp').
  config(['$locationProvider', '$routeProvider', '$httpProvider',
    function config($locationProvider, $routeProvider, $httpProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider.
        when('/login', {
          templateUrl : "app/modulos/acesso/login.html"
        }).
        when('/home', {
          templateUrl : "app/modulos/home/home.html"
        });
        /*
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = false;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
        */
    }
  ]);
