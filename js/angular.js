var myapp=angular
		.module('myapp', [])
		.controller("MyCtrl", function($scope){

			$scope.posts = [
			  {
			    "week": "2",
			    "description": "Questão de Galileu e encontro de Romeu e Julieta."
			  },
			  {
			    "week": "3",
			    "description": "Questão de Galileu e encontro de Romeu e Julieta."
			  },
			  {
			    "week": "4",
			    "description": "Questão de Galileu e encontro de Romeu e Julieta."
			  }
			];
});