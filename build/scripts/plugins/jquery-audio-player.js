;(function($) {

    $.jqueryAudioPlayer = function(element, options, window, document) {

        var defaults = {
            useIcon:false,

            buttons : {
                play: '',
                pause:'',
                volume:'',
                volumeMute:''
            },
            mode:'mini'

        };


        var isTouch		  = 'ontouchstart' in window,
            eStart		  = isTouch ? 'touchstart'	: 'mousedown',
            eMove		  = isTouch ? 'touchmove'	: 'mousemove',
            eEnd		  = isTouch ? 'touchend'	: 'mouseup',
            eCancel		  = isTouch ? 'touchcancel'	: 'mouseup';



        //Tags
        var albumArt ,
            title,
            album,
            artist;

        var plugin = this;

        plugin.settings = {};

        var $element = $(element),
            element = element;

        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
            //console.log("Settings");
            //console.log(plugin.settings);


            //Check if its a audio file otherwise return
            if( $element.prop( 'tagName' ).toLowerCase() != 'audio' )
                return false;

            var audioFile  = $element.attr( 'src' ),
                isAutoPlay = $element.get( 0 ).getAttribute( 'autoplay' ), isAutoPlay = isAutoPlay === '' || isAutoPlay === 'autoplay' ? true : false,
                isLoop	   = $element.get( 0 ).getAttribute( 'loop' ),		isLoop	   = isLoop		=== '' || isLoop	 === 'loop'		? true : false,
                isSupport  = false;

            if( typeof audioFile === 'undefined' ){
                $element.find("source").each(function(){
                    audioFile = $( this ).attr( 'src' );
                    if( typeof audioFile !== 'undefined' && canPlayType( audioFile ) )
                    {
                        isSupport = true;
                        return false;
                    }

                });
            }
            else if( canPlayType( audioFile ) ) isSupport = true;


            var thePlayer = $( '<div class="' + 'jquery-audio-player' + '">' + ( isSupport ? $( '<div>' ).append( $element.eq( 0 ).clone() ).html() : '<embed src="' + audioFile + '" width="0" height="0" volume="100" autostart="' + isAutoPlay.toString() +'" loop="' + isLoop.toString() + '" />' ) + '<div class="' + 'playpause' + '" title="' + 'play' + '"><a href="#">' + plugin.settings.buttons.play + '</a></div></div>' ),

                theAudio  = isSupport ? thePlayer.find( 'audio' ) : thePlayer.find( 'embed' ), theAudio = theAudio.get( 0 );


            if( isSupport )
            {
                thePlayer.find( 'audio' ).css( { 'width': 0, 'height': 0, 'visibility': 'hidden' } );
                thePlayer.append( '<div class="' + 'time' + ' ' + 'time-current' + '"></div><div class="' + 'bar' + '"><div class="' + 'bar-loaded' + '"></div><div class="' + 'bar-played' + '"></div></div><div class="' + 'time' + ' ' + 'time-duration' + '"></div><div class="' + 'volume' + '"><div class="' + 'volume-btn' + '" title="' + 'volume' + '"><a href="#">' + plugin.settings.buttons.volume + '</a></div><div class="' + 'volume-adjust' + '"><div><div></div></div></div></div>' );

                var theBar			  = thePlayer.find( '.bar'),
                    barPlayed	 	  = thePlayer.find( '.bar-played'),
                    barLoaded	 	  = thePlayer.find( '.bar-loaded' ),
                    timeCurrent		  = thePlayer.find( '.time-current'),
                    timeDuration	  = thePlayer.find( '.time-duration'),
                    volumeButton	  = thePlayer.find( '.volume-btn'),
                    volumeAdjuster	  = thePlayer.find( '.volume-adjust' + ' > div' ),
                    volumeDefault	  = 0,

                    adjustCurrentTime = function( e )
                    {
                        theRealEvent		 = isTouch ? e.originalEvent.touches[ 0 ] : e;
                        theAudio.currentTime = Math.round( ( theAudio.duration * ( theRealEvent.pageX - theBar.offset().left ) ) / theBar.width() );
                    },
                    adjustVolume = function( e )
                    {
                        theRealEvent	= isTouch ? e.originalEvent.touches[ 0 ] : e;
                        theAudio.volume = Math.abs( ( theRealEvent.pageY - ( volumeAdjuster.offset().top + volumeAdjuster.height() ) ) / volumeAdjuster.height() );
                    },
                    updateLoadBar = $.noop();

                var volumeTestDefault = theAudio.volume, volumeTestValue = theAudio.volume = 0.111;
                if( Math.round( theAudio.volume * 1000 ) / 1000 == volumeTestValue ) theAudio.volume = volumeTestDefault;
                else thePlayer.addClass( 'mute' );

                timeDuration.html( '&hellip;' );
                timeCurrent.text( secondsToTime( 0 ) );




                theAudio.addEventListener( 'loadeddata', function()
                {
                    timeDuration.text( secondsToTime( theAudio.duration ) );
                    volumeAdjuster.find( 'div' ).height( theAudio.volume * 100 + '%' );
                    volumeDefault = theAudio.volume;
                });


                theAudio.addEventListener( 'timeupdate', function()
                {
                    timeCurrent.text( secondsToTime( theAudio.currentTime ) );
                    barPlayed.width( ( theAudio.currentTime / theAudio.duration ) * 100 + '%' );
                });

                theAudio.addEventListener( 'volumechange', function()
                {
                    volumeAdjuster.find( 'div' ).height( theAudio.volume * 100 + '%' );
                    if( theAudio.volume > 0 && thePlayer.hasClass( 'mute' ) ) thePlayer.removeClass( 'mute' );
                    if( theAudio.volume <= 0 && !thePlayer.hasClass('mute' ) ) thePlayer.addClass('mute' );
                });




                theAudio.addEventListener( 'ended', function()
                {
                    thePlayer.removeClass('playing');
                });


                theAudio.addEventListener( 'ended', function()
                {
                    thePlayer.removeClass('playing');
                });

                theBar.on( eStart, function( e )
                    {
                        adjustCurrentTime( e );
                        theBar.on( eMove, function( e ) { adjustCurrentTime( e ); } );
                    })
                    .on( eCancel, function()
                    {
                        theBar.unbind( eMove );
                    });

                volumeButton.on( 'click', function()
                {
                    if( thePlayer.hasClass( 'mute' ) )
                    {
                        $( this ).find( 'a' ).html( plugin.settings.buttons.volume );
                        thePlayer.removeClass( 'mute' );
                        theAudio.volume = volumeDefault;
                    }
                    else
                    {
                        $( this ).find( 'a' ).html( plugin.settings.buttons.volumeMute );
                        thePlayer.addClass( 'mute' );
                        volumeDefault = theAudio.volume;
                        theAudio.volume = 0;
                    }
                    return false;
                });

                volumeAdjuster.on( eStart, function( e )
                    {
                        adjustVolume( e );
                        volumeAdjuster.on( eMove, function( e ) { adjustVolume( e ); } );
                    })
                    .on( eCancel, function()
                    {
                        volumeAdjuster.unbind( eMove );
                    });





            }



            else thePlayer.addClass('mini');

            if( isAutoPlay ) thePlayer.addClass('playing' );

            thePlayer.find( '.' + 'playpause' ).on( 'click', function()
            {
                //console.log(this);
                //console.log(thePlayer.hasClass('playing') );
                if( thePlayer.hasClass('playing') )
                {
                    $( this ).attr( 'title', 'pause' ).find( 'a' ).html( plugin.settings.buttons.play );
                    thePlayer.removeClass('playing');
                    isSupport ? theAudio.pause() : theAudio.Stop();
                }
                else
                {
                    $( this ).attr( 'title', 'playing' ).find( 'a' ).html( plugin.settings.buttons.pause );
                    thePlayer.addClass( 'playing' );
                    isSupport ? theAudio.play() : theAudio.Play();
                }
                return false;
            });

            thePlayer = $(thePlayer).wrapInner("<div class='player-controller'></div>");


            if(typeof ID3 == 'object'){


                ID3.loadTags(audioFile, function() {
                    var tags = ID3.getAllTags(audioFile);
                    var image = tags.picture,
                        title = tags.title,
                        album = tags.album,
                        artist = tags.artist;
                    if (image) {
                        var base64String = "";
                        for (var i = 0; i < image.data.length; i++) {
                            base64String += String.fromCharCode(image.data[i]);
                        }
                        var base64 = "data:" + image.format + ";base64," +
                            window.btoa(base64String);
                        image = base64;

                        var audioDetails = $("<div class='audio-details clearfix'>"+"<div class='album-art' >" + "<img src="+image +" />" + "</div>" +"<div class='tract-info'><p class='track-title'>"+title +"</p><p class='track-album'>"+album+ "</p></div>" + "</div>");

                        thePlayer = $(thePlayer).prepend(audioDetails);
                        $($element).replaceWith(thePlayer);

                    } else {
                        $($element).replaceWith(thePlayer);
                    }


                }, {
                    tags: ["title","artist","album","picture"]
                });





            }else{
                $($element).replaceWith(thePlayer);
            }
        }; //ended plugin.init


        //Helper Function
        var canPlayType = function canPlayType( file )
        {
            var audioElement = document.createElement( 'audio' );
            return !!( audioElement.canPlayType && audioElement.canPlayType( 'audio/' + file.split( '.' ).pop().toLowerCase() + ';' ).replace( /no/, '' ) );
        };

        var secondsToTime = function( secs )
        {
            var hours = Math.floor( secs / 3600 ), minutes = Math.floor( secs % 3600 / 60 ), seconds = Math.ceil( secs % 3600 % 60 );
            return ( hours == 0 ? '' : hours > 0 && hours.toString().length < 2 ? '0'+hours+':' : hours+':' ) + ( minutes.toString().length < 2 ? '0'+minutes : minutes ) + ':' + ( seconds.toString().length < 2 ? '0'+seconds : seconds );
        };





        plugin.init();

    };

    $.fn.jqueryAudioPlayer = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('jqueryAudioPlayer')) {
                var plugin = new $.jqueryAudioPlayer(this, options,window, document);
                $(this).data('jqueryAudioPlayer', plugin);
            }
        });

    }

})(jQuery);