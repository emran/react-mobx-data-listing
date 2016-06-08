;(function () {
    jQuery(document).ready(function($){
        "use strict"; // use strict to start

        // sticky header
        $(window).scroll(function () {
            if ($(this).scrollTop() > 120) {
                $('.navbar-fixed-top').addClass("sticky");
            }
            else {
                $('.navbar-fixed-top').removeClass("sticky");
            }
        });


        // Slim Scroll for Chat Sidebar
        $('.scrollbar').slimScroll({
            height: '343px'
        });

        // Slim Scroll for Chat Sidebar
        $('.postShare .post-input-area-wrapper,.editSchedulePost  .post-input-area-wrapper').slimScroll({
            height: '300px'
        });

        // Slim Scroll for Chat Box
        $('.gg-chatbox-body').slimScroll({
            height: '220px'
        });
        
        // Slim Scroll for Circle member
        $('.circle-member').slimScroll({
//            height: '290px'
        });

        //Make usable of every content editable div
        $("div[contenteditable='true']").each(function () {
            new Medium({
                element: this,
                mode: Medium.partialMode,
                autoHR: false,
                cssClasses: {
                    editor: 'Medium',
                    pasteHook: 'Medium-paste-hook',
                    clear: 'Medium-clear'
                },
                pasteAsText: true,
            });
        });


        $(".comment-input-box").on('focusout', function () {
            if ($(this).html == '<p>&nbsp;</p>') {
                $(this).innerHTML = "";
            }
        });



        /*--------------
         Emoticon part
         ----------------*/

        // Slim Scroll for Emoticon
        $('.emoticon-content ul').slimScroll({
            height: '250px'
        });

        $('.emoticon-box-close').on('click', function (e){
            e.preventDefault();
            $(this).closest(".chat-emoticon-box").removeClass("show");
        });

        $('.emoticon-box-icon').on('click', function (e){
            e.preventDefault();
            $(this).siblings(".chat-emoticon-box").toggleClass("show");
        });

        //Prevent Dropdown close for emoticon box
        $("body").on("click", function (e) {
            if ($(e.target).closest(".gg-face-laugh").length > 0 || $(e.target).closest(".chat-emoticon-box").length > 0) {
                return;
            } else {
                var emoBox = $(".chat-emoticon-box");
                emoBox.each(function () {
                    if ($(this).hasClass("show")) {
                        $(this).removeClass("show");
                    }
                });
            }
        });

        //Prevent Dropdown close for emoticon box
        $(".message-action").on("click", function () {
            $(this).closest(".dropdown").toggleClass("open");
            return false;
        });


        //Comments box recover placeholder on leave if blank
        $("div[contenteditable='true']").on("focusout", function () {
            if ($(this).text().replace(/\s/, '').length === 0) {
                $(this).html("");
            }
        });


        //Show post toolbars on mouse click
        $(".post-input-box").click(function (e) {
            var mainWrapper = $(this).closest(".post-input-box");
            if (mainWrapper.hasClass("post-input-hidden")) {
                mainWrapper.removeClass("post-input-hidden");
            }
        });

        //Show hide extra sidebar menus
        $(".left-nav-more").on("click", function () {
            $(".more-sidebar-items").slideToggle("fast");
            $(".left-nav-more").toggleClass("hide");
        });


        //Audio Player
        $('audio').jqueryAudioPlayer({
            buttons: {
                play: '<i class=" gg-play-fill"></i>',
                pause: '<i class="gg-pause"></i>',
                volume: '<i class="gg-speaker"></i>',
                volumeMute: '<i class=" gg-speaker-mute"></i>'
            }
        });


        //Scheduled post time
        $('#scheduled-post-time').datetimepicker({
            viewMode: 'years',
            showClear: false,
            keepOpen: false,
            showClose: true,
            //sideBySide: true
            icons: {
                time: 'gg-clock',
                date: 'gg-calendar',
                up: 'glyphicon glyphicon-chevron-up',
                down: 'glyphicon glyphicon-chevron-down',
                previous: 'glyphicon glyphicon-chevron-left',
                next: 'glyphicon glyphicon-chevron-right',
                today: 'glyphicon glyphicon-screenshot',
                clear: 'gg-trash',
                close: 'gg-check'
            }
        });

        //prevent previous date
        $("#scheduled-post-time").on("dp.change", function (e) {
            $('#scheduled-post-time').data("DateTimePicker").minDate(e.date);
        });


        //Dynamic change of friend sub menu position
        $(document).on("click", ".more-menu-holder li a", function () {
            var clickedItem = $(this).clone(),
                replaceWith = $(document)
                    .find(".extra-menu-place-holder")
                    .find("a")
                    .clone();
            $(document).find(".extra-menu-place-holder").find("a").replaceWith(clickedItem);
            $(this).replaceWith(replaceWith);
            $(document).find(".friends-tab-menu").find(".active").removeClass("active");
            $(document).find(".extra-menu-place-holder").addClass("active");
        });


        $(document).on("click", '.friends-tab-menu a:not(.sub-menu)', function () {
            $(".friends-tab-menu-title").text($(this).data("title"));
            console.log($(this).data('title')=="Circles");
            if($(this).data('title').toLowerCase() === 'circles'){
                $(".search-plus-settings").hide();
                $(".create-circle-btn").show();
            }else{
                $(".search-plus-settings").show();
                $(".create-circle-btn").hide();
            }
        });


        //Change Title About page
        $(document).find(".about-tab-menu").find("a").on("click", function () {
            $(".about-tab-menu-title").text($(this).data("title"));
        });


        //Make grid for image posting
        $(".img-grid").each(function () {
            var numberOfElement = $(this).children("a").length;
            if (numberOfElement == 1) {
                $(this).addClass('one');
            }
            if (numberOfElement == 2) {
                $(this).addClass('two');
            }
            if (numberOfElement == 3) {
                $(this).addClass('three');
            }
            if (numberOfElement == 4) {
                $(this).addClass('four');
            }
            if (numberOfElement == 5) {
                $(this).addClass('five');
            }
        });


        //Limit interaction on post
        var limit = 3;
        $('.interaction-list .int-chk').on('change', function () {
            //var otherCheck = $(this).closest('.interaction-list').find(':checked');
            if ($(this).closest('.interaction-list').find(':checked').length > limit) {
                this.checked = false;
            }
        });

        //add education and work on settings page
        $(".add-items").select2({
            maximumSelectionLength: 1,
            tags: true
        });
        $(".select-country").select2({});
        $(".user-country").select2({
            maximumSelectionLength: 1,
            tags: true,
            placeholder: "Select Country",
            allowClear: true
        });
        
        $(".user-city").select2({
            maximumSelectionLength: 1,
            tags: true,
            placeholder: "Select City",
            allowClear: true
        });
        $(".select-city").select2({ });
        $('.eng-modal').on('shown.bs.modal', function () {
          $(".select-city").select2({ });
        });

        //Post custom privacy settings
        $(".drop-more").on("click", function () {
            $(this).parent(".dropdown").toggleClass("open");
            $(this).hide();
            $(this).siblings(".custom-privacy-selection").toggleClass('in');
            return false;
        });

        //accounts slider on Gnav
        if ($('.profile-slide').length) {
            $(".profile-slide").owlCarousel({
                items: 3,
                pagination: false,
                navigation: true,
                autoWidth: false
            });
        }


        //Restrict dropdown to close when click on
        $("#gnav").find(".owl-prev, .owl-next, .more-pfl").on("click", function (e) {
            $(this).closest(".dropdown").addClass("open");
            $(this).hasClass("more-pfl")? $("#more-pfl-wrap").toggleClass("in"):'';
            e.stopPropagation();
        });


        //uploaded image slider
        $('.upload-img-slide').owlCarousel({
            pagination: false,
            navigation: true,
            rewindNav: false,
            autoWidth: true,
            itemsDesktop : [1199,4],
            itemsDesktopSmall : [980,4],
            itemsTablet: [768,4],
            itemsTabletSmall: false,
            itemsMobile : [479,4]
        });

        // video play on click
        $('.play-btn').on('click', function (e) {
            $(this).hide().siblings('.video-poster').hide();
            var video = $('.video').get(0);
            if (video.paused === false) {
                video.pause();
            } else {
                video.play();
            }
            return false;
        });



        //Remove uploaded image

        $(".upload-img-slide").find(".close").on("click", function(){
            var ParentDiv = $(this).closest(".upload-img-slide");
            var totalitems = ParentDiv.find(".owl-item").length;
            //console.log(ParentDiv.html());
            console.log(totalitems);
            if(totalitems<7){
                ParentDiv.find(".owl-controls").hide();
            }
            if(totalitems<2){
                $(".upload-img-slide").hide();
            }
            $(this).closest(".owl-item").remove();
        });


        //create circle
        $(".add-circle-name").find("a").on('click', function(){
            var $this = $(this), $input = $this.siblings(".circle-name-input");
            $this.hide();
            $input.show();
            $input.focus();
            return false;
        });

        //Add circle name
        $(".circle-name-input").on("change", function(){
            if($(this).val() !==''){
                $(".circle--name").text($(this).val());
            }else{
                $(".circle--name").text("Add circle name");
            }
        });

        $(".circle-name-input").on("focusout", function(){
            $(this).hide();
            $(".circle--name").show();
        });

        //Remove circle member
        $(".circle-member").find(".close").on("click", function(){
            $(this).parent("li").remove();
            $(document).find(".tooltip").remove();
        });

        //change design of time line when large name
        if($(".timeline-full-name").length>0){
            var $this = $(".timeline-full-name");
            if($this.text().length>30){
                $this.closest(".profile-header-wrapper").addClass("large-name");
            }
        }



        $(".chat-emoticon-box").each(function(){
            var $emoWrapper = $(this);
            $emoWrapper.find(".emo-tab").on("click", function(){
                var clickedItemIndex = $(this).parent("li").index();
                $emoWrapper.find('[role=tabpanel]').removeClass('active');
                $emoWrapper.find('[role=tabpanel]').eq(clickedItemIndex).addClass('active');
            });
        });



        //remove interest item
        $(".interest-tag-panel").find(".remove-item", $('.tag-list')).on('click', function(){
            $(this).closest("li").remove();
        });

        //Add interest
        $(".btn-add-interest").on('click', function(){
            $(this).closest("li").find("button").toggleClass("hide");
            $(this).closest(".content").find(".form-interest-tag").slideToggle('fast');
        });

        $(".add-interest-input").select2({
            tags: true
        });
        $(".add-interest-category").select2({
            placeholder: "Select a state"
        });

        (function(){
            function initJustifiedGalleries(selector){
                var galleries = document.querySelectorAll(selector);
                [].map.call(galleries, initJustifiedGallery);
            }
            // galley = DOMNode
            function initJustifiedGallery(gallery){
                var $gallery = jQuery(gallery);
                // FIXME: these 3 calculations could be moved
                var width = $gallery.width();
                var rowHeight = width/4;
                var maxRowHeight = 2*width/4;
                // get a list of images with {width, height, src}
                var images = parseGalleryImages($gallery.find('img'));
                // set explicit width
                $gallery.css('width', width);
                // empty the gallery then initialize justifiedImages plugin
                $gallery.empty().justifiedImages({
                    images : images,
                    rowHeight: rowHeight,
                    maxRowHeight: maxRowHeight,
                    thumbnailPath: function(image, width, height){
                        return image.src;
                    },
                    getSize: function(image){
                        return {width: image.width, height: image.height};
                    },
                    margin: 1
                });
            }
            // return a list of images with {width, height, src}
            function parseGalleryImages(imageNodes){
                return [].map.call(imageNodes, function(node){
                    return {
                        width: node.dataset.width,
                        height: node.dataset.height,
                        src: node.getAttribute('src')
                    };
                });
            }
            var selector = '.gg-timeline-gallery';
            initJustifiedGalleries(selector);
        }());

        $(document).on("click",".add-interest" ,function () {
            var $btn = $(this);
            var $selectedValues = $btn.closest(".content").find(".tag-list li a").map(function(){
                return this.innerHTML;
            }).get();
            var $newValues = this.dataset.interest.split(',');
            console.log($newValues);
            var tobeAdded=[];
            // $newValues
            var valuesHtml = $newValues.map(function(a){
                if($.inArray(a.toLowerCase, $selectedValues.toLowerCase)){
                    console.log("Yes");
                }
            });
            var newValuesHtml = $newValues.map(function (a) {
                return "<li><a href='#' >"+a+"</a><span class='remove-item'>x</span></li>";
            });
            $(this).closest(".content").find(".tag-list li:last-child").before(newValuesHtml);
            $(this).closest(".content").find(".add-interest-input").select2().val(null).trigger("change");
            console.log(newValuesHtml);
            return false;
        });


        $(".add-interest-input").on("change", function (e) {
            var $selectedValue = $(this).val();
            // $selectedValue = $selectedValue.join();
            // console.log("changed");
            // console.log(this);
            // console.log($selectedValue);
            // console.log($(this).closest(".content").find(".add-interest").data('interest'));
            $(this).closest(".content").find(".add-interest").attr('data-interest', $selectedValue);

            // $(this).closest(".content").find(".selected-interest").val($selectedValue);
            // var $currentValues = $(this).closest(".content").find(".selected-interest").val();
            // console.log($currentValues);
            // console.log($selectedValue);
            // var allValues = $(this).val().map(function (a) {
            //     return "<li><a href='#' >"+a+"</a><span class='remove-item'>x</span></li>";
            // });
            // // $(this).closest(".content").find(".tag-list").prepend(allValues);
            // $(this).closest(".content").find(".tag-list li:last-child").before(allValues);
            // console.log($lastChild);
            // $(this).closest(".content").find(".add-interest").data('interest').(function (a) {
            //     console.log(a);
            // });
            // console.log($selectedValue);
        });


        //select school
        (function () {

            var $selectSchool = $(".select--school");
            function formatRepo (repo) {
                console.log(repo);

                // if (repo.loading) return repo.text;
                if (!repo.id) { return repo.text; }
                var markup = '<div class="school-suggestion-item clearfix">' +
                    '<div class="school-image">' +
                    '<img src="'+repo.owner.avatar_url+ '" style="max-width: 100%" />' +
                    '</div>' +
                    '<div class="school-info">' +
                    '<div class="school-name">' + repo.name + '</div>'+
                    '<div class="school-meta">'	+
                    '<span class="school-city"> @'  + repo.owner.login + '</span>'+
                    '<span class="school-country"> @'	+ repo.owner.login + '</span>'+
                    '</div>';
                    '</div>';
                markup += '</div>'; //ended judge item
                return markup;
            }

            function formatRepoSelection (repo) {
                // return repo.full_name || repo.text;
                var selectedItem = '<span>'+'<img src="'+repo.owner.avatar_url+'" class="school-selected" alt="" />'+ repo.name +'</span>';
                return selectedItem;
            }

            $selectSchool.select2({
                ajax: {
                    url: "https://api.github.com/search/repositories",
                    dataType: 'json',
                    delay: 250,
                    data: function (params) {
                        return {
                            q: params.term, // search term
                            page: params.page
                        };
                    },


                    processResults: function (data, page) {
                        console.log(data.items);
                        return {

                            results: data.items

                        };
                    },
                    cache: true
                },
                escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
                minimumInputLength: 1,
                templateResult: formatRepo, // omitted for brevity, see the source of this page
                templateSelection: formatRepoSelection, // omitted for brevity, see the source of this page
                // tags: true
            });

            // $selectSchool.on("select2:open", function(){
            //     console.log($(document).find(".select2-container--open").find(".select2-dropdown"));
            //     $(document).find(".select2-container--open").find(".select2-dropdown").addClass("tag-selection-container");
            // });

        }());


    // engage-popover
    $("[data-toggle=popover]").popover({
        html: true,
        content: function() {
            return $('#engage-popover').html();
        }
    });

    //Engage Tooltip
    $('[data-toggle="tooltip"]').tooltip();

        var popover_template = "<div class='popover tour popover-body'>"+
                    "<div class='arrow'></div>"+
                    "<div class='popover-header clearfix'>"+
                    "<h3 class='popover-title title'></h3>"+
                    "<button type='button' data-role='end' class='popover-close'>"+
                    "<i class='gg-cross'></i>"+
                    "</button>"+
                    "</div>"+
                    "<div class='popover-content popover-body'></div>"+
                    "<div class='popover-navigation popover-footer'>"+
                    "<button class='btn btn-primary btn-sw next-btn' data-role='next'>Next</button>"+
                    "<button class='btn btn-primary btn-sw done-btn' data-role='end'>Done</button>"+
                    "</div>"+
                    "</div>";
        var tour = new Tour({
            name: "tour",
            steps: [
                {
                    element: ".gnav--guide1",
                    title: "Access <span>G-navigation</span>",
                    content: "Quickly access g-navigation to view all your Products and Profiles.",
                    placement: "auto",
                    animation:true
                },

                {
                    element: ".select-post-privacy",
                    title: "Change <span>Visibility Privacy</span>",
                    content: "Choose who will see your post by selecting your preffered privacy setting.<br/> You can alwayes change the setting later.",
                    placement: "bottom"
                },
                {
                    element: ".widget-photos",
                    title: "Change <span>Visibility Privacy</span>",
                    content: "Choose who will see your post by selecting your preffered privacy setting.<br/> You can alwayes change the setting later.",
                    placement: "bottom",
                }
            ],
            container: "body",
            keyboard: true,
            storage: window.localStorage,
            debug: false,
            placement:"bottom",
            backdrop: false,
            backdropContainer: 'body',
            backdropPadding: 0,
            redirect: true,
            orphan: false,
            duration: false,
            delay: false,
            basePath: "",
            template:popover_template
    });

        // Initialize the tour
        tour.init();

        // Start the tour
        tour.start();





        //Create Page form validation

        $(".create--page--name").on("keydown", function(){
            console.log($(this).val());
            if($(this).val() !==''){
                $(this).closest(".form-group").removeClass("has-error");
            }
        });


        $(".create--page--step1-submit").on("click", function () {
            console.log($(".create--page--name").val());

          if($(".create--page--name").val() === ''){
              $(".create--page--name").closest(".form-group").addClass("has-error");
          }else{

              $(this).hide().closest('.create-page-form').addClass('create-page-form-details');
          }

        });

        $(".create--page-category").on("change", function(){


        });



        //profile card show hide
        $(".profile-link-thumb, .profile-link").hover(function (e) {
            var el = $(this);
            var topSpace = e.pageY - $(window).scrollTop();
            var positionClass = (function(){
                if (topSpace > 355) {
                    return "top";
                }
                else {
                    return "bottom";
                }
            })();
            el.children(".business--profile--card").removeClass("top bottom").addClass(positionClass).show();
        }, function () {

        });


        //Tag Friends
        (function () {
            console.log("inside Tag Friends ");
            var $tagFriends = $(".tag-friends");

            function formatRepo (repo) {
                console.log(repo);

                // if (repo.loading) return repo.text;
                if (!repo.id) { return repo.text; }
                var markup = '<div class="tag-item clearfix">' +
                    '<div class="tag-face">' +
                    '<img src="'+repo.owner.avatar_url+ '" style="max-width: 100%;" />' +
                    '</div>' +
                    '<div class="tag-info">' +
                    '<span class="tag-full-name">'	+ repo.name + '</span>'+
                    '</div>';
                markup += '</div>'; //ended judge item
                return markup;
            }

            function formatRepoSelection (repo) {
                console.log("inside formatRepoSelection");
                console.log(repo.owner.login || repo.text);
                return repo.owner.login || repo.text;
            }

            $tagFriends.select2({
                ajax: {
                    url: "https://api.github.com/search/repositories",
                    dataType: 'json',
                    delay: 250,
                    data: function (params) {
                        return {
                            q: params.term, // search term
                            page: params.page
                        };
                    },


                    processResults: function (data, page) {
                        console.log(data.items);
                        return {

                            results: data.items

                        };
                    },
                    cache: true
                },
                escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
                minimumInputLength: 1,
                templateResult: formatRepo, // omitted for brevity, see the source of this page
                templateSelection: formatRepoSelection, // omitted for brevity, see the source of this page
                // tags: true
            });

            $tagFriends.on("select2:open", function(){
                console.log($(document).find(".select2-container--open").find(".select2-dropdown"));
                $(document).find(".select2-container--open").find(".select2-dropdown").addClass("tag-selection-container");
            });
        })();

        
        //Share post dropdown shown on focus
        $(".input-tag-user").on('focus blur', function(){
             $(this).parents(".dropdown-tag-user").toggleClass('open');
        })


    });
})(jQuery);
