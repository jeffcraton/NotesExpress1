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
        //alert("Handler for save.click() called.");
    });
    $("#icoTrash").click(function () {
        //alert("Handler for trash.click() called.");
    });
    $("#currentdate").text(new Date());
    //
    // how do I tell if this is a new note?
    //
});