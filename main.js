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

function remove() {
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
var li = document.createElement('li');
li.setAttribute('class','item');
li.appendChild(document.createTextNode("Reject Rejections"));
li.style.color = "white";
li.onclick = remove;

for (var i = 0; i< ul.length; ++i){
    ul[i].appendChild(li);
}