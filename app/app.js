
(function (){
	var app = angular.module('app_calificaciones',[
			'ngRoute',
			'notas.controller',
			'notas.directivas'
		] );

	app.config(['$routeProvider', function($routeProvider){
		$routeProvider

			.when('/',{
				templateUrl:'app/vistas/menu.html'
			})
			.when('/test',{
				templateUrl:'app/vistas/test.html'
			})
			.otherwise({
				redirectTo: '/'
			})
	}]);




})();






