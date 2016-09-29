<<<<<<< HEAD
angular.module('alurapic').controller('FotosController', function($scope, $http){

	$scope.fotos = [];
	$scope.filtro = '';

	var promise = $http.get("v1/fotos")
	.success(function(fotos){
		$scope.fotos = fotos;
	}).error(function(erro){
		console.log(erro);
	});

	/*
	var promise = $http.get("v1/fotos");
	promise.then(function(retorno){
		$scope.fotos = retorno.data;
	}).catch(function(error){
		console.log(erro);
	});
	*/
=======
angular.module('alurapic').controller('FotosController',function($scope,$http){

	$scope.fotos = []

	$http.get('/v1/fotos')
    .success(function(retorno) {
        console.log(retorno);
        $scope.fotos = retorno; // não precisa fazer retorno.data
    })
    .error(function(erro) {
        console.log(erro);
    });
>>>>>>> df2f1c04c4b143921a026f00bafd8072003165d1

});