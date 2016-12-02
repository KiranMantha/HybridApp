app.directive('videosIndex', function () {
    return {
        restrict: 'E',
        replace: true,
        controller: 'VideosPlaylistIndexController',
        controllerAs: 'VideosPlaylistIndexCtrl',
        templateUrl: 'templates/videos-index.html'
    }
});