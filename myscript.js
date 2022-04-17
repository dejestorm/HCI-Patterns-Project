window.sr = ScrollReveal({duration : 1000});
        sr.reveal('.site-content .d-flex');
        sr.reveal('.section-1 .card');
        sr.reveal('.section-2 .d-flex');
        sr.reveal('.section-3 .col-md-4');
        sr.reveal('.section-4 .col-md-10');

        function addComment(){
        var userComment = document.getElementById("userComment").value;
        document.getElementById("ui-state-default").innerHTML = userComment;
        }
        function myFunction() {
            var txt;
            if (confirm("If you don't confirm, you cannot proceed")) {
                txt = "You pressed OK!";
            } else {
                txt = "You pressed Cancel!";
            }
            document.getElementById("demo").innerHTML = txt;
        }

        var scrollTimer = null;

        $(window).scroll(function() {
        var viewportHeight = $(this).height(),
            scrollbarHeight = viewportHeight / $(document).height() * viewportHeight,
            progress = $(this).scrollTop() / ($(document).height() - viewportHeight),
            distance = progress * (viewportHeight - scrollbarHeight) + scrollbarHeight / 2 - $('#scrollbubble').height() / 2
            ;
            if(Math.round(progress * 100) == 0){
            $('#scrollbubble')
                .css('top', distance)
                .text('Two-Panel Selector & Multi-level Help')
                .fadeIn(10)  
            ;} else if(Math.round(progress * 100) == 7){
            $('#scrollbubble')
                .css('top', distance)
                .text('Reentrance')
                .fadeIn(10)  
            ;} else if(Math.round(progress * 100) == 14){
            $('#scrollbubble')
                .css('top', distance)
                .text('Intriguing Branches')
                .fadeIn(10)  
            ;} else if(Math.round(progress * 100) == 21){
            $('#scrollbubble')
                .css('top', distance)
                .text('Sequence Map, Breadcrumbs & Color Coded Section')
                .fadeIn(10)
            } else if(Math.round(progress * 100) == 38){
            $('#scrollbubble')
                .css('top', distance)
                .text('Model Panel')
                .fadeIn(10)
            } else if(Math.round(progress * 100) == 55){
            $('#scrollbubble')
                .css('top', distance)
                .text('Prospective Memory')
                .fadeIn(10)
            } else if(Math.round(progress * 100) == 80){
            $('#scrollbubble')
                .css('top', distance)
                .text('One-Window Drill Down')
                .fadeIn(10)
            }

        

            // Fade out the annotation after 1 second of no scrolling.
            if (scrollTimer !== null) {
                clearTimeout(scrollTimer);
            }
            scrollTimer = setTimeout(function() {
                $('#scrollbubble').fadeOut();
            }, 500);
        });