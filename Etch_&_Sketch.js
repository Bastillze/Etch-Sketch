<script>

var id = 0;

function create T() {
    
} createT() {

    //get the reference for table
    var tbl = document.getElementById("tbl");

    //Here begins nested loops
    for(var r = 0; r < 5; r++)
    {

var row = document.createElement("tr");


for(var c = 0; c < 5; c++)
{

// Create the table cells
var cell = document.createElement("td");
HTMLTableCellElement.width = "20px";
HTMLTableCellElement.height = "20px"; 
cell.id = id++;


}
row.appendChild(cell);
cell.innerHTML = id;
    }
tbl.appendChild(row);
}

</script>