myapp.controller('mainCtrl', ['$scope', function($scope){
			$scope.posts = [
			  {
			    "week": "2",
			    "description": "Questão de Galileu e encontro de Romeu e Julieta.",
			    "url": "https://igorbragaia.github.io/moq13/reports/2.pdf"
			  }
			];

			$scope.apps = [ 
			  { 
			    icon: 'img/move.jpg', 
			    title: 'MOVE', 
			    developer: 'MOVE, Inc.', 
			    price: 0.99 
			  }, 
			  { 
			    icon: 'img/move.jpg', 
			    title: 'Shutterbugg', 
			    developer: 'Chico Dusty', 
			    price: 2.99 
			  }, 
			  { 
			    icon: 'img/move.jpg', 
			    title: 'Shutterbugg', 
			    developer: 'Chico Dusty', 
			    price: 2.99 
			  }];
}]);
