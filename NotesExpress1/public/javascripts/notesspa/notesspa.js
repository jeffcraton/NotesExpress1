//
// run the grid demo 
//

//
// angular setup? apparently does not work if done in document.ready.
//
var notesApp = angular.module('notesApplication', []);
notesApp.controller('notesController', function NotesController($scope, $http) {

    $scope.notes = [
    ];

    $http({
        method: 'GET',
        url: '/notesapi'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.notes = response.data;
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert(response);
    });

    $scope.notes = [
        {
            creationdate: '2017-04-01',
            revisiondate: '2017-04-03',
            subject: 'Note 1',
            keywords: 'read'
        }, {
            creationdate: '2017-04-01',
            revisiondate: '2017-04-03',
            subject: 'Note 2',
            keywords: 'read'
        }, {
            creationdate: '2017-04-01',
            revisiondate: '2017-04-03',
            subject: 'Note 3',
            keywords: 'read'
        }
    ];
});
//
// document ready wireups
//
$(document).ready(function () {

});