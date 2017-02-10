function remove() {
    var table = document.getElementById("postingsTable");
    for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
               if(table.rows[i].cells[j].innerHTML.includes("Filled")){
                  table.deleteRow(i);
                  i--;
                  break;
               }
               else if(table.rows[i].cells[j].innerHTML.includes("Emp Rankings Finalized")){
                 table.deleteRow(i);
                 i--;
                 break;
               }
               else if(table.rows[i].cells[j].innerHTML.includes("Interview Complete")){
                 table.deleteRow(i);
                 i--;
                 break;
               }
               else if(table.rows[i].cells[j].innerHTML.includes("Interview Selections Complete")){
                 table.deleteRow(i);
                 i--;
                 break;
                  }
               }
        }
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