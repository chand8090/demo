module.exports = function(ngModule) {
    ngModule.service('homeService', homeService);
  };

  function homeService($q, MARRY_CONFIG, $http) {
    var _this = this;

    _this.getUsers = function () {
      var def = $q.defer();
      var promise = $http({
      method: 'GET',
      url: MARRY_CONFIG.API_BASE+'getUsers',
         headers:{
              'Content-Type': 'application/json',
               "Access-Control-Allow-Origin": "*"
                },
              })
              .success(function(data) { 
               def.resolve(data);
              }).error(function(error) {
                def.reject(error);
              });
                 return def.promise;  
              };

  }