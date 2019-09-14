window.onload = function(){


    $.gsr("13Ouk8KlnEn954LSSxscQEnmqOkM9R3A4Iy2pof_RdJQ", loadTable);

    function loadTable(data) {
        let table = document.querySelector("table");
        generateTableHead(table, data.knownHeaders);
        generateTable(table, data.knownHeaders, data.table);
    };


    function generateTableHead(table, data) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
    }

    function generateTable(table, header, data) {
        for (let element of data) {
            let row = table.insertRow();
            var idx = 0;
            for (key in element) {
                while (key != header[idx]) {
                    let cell = row.insertCell();
                    let text = document.createTextNode("");
                    cell.appendChild(text);
                    idx += 1;
                }
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
                idx += 1;
            }
            while(document.querySelector("tr").children.length != idx) {
                let cell = row.insertCell();
                let text = document.createTextNode("");
                cell.appendChild(text);
                idx+=1;
            }
        }
    }

}