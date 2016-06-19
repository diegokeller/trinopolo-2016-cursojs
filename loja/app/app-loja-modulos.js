angular.module('banner', []);

angular.module('acesso', []);

angular.module('produto', ['banner']);

angular.module('lojaApp', ['ngRoute', 'acesso', 'produto']);
