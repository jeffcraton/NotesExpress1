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
        var vSubject = "Test subject information";
        var vBody = "this is test data";
        // Assign handlers immediately after making the request,
        // and remember the jqxhr object for this request
        var jqxhr = $.post("/notesapi", { subject: vSubject, body: vBody }).done(function () {
                alert("second success");
        }).fail(function () {
                alert("error");
        }).always(function () {
            alert("finished");
        });

        // Perform other work here ...

        // Set another completion function for the request above
        jqxhr.always(function () {
            alert("second finished");
        });
    });
});