// check a URL is valid or not
function isValidUrl(url){

    if(/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(url)) {
        return true;
    } else {
        return false;
    }
}

// check social icons
var checkSocialIcon = function(url){
    if(url.indexOf('facebook.')>-1 || url.indexOf('fb.')>-1){

        return 'facebook';

    }else if(url.indexOf('twitter.')>-1 ){

        return 'twitter';

    }else if(url.indexOf('linkedin.')>-1 ){

        return 'linkedin';

    }else if(url.indexOf('google')>-1 ){

        return 'google-plus';

    }else if(url.indexOf('instagram')>-1 ){

        return 'instagram';

    }else if(url.indexOf('youtube')>-1 ){

        return 'youtube';

    }else if(url.indexOf('flickr')>-1 ){

        return 'flickr';

    }else if(url.indexOf('dribbble')>-1 ){

        return 'flickr';

    }else{
        return 'globe';
    }

}

// show text field to add social link
/*
$('.social-add').on('click', 'a', function () {
    var current=  $(this);
    $(this).hide();
    var textBoxHtml = '<div id="social-add-form">';
        textBoxHtml = textBoxHtml + '<input type="url" class="form-control" placeholder="Social Url">';
        textBoxHtml = textBoxHtml +  '<button class="btn btn-blue submit">Submit</button>';
        textBoxHtml = textBoxHtml +  '<button class="btn btn-gray cancel">Cancel</button>';
        textBoxHtml = textBoxHtml +  '</div>';
    current.before(textBoxHtml);
});

$('.social-add').on('click', '.cancel', function () {
    $('#social-add-form').detach();
    $('.social-add > a').show();
});*/
