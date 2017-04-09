//
// set up objects for viewnote.
//

$(document).ready(function () {
    $(document).tooltip();

    //
    // execute after the page has been loaded
    //
    var quill = new Quill('#editor', {
        theme: 'snow',
        background: "#c0c0c0",
    });

    var notetaggle = new Taggle('notetags');
    //
    // style buttons
    //
    $("#icoSave").click(function () {
        var vSubject = $("#notesubject").val();
        var taglist = JSON.stringify(notetaggle.getTagValues() );
        // reverse is JSON.parse
        var vBody = JSON.stringify(quill.getContents());
        var vData = {
            Subject: vSubject,
            Body: vBody,
            Tags: taglist,
        };

        $.ajax({
            type: 'POST',
            url: '/notesapi',
            data: JSON.stringify(vData),
            success: function (data) {
                //alert('s-data: ' + JSON.stringify(data));
                //
                // redirect to root of articles
                //
                window.location.href = "/";
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('e-data: ' + JSON.stringify(data));
            },
            contentType: "application/json",
            dataType: 'json'
        });
    });
});