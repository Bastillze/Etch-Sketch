<script>

var id = 0;

function createT() {

//reference for table
var tbl = document.getElementById("tbl");

for(var r = 0; r< 15; r++)
{
    var row = document.createElement("tr");

    for(var c = 0; c < 15; c++)
    {
       var cell = document.createElement("td");
       cell.width = "20px";
       cell.height = "20px";
       cell.id = id++;
       
       
    }
row.appendChild(cell);
cell.innerHTML = id;

}
    tbl.appendChild(row);
}
 
    
 

   
</script>