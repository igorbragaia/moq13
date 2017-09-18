var myapp=angular
		.module('myapp', [])
		.controller("MyCtrl", function($scope){

			$scope.posts = [
			  {
			    "week": "2",
			    "description": "Questão de Galileu e encontro de Romeu e Julieta.",
			    "url": "https://igorbragaia.github.io/moq13/reports/2.pdf"
			  },			  
			  {
			    "week": "4",
			    "description": "Problema de Buffon-Laplace.",
			    "url": "https://igorbragaia.github.io/moq13/reports/4.pdf"
			  }
			];
})