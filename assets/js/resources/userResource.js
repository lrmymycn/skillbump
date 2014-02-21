'use strict';

angular.module('skillBump').factory('userResource', ['$http', 'appSettings', function ($http, appSettings) {
  return {
    create: function (userPostModel) {
      return $http.post(this.getApiPath() + '/create', userPostModel);
    },

    destroy:function(id) {
      return $http.delete(this.getApiPath() + '/destroy/' + id);
    },

    find:function(id) {
      return $http.get(this.getApiPath() + '/find/' + id);
    },

    findAll: function() {
      return $http.get(this.getApiPath());
    },

    getApiPath: function () {
      return appSettings.apiRoot + "user";
    }
  };
}]);