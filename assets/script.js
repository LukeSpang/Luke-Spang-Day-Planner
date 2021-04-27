$("#currentDay").text(moment().format("DD, MMMM, YYYY"));

var saveBtn = $('.row').children('.btn');
const textContent = document.getElementsByClassName('content');


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

saveBtn.on('click',function(){
    console.log("howdy");
    var textInput = $(this.parentNode).children('.content').attr('id');
    var inputToStorage = $(this.parentNode).children('.content').val();
    localStorage.setItem(textInput, inputToStorage);
})