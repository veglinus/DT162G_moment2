var ajax = new XMLHttpRequest;

ajax.onreadystatechange = function() {
    if (this.status == 200) {
        //console.log(this.responseText);
        var jsondata = JSON.parse(this.responseText);
        var table = document.getElementById("courses");

        console.log(table);

        jsondata.forEach(row => {

            var newrow = table.insertRow(1);

            var cell1 = newrow.insertCell(0);
            var cell2 = newrow.insertCell(1);
            var cell3 = newrow.insertCell(2);
            var cell4 = newrow.insertCell(3);
            var cell5 = newrow.insertCell(4);

            cell1.innerHTML = row["_id"];
            cell2.innerHTML = row["courseId"];
            cell3.innerHTML = row["courseName"];
            cell4.innerHTML = row["coursePeriod"];
            cell5.innerHTML = "";

        });



        // TODO: insert into rows of table
        // TODO: Implement API
    }
}

ajax.open("GET", "/data", false);
ajax.send();