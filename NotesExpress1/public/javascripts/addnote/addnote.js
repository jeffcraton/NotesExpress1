//
// set up objects for viewnote.
//

$(document).ready(function () {
    $(document).tooltip();

    //
    // execute after the page has been loaded
    //
    var quill = new Quill('#editor', {
        theme: 'snow'
    });
    //
    // style buttons
    //
    $("#icoSave").click(function () {
        var vSubject = $("#notesubject").val();
        // reverse is JSON.parse
        var vBody =  JSON.stringify( quill.getContents() );
        var vData = {
            subject: vSubject,
            body: vBody,
        };
        // Assign handlers immediately after making the request,
        // and remember the jqxhr object for this request
        /*var jqxhr = $.post("/notesapi",vData).done(function () {
                alert("second success");
        }).fail(function () {
                alert("error");
        }).always(function () {
            alert("finished");
        }); */

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