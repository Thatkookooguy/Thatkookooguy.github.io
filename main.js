(function() {
    $(function() {
        $('ul.tabs').tabs();

        var timelineBlocks = $('.cd-timeline-block'),
            offset = 0.8;

        $('.cd-timeline-img img').each(function() {
            resizeToMax(this);
        });

        //hide timeline blocks which are outside the viewport
        hideBlocks(timelineBlocks, offset);

        //on scolling, show/animate timeline blocks when enter the viewport
        $(window).on('scroll', function(){
            (!window.requestAnimationFrame)
                ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
            : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
        });

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
