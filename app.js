document.querySelector("#adding").onclick = function() {
    if(document.querySelector('#newtask').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }
}