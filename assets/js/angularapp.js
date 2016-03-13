'use strict';

var app = angular.module('sampleApp', ['firebase', 'angularMoment'])

app.controller('sampleCtrl', function($scope, $http, $firebaseObject) {
  var ref = new Firebase('https://torrid-torch-8507.firebaseio.com')

  // download the data into a local object
  var syncObject = $firebaseObject(ref)

  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, 'issues')

  $scope.postSuccess = false

  $http.get("https://api.github.com/repos/firepick/firepick.github.io/issues")
  .success(function(data) {
      $scope.aaa = data[0].body
      console.log(data[0].body)
  })

  $scope.createUser = function() {
    $http({
      method : 'POST',
      url : '//formspree.io/jndetlefsen@gmail.com',
      data : $.param({
      	request: 'slack signup',
      	email: $scope.user.email,
        google_group: $scope.user.google_group
      }),
      headers : {
      	'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
	}).then(function(response){
		$scope.postSuccess = true
	})
  }
})