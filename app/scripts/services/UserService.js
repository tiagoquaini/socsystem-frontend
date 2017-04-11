(function(){

  "use strict";
  angular.module('socsystem').factory('UserService', ['ConnectorWebService', 'CONSTANTS',
    function(ConnectorWebService, CONSTANTS) {

      var oUserService = {
        oUser : null
      };

      var fnSetUser = function(res) {
        oUserService.oUser = res.data;
        return oUserService.oUser;
      };

      var fnUnsetUser = function() {
        oUserService.oUser = null;
      };

      oUserService.getLoggedUser = function() {
        return oUserService.oUser;
      };

      oUserService.login = function(oUser) {
        return ConnectorWebService.post(CONSTANTS.URL_LOGIN, oUser)
        .then(fnSetUser);
      };

      oUserService.logout = function() {
        return ConnectorWebService.get(CONSTANTS.URL_LOGOUT)
        .then(fnUnsetUser);
      };

      oUserService.createUser = function(oUser) {
        return ConnectorWebService.post(CONSTANTS.URL_SIGNUP, oUser)
        .then(fnSetUser);
      };

      return oUserService;
    }
  ]);
})();
