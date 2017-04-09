//
// set up objects for viewnote.
//
var vArticleData = [];

$(document).ready(function () {
    //
    // set up tooltips
    //
    $(document).tooltip();

    //alert(noteid);
    var notetaggle = new Taggle('notetags');

    //
    // execute after the page has been loaded
    //
    var quill = new Quill('#editor', {
        theme: 'snow',
        background: "#c0c0c0",
    }); 
    //
    // style buttons
    //
    $("#icoSave").click(function () {
        var vSubject = $("#notesubject").val();
        var taglist = JSON.stringify(notetaggle.getTagValues());
        // reverse is JSON.parse
        var vBody = JSON.stringify(quill.getContents());
        var vData = {
            _id: vArticleData["_id"],
            Subject: vSubject,
            Body: vBody,
            Tags: taglist,
            CreationDate: vArticleData["CreationDate"],
            CreationName: vArticleData["CreationName"],
            RevisionName: vArticleData["RevisionName"],
            RevisionDate: new Date(),
        };

        $.ajax({
            type: 'PUT',
            url: '/notesapi/' + noteid,
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
    $("#icoTrash").click(function () {
        //
        // delete article. on success, redirecct to root.
        //
        $.ajax({
            type: 'DELETE',
            url: '/notesapi/' + vArticleData["_id"],
            //data: JSON.stringify(vData),
            success: function (data) {
                //
                // redirect to root of articles
                //
                window.location.href = "/";
            },
            error: function (jqXHR, textStatus, errorThrown) {
                //
                // something went wrong. show the data.
                //
                alert(errorThrown);
            },
            contentType: "application/json",
            dataType: 'json'
        });

    });
    //
    // load associated note data
    //
    $.ajax({
        url: '/notesapi/' + noteid,
        success: function (xdata) {
            //
            // set article values
            //
            vArticleData = xdata;
            $("#currentdate").html( xdata["CreationDate"] );
            $("#notesubject").val(xdata["Subject"]);
            notetaggle.add( JSON.parse( xdata["Tags"] ) );
            quill.setContents(JSON.parse(xdata["Body"]));

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('e-data: ' + JSON.stringify(data));
        },
        contentType: "application/json",
        dataType: 'json'
    });
});