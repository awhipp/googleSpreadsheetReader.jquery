(function ( $ ) {
    
    $.gsr = function (id, callback) {
        $.ajax({
            url: "https://spreadsheets.google.com/feeds/cells/" + id + "/1/public/values?alt=json",
            success: function(data) {
                var entries = data.feed.entry;

                var headers = [];
                var headerComplete = false;
                for(var i = 0; !headerComplete; i++) {
                    if (entries[i]["gs$cell"].row ==1 ) {
                        headers.push(entries[i]["gs$cell"]["$t"]);
                    } else {
                        headerComplete = true;
                    }
                }

                var table = [];
                var prevRow = -1;
                var currRow = -1;
                var tableRow = {};
                for(var i = 0; i < entries.length; i++) {
                    currRow = entries[i]["gs$cell"].row;
                    if (currRow != prevRow) {
                        prevRow = currRow;
                        if(Object.keys(tableRow).length > 0) {
                            table.push(tableRow);
                            tableRow = {};
                        }
                    }
                    if (currRow != 1 ) {
                        col = parseInt(entries[i]["gs$cell"]["col"])-1;
                        if (headers[col] == undefined) {
                            tableRow["Undefined Column #" + (col+1)] = entries[i]["gs$cell"]["$t"];
                        } else {
                            tableRow[headers[col]] = entries[i]["gs$cell"]["$t"];
                        }
                    }
                }
                table.push(tableRow);

                definition = {
                    knownHeaders: headers,
                    table: table
                }
                
                callback(definition);
            }
        });
    }

}( jQuery ));