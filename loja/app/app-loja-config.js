// const URL_REST = 'http://192.168.1.53:8080/loja-web-rest/rest';
const URL_REST = 'http://192.168.0.9:8080/loja-web-rest/rest';

angular
  .module('lojaApp')
  .config(['$locationProvider', '$routeProvider', '$httpProvider',
    function config($locationProvider, $routeProvider, $httpProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider.
        when('/', {
          templateUrl : "app/modulos/acesso/login.html"
        }).
        when('/login', {
          templateUrl : "app/modulos/acesso/login.html"
        }).
        when('/trocar-senha', {
          templateUrl : "app/modulos/acesso/senha.html"
        }).
        when('/home', {
          templateUrl : "app/modulos/home/home.html"
        });
    }
  ]);
