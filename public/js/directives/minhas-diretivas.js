angular.module('minhasDiretivas', [])
.directive('meuPainel',function(){

	var ddo = {};

	ddo.restrict = "AE" /*Atributte element*/;

	ddo.scope = {
		titulo: '@titulo'
	};

	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/meu-painel.html';

	return ddo;
})
.directive('minhaFoto',function(){

	var ddo = {};

	ddo.restrict = "AE" /*Atributte element*/;

	ddo.scope = {
		titulo: '@titulo',
		url: '@url'
	};

	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/minha-foto.html';

	return ddo;
});
