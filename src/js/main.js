(function() {
  $(function() {
    var playVisualization = function() {};

    var songs = [
      // PANCHO
      {
        'name': 'Power Of Weakness',
        'artist': 'Pancho',
        'album': 'Pancho',
        'url': '/assets/songs/pancho/pancho01.mp3',
        'index': 0
      },
      {
        'name': 'Shwarma de Pulpo',
        'artist': 'Pancho',
        'album': 'Pancho',
        'url': '/assets/songs/pancho/pancho02.mp3',
        'index': 1
      },
      {
        'name': 'Cincuenta',
        'artist': 'Pancho',
        'album': 'Pancho',
        'url': '/assets/songs/pancho/pancho03.mp3',
        'index': 2
      },
      {
        'name': 'Con Limón',
        'artist': 'Pancho',
        'album': 'Pancho',
        'url': '/assets/songs/pancho/pancho04.mp3',
        'index': 3
      },
      {
        'name': 'Timmy',
        'artist': 'Pancho',
        'album': 'Pancho',
        'url': '/assets/songs/pancho/pancho05.mp3',
        'index': 4
      },
      {
        'name': 'Piekielny',
        'artist': 'Pancho',
        'album': 'Pancho',
        'url': '/assets/songs/pancho/pancho06.mp3',
        'index': 5
      },
      {
        'name': 'Ballyhoo',
        'artist': 'Pancho',
        'album': 'Pancho',
        'url': '/assets/songs/pancho/pancho07.mp3',
        'index': 6
      },
      {
        'name': 'Scentless Apprentice',
        'artist': 'Pancho',
        'album': 'Pancho',
        'url': '/assets/songs/pancho/pancho08.mp3',
        'index': 7
      },
      {
        'name': 'Panchito',
        'artist': 'Pancho',
        'album': 'Pancho',
        'url': '/assets/songs/pancho/pancho09.mp3',
        'index': 8
      },
      {
        'name': 'Sex On A Pyramid',
        'artist': 'Pancho',
        'album': 'Pancho',
        'url': '/assets/songs/pancho/pancho10.mp3',
        'index': 9
      },
      // CARMEL APPLE POP
      {
        'name': 'Funny',
        'artist': 'Carmel Apple Pop',
        'album': 'Funny​/​Not Funny',
        'url': '/assets/songs/carmel/carmel01.mp3',
        'index': 10
      },
      {
        'name': 'Hostage',
        'artist': 'Carmel Apple Pop',
        'album': 'Funny​/​Not Funny',
        'url': '/assets/songs/carmel/carmel02.mp3',
        'index': 11
      },
      {
        'name': 'It\'s Carlos',
        'artist': 'Carmel Apple Pop',
        'album': 'Funny​/​Not Funny',
        'url': '/assets/songs/carmel/carmel03.mp3',
        'index': 12
      },
      {
        'name': 'Foie Gras',
        'artist': 'Carmel Apple Pop',
        'album': 'Funny​/​Not Funny',
        'url': '/assets/songs/carmel/carmel04.mp3',
        'index': 13
      },
      {
        'name': 'Boiler Room',
        'artist': 'Carmel Apple Pop',
        'album': 'Funny​/​Not Funny',
        'url': '/assets/songs/carmel/carmel05.mp3',
        'index': 14
      },
      {
        'name': 'Trains and Rooftops',
        'artist': 'Carmel Apple Pop',
        'album': 'Funny​/​Not Funny',
        'url': '/assets/songs/carmel/carmel06.mp3',
        'index': 15
      },
      {
        'name': 'Broken Blood Freezer',
        'artist': 'Carmel Apple Pop',
        'album': 'Funny​/​Not Funny',
        'url': '/assets/songs/carmel/carmel07.mp3',
        'index': 16
      },
      {
        'name': 'Pix Mate',
        'artist': 'Carmel Apple Pop',
        'album': 'Funny​/​Not Funny',
        'url': '/assets/songs/carmel/carmel08.mp3',
        'index': 17
      },
      {
        'name': 'Five Million Dollars',
        'artist': 'Carmel Apple Pop',
        'album': 'Funny​/​Not Funny',
        'url': '/assets/songs/carmel/carmel09.mp3',
        'index': 18
      },
      {
        'name': 'Sunday Pizza',
        'artist': 'Carmel Apple Pop',
        'album': 'Funny​/​Not Funny',
        'url': '/assets/songs/carmel/carmel10.mp3',
        'index': 19
      },
      {
        'name': 'Short Sugar Canes',
        'artist': 'Carmel Apple Pop',
        'album': 'Funny​/​Not Funny',
        'url': '/assets/songs/carmel/carmel11.mp3',
        'index': 20
      },
      {
        'name': 'Not Funny',
        'artist': 'Carmel Apple Pop',
        'album': 'Funny​/​Not Funny',
        'url': '/assets/songs/carmel/carmel12.mp3',
        'index': 21
      },
      {
        'name': 'Summer Overture / Lux Aeterna',
        'artist': 'Carmel Apple Pop',
        'album': 'Funny​/​Not Funny',
        'url': '/assets/songs/carmel/carmel13.mp3',
        'index': 22
      },
      {
        'name': 'Ultra Sexy (Bonus)',
        'artist': 'Carmel Apple Pop',
        'album': 'Funny​/​Not Funny',
        'url': '/assets/songs/carmel/carmel14.mp3',
        'index': 23
      },
      // TOYS 2
      {
        'name': 'Skeleton Dance',
        'artist': 'Igor Krutogolov\'s Karate Band',
        'album': 'How To Be A Crocodile',
        'url': '/assets/songs/toys/toys01.mp3',
        'index': 24
      },
      {
        'name': 'Last Supper Souffle',
        'artist': 'Igor Krutogolov\'s Karate Band',
        'album': 'How To Be A Crocodile',
        'url': '/assets/songs/toys/toys02.mp3',
        'index': 25
      },
      {
        'name': 'Seven',
        'artist': 'Igor Krutogolov\'s Karate Band',
        'album': 'How To Be A Crocodile',
        'url': '/assets/songs/toys/toys03.mp3',
        'index': 26
      },
      {
        'name': 'Beyond The Hill',
        'artist': 'Igor Krutogolov\'s Karate Band',
        'album': 'How To Be A Crocodile',
        'url': '/assets/songs/toys/toys04.mp3',
        'index': 27
      },
      {
        'name': 'Mad Medow',
        'artist': 'Igor Krutogolov\'s Karate Band',
        'album': 'How To Be A Crocodile',
        'url': '/assets/songs/toys/toys05.mp3',
        'index': 28
      },
      {
        'name': 'Drink N\' Drive',
        'artist': 'Igor Krutogolov\'s Karate Band',
        'album': 'How To Be A Crocodile',
        'url': '/assets/songs/toys/toys06.mp3',
        'index': 29
      },
      {
        'name': 'Swamp King',
        'artist': 'Igor Krutogolov\'s Karate Band',
        'album': 'How To Be A Crocodile',
        'url': '/assets/songs/toys/toys07.mp3',
        'index': 30
      },
      {
        'name': 'Black Lip Oyster',
        'artist': 'Igor Krutogolov\'s Karate Band',
        'album': 'How To Be A Crocodile',
        'url': '/assets/songs/toys/toys08.mp3',
        'index': 31
      },
      {
        'name': 'Zhuravli i Korabli',
        'artist': 'Igor Krutogolov\'s Karate Band',
        'album': 'How To Be A Crocodile',
        'url': '/assets/songs/toys/toys09.mp3',
        'index': 32
      },
      // APERCO
      {
        'name': 'Another Day To Live',
        'artist': 'Aperco',
        'album': 'The Battle',
        'url': '/assets/songs/aperco/aperco01.mp3',
        'index': 33
      },
      // BILGO
      {
        'name': 'Rewind My Life',
        'artist': 'Bilgo & Co',
        'album': 'Rewind My Life',
        'url': '/assets/songs/bilgo/bilgo01.mp3',
        'index': 34
      }
    ];

    initializeAllTheThings();

    $('.card.music .btn-flat').on('click', onItemClick);
    $('.card.music .album-play').on('click', function() {
      var $this = $(this);
      if ($this.find('i').text() === 'pause') {
        Amplitude.pause();
        resetPlaylist();
        $('.bbplayer').removeClass('bb-show');
      } else {
        onItemClick(0, $this.closest('.card.music'));
      }
    });

    function initializeAllTheThings() {

      // music player
      Amplitude.init({
        //'soundclound_client': 123, // do this when client keys are available
        'callbacks': {
          'before_pause': function() {
            resetPlaylist();
          }
        },
        'songs': songs
      });

      // on song change, show ui indicator
      window.onSongChange = function() {
        var currSong = Amplitude.getActiveSongMetadata();
        onItemClick(currSong.index, undefined, true);
      };

      // MUSIC VISUALIZER. SHOULD CONNECT TO PLAYER
      // initializeVisualization(Amplitude.audio());
      // playVisualization = createVisualizer('nav.nav-extended', Amplitude.audio());
    }

    function onItemClick(index, albumElement, fromAmplitude) {
      var allBtns = $('.card.music .btn-flat');
      var $this = albumElement ? $($(albumElement).find('.btn-flat')[0]) : Number.isInteger(index) ? $('[song-index="' + index + '"]') : $(this);
      var wasActive = $this.hasClass('active');

      // reset all buttons
      resetPlaylist();

      // activate if needed
      if (!wasActive) {
        var song = Amplitude.getSongByIndex(parseInt($this.attr('song-index')));
        if (!fromAmplitude) {
          Amplitude.playNow(song);
          $('.bbplayer').addClass('bb-show');
          playVisualization()
        }

        $this.closest(".card.music").addClass('play');
        $this.addClass('active');
        $this.find('i').text('pause_circle_filled');
        $this.closest(".card").find('.album-play i').text('pause');
        $this.append([].join(''));
      } else {
        if (!fromAmplitude) {
          Amplitude.pause();
          $('.bbplayer').removeClass('bb-show');
        }
      }

    }

    function resetPlaylist() {
      var allBtns = $('.card.music .btn-flat');

      // reset all buttons
      $('.card.music').removeClass('play');
      allBtns.removeClass('active');
      allBtns.find('i').text('play_circle_outline');
      $('.card.music .album-play i').text('play_arrow');
      $('.card.music .play-bars').remove();
    }
  }); // end of document ready
})(jQuery); // end of jQuery name space
