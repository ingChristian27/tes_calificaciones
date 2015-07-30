
(function(){
	angular.module('notas.directivas', [])

    .directive('menuTop', function() {
        return {
         restrict : 'E',
         templateUrl : 'partials/header-menu.html'
        }
    })
    .directive('piePagina', function() {
        return {
         restrict : 'E',
         templateUrl : 'partials/footer.html'
        }
    });
    




})();
