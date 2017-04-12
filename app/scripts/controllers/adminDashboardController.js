(function(){

  "use strict";

  angular.module('socsystem').controller('AdminDashboardController', ['$scope', '$state', 'UserService',
    function( $scope, $state, UserService ) {

      $scope.user = UserService.getLoggedUser();

      $scope.handleTabClick = function(oTab) {
        $scope.selectedTab = oTab;

        switch(oTab.id) {
          case 1:
            $state.go("adminDashboard.productList");
            break;
          case 1:
            $state.go("adminDashboard.userList");
            break;
        }
      };

      $scope.aTabs = [
        {
          id: 1,
          title: "Produtos"
        },
        {
          id: 2,
          title: "Usuários"
        }
      ];

      $scope.handleTabClick($scope.aTabs[0]);
    }
  ]);
})();
