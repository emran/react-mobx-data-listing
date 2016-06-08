;(function () {
    jQuery(document).ready(function ($) {
        "use strict"; // use strict to start


        // sticky header
        $(window).scroll(function () {
            if ($(this).scrollTop() > 120) {
                $('.main-header').addClass("sticky");
            }
            else {
                $('.main-header').removeClass("sticky");
            }
        });

        //Post view
        $('.btn-post-view').click(function (e) {
            e.preventDefault();
            $(this).toggleClass('change-view');
            $(".event-post-wrapper").toggleClass('grid-post');
            $(".post-view-wrapper").toggleClass('list-post');
        });
        
        $('.btn-sorting').click(function (e) {
            e.preventDefault();
            $(this).toggleClass('sort-reverse');
        });

        $('.post-interaction-list .like,.post-interaction-list .dislike').click(function (e) {
            e.preventDefault();

            $(this).addClass('selected').siblings().removeClass('selected');
        });
        
        //Masonry
   
        if($('.grid-masonry').length){
            setTimeout(masonwork, 0); 
        }

        //Tooltip
        $('[data-toggle="tooltip"]').tooltip();


        /*This section controls the prize type on sidebar
         * to show and hide min and max value
         */
        $(".prize-type-filter .btn-as-radio-input").on("change", function () {
            var prizeType = $(this).data("prize-type");
            if (prizeType == 'money' || prizeType == 'item') {
                $(".prize-type-min-max").fadeIn("fast");
                console.log(prizeType);
                console.log($(this).closest("ul").siblings(".prize-type-min-max"));
            } else {
                $(".prize-type-min-max").fadeOut("fast");
            }
        });


        /*This section is used for minimum paricipate to give a look of slider*/
        $("#minimum-participate").ionRangeSlider({
            min: 0,
            max: 1000,
            from: 500
        });


        function adjust_nav_menu() {
            var winWith = $(window).width();

            if (winWith < 1200) {
                $(".survey-in-main-nav").hide();
                $(".survey-in-sub-nav").show();
            } else {
                $(".survey-in-main-nav").show();
                $(".survey-in-sub-nav").hide();
            }

            console.log(winWith);
        }

        $(window).resize(function () {
            adjust_nav_menu();
        });

        adjust_nav_menu();


        $('#datetimepicker,.from-date,.to-date').datetimepicker({
            format: 'DD/MM/YYYY',
            icons: {
                date: 'gg-clock',
                up: 'gg-up-mini',
                down: 'gg-down-mini',
                previous: 'gg-previous-mini',
                next: 'gg-next-mini',
                today: 'gg-event',
                clear: 'gg-trash',
                close: 'gg-check'
            },
            showTodayButton: true,
            showClear: true,
            showClose: true,

            defaultDate: new Date()
        });

        // home banner hide script
        $(".banner-wrapper.home > .close-btn").on("click", function () {
            $(this).closest('section').hide();
            return false;
        });


        $('.required').on('change', function () {
            if ($(this).val().trim() !== '') $(this).removeClass('warning');
        });


        //Poll Search
        $("#poll-main-search").select2({
            maximumSelectionLength: 1,
            tags: true,
            placeholder: "Search "
        });

        $('input[type="radio"],input[type="checkbox"]').not('.btn-as-radio-input, .tgl').iCheck({
            checkboxClass: 'icheckbox_flat',
            radioClass: 'iradio_flat'
        });


        //new fields
        $(".create-new-option").on('click', function () {
            var newField = $(this).siblings('.poll-option-master').clone().removeClass('poll-option-master').val("");
            newField.insertBefore(this);
            return false;
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


        //Hide me Utility
        $('.hide-me').on('click', function () {

            $(this).hide();
            return false;
        });

        //Hide parent Utility
        $('.hide-me').on('click', function () {

            $(this).parent().hide();
            return false;
        });

        //Remove me Utility
        $('.remove-me').on('click', function () {

            $(this).hide();
            return false;
        });

        //Remove parent Utility
        $('.remove-parent').on('click', function () {
            $(this).parent().remove();
            return false;
        });


        //Search box interaction
        $('.logic-search-box').on('keyup', function () {
            console.log($(this).val().length);
            if ($(this).val().length > 0) {
                $(this).next('.cross-btn').show();
            } else {
                $(this).next('.cross-btn').hide();
            }
        });


        //clear search Box
        $('.search-box .cross-btn').on('click', function () {
            $(this).siblings('.logic-search-box').val('');
            $('.logic-search-box').autocomplete('hide');
            $(this).hide();
            return false;
        });

        /*Final*/

        function platformIconAnimation() {

            // taken from mo.js demos
            function isIOSSafari() {
                var userAgent;
                userAgent = window.navigator.userAgent;
                return userAgent.match(/iPad/i) || userAgent.match(/iPhone/i);
            }

            // taken from mo.js demos
            function isTouch() {
                var isIETouch;
                isIETouch = navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
                return [].indexOf.call(window, 'ontouchstart') >= 0 || isIETouch;
            }

            // taken from mo.js demos
            var isIOS = isIOSSafari(),
                clickHandler = isIOS || isTouch() ? 'touchstart' : 'click';

            function extend(a, b) {
                for (var key in b) {
                    if (b.hasOwnProperty(key)) {
                        a[key] = b[key];
                    }
                }
                return a;
            }

            function Animocon(el, options) {
                this.el = el;
                this.options = extend({}, this.options);
                extend(this.options, options);

                this.checked = false;

                this.timeline = new mojs.Timeline();

                for (var i = 0, len = this.options.tweens.length; i < len; ++i) {
                    this.timeline.add(this.options.tweens[i]);
                }

                var self = this;
                this.el.addEventListener(clickHandler, function () {
                    if (self.checked) {
                        self.options.onUnCheck();
                    }
                    else {
                        self.options.onCheck();
                        self.timeline.start();
                    }
                    self.checked = !self.checked;
                });
            }

            Animocon.prototype.options = {
                tweens: [
                    new mojs.Burst({
                        shape: 'circle',
                        isRunLess: true
                    })
                ],
                onCheck: function () {
                    return false;
                },
                onUnCheck: function () {
                    return false;
                }
            };

            var items = [].slice.call(document.querySelectorAll('.logic-anim-section > .logic-anim-block'));
            console.log(items);


            function init() {


                /* Icon 1 */
                //console.log(items);
                var el1 = items[0].querySelector('.icobutton'), el1span = el1.querySelector('.platform-icon');
                var scaleCurve6 = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
                new Animocon(el1, {
                    tweens: [
                        // burst animation
                        new mojs.Burst({
                            parent: el1,
                            duration: 1500,
                            shape: 'circle',
                            fill: 'white',
                            x: '50%',
                            y: '50%',
                            childOptions: {
                                radius: {12: 0},
                                type: 'line',
                                stroke: '#24b0ff',
                                strokeWidth: 1
                            },
                            radius: {10: 50},
                            count: 20,
                            isRunLess: true,
                            easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                        }),
                        new mojs.Tween({
                            duration: 800,
                            easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
                            onUpdate: function (progress) {
                                var scaleProgress = scaleCurve6(progress);
                                el1span.style.WebkitTransform = el1span.style.transform = 'scale3d(' + progress + ',' + progress + ',1)';
                            }
                        })
                    ],
                    onCheck: function () {
                        el1.style.color = '#24b0ff';
                    },
                    onUnCheck: function () {
                        el1.style.color = '#24b0ff';
                    }
                });


                /*Icon2*/
                var el2 = items[1].querySelector('button.icobutton'), el2span = el2.querySelector('.platform-icon');
                new Animocon(el2, {
                    tweens: [
                        // burst animation
                        new mojs.Burst({
                            parent: el2,
                            duration: 1500,
                            shape: 'circle',
                            fill: 'white',
                            x: '50%',
                            y: '50%',
                            childOptions: {
                                radius: {12: 0},
                                type: 'line',
                                stroke: '#9564d4',
                                strokeWidth: 1
                            },
                            radius: {10: 50},
                            count: 20,
                            isRunLess: true,
                            easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                        }),
                        new mojs.Tween({
                            duration: 800,
                            easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
                            onUpdate: function (progress) {
                                var scaleProgress = scaleCurve6(progress);
                                el2span.style.WebkitTransform = el2span.style.transform = 'scale3d(' + progress + ',' + progress + ',1)';
                            }
                        })
                    ],
                    onCheck: function () {
                        el2.style.color = '#9564d4';
                    },
                    onUnCheck: function () {
                        el2.style.color = '#9564d4';
                    }
                });


                /*Icon3*/
                var el3 = items[2].querySelector('button.icobutton'), el3span = el3.querySelector('.platform-icon');
                new Animocon(el3, {
                    tweens: [
                        // burst animation
                        new mojs.Burst({
                            parent: el3,
                            duration: 1500,
                            shape: 'circle',
                            fill: 'white',
                            x: '50%',
                            y: '50%',
                            childOptions: {
                                radius: {12: 0},
                                type: 'line',
                                stroke: '#9fdb69',
                                strokeWidth: 1
                            },
                            radius: {10: 50},
                            count: 20,
                            isRunLess: true,
                            easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                        }),
                        new mojs.Tween({
                            duration: 800,
                            easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
                            onUpdate: function (progress) {
                                var scaleProgress = scaleCurve6(progress);
                                el3span.style.WebkitTransform = el3span.style.transform = 'scale3d(' + progress + ',' + progress + ',1)';
                            }
                        })
                    ],
                    onCheck: function () {
                        el3.style.color = '#9fdb69';
                    },
                    onUnCheck: function () {
                        el3.style.color = '#9fdb69';
                    }
                });
                /*Icon4*/
                var el4 = items[3].querySelector('button.icobutton'), el4span = el4.querySelector('.platform-icon');
                new Animocon(el4, {
                    tweens: [
                        // burst animation
                        new mojs.Burst({
                            parent: el4,
                            duration: 1500,
                            shape: 'circle',
                            fill: 'white',
                            x: '50%',
                            y: '50%',
                            childOptions: {
                                radius: {12: 0},
                                type: 'line',
                                stroke: '#febd41',
                                strokeWidth: 1
                            },
                            radius: {10: 50},
                            count: 20,
                            isRunLess: true,
                            easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                        }),
                        new mojs.Tween({
                            duration: 800,
                            easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
                            onUpdate: function (progress) {
                                var scaleProgress = scaleCurve6(progress);
                                el4span.style.WebkitTransform = el4span.style.transform = 'scale3d(' + progress + ',' + progress + ',1)';
                            }
                        })
                    ],
                    onCheck: function () {
                        el4.style.color = '#febd41';
                    },
                    onUnCheck: function () {
                        el4.style.color = '#febd41';
                    }
                });


            }

            init();


        }


        if ($('.logic-anim-section').length > 0) {
            platformIconAnimation();
        }


        $('.logic-anim-section').find('.logic-anim-block').hover(function () {
            $(this).find('button').trigger('click');
            $(this).find('.platform-icon').toggle();
        }, function () {
            $(this).find('button').trigger('click');
            $(this).find('.platform-icon').toggle();
        });



        /*Contest sub category selection show hide depend on selection of main category*/
        $('.contest-main-cat').on('change', function(){

            if($(this).val() !== ''){
                $(this).siblings('.contest-sub-cat').show();
            }else{
                $(this).siblings('.contest-sub-cat').hide();
            }
        });

        /*This section is used to validate contest creation form*/
        (function () {
            var steps = 1;
                var steps_title_string = {
                  poll:{
                      1:'Poll',
                      2:'Settings',
                      3:'Share'

                  },
                   contest:{
                       1:'Contest Brief',
                       2:'Settings',
                       3: 'Promote'
                   }
                };
            $('.creation-next-step-btn').on('click', function () {
                var button = $(this);
                var contestType = $(this).data('type');
                var submitBtn = button.siblings('.share-and-post-btn');
                var allContainer = $(document).find('.creation-settings .creation-steps');
                var currentContainer = $(document).find('.creation-settings .active-step');
                var requiredFields =  currentContainer.find('.required');
                // return false;
                var valid = false, invalid = [];


                // if(requiredFields.length<1) valid = true;


                requiredFields.each(function () {
                    if($(this).val().trim() === ''){
                        invalid.push(this.tagName);
                        $(this).addClass("warning");
                    }
                });
                if(invalid.length<1){ valid = true ;}

                console.log('validation '+ valid);
                console.log(invalid);
                console.log(requiredFields.length);

                if(valid){
                    currentContainer.removeClass('active-step').hide();
                    currentContainer.next('.creation-steps').addClass('active-step').show();

                    // $('.progress-'+ steps).addClass('active');
                    if(steps == 1){
                        $('.progress-1').addClass('active');
                        setTimeout(function () {

                            $('.progress-2').find('span').addClass('active');

                        }, 700);
                        console.log(steps);
                    }
                    if(steps == 2){
                        $('.progress-2').addClass('active');
                        setTimeout(function () {

                            $('.progress-3').find('span').addClass('active');

                        }, 700);
                            button.hide();
                            submitBtn.show();
                    }

                    steps = steps+1;
                    $('.step-number').text('0' + steps+'.');
                    $('.stepPoll').text('0' + steps+'.');
                    $('.step-title').text(steps_title_string[contestType][steps]);

                }

                return false;
            });
        })();



        /*Joined date filter custom date selector*/
        $(".join-date-filter").find('input').on('change', function () {
            var JoinedDate = $(this).data("joined-date");
            if (JoinedDate == 'custom') {
                $(".custom-joined-date-filter").fadeIn("fast");
            } else {
                $(".custom-joined-date-filter").fadeOut("fast");
            }
        });




        // Initialize ajax autocomplete:
       // https://github.com/devbridge/jQuery-Autocomplete
        var countries = {
            "AD": "Andorra",
            "A2": "Andorra Test",
            "AE": "United Arab Emirates",
            "AF": "Afghanistan",
            "AG": "Antigua and Barbuda",
            "AI": "Anguilla",
            "AL": "Albania",
            "AM": "Armenia",
            "AN": "Netherlands Antilles",
            "AO": "Angola",
            "AQ": "Antarctica",
            "AR": "Argentina",
            "AS": "American Samoa",
            "AT": "Austria",
            "AU": "Australia",
            "AW": "Aruba",
            "AX": "\u00c5land Islands",
            "AZ": "Azerbaijan",
            "BA": "Bosnia and Herzegovina",
            "BB": "Barbados",
            "BD": "Bangladesh",
            "BE": "Belgium",
            "BF": "Burkina Faso",
            "BG": "Bulgaria",
            "BH": "Bahrain",
            "BI": "Burundi",
            "BJ": "Benin",
            "BL": "Saint Barth\u00e9lemy",
            "BM": "Bermuda",
            "BN": "Brunei",
            "BO": "Bolivia",
            "BQ": "British Antarctic Territory",
            "BR": "Brazil",
            "BS": "Bahamas",
            "BT": "Bhutan",
            "BV": "Bouvet Island",
            "BW": "Botswana",
            "BY": "Belarus",
            "BZ": "Belize",
            "CA": "Canada",
            "CC": "Cocos [Keeling] Islands",
            "CD": "Congo - Kinshasa",
            "CF": "Central African Republic",
            "CG": "Congo - Brazzaville",
            "CH": "Switzerland",
            "CI": "C\u00f4te d\u2019Ivoire",
            "CK": "Cook Islands",
            "CL": "Chile",
            "CM": "Cameroon",
            "CN": "China",
            "CO": "Colombia",
            "CR": "Costa Rica",
            "CS": "Serbia and Montenegro",
            "CT": "Canton and Enderbury Islands",
            "CU": "Cuba",
            "CV": "Cape Verde",
            "CX": "Christmas Island",
            "CY": "Cyprus",
            "CZ": "Czech Republic",
            "DD": "East Germany",
            "DE": "Germany",
            "DJ": "Djibouti",
            "DK": "Denmark",
            "DM": "Dominica",
            "DO": "Dominican Republic",
            "DZ": "Algeria",
            "EC": "Ecuador",
            "EE": "Estonia",
            "EG": "Egypt",
            "EH": "Western Sahara",
            "ER": "Eritrea",
            "ES": "Spain",
            "ET": "Ethiopia",
            "FI": "Finland",
            "FJ": "Fiji",
            "FK": "Falkland Islands",
            "FM": "Micronesia",
            "FO": "Faroe Islands",
            "FQ": "French Southern and Antarctic Territories",
            "FR": "France",
            "FX": "Metropolitan France",
            "GA": "Gabon",
            "GB": "United Kingdom",
            "GD": "Grenada",
            "GE": "Georgia",
            "GF": "French Guiana",
            "GG": "Guernsey",
            "GH": "Ghana",
            "GI": "Gibraltar",
            "GL": "Greenland",
            "GM": "Gambia",
            "GN": "Guinea",
            "GP": "Guadeloupe",
            "GQ": "Equatorial Guinea",
            "GR": "Greece",
            "GS": "South Georgia and the South Sandwich Islands",
            "GT": "Guatemala",
            "GU": "Guam",
            "GW": "Guinea-Bissau",
            "GY": "Guyana",
            "HK": "Hong Kong SAR China",
            "HM": "Heard Island and McDonald Islands",
            "HN": "Honduras",
            "HR": "Croatia",
            "HT": "Haiti",
            "HU": "Hungary",
            "ID": "Indonesia",
            "IE": "Ireland",
            "IL": "Israel",
            "IM": "Isle of Man",
            "IN": "India",
            "IO": "British Indian Ocean Territory",
            "IQ": "Iraq",
            "IR": "Iran",
            "IS": "Iceland",
            "IT": "Italy",
            "JE": "Jersey",
            "JM": "Jamaica",
            "JO": "Jordan",
            "JP": "Japan",
            "JT": "Johnston Island",
            "KE": "Kenya",
            "KG": "Kyrgyzstan",
            "KH": "Cambodia",
            "KI": "Kiribati",
            "KM": "Comoros",
            "KN": "Saint Kitts and Nevis",
            "KP": "North Korea",
            "KR": "South Korea",
            "KW": "Kuwait",
            "KY": "Cayman Islands",
            "KZ": "Kazakhstan",
            "LA": "Laos",
            "LB": "Lebanon",
            "LC": "Saint Lucia",
            "LI": "Liechtenstein",
            "LK": "Sri Lanka",
            "LR": "Liberia",
            "LS": "Lesotho",
            "LT": "Lithuania",
            "LU": "Luxembourg",
            "LV": "Latvia",
            "LY": "Libya",
            "MA": "Morocco",
            "MC": "Monaco",
            "MD": "Moldova",
            "ME": "Montenegro",
            "MF": "Saint Martin",
            "MG": "Madagascar",
            "MH": "Marshall Islands",
            "MI": "Midway Islands",
            "MK": "Macedonia",
            "ML": "Mali",
            "MM": "Myanmar [Burma]",
            "MN": "Mongolia",
            "MO": "Macau SAR China",
            "MP": "Northern Mariana Islands",
            "MQ": "Martinique",
            "MR": "Mauritania",
            "MS": "Montserrat",
            "MT": "Malta",
            "MU": "Mauritius",
            "MV": "Maldives",
            "MW": "Malawi",
            "MX": "Mexico",
            "MY": "Malaysia",
            "MZ": "Mozambique",
            "NA": "Namibia",
            "NC": "New Caledonia",
            "NE": "Niger",
            "NF": "Norfolk Island",
            "NG": "Nigeria",
            "NI": "Nicaragua",
            "NL": "Netherlands",
            "NO": "Norway",
            "NP": "Nepal",
            "NQ": "Dronning Maud Land",
            "NR": "Nauru",
            "NT": "Neutral Zone",
            "NU": "Niue",
            "NZ": "New Zealand",
            "OM": "Oman",
            "PA": "Panama",
            "PC": "Pacific Islands Trust Territory",
            "PE": "Peru",
            "PF": "French Polynesia",
            "PG": "Papua New Guinea",
            "PH": "Philippines",
            "PK": "Pakistan",
            "PL": "Poland",
            "PM": "Saint Pierre and Miquelon",
            "PN": "Pitcairn Islands",
            "PR": "Puerto Rico",
            "PS": "Palestinian Territories",
            "PT": "Portugal",
            "PU": "U.S. Miscellaneous Pacific Islands",
            "PW": "Palau",
            "PY": "Paraguay",
            "PZ": "Panama Canal Zone",
            "QA": "Qatar",
            "RE": "R\u00e9union",
            "RO": "Romania",
            "RS": "Serbia",
            "RU": "Russia",
            "RW": "Rwanda",
            "SA": "Saudi Arabia",
            "SB": "Solomon Islands",
            "SC": "Seychelles",
            "SD": "Sudan",
            "SE": "Sweden",
            "SG": "Singapore",
            "SH": "Saint Helena",
            "SI": "Slovenia",
            "SJ": "Svalbard and Jan Mayen",
            "SK": "Slovakia",
            "SL": "Sierra Leone",
            "SM": "San Marino",
            "SN": "Senegal",
            "SO": "Somalia",
            "SR": "Suriname",
            "ST": "S\u00e3o Tom\u00e9 and Pr\u00edncipe",
            "SU": "Union of Soviet Socialist Republics",
            "SV": "El Salvador",
            "SY": "Syria",
            "SZ": "Swaziland",
            "TC": "Turks and Caicos Islands",
            "TD": "Chad",
            "TF": "French Southern Territories",
            "TG": "Togo",
            "TH": "Thailand",
            "TJ": "Tajikistan",
            "TK": "Tokelau",
            "TL": "Timor-Leste",
            "TM": "Turkmenistan",
            "TN": "Tunisia",
            "TO": "Tonga",
            "TR": "Turkey",
            "TT": "Trinidad and Tobago",
            "TV": "Tuvalu",
            "TW": "Taiwan",
            "TZ": "Tanzania",
            "UA": "Ukraine",
            "UG": "Uganda",
            "UM": "U.S. Minor Outlying Islands",
            "US": "United States",
            "UY": "Uruguay",
            "UZ": "Uzbekistan",
            "VA": "Vatican City",
            "VC": "Saint Vincent and the Grenadines",
            "VD": "North Vietnam",
            "VE": "Venezuela",
            "VG": "British Virgin Islands",
            "VI": "U.S. Virgin Islands",
            "VN": "Vietnam",
            "VU": "Vanuatu",
            "WF": "Wallis and Futuna",
            "WK": "Wake Island",
            "WS": "Samoa",
            "YD": "People's Democratic Republic of Yemen",
            "YE": "Yemen",
            "YT": "Mayotte",
            "ZA": "South Africa",
            "ZM": "Zambia",
            "ZW": "Zimbabwe",
            "ZZ": "Unknown or Invalid Region"
        };
        var countriesArray = $.map(countries, function (value, key) { return { value: value, data: key }; });
        $('.logic-search-box').autocomplete({
            // serviceUrl: '/assets/media/countries.js',
            lookup: countriesArray,
            lookupFilter: function(suggestion, originalQuery, queryLowerCase) {
                var re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi');
                return re.test(suggestion.value);
            },
            onSelect: function(suggestion) {
                $('#selction-ajax').html('You selected: ' + suggestion.value + ', ' + suggestion.data);
            },
            onHint: function (hint) {
                $('#autocomplete-ajax-x').val(hint);
            },
            onInvalidateSelection: function() {
                $('#selction-ajax').html('You selected: none');
            }
        });


        /*Adjust dropdown opening direction*/
        $(document).on("shown.bs.dropdown", ".dropdown", function () {
            var $ul = $(this).children(".dropdown-menu");
            var $button = $(this).children(".dropdown-toggle");
            var ulOffset = $ul.offset();
            var spaceUp = (ulOffset.top - $button.height() - $ul.height()) - $(window).scrollTop();
            var spaceDown = $(window).scrollTop() + $(window).height() - (ulOffset.top + $ul.height());
            if (spaceDown < 0 && (spaceUp >= 0 || spaceUp > spaceDown))
                $(this).addClass("dropup");
        }).on("hidden.bs.dropdown", ".dropdown", function() {
            $(this).removeClass("dropup");
        });
        
        
        //post carousel
        $('.carousel-post').owlCarousel({
            pagination: false,
            navigation: true,
            rewindNav: false,
            navigationText: ['<i class="gg-previous-mini"></i>','<i class="gg-next-mini"></i>'],
//            autoWidth: true,
            items: 3,
            itemsDesktop : [1199,3],
//            itemsDesktopSmall : [980,3],
//            itemsTablet: [768,3],
//            itemsTabletSmall: false,
//            itemsMobile : [479,3]
        });


        //Read more post
//        $('article .info').readmore({
//            speed: 100,
//            collapsedHeight: 80,
//            moreLink: '<a href="#">More</a>',
//            lessLink: '<a href="#">Less</a>'
//        });
        
        
       $("article .info").shorten({
            "showChars" : 200,
            "moreText"  : "See More",
            "lessText"  : "Less",
       });
        
        
        //profile edit option
        $('.edit-btn').click(function(e){
            e.preventDefault();
           $(this).closest('.profile-edit').addClass('editable'); 
        });
        $('.edit-btn-social').click(function(e){
            e.preventDefault();
           $(this).closest('.profile-edit').toggleClass('toggle-editable'); 
        });
        
         $('.edit-cancel').click(function(e){
            e.preventDefault();
           $(this).closest('.profile-edit').removeClass('editable'); 
        });
        
        
        
        
        /*Advance search build drop down menu based on select item*/
        (function () {
            var dropDownMenu = $('<ul class="dropdown-menu">'), dropDownItem, dropDownItemAnchor;
            $("#search-category option").each(function () {
                var ItemValue =  $(this).val();
                var ItemName =  $(this).text();
                var itemSelected = $(this).is(':selected');
                dropDownItem = $("<li>");
                if(itemSelected){
                    dropDownItem.addClass("selected");
                }
                dropDownItemAnchor = $("<a href='#' data-value=''>");
                dropDownItemAnchor.attr('data-value', ItemValue);
                dropDownItemAnchor.text(ItemName);
                dropDownItemAnchor.on('click', function () {
                       $(this).parent("li").siblings("li").removeClass("selected");
                       $(this).parent("li").addClass("selected");
                    var ItemValue =  $(this).data('value');
                    $("#search-category").val(ItemValue).change();
                });
                dropDownItem.append(dropDownItemAnchor);
                dropDownMenu.append(dropDownItem);
            });
            $("#category-select-dropdown").replaceWith(dropDownMenu);

        })();


        $("#search-category").on('change', function () {
            var selectedText = $("#search-category option:selected" ).text();
            console.log(selectedText);
            $(".selected-category").text(selectedText);
        });


        //Meosnary grid
        function masonwork(){
            jQuery('.grid-post').masonry({
                isAnimated: true,
                animationOptions: {
                    duration: 0,
                    easing: 'linear',
                    queue: false
                }
            });
        }


        //temporary Must be removed later

        (function () {
            var active = window.location.href.split('/')[window.location.href.split('/').length-1];
            if(active == 'profile-timecapsule.php'){
                $('.pfl-nav-left li').removeClass('active');
                // $('.pfl-nav-left li').addClass('active');
                $($('.pfl-nav-left li').get(0)).addClass('active');
            }

            if(active == 'profile.php'){
                $('.pfl-nav-left li').removeClass('active');
                $($('.pfl-nav-left li').get(1)).addClass('active');
            }
            if(active == 'profile-contest.php'){
                $('.pfl-nav-left li').removeClass('active');
                // $('.pfl-nav-left li').addClass('active');
                $($('.pfl-nav-left li').get(2)).addClass('active');
            }

            //Navigation contest
            if(active == 'single-contest-cover.php'){
                $('.nav-contest ul li').removeClass('active');
                // $('.pfl-nav-left li').addClass('active');
                $($('.nav-contest ul li').get(0)).addClass('active');
            }

            if(active == 'single-contest3.php'){
                $('.nav-contest ul li').removeClass('active');
                // $('.pfl-nav-left li').addClass('active');
                $($('.nav-contest ul li').get(1)).addClass('active');
            }



        })();

        
        //for height 
        //contest create 
        $(".contest-tags").select2({
            tags: true,
            placeholder: '+ Add Tag'
        });



    });
})(jQuery);

 