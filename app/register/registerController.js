module.exports = registerCtrl;

/*@ngInject*/ function registerCtrl($rootScope, registerService, $state) {
  var _this = this;
  
    _this.registerUser = function(user){
    	//console.log(user);
        registerService.registerUser(user).then(function (response) {
           _this.user = response;
            console.log(_this.user);
     });
        $state.go("profile.stepTwo");
    }   

    _this.registerUserNext = function(user){
    	console.log(user);
        registerService.registerUserNext(user).then(function (response) {
           _this.user = response;
            console.log(_this.user);
     });
        
    }  
  
}
