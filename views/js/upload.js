$(document).ready(function() {

    status('Choose a file :)');

    var timerId;
    timerId = setInterval(function() {
        if($('#userPhotoInput').val() !== '') {
            clearInterval(timerId);

            $('#uploadForm').submit();
        }
    }, 500);

    $('#uploadForm').submit(function() {
        status('uploading the file ...');

        $(this).ajaxSubmit({
            dataType: 'text',

            error: function(xhr) {
                status('Error: ' + xhr.status);
            },

            success: function(response) {

                try {
                    response = $.parseJSON(response);
                }
                catch(e) {
                    status('Bad response from server');
                    return;
                }

                if(response.error) {
                    status('Oops, something bad happened');
                    return;
                }

                var imageUrlOnServer = response.path;

                status('Success, file uploaded to:' + imageUrlOnServer);
            }
        });

        return false;
    });

    function status(message) {
        $('#status').text(message);
    }
});
