app
  .service('VideosPlaylistIndex', function () {
    var self = this;
    self.Epics = [{
      'name': 'Ramayanam',
      'videoId': 'MjPq1kAP97U',
      'playlistId': 'PL4AQ4_N-UzpTViQsN8cKw661duvF0f9Za'
    },{
      'name': 'Bhagavatam',
      'videoId': '56dXajE54CI',
      'playlistId': 'PLNFI_Hu0YTKqYqI0brQgtqajYCPdmV0BS'
    }, {
      'name': 'Sundarakanda',
      'videoId': 'wMUV0Hp-f7g',
      'playlistId': 'PL1B596AA4ECC246F1'
    }, {
      'name': 'Mahabharatam - Sabha Parvam',
      'videoId': '0FX4QyQmVwk',
      'playlistId': 'RD0FX4QyQmVwk'
    }, {
      'name': 'Mahabharatam - Aranya Parvam',
      'videoId': 'BprcPcL0yjQ',
      'playlistId': 'PLxgCJRmbo5mcr0ENZ1hZZTfgqYKDmQplv'
    }, {
      'name': 'Mahabharatam - Virata Parvam',
      'videoId': '2gDHaqH8OHc',
      'playlistId': 'PLEWXqMBENtlARVAb47DTzLHqDW2O6nBl0'
    }];
  })
  .controller('VideosPlaylistIndexController', ['VideosPlaylistIndex', '$ionicLoading', function (VideosPlaylistIndex, $ionicLoading) {
    var self = this;
    self.VideosPlaylistIndex = VideosPlaylistIndex.Epics;
    self.openIAB = function (videoId, playlistId) {
      var url = 'https://www.youtube.com/watch?v=' + videoId + '&list=' + playlistId;
      var win = window.open(url, "_blank", "EnableViewPortScale=yes,location=no,toolbar=yes,hidden=no,hardwareback=no,mediaPlaybackRequiresUserAction=yes,shouldPauseOnSuspend=yes");
    };
  }]);