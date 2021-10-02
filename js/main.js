    //////////////////////////////// call the inputs 
var bookerMarker = document.getElementById("bookermarker");
var webSite = document.getElementById("website");


if(localStorage.getItem('ourFile') == null) {
    bookerMarkerList = [];
}else {
    bookerMarkerList = JSON.parse(localStorage.getItem('ourFile'))
    display()
}

     /////////////////////////////// create the array 
var bookerMarkerList = []



    ///////////////////////////////the main function
  function test ()
 {
     ///////////////////////// create the object
    var information =
    {
        name : bookerMarker.value,
        site : webSite.value
    }
    bookerMarkerList.push(information);
    display();
    localStorage.setItem("ourFile", JSON.stringify(bookerMarkerList))
    clearForm();
}

     ///////////////////////////// create display function

function display() {
    var cartona = " ";
    for(var i = 0; i < bookerMarkerList.length; i++) {
        cartona += 
        `
        <tr>
        <td>${[i]}</td>
        <td>${bookerMarkerList[i].name}</td>
        <td> <button class="btn btn-warning"> <a href='${bookerMarkerList[i].site}.html' >Visit </a></button> </td>
        <td> <button class="btn btn-danger"> Delete </button></td>
        </tr>
        `
       
    }
    /////////////////////////////////// put cartona in table in html
    document.getElementById("tableBody").innerHTML = cartona;

}

    //////////////////////////////////// create function to clear inputs
function clearForm() {
    bookerMarker.value = " ";
    website.value = " ";   
}



 





