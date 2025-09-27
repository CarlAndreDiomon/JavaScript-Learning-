function plus() {
    const currentval = document.getElementById("count").textContent;
    let value = Number(currentval) + 1;
    document.getElementById("count").innerHTML = value;
}

function minus() {
    const currentval = document.getElementById("count").textContent;
    let value = Number(currentval) - 1;
    

    if(Number(currentval) == 0 ){
        return;
    }
    else{
        document.getElementById("count").innerHTML = value;
    }
}

