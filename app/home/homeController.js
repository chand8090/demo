module.exports = homeCtrl;

/*@ngInject*/ function homeCtrl($rootScope, homeService, Spinner) {
  var _this = this;
  _this.spinnerLoading = new Spinner();
  _this.users = [];
    _this.getUsers = function(){
        _this.spinnerLoading.watch(homeService.getUsers()).then(function (response) {
           _this.users = response;
            console.log(_this.users);
     });
    } 

    
function init(){
	_this.getUsers();
}    

 init();   
  
}
