/**
 * JobService
 */
app.factory('JobService', function($http) {
	var jobService = {}
	jobService.addJob = function(job) {
		return $http.post("http://localhost:8080/MiddleWare/addjob", job)
	}
	jobService.getAllJobs = function() {
		return $http.get("http://localhost:8080/MiddleWare/alljobs");
	}
	jobService.getJob = function(id) {
		return $http.get("http://localhost:8080/MiddleWare/getjob/"+id);
	}
	return jobService;
})