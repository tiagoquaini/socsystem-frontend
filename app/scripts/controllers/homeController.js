(function(){

  "use strict";

  angular.module('socsystem').controller('HomeController', ['$scope', 'UserService',
    function( $scope, UserService ) {

      $scope.user = UserService.getLoggedUser();

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
