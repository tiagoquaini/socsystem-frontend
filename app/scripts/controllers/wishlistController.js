(function(){

  "use strict";

  angular.module('socsystem').controller('WishlistController', ['$scope', 'UserService',
    function( $scope, UserService ) {

      $scope.user = UserService.getLoggedUser();
      
      function _logoutSuccess() {
        $scope.user = null;
      }

      $scope.logout = function() {
        UserService.logout().then(_logoutSuccess);
      };

      $scope.aWishlistProducts = [
        {
          img: "http://thumbs.buscape.com.br/camisa-de-times-de-futebol/adidas-ny-red-bull-2015-i-manga-curta-masculino_200x200-PU95bec_1.jpg",
          title: "aaa",
          price: "50,30"
        },
        {
          img: "http://thumbs.buscape.com.br/camisa-de-times-de-futebol/adidas-ny-red-bull-2015-i-manga-curta-masculino_200x200-PU95bec_1.jpg",
          title: "aaa",
          price: "50,30"
        },
        {
          img: "http://thumbs.buscape.com.br/camisa-de-times-de-futebol/adidas-ny-red-bull-2015-i-manga-curta-masculino_200x200-PU95bec_1.jpg",
          title: "aaa",
          price: "50,30"
        },
        {
          img: "http://thumbs.buscape.com.br/camisa-de-times-de-futebol/adidas-ny-red-bull-2015-i-manga-curta-masculino_200x200-PU95bec_1.jpg",
          title: "aaa",
          price: "50,30"
        },
        {
          img: "http://thumbs.buscape.com.br/camisa-de-times-de-futebol/adidas-ny-red-bull-2015-i-manga-curta-masculino_200x200-PU95bec_1.jpg",
          title: "aaa",
          price: "50,30"
        }
      ];

    }
  ]);
})();
