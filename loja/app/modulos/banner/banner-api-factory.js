const URL_REST_BANNERS = URL_REST + '/banners';

angular.module('banner')
  .factory('BannerApi', ['$http', function($http){

    return {
      buscarBanners: function(){
        return $http.get(URL_REST_BANNERS);
      }
    };

  }]);
