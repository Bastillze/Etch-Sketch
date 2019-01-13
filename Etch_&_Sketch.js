<script>

function changeColor(evt) {
    
    var clickedOn = evt.target;

    clickedOn.style.backgroundColor = '#f00';

}
  mySquare.addEventListener('click',changeColor,false); 

</script>