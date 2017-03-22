//
// run the grid demo 
//
$(document).ready(function () {

    var notesObj = [
        { "DateAdded": "2017-03-17", "Subject": "Test 1", "DateUpdated": "2017-03-22", "id": "sdfsdf1"},
        { "DateAdded": "2017-03-18", "Subject": "Test 2", "DateUpdated": "2017-03-22", "id": "sdfsdf2" },
        { "DateAdded": "2017-03-19", "Subject": "Test 3", "DateUpdated": "2017-03-22", "id": "sdfsdf3" },
        { "DateAdded": "2017-03-20", "Subject": "Test 4", "DateUpdated": "2017-03-22", "id": "sdfsdf4" },
        { "DateAdded": "2017-03-21", "Subject": "Test 5", "DateUpdated": "2017-03-22", "id": "sdfsdf5" }
    ];

    $("#jsGrid").jsGrid({
        width: "100%",
        height: "400px",

        inserting: false,
        editing: false,
        sorting: true,
        paging: true,
        rowClick: function (args) {
            var idx = args["itemIndex"];
            var idstr = notesObj[idx]["id"];
            window.location.href = "/viewnote/" + idstr;
        },
        data: notesObj,

        fields: [
            { name: "DateAdded", type: "text", width: 150, validate: "required" },
            { name: "Subject", type: "text", width: 50 },
            { name: "DateUpdated", type: "text", width: 200 },
            { name: "id", type: "text", visible: false }
        ]
    });

});