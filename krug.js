(function ($) {
Drupal.behaviors.krug_media_auto_upload = {
        attach: function(context) {
        $('#media-add-upload input.form-submit').css("display", "none");
        $('#media-add-upload input.form-file:not(.auto_upload-processed)', context).addClass('auto_upload-processed').change(function() { 
                $('#media-add-upload').submit();
            });
        },      
}

})(jQuery);

