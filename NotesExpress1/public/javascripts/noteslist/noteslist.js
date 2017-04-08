﻿//
// run the grid demo 
//
$(document).ready(function () {

    var notesObj = [];

    $.ajax({
        url: '/notesapi',
        success: function (xdata) {
            //
            // redirect to root of articles
            //
            $("#jsGrid").jsGrid({
                width: "100%",
                height: "auto",
                controller: {
                    loadData: $.noop,
                    insertItem: $.noop,
                    updateItem: function (args) {
                        alert(JSON.stringify(args));
                    },
                    deleteItem: function (rowvalues) {

                        $.ajax({
                            type: 'DELETE',
                            url: '/notesapi/' + rowvalues["_id"],
                            //data: JSON.stringify(vData),
                            success: function (data) {
                                alert('s-data: ' + JSON.stringify(data));
                                //
                                // redirect to root of articles
                                //
                                var vobj = 1;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                alert('e-data: ' + JSON.stringify(data));
                            },
                            contentType: "application/json",
                            dataType: 'json'
                        });

                    }
                },
                filtering: false,
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
                deleteConfirm: "Do you really want to delete this note?",
                fields: [
                    { name: "CreationDate", type: "text", width: 50, title:"Creation Date"},
                    { name: "Subject", type: "text", width: 100, title: "Subject" },
                    { name: "RevisionDate", type: "text", width: 50, title: "Revision Date" },
                    { name: "_id", type: "text", visible: false },
                    { type: "control" }
                ]
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('e-data: ' + JSON.stringify(data));
        },
        contentType: "application/json",
        dataType: 'json'
    });

    $("#icoCreate").click(function () {
        window.location.href = "/addnote";
    });
});