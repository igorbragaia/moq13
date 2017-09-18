myapp.directive('myPost', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/myPost.html' 
  }; 
});