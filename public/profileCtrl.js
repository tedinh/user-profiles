angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	$scope.user = friendService.login().then(function(response){
		$scope.currentUser = response.data.currentUser;
		$scope.friends = response.data.friends;
	})

	// FIX ME - assign values to $scope.currentUser and $scope.friends
});
