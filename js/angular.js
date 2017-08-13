var myapp=angular
		.module('myapp', [])
		.controller("MyCtrl", function($scope){

			$scope.posts = [
			  {
			    "description": "Semana 2: Questão de Galileu e encontro de Romeu e Julieta.",
			    "url": "https://igorbragaia.github.io/moq13/reports/1.pdf"
			  }
			];
});