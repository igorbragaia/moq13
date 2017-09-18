angular.module('myapp').factory('requests',function(qhttp){
	var dbURL="";

	var insertpost=function(data){
		return requests.post(dbURL,{data: data});
	}
});