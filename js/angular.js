var myapp=angular
		.module('myapp', [])
		.controller("MyCtrl", function($scope){

			$scope.posts = [
			  {
			    "week": "3",
			    "description": "Questão de Galileu e encontro de Romeu e Julieta.",
			    "url": "https://igorbragaia.github.io/moq13/reports/2.pdf"
			  },
			  {
			    "week": "2",
			    "description": "Questão de Galileu e encontro de Romeu e Julieta.",
			    "url": "https://igorbragaia.github.io/moq13/reports/2.pdf"
			  }
			];
});