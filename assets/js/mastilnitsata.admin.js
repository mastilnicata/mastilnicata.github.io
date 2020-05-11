jQuery(document).ready(function($){
    //alert('loaded');
    var mediaUploader;

    $('#btn-upload').on('click', function (e){
        e.preventDefault();
        if(mediaUploader)
        {
            mediaUploader.open();
            return;
        }
        mediaUploader = wp.media.frames.file_frame = wp.media({
            title: 'Choose media',
            button: {
                text: 'Choose media'
            },
            multiple: false
        });
        mediaUploader.on('select', function(){
            var attachment = mediaUploader.state().get('selection').first().toJSON();
            $('#profile_picture').val(attachment.url);
            $('#pic-preview').attr('src', attachment.url);
        });
        mediaUploader.open();
    });
});