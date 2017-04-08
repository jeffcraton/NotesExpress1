//
// run the grid demo 
//
$(document).ready(function () {

    var notesObj = [];

    $.ajax({
        url: '/notesapi',
        success: function (xdata) {
            //alert('s-data: ' + JSON.stringify(data));
            //
            // redirect to root of articles
            //
            //window.location.href = "/";

            $("#jsGrid").jsGrid({
                width: "100%",
                height: "400px",

                inserting: false,
                editing: false,
                sorting: true,
                paging: true,
                rowClick: function (args) {
                    var idx = args["itemIndex"];
                    var idstr = xdata[idx]["_id"];
                    window.location.href = "/viewnote/" + idstr;
                },
                data: xdata,

                fields: [
                    { name: "CreationDate", type: "text", width: 50 },
                    { name: "Subject", type: "text", width: 100 },
                    { name: "RevisionDate", type: "text", width: 50 },
                    { name: "_id", type: "text", visible: false }
                ]
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('e-data: ' + JSON.stringify(data));
        },
        contentType: "application/json",
        dataType: 'json'
    });


    /*var notesObj = [
        { "DateAdded": "2017-03-17", "Subject": "Test 1", "DateUpdated": "2017-03-22", "id": "sdfsdf1"},
        { "DateAdded": "2017-03-18", "Subject": "Test 2", "DateUpdated": "2017-03-22", "id": "sdfsdf2" },
        { "DateAdded": "2017-03-19", "Subject": "Test 3", "DateUpdated": "2017-03-22", "id": "sdfsdf3" },
        { "DateAdded": "2017-03-20", "Subject": "Test 4", "DateUpdated": "2017-03-22", "id": "sdfsdf4" },
        { "DateAdded": "2017-03-21", "Subject": "Test 5", "DateUpdated": "2017-03-22", "id": "sdfsdf5" }
    ]; */


    $("#icoCreate").click(function () {
        window.location.href = "/addnote";
    });
});