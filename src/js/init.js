window.onSongChange = function() {};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function() {
      console.log("Service Worker Registered");
    });
}


(function() {
  $(function() {

    initializeAllTheThings();

    function initializeAllTheThings() {

      // feed in about me
      GitHubActivity.feed({
        username: "Thatkookooguy",
        selector: "#feed",
        limit: 3 // optional
      });

      // hide blocks in resume to make them appear when they enter the view
      var timelineBlocks = $('.cd-timeline-block');
      var bars = $('.skillbar');
      var offset = 0.8;

      hideBlocks(timelineBlocks, offset, bars);

      if ($('.tab a[href="#resume"]').hasClass('active')) {
        $(window).on('scroll', function() {
          (!window.requestAnimationFrame) ?
          setTimeout(function() {
            showBlocks(timelineBlocks, offset, bars);
          }, 100): window.requestAnimationFrame(function() {
            showBlocks(timelineBlocks, offset, bars);
          });
        });
      }

      $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "fadeInDown",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: "||",
        // The delay between the changing of each phrase in milliseconds.
        speed: 5000,
        complete: function() {
          // Called after the entrance animation is executed.
        }
      });

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
            $(window).on('scroll', function() {
              (!window.requestAnimationFrame) ?
              setTimeout(function() {
                showBlocks(timelineBlocks, offset, bars);
              }, 100): window.requestAnimationFrame(function() {
                showBlocks(timelineBlocks, offset, bars);
              });
            });
          } else {
            $(window).off('scroll');
          }
        }
      });

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

      blocks.each(function() {
        var $this = $(this);

        ($this.offset().top <= $window.scrollTop() + $window.height() && $this.find('.cd-timeline-img').hasClass('is-hidden')) && $this.find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
      });

      bars.each(function() {
        var $this = $(this);

        ($this.offset().top <= $window.scrollTop() + $window.height() && $this.hasClass('not-in-view')) && $this.removeClass('not-in-view');
      });
    }

  }); // end of document ready
})(jQuery); // end of jQuery name space
