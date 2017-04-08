//
// set up objects for viewnote.
//
$(document).ready(function () {
    //
    // set up tooltips
    //
    $(document).tooltip();

    //alert(noteid);

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
        //alert("Handler for save.click() called.");
    });
    $("#icoTrash").click(function () {
        //alert("Handler for trash.click() called.");
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
            $("#currentdate").html( xdata["CreationDate"] );
            $("#notesubject").val(xdata["Subject"]);
            quill.setContents( JSON.parse( xdata["Body"] ) );
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('e-data: ' + JSON.stringify(data));
        },
        contentType: "application/json",
        dataType: 'json'
    });
});