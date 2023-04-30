function main(){

    let confirm = document.getElementById('mainResult').innerHTML;
    if(confirm == "You Lost"){
        alert("Game over! Please restart the game");
    } else {


    let x;
    do{
    //random card
    x = Math.floor(Math.random() * 100 / 7.6)
    }while(x==0);

    let currentTT  = parseInt(document.getElementById('result').innerHTML);
    let total = currentTT + x;
    document.getElementById('result').innerHTML = total;

    if(total < 21) {
        document.getElementById('mainResult').innerHTML = "Generate another card ?";
    } else if (total == 21) {
        document.getElementById('mainResult').innerHTML = "You have Won ";
        alert("Congratulations !");
        document.getElementById('btn-res').style.display = "Block"
    }else if (total > 21){
        document.getElementById('mainResult').innerHTML = "You Lost";
        alert("Lost :( Click Restart to play again ");
        document.getElementById('btn-res').style.display = "Block"

    }
    
    var img = document.createElement("img");
    img.src = "images/" + x + ".png";
    img.height = 300;
    img.width = 300;

    document.body.appendChild(img);

}
    
}

function restart(){
    location.reload();
}