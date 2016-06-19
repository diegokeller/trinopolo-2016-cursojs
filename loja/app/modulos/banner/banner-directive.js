angular.module('banner')
  .directive('banners', [function(){
    return {
      restrict: 'A',
      controller: ['$scope', '$location', 'BannerApi', function($scope, $location, BannerApi) {
        var self = this;
        self.banners = [];
        BannerApi.buscarBanners().then(function(response){
          self.banners = response.data;
        }, function(){
          self.banners = [];
        });
      }],
      templateUrl: 'app/modulos/banner/banner.html',
      controllerAs: 'bannerCtrl'
    };
  }]);
