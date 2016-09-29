<<<<<<< HEAD
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
});
=======
angular.module('MinhaDiretivas',[]);
>>>>>>> df2f1c04c4b143921a026f00bafd8072003165d1
