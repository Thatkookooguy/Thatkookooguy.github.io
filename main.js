if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/sw.js')
           .then(function() { console.log("Service Worker Registered"); });
}

(function() {
    $(function() {

      GitHubActivity.feed({
      	username: "Thatkookooguy",
      	selector: "#feed",
      	limit: 5 // optional
      });

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

        // MUSIC VISUALIZER. SHOULD CONNECT TO PLAYER
        //createVisualizer(window, 'nav.nav-extended');

        Amplitude.init({
          //'soundclound_client': 123, // do this when client keys are available
          'callbacks': {
            'after_play': function() {
              var currSong = Amplitude.getActiveSongMetadata();
              onItemClick(currSong.index, undefined, true);
            },
            'before_pause': function() {
              resetPlaylist();
            },
            'after_next': function() {
              console.error('SHIT!');
            }
          },
      		'songs': songs
      	});

        $(".button-collapse").sideNav();

        $('ul.tabs').tabs();

        var timelineBlocks = $('.cd-timeline-block'),
            offset = 0.8;

        // $('.cd-timeline-img img').each(function() {
        //     resizeToMax(this);
        // });

        //hide timeline blocks which are outside the viewport
        hideBlocks(timelineBlocks, offset);

        //on scolling, show/animate timeline blocks when enter the viewport
        $(window).on('scroll', function(){
            (!window.requestAnimationFrame)
                ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
            : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
        });

        $('.card.music .btn-flat').on('click', onItemClick);
        $('.card.music .album-play').on('click', function() {
          var $this = $(this);
            if ($this.find('i').text() === 'pause') {
                Amplitude.pause();
                resetPlaylist();
            } else {
                onItemClick(0, $this.closest('.card.music'));
            }
        });

      function onItemClick(index, albumElement, fromAmplitude) {
          var allBtns = $('.card.music .btn-flat');
          var $this = albumElement ? $($(albumElement).find('.btn-flat')[0]) : Number.isInteger(index) ? $('[song-index="' + currSong.index + '"]') : $(this);
          var wasActive = $this.hasClass('active');

          // reset all buttons
          resetPlaylist();

          // activate if needed
          if (!wasActive) {
              var song = Amplitude.getSongByIndex(parseInt($this.attr('song-index')));
              if (!fromAmplitude) {
                Amplitude.playNow( song );
              }

              $this.closest(".card.music").addClass('play');
              $this.addClass('active');
              $this.find('i').text('pause_circle_filled');
              $this.closest(".card").find('.album-play i').text('pause');
              $this.append([].join(''));
          } else {
            if (!fromAmplitude) {
              Amplitude.pause();
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

        function resizeToMax(element){
            element = $(element);
            myImage = new Image()
            myImage.src = element.attr('src');
            if(myImage.width > myImage.height){
                element.css({
                    width: '100%',
                    height: 'auto'
                });
            } else {
                element.css({
                    width: 'auto',
                    height: '100%'
                });
            }
        }

        function hideBlocks(blocks, offset) {
            blocks.each(function(){
                ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
            });
        }

        function showBlocks(blocks, offset) {
            // blocks.each(function(){
            //     ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            // });
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

function createVisualizer(self, elementQuerySelector, playerSelector) {

	var container, scene, camera, renderer, stats, cubes = [], mouse = { x: 0, y: 0 }, group, material = 0, particles, uniforms, mouseDown = start = play = false, lastTransition = Date.now();

	// Mouse wheel and leap settings
	var cameraZ = 3000, min = cameraZ - 500, max = min * 3;

	// Audio data
	var context, buffer, source, stream, analyser, frequency = [], playButton, createObjectURL, codec = ['.ogg', '.mp3'], mimeType = ['audio/ogg', 'audio/mpeg'], URL = '/assets/REO_YZB';

	// Dat GUI default value
	var showStats = false;

	/*
	 * List colors.
	 */

	var colors = {

		lightRed: [

			'#ffffff',
			'#e50000'

		],

		lightViolet: [

			'#ffffff',
			'#ee82ee'

		],

		lightBlue: [

			'#ffffff',
			'#00bcff'

		]

	};

	/*
	 * Settings.
	 */

	var Settings = function() {

		this.showStats = false;

		this.enableStats = function(value) {

			showStats = value;

			showStats ? stats.domElement.style.visibility = 'visible' : stats.domElement.style.visibility = 'hidden';

		};

		this.fullScreen = function() {

			var container, fullscreen;

			container = document.documentElement;
			fullscreen = (container.webkitRequestFullscreen || container.mozRequestFullScreen || container.msRequestFullscreen || container.requestFullscreen);

			fullscreen.call(document.documentElement);

		};

	};

	init();
  connectSource();

    /*
	 * Init.
	 */

	function init() {
    // check WebGL browser support
		if(!window.WebGLRenderingContext) {

			console.error("Sorry, your browser doesn't support WebGL.");

			return;

		}

    // use audio from existing player
		initAudio();

		var settings = new Settings();

		var element = document.querySelector(elementQuerySelector || 'body');
    var $element = $(element);

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

		// Setup
		camera = new THREE.PerspectiveCamera(30, $element.innerWidth() / $element.innerHeight(), 1, 10000);
		camera.position.z = cameraZ;

		scene = new THREE.Scene();

		// Lights
		hemisphereLight = new THREE.HemisphereLight(0xffffff, 100);
		scene.add(hemisphereLight);

		pointLight = new THREE.PointLight(0xffffff, 3.0);
		scene.add(pointLight);

		group = new THREE.Object3D();

    // create 80 particles
    // FOR START
		for(var cube = 0, len = 80; cube < len; cube++) {
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
    // IF end
    // now we have a group of particles we can add to the scene
		scene.add(group);

		// Init particles and mesh
		loadParticles();
		updateTransitions(0);
		changeMaterial(~~(Math.random() * 3));

		renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setSize($element.innerWidth(), $element.innerHeight());

		container.appendChild(renderer.domElement);

		// Stats
		stats = new Stats();

		stats.domElement.style.position = 'absolute';
		stats.domElement.style.top = '0px';

		container.appendChild(stats.domElement);

		// Hide stats
		// settings.enableStats();

		// Listeners
		// container.addEventListener('mousedown', onMouseDown, false);
		// container.addEventListener('touchstart', onTouchStart, false);
    //
		// document.addEventListener('drop', onDrop, false);
		// document.addEventListener('dragover', onDragOver, false);
    //
		// document.addEventListener('mousewheel', onMouseWheel, false );
		// document.addEventListener('DOMMouseScroll', onMouseWheel, false);

		// playButton = document.querySelector('.play');
    // playButton = $('.play');
    // playButton.on('click', onClick);
		// playButton.addEventListener('click', onClick, false);

		// enableLeap();
		render();

		window.onresize = onResize;

	}

	/*
	 * On click event.
	 */

	function onClick(event) {

		// var triggeredEvent = event !== null ? this : playButton;
    //
		// document.querySelector('body').removeChild(triggeredEvent);

    $(elementQuerySelector).css({
      'background': 'transparent'
    });

		connectSource();

		if(source !== undefined) {

			play = true;

			container.style.cursor = 'pointer';

			source.play();

		}

	}

	/*
	 * On resize event.
	 */

	function onResize(event) {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);

	}

	/*
	 * Init audio from a source.
	 */

	function initAudio() {

		createObjectURL = (window.URL || window.webkitURL || {}).createObjectURL || function(){};

		if(!typeof document.createElement('audio').canPlayType === 'function') {

			console.error("Sorry, your browser doesn't support Web Audio API.");

			return;

		}

		context = new (window.AudioContext || window.webkitAudioContext)();

		source = $(playerSelector + ' audio')[0];



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
	 * Load the particles.
	 */

	function loadParticles() {

		// See: https://github.com/mrdoob/three.js/issues/687
		THREE.ImageUtils.crossOrigin = '';

		// var texture = THREE.ImageUtils.loadTexture('http://francescotrillini.it/assets/particle.png');

		var attributes = {

			size: { type: 'f', value: [] }

		};

		uniforms = {

			color: { type: 'c', value: new THREE.Color(0x454545) },
			// texture: { type: 't', value: texture },
			bass: {type: 'f', value: 0.0 },
			opacity: { type: 'f', value: 0.0 },

		};

		var shaderMaterial = new THREE.ShaderMaterial( {

			uniforms: uniforms,
			attributes: attributes,

			vertexShader: document.getElementById('vertex').textContent,
			fragmentShader: document.getElementById('fragment').textContent,

			blending: THREE.AdditiveBlending,
			transparent: true,

		});

		var geometry = new THREE.Geometry();
		geometry.verticesNeedUpdate = true;

		// Position
		for(particle = 0, len = 100; particle < len; particle++)

			geometry.vertices.push(new THREE.Vector3(Math.random() * 10000 - 5000, Math.random() * 10000 - 5000, Math.random() * 10000 - 5000));

		// Size
		for(var index = 0, len = geometry.vertices.length; index < len; index++)

			attributes.size.value[index] = 100 + Math.random() * 100;

		particles = new THREE.PointCloud(geometry, shaderMaterial);
		scene.add(particles);

	}

	/*
	 * Change the current material with the next one.
	 */

	function changeMaterial(seed) {

		var cube = cubes.length;

		material += (seed !== undefined ? seed : 1);

		while(cube--) {

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
		if(size === 0) {

			var cube = cubes.length;

			while(cube--) {

				var object = cubes[cube];

				new TWEEN.Tween(object.mesh.scale).to({

					x: object.level / 1.35,
					y: object.level / 1.35,
					z: object.level / 1.35

				}, 500).start();

			}

		}

		// Change position and rotation every two secs
		if((Date.now() - lastTransition > 0 && Date.now() - lastTransition < 1000 && start) || schedule !== undefined) {

			start = false;

			var cube = cubes.length;

			while(cube--) {

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
		if(Date.now() - lastTransition > 2000) {

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

		if(!play) {

			group.rotation.x += 0.006;
			group.rotation.y += 0.006;

		}

		if(play && frequency.length > 0) {

			// Zoom
			camera.position.z += (THREE.Math.clamp(cameraZ, min, max) - camera.position.z) * 0.1;

			var cube = cubes.length;

			while(cube--) {

				var object = cubes[cube];

				var currentLevel, band, rotation;

				// Frequency
				currentLevel = (frequency[object.band] / 256) * object.level;
				band = currentLevel < 1 ? 1 : currentLevel;

				object.scale += (band - object.scale) * 0.2;

				group.rotation.x += object.scale * 0.00012;
				group.rotation.y += object.scale * 0.00012;

				particles.rotation.copy(group.rotation);

				particles.rotation.x *= 0.4;
				particles.rotation.y *= 0.4;

				uniforms.bass.value += (object.scale / 2.7 - uniforms.bass.value) * 0.5;
				uniforms.opacity.value = Math.max(0.0, currentLevel / Math.min(12, currentLevel));

				// Scale fov
				camera.fov += (75 - object.scale * 3 - camera.fov) * 0.008;
				camera.updateProjectionMatrix();

			}

			analyser.getByteFrequencyData(frequency);

		}

		camera.lookAt(scene.position);

		stats.update();

		renderer.render(scene, camera);

	}

};
