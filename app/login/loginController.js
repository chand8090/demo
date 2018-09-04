module.exports = loginCtrl;

/*@ngInject*/ function loginCtrl($rootScope, loginService, $state, $scope, $window) {
  var _this = this;
    window.onbeforeunload = function() {
        //return "Dude, are you sure you want to refresh? Think of the kittens!";
        console.log('hello man!');
}
    var windowElement = angular.element($window);
      windowElement.on('beforeunload', function (event) {
      alert('you are refreshing me');
     //event.preventDefault();
     console.log('heloo refreshing me')
     $state.reload('login.signin');
    });
    _this.loginUser = function(user){
      $state.go("dashboard.profile");
            
    	// //console.log(user);
     //    loginService.loginUser(user).then(function (response) {
     //       _this.user = response;
     //       if(response===true){
     //        $rootScope.email = user.email;
     //        console.log($rootScope.email);
     //         $state.go("dashboard.profile");
     //        }
     //       else {
     //        $scope.isLoginError=true;
     //        $scope.loginErrorMessage='Invalid User name and password';
     //        //alert('user name and password is wrong');
     //       }
     //    });
    }
    $scope.user = {};
   $scope.user.email = 'abc@gmail.com';
   $scope.user.password = 'abc'; 


   $rootScope.$on('$stateChangeStart', 
   function(event, toState, toParams, fromState, fromParams){ 
      event.preventDefault();
      window.history.forward();
});
}
