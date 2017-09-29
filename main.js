function changeDisplay(counter){
	var display = document.getElementsByClassName("badge badge-info");
	var total;
	for (var i = 0; i < display.length;i++ ){
		total = display[i].innerHTML;
		display[i].innerHTML = (parseInt(total) - counter);
	}

	var display2 = document.getElementById("totalOverAllPacks") ;
	display2.innerHTML = parseInt(total) - counter;
}

function addNumCol(){
    var table = document.getElementById("postingsTable");
	for (var i = 0; i < table.rows.length; i++) {
        var x = table.rows[i].insertCell(0);
        var newText  = document.createTextNode(i);
        x.appendChild(newText);
    }
}

function removeCol(){
    var table = document.getElementById("postingsTable");
    if (table.rows[0].cells.length>=12){
        // removes ID, Division, Level, Application Deadline and Empty Column
        var dCols = [1, 3, 7, 8, 8];
        for(var i=0; i<dCols.length;i++){
            for (var j = 0, row; row = table.rows[j]; j++) {
                table.rows[j].deleteCell(dCols[i]);
            }
        }
        addNumCol();
    }
}

function removeRejects() {
    var table = document.getElementById("postingsTable");
	var counter = 0;
    for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
            if(table.rows[i].cells[j].innerHTML.includes("Selected for Interview")){
                break;
            }
            else if(table.rows[i].cells[j].innerHTML.includes("Filled")){
                table.deleteRow(i);
                i--;
                counter++;
                break;
            }
            else if(table.rows[i].cells[j].innerHTML.includes("Emp Rankings Finalized")){
                table.deleteRow(i);
                i--;
                counter++;
                break;
            }
            else if(table.rows[i].cells[j].innerHTML.includes("Interview Complete")){
                table.deleteRow(i);
                i--;
                counter++;
                break;
            }
            else if(table.rows[i].cells[j].innerHTML.includes("Interview Selections Complete")){
                table.deleteRow(i);
                i--;
                counter++;
                break;
            }
            else if(table.rows[i].cells[j].innerHTML.includes("Cancel")){
                table.deleteRow(i);
                i--;
                counter++;
                break;
            }
        }
    }
    if (table.rows[0].cells[0].innerHTML.includes(0)){
        for (var i = 0, row; row = table.rows[i]; i++) {
            table.rows[i].deleteCell(0);
        }
        addNumCol();
    }
    changeDisplay(counter);
}

var div = document.querySelector("#filterForm > div");
var rejectRejections = document.createElement('button');
rejectRejections.innerHTML = "Reject Rejections"
rejectRejections.type = "button";
rejectRejections.className = "btn btn-small";
// rejectRejections.onclick = removeRejects()
rejectRejections.addEventListener ("click", function() {
    removeRejects();
});
div.appendChild(rejectRejections);