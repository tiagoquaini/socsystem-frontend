(function(){

  "use strict";

  angular.module('socsystem').factory('ConnectorWebService', ['$http', '$q', function($http, $q){

    var oConnectorWebService = {};

    oConnectorWebService.put = function(sServiceUrl, oData) {
      // the $http API is based on the deferred/promise APIs exposed by the $q service
      // so it returns a promise by default
      return $http({
        url : sServiceUrl,
        method : "PUT",
        data : oData
      })
      .then(function(response) {
        if (typeof response.data === 'object') {
          return response.data;
        } else if (response.status >= 200 || response.status < 300 ) {
          return response.data;
        } else {
          // invalid response
          return $q.reject(response.data);
        }

      }, function(response) {
        // something went wrong
        return $q.reject(response);
      });
    };

    oConnectorWebService.post = function(sServiceUrl, oData) {
      // the $http API is based on the deferred/promise APIs exposed by the $q service
      // so it returns a promise by default
      return $http({
        url : sServiceUrl,
        method : "POST",
        data : oData,
        dataType: "json"
      })
      .then(function(response) {
        return response;
      }, function(response) {
        // something went wrong
        return $q.reject(response);
      });
    };


    oConnectorWebService.get = function(sServiceUrl) {
      return $http({
        url : sServiceUrl,
        method : "GET"
      })
      .then(function(response) {
        if (typeof response.data === 'object') {
          return response.data;
        } else if (response.status >= 200 && response.status < 300) { //2xx == success
          return response.data;
        } else {
          // invalid response
          return $q.reject(response.data);
        }

      }, function(response) {
        // something went wrong
        return $q.reject(response);
      });
    };

    oConnectorWebService.fnDelete = function(sServiceUrl) {
      return $http({
        url : sServiceUrl,
        method : "DELETE"
      })
      .then(function(response) {
        if (typeof response.data === 'object') {
          return response.data;
        } else if (response.status == 200) {
          return response.data;
        } else {
          // invalid response
          return $q.reject(response.data);
        }

      }, function(response) {
        // something went wrong
        return $q.reject(response);
      });
    };

    return oConnectorWebService;

  }]);
})();
