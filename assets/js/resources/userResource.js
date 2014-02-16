'use strict';

angular.module('skillBump').factory('userResource', ['$http', 'appSettings', function ($http, appSettings) {
  return {
    create: function (userPostModel) {
      return $http.post(this.getApiPath() + '/create', userPostModel);
    },

    delete:function(id) {
      return $http.delete(this.getApiPath() + '/delete?id=' + id);
    },

    get:function(id) {
      return $http.get(this.getApiPath() + '/get?id=' + id);
    },

    getAll: function() {
      return $http.get(this.getApiPath() + '/getAll');
    },

    getApiPath: function () {
      return appSettings.apiRoot + "user";
    }
  };
}]);