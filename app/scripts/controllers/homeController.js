(function(){

  "use strict";

  angular.module('socsystem').controller('HomeController', ['$scope', '$state', 'UserService',
    function( $scope, $state, UserService ) {

      $scope.user = UserService.getLoggedUser();

      $scope.productDetails = function(oProduct) {
        $state.go("productDetails", {
          id: oProduct.id
        });
      };

      $scope.aProducts = [
        {
          name: "Camiseta Oficial 2017",
          description: "Lançamento! A nova camiseta do clube para o ano de 2017 já está disponível.",
          img: "../assets/img/camiseta1.jpg"
        },
        {
          name: "Camiseta Reserva 2017",
          description: "Lançamento! A nova camiseta do clube para o ano de 2017 já está disponível.",
          img: "../assets/img/camiseta2.jpg"
        },
        {
          name: "Camiseta Oficial 2017",
          description: "Lançamento! A nova camiseta do clube para o ano de 2017 já está disponível.",
          img: "../assets/img/camiseta1.jpg"
        },
        {
          name: "Camiseta Reserva 2017",
          description: "Lançamento! A nova camiseta do clube para o ano de 2017 já está disponível.",
          img: "../assets/img/camiseta2.jpg"
        }
      ];
    }
  ]);
})();
