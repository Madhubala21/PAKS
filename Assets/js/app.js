(function($) {
    'use strict';
    //   =========navigation fixed top=========
    $(window).on("scroll", function() {
        var scrolling = $(this).scrollTop();
        if (scrolling > 10) {
            $(".navigation").addClass("navbar-fixed");
        } else {
            $(".navigation").removeClass("navbar-fixed");
        }
    });

    // ==========Progressbar=========
    var $sectionProgress = $('.progressbar-sec');
    $(window).on("scroll", function() {
        var scrollOffset = $(document).scrollTop();
        var containerOffset2 = $sectionProgress.offset().top - window.innerHeight;

        if (scrollOffset > containerOffset2) {
            if ($('.chart').parents('.progressbar-sec').hasClass('progressbar-sec-2')) {
                $('.chart').easyPieChart({
                    size: 220,
                    barColor: "#f8b216",
                    scaleLength: 0,
                    lineWidth: 25,
                    trackColor: "#f2ede3",
                    lineCap: "round",
                    animate: 2000,
                })
            } else {
                $('.chart').easyPieChart({
                    size: 220,
                    barColor: "#4cb950",
                    scaleLength: 0,
                    lineWidth: 25,
                    trackColor: "#ffffff",
                    lineCap: "round",
                    animate: 2000,
                })
            }
        }
    });

    $(document).ready(function() {
        // ==========Counter=========
        $('.counter').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

        // ==========Portfolio Image Popup=========
        $('.tv-card-tm').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function(element) {
                    return element.find('img');
                }
            }

        });

        // ==========Testimonial Slider=========
        $('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 24,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });

        //==========Portfolio Filter=========
        $(".tv-filter-tm li").click(function() {
            var $filterButton = $(this);
            $(".tv-filter-tm li").removeClass("active");
            $filterButton.addClass("active");
            var $data = $filterButton.parent().parent().parent().parent().parent().find(".tv-case-studies");
            var $filter, $outerFilter;
            if ($filterButton.attr("id") === "filter__All") {
                $data.find('.tv-case-study').removeClass("tv-case-study-show");
                $data.find('.tv-case-study').addClass("tv-case-study-hide");

                $filter = $data.find('.tv-case-study');

                $filter.removeClass("tv-case-study-hide");
                setTimeout(function() {
                    $filter.addClass("tv-case-study-show");
                }, 20);

                //  $filter.slideDown(800);
            } else {
                $filter = $data.find('.tv-case-study[data-category=' + $filterButton.attr("data-category") + ']');
                $data.find('.tv-case-study').removeClass("tv-case-study-show");
                $data.find('.tv-case-study').addClass("tv-case-study-hide");

                $filter.removeClass("tv-case-study-hide");
                setTimeout(function() {
                    $filter.addClass("tv-case-study-show");
                }, 20);
            }


        });
    });
}(jQuery));