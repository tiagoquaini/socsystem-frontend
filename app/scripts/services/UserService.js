(function(){

  "use strict";
  angular.module('socsystem').factory('UserService', ['ConnectorWebService', 'CONSTANTS',
    function(ConnectorWebService, CONSTANTS) {

      var oUserService = {
        oUser : null
      };

      var fnSetUser = function(oUser) {
        oUserService.oUser = oUser;
        return oUser;
      };

      oUserService.login = function(sName, sPassword) {
        if (oUserService.oUser) {
          return oUserService.oUser;
        }
        return ConnectorWebService.post(CONSTANTS.URL_LOGIN, oUser);
      };

      oUserService.createUser = function(oUser) {
        return ConnectorWebService.post(CONSTANTS.URL_SIGNUP, oUser)
        .then(fnSetUser);
      };

      return oUserService;
    }
  ]);
})();
