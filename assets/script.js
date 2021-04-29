$("#currentDay").text(moment().format("Do, MMMM, YYYY, h:mm a"));

var saveBtn = $('.row').children('.btn');
const textContent = document.getElementsByClassName('content');
var resetBtn = $('#clear');
//var resetOption = confirm("Are You Sure You Want To Reset Your Planner?");

var text9 = $("#text9");
var text10 = $("#text10");
var text11 = $("#text11");
var text12 = $("#text12");
var text13 = $("#text13");
var text14 = $("#text14");
var text15 = $("#text15");
var text16 = $("#text16");
var text17 = $("#text17");


const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));



Array.from(rows).forEach(row=>{
    let
        rowIDString = row.id,
        rowHour;
    if (rowIDString){
        rowHour = parseInt(rowIDString);
    }
    if (rowHour){
        if (currentHour === rowHour){
            setColor(row, "red");
        } else if ((currentHour < rowHour) && (currentHour >= rowHour-6)){
            setColor(row,"green");
        } else if ((currentHour > rowHour) && (currentHour >= rowHour+6)){
            setColor(row,"blue");
    }       else{
        setColor(row, "lightgrey");
    }
}
});

function setColor(element, color){
    element.style.backgroundColor = color;
}

saveBtn.on("click", function(){
    console.log('howdy');
    alert('Your Event Has Been Saved')
    
    localStorage.setItem("9AM", (text9.val()))
    localStorage.setItem("10AM", (text10.val()))
    localStorage.setItem("11AM", (text11.val()))
    localStorage.setItem("12PM", (text12.val()))
    localStorage.setItem("13PM", (text13.val()))
    localStorage.setItem("14PM", (text14.val()))
    localStorage.setItem("15PM", (text15.val()))
    localStorage.setItem("16PM", (text16.val()))
    localStorage.setItem("17PM", (text17.val()))
})

text9.append(localStorage.getItem("9AM"));
text10.append(localStorage.getItem("10AM"));
text11.append(localStorage.getItem("11AM"));
text12.append(localStorage.getItem("12PM"));
text13.append(localStorage.getItem("13PM"));
text14.append(localStorage.getItem("14PM"));
text15.append(localStorage.getItem("15PM"));
text16.append(localStorage.getItem("16PM"));
text17.append(localStorage.getItem("17PM"));


resetBtn.on('click', function(){
    if(confirm("Are You Sure You Want To Reset Your Planner?")===true){
        localStorage.clear();
        location.reload();
    }
})
