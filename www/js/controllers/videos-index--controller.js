app
  .service('VideosPlaylistIndex', function () {
    var self = this;
    self.Epics = [{
      'name': 'Ramayanam',
      'videoId': 'MjPq1kAP97U',
      'playlistId': 'PLxgCJRmbo5mesU0n7oP5iQnoo0MdMX2C0'
    },{
      'name': 'Bhagavatam',
      'videoId': '56dXajE54CI',
      'playlistId': 'PLxgCJRmbo5mfUwXLc-CviIoYyyBaZuCS6'
    }, {
      'name': 'Sundarakanda',
      'videoId': 'wMUV0Hp-f7g',
      'playlistId': 'PLxgCJRmbo5mfN9Y_QBx6fNKfascmpaG1g'
    }, {
      'name': 'Mahabharatam - Sabha Parvam',
      'videoId': '0FX4QyQmVwk',
      'playlistId': 'PLxgCJRmbo5mdCGLwxGnjU0tS8CQaLMh6J'
    }, {
      'name': 'Mahabharatam - Aranya Parvam',
      'videoId': 'sWBjm9JFMdc',
      'playlistId': 'PLxgCJRmbo5mcr0ENZ1hZZTfgqYKDmQplv'
    }, {
      'name': 'Mahabharatam - Virata Parvam',
      'videoId': '2gDHaqH8OHc',
      'playlistId': 'PLxgCJRmbo5meSg_t7eHldj6CosPC7hD24'
    }];
  })
  .controller('VideosPlaylistIndexController', ['VideosPlaylistIndex', function (VideosPlaylistIndex) {
    var self = this;
    self.VideosPlaylistIndex = VideosPlaylistIndex.Epics;
    self.openIAB = function (videoId, playlistId) {
      var url = 'https://www.youtube.com/watch?v=' + videoId + '&list=' + playlistId;
      var win = window.open(url, "_blank", "EnableViewPortScale=yes,location=no,toolbar=yes,hidden=no,hardwareback=no,mediaPlaybackRequiresUserAction=yes,shouldPauseOnSuspend=yes");
    };
  }]);