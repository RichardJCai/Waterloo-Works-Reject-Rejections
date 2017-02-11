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
        for (var i = 0, row; row = table.rows[i]; i++) {
            for (var j = 0, col; col = row.cells[j]; j++) {
                if (j==1){
                    table.rows[i].deleteCell(j);
                }
            }
        }
        for (var i = 0, row; row = table.rows[i]; i++) {
            for (var j = 0, col; col = row.cells[j]; j++) {
                if (j==3){
                    table.rows[i].deleteCell(j);
                }
            }
        }
        for (var i = 0, row; row = table.rows[i]; i++) {
            for (var j = 0, col; col = row.cells[j]; j++) {
                if (j==6){
                    table.rows[i].deleteCell(j);
                }
            }
        }
        for (var i = 0, row; row = table.rows[i]; i++) {
            for (var j = 0, col; col = row.cells[j]; j++) {
                if (j==7){
                    table.rows[i].deleteCell(j);
                }
            }
        }
        for (var i = 0, row; row = table.rows[i]; i++) {
            for (var j = 0, col; col = row.cells[j]; j++) {
                if (j==8){
                    table.rows[i].deleteCell(j);
                }
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
		changeDisplay(counter);
}
	


var ul = document.getElementsByClassName("childMenu1 nav nav-list");
var rejectRejections = document.createElement('li');
rejectRejections.setAttribute('class','item');
rejectRejections.appendChild(document.createTextNode("Reject Rejections"));
rejectRejections.style.color = "white";
rejectRejections.onclick = removeRejects;

for (var i = 0; i< ul.length; ++i){
    ul[i].appendChild(rejectRejections);
}


var removeCols = document.createElement('li');
removeCols.setAttribute('class','item');
removeCols.appendChild(document.createTextNode("Remove Clutter"));
removeCols.style.color = "white";
removeCols.addEventListener('click',removeCol);

for (var i = 0; i< ul.length; ++i){
    ul[i].appendChild(removeCols);
}