function handleFileSelect(evt) {
    document.getElementById('images').innerHTML='';
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

        // Only process image files.
        if (!f.type.match('image.*')) {
            continue;
        }

        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function (theFile) {
            return function (e) {
                // Render thumbnail.
                var span = document.createElement('div');
                span.innerHTML = ['<img class="direct-chat-img" src="', e.target.result,
                    '" title="', escape(theFile.name), '"/>'].join('');
                document.getElementById('images').insertBefore(span, null);
                // document.getElementById('storeImages').value += ',' + escape(theFile.name);
                // console.log(escape(theFile.name));

            };
        })(f);

        // Read in the image file as a data URL.
        reader.readAsDataURL(f);
    }
}