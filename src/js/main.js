if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function() {
      console.log("Service Worker Registered");
    });
}

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

      // feed in about me
      GitHubActivity.feed({
        username: "Thatkookooguy",
        selector: "#feed",
        limit: 5 // optional
      });

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
      // playVisualization = createVisualizer('nav.nav-extended', Amplitude.audio());

      // hide blocks in resume to make them appear when they enter the view
      var timelineBlocks = $('.cd-timeline-block');
      var bars = $('.skillbar');
      var offset = 0.8;

      hideBlocks(timelineBlocks, offset, bars);

      // material design
      $(".button-collapse").sideNav();

      $('ul.tabs').tabs({
        onShow: function(tab) {

          hideBlocks(timelineBlocks, offset, bars);
          setTimeout(function() {
            showBlocks(timelineBlocks, offset, bars);
          });

          if (tab[0].id === 'resume') {
            //on scolling, show/animate timeline blocks when enter the viewport
            $(window).on('scroll', function(){
                (!window.requestAnimationFrame)
                    ? setTimeout(function(){ showBlocks(timelineBlocks, offset, bars); }, 100)
                : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset, bars); });
            });
          } else {
            $(window).off('scroll');
          }
        }
      });
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

    function hideBlocks(blocks, offset, bars) {
      blocks.each(function() {
        ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden').removeClass('bounce-in');
      });

      bars.each(function() {
        ($(this).offset().top > $(window).scrollTop() + $(window).height()) && $(this).addClass('not-in-view');
      });
    }

    function showBlocks(blocks, offset, bars) {
      var $window = $(window);

      blocks.each(function(){
        var $this = $(this);

          ( $this.offset().top <= $window.scrollTop() + $window.height() && $this.find('.cd-timeline-img').hasClass('is-hidden') ) && $this.find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
      });

      bars.each(function() {
        var $this = $(this);

          ( $this.offset().top <= $window.scrollTop() + $window.height() && $this.hasClass('not-in-view') ) && $this.removeClass('not-in-view');
      });
    }
  }); // end of document ready
})(jQuery); // end of jQuery name space


/*
 * Copyright MIT © <2013> <Francesco Trillini>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

function createVisualizer(elementQuerySelector, audioSrc) {
  var $element;

  var container;
  var scene;
  var camera;
  var renderer;
  var stats
  var cubes = [];
  var group;
  var material = 0;
  var particles;
  var uniforms;
  var lastTransition = Date.now();
  var start = play = false;

  // Mouse wheel and leap settings
  var cameraZ = 3000;
  var min = cameraZ - 500;
  var max = min * 3;

  // Audio data
  var context;
  var buffer;
  var source;
  var stream
  var analyser
  var frequency = [];
  var createObjectURL

  // Dat GUI default value
  var showStats = false;

  /*
   * List colors.
   */

  var colors = {
    lightRed: [ '#ffffff', '#e50000' ],
    lightViolet: [ '#ffffff', '#ee82ee' ],
    lightBlue: [ '#ffffff', '#00bcff']
  };

  init();
  connectSource();

  //return function to run on click
  return onClick;

  /*
   * Init.
   */

  function init() {
    // check WebGL browser support
    if (!window.WebGLRenderingContext) {
      console.error("Sorry, your browser doesn't support WebGL.");
      return;
    }

    // use audio from existing player
    initAudio();

    var element = document.querySelector(elementQuerySelector || 'body');
    $element = $(element);

    createAndAttachContainer(element, $element);
    createCamera($element);
    createScene();
    createGroup();

    // IF end
    // now we have a group of particles we can add to the scene
    scene.add(group);

    // Init particles and mesh
    // loadParticles();
    updateTransitions(0);
    changeMaterial(~~(Math.random() * 3));

    createRenderer($element);

    container.appendChild(renderer.domElement);

    render();

    window.onresize = onResize;

  }

  function createRenderer($element) {
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setSize($element.innerWidth(), $element.innerHeight());
  }

  function createGroup() {
    group = new THREE.Object3D();

    // create 80 particles
    // FOR START
    for (var cube = 0, len = 80; cube < len; cube++) {
      // CREATE ALL MATERIAL TYPES
      var redMaterial = new THREE.MeshPhongMaterial({

        color: colors.lightRed[cube % colors.lightRed.length],

        shading: THREE.FlatShading,
        blending: THREE.NormalBlending,

        depthTest: true,
        transparent: false

      });

      var violetMaterial = new THREE.MeshPhongMaterial({

        color: colors.lightViolet[cube % colors.lightViolet.length],

        shading: THREE.FlatShading,
        blending: THREE.NormalBlending,

        depthTest: true,
        transparent: false

      });

      var blueMaterial = new THREE.MeshPhongMaterial({

        color: colors.lightBlue[cube % colors.lightBlue.length],

        shading: THREE.FlatShading,
        blending: THREE.NormalBlending,

        depthTest: true,
        transparent: false

      });

      var geometry = new THREE.TetrahedronGeometry(50, 1);
      geometry.dynamic = true;

      var mesh = new THREE.Mesh(geometry, violetMaterial);

      mesh.position.x = Math.random() * 2000 - 1000;
      mesh.position.y = Math.random() * 2000 - 1000;
      mesh.position.z = Math.random() * 2000 - 1000;
      mesh.rotation.x = Math.random() * 2 * Math.PI;
      mesh.rotation.y = Math.random() * 2 * Math.PI;
      mesh.rotation.z = Math.random() * 2 * Math.PI;

      cubes.push({

        mesh: mesh,

        materials: [

          redMaterial,
          violetMaterial,
          blueMaterial

        ],

        band: Math.floor(Math.random(128)),
        scale: 0,
        level: ~~(Math.random() * (7 - 2 + 1) + 2)

      });

      group.add(mesh);

    }
  }

  function createScene() {
    scene = new THREE.Scene();

    // Lights
    hemisphereLight = new THREE.HemisphereLight(0xffffff, 100);
    scene.add(hemisphereLight);

    pointLight = new THREE.PointLight(0xffffff, 3.0);
    scene.add(pointLight);
  }

  function createCamera($element) {
    // Setup
    camera = new THREE.PerspectiveCamera(30, $element.innerWidth() / $element.innerHeight(), 0.1, 10000);
    camera.position.z = cameraZ;
  }

  function createAndAttachContainer(element, $element) {
    container = document.createElement('div');

    container.width = $element.innerWidth();
    container.height = $element.innerHeight();

    container.style.position = 'absolute';
    container.style.top = 0;
    container.style.bottom = 0;
    container.style.left = 0;
    container.style.right = 0;
    container.style.zIndex = -1; // blow everything
    container.style.overflow = 'hidden';

    container.style.background = '-webkit-radial-gradient(#ffcc99, #ff9933)';
    container.style.background = '-moz-radial-gradient(#ffcc99, #ff9933)';
    container.style.background = '-ms-radial-gradient(#ffcc99, #ff9933)';
    container.style.background = '-o-radial-gradient(#ffcc99, #ff9933)';
    container.style.background = 'radial-gradient(#ffcc99, #ff9933)';

    // add element in the right location (inside given element)
    element.appendChild(container);
  }

  /*
   * On click event.
   */

  function onClick(event) {

    $(elementQuerySelector).css({
      'background': 'transparent'
    });

    if (source !== undefined) {
      play = true;
    }

  }

  /*
   * On resize event.
   */

  function onResize(event) {

    camera.aspect = $element.innerWidth() / $element.innerHeight();
    camera.updateProjectionMatrix();

    renderer.setSize($element.innerWidth(), $element.innerHeight());

  }

  /*
   * Init audio from a source.
   */

  function initAudio() {

    createObjectURL = (window.URL || window.webkitURL || {}).createObjectURL || function() {};

    if (!typeof document.createElement('audio').canPlayType === 'function') {

      console.error("Sorry, your browser doesn't support Web Audio API.");

      return;

    }

    context = new(window.AudioContext || window.webkitAudioContext)();

    source = audioSrc;
  }

  /*
   * Connect the source to analyzer.
   */

  function connectSource() {

    buffer = context.createMediaElementSource(source);

    analyser = context.createAnalyser();

    // Fast smoothing
    analyser.smoothingTimeConstant = 0.3;
    analyser.fftSize = 512;

    buffer.connect(analyser);
    analyser.connect(context.destination);

    frequency = new Uint8Array(analyser.frequencyBinCount);

  }

  /*
   * Change the current material with the next one.
   */

  function changeMaterial(seed) {

    var cube = cubes.length;

    material += (seed !== undefined ? seed : 1);

    while (cube--) {

      var object = cubes[cube];

      object.mesh.material = object.materials[material % object.materials.length];

    }

  }

  /*
   * Update the transitions (position, rotation).
   */

  function updateTransitions(schedule) {

    var size = schedule;

    // Random size before play
    if (size === 0) {

      var cube = cubes.length;

      while (cube--) {

        var object = cubes[cube];

        new TWEEN.Tween(object.mesh.scale).to({

          x: object.level / 1.35,
          y: object.level / 1.35,
          z: object.level / 1.35

        }, 500).start();

      }

    }

    // Change position and rotation every two secs
    if ((Date.now() - lastTransition > 0 && Date.now() - lastTransition < 1000 && start) || schedule !== undefined) {

      start = false;

      var cube = cubes.length;

      while (cube--) {

        var object = cubes[cube];

        // Random position
        new TWEEN.Tween(object.mesh.position).to({

          x: Math.random() * 2000 - 1000,
          y: Math.random() * 2000 - 1000,
          z: Math.random() * 2000 - 1000

        }, 3000).start();

        // Random rotation
        new TWEEN.Tween(object.mesh.rotation).to({

          x: Math.random() * 2 * Math.PI,
          y: Math.random() * 2 * Math.PI,
          z: Math.random() * 2 * Math.PI

        }, 3000).start();

      }

    }

    // Reset 'em all
    if (Date.now() - lastTransition > 2000) {

      lastTransition = Date.now();

      start = true;

    }

  }

  /*
   * Render the animation.
   */

  function render() {

    requestAnimationFrame(render);

    updateTransitions();
    TWEEN.update();

    if (!play) {

      group.rotation.x += 0.006;
      group.rotation.y += 0.006;

    }

    if (play && frequency.length > 0) {

      // Zoom
      camera.position.z += (THREE.Math.clamp(cameraZ, min, max) - camera.position.z) * 1.4;

      var cube = cubes.length;

      while (cube--) {

        var object = cubes[cube];

        var currentLevel, band, rotation;

        // Frequency
        currentLevel = (frequency[object.band] / 256) * object.level;
        band = currentLevel < 1 ? 1 : currentLevel;

        object.scale += (band - object.scale) * 0.2;

        group.rotation.x += object.scale * 0.00012;
        group.rotation.y += object.scale * 0.00012;

        // console.log('frequency: ', frequency[object.band]);
        // console.log('level: ', currentLevel);

        // Scale fov
        camera.fov += (75 - object.scale * 3 - camera.fov) * 0.008;
        camera.updateProjectionMatrix();

      }

      analyser.getByteFrequencyData(frequency);

    }

    camera.lookAt(scene.position);

    renderer.render(scene, camera);

  }

};
