let game = [null, null, null, null,null,null,null,null,null];

let X_turn = true;

const playBtnsIcon = document.querySelectorAll(".play button p");


let xwon = document.getElementById("xwon");
xwon.innerHTML = localStorage.getItem("xwon");
let ywon = document.getElementById("ywon");
ywon.innerHTML = localStorage.getItem("ywon");
let tie = document.getElementById("tie");
tie.innerHTML = localStorage.getItem("tie");



function Click(place){
    if (game[place]==null){
        if (X_turn){
            game[place] = 1;
            X_turn = false;
            document.getElementById(place).innerHTML = "X";
            changeIcon();
        }
        else if (!X_turn){
            game[place] = 0;
            X_turn = true;
            document.getElementById(place).innerHTML = "O";
            changeIcon();
        }
    }
    console.log(game)
    check(game)
}


function check(list) {
    if (
      (list[0] === list[1] && list[1] === list[2] && list[0] === 1) ||
      (list[3] === list[4] && list[4] === list[5] && list[3] === 1) ||
      (list[6] === list[7] && list[7] === list[8] && list[6] === 1) ||
      (list[0] === list[4] && list[4] === list[8] && list[0] === 1) ||
      (list[2] === list[4] && list[4] === list[6] && list[2] === 1) ||

      (list[0] === list[3] && list[3] === list[6] && list[0] === 1) ||
      (list[1] === list[4] && list[4] === list[7] && list[1] === 1) ||
      (list[2] === list[5] && list[5] === list[8] && list[2] === 1)
    ) {

    if(localStorage.getItem("xwon")){
        localStorage.setItem("xwon", +localStorage.getItem("xwon") +1)
    }
    else if(!localStorage.getItem("xwon")){
        localStorage.setItem("xwon", localStorage.getItem("xwon") ?? 0 +1)
    }
    location.reload()

    } else if (
      (list[0] === list[1] && list[1] === list[2] && list[0] === 0) ||
      (list[3] === list[4] && list[4] === list[5] && list[3] === 0) ||
      (list[6] === list[7] && list[7] === list[8] && list[6] === 0) ||
      (list[0] === list[4] && list[4] === list[8] && list[0] === 0) ||
      (list[2] === list[4] && list[4] === list[6] && list[2] === 0) ||
      (list[0] === list[3] && list[3] === list[6] && list[0] === 0) ||
      (list[1] === list[4] && list[4] === list[7] && list[1] === 0) ||
      (list[2] === list[5] && list[5] === list[8] && list[2] === 0)
    ) {
      
    if(localStorage.getItem("ywon")){
        localStorage.setItem("ywon", +localStorage.getItem("ywon") +1)
    }
    else if(!localStorage.getItem("ywon")){
        localStorage.setItem("ywon", localStorage.getItem("ywon") ?? 0 +1)
    }
    location.reload()

    } else if(checkNotNull(list)){
        console.log("tie")
        if(localStorage.getItem("tie")){
            localStorage.setItem("tie", +localStorage.getItem("tie") +1)
        }
        else if(!localStorage.getItem("tie")){
            localStorage.setItem("tie", localStorage.getItem("tie") ?? 0 +1)
        }
        location.reload()
    }

  }


function checkNotNull(array){
    let check = true;
    for(let j=0; j<9; j++){
        if(array[j] === null){
            check = false;
        }
        
    }
    return check
}

function endGame(){
    let game = [null, null, null, null,null,null,null,null,null]
    let X_turn = true;
    localStorage.clear();
    window.location.reload()
}

function changeIcon(){
    playBtnsIcon.forEach(function(icon){
        if(X_turn){
            icon.innerHTML = "X"
        }
        else{
            icon.innerHTML = "O"
        }
    })
}
