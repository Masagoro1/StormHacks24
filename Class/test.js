
let myPet;

function main(){
    document.getElementById("title").innerHTML ="cuh";
    myPet = new pet(document.getElementById("mon"), "./mon1/", 0, 78);
}

function exp(){
    myPet.xpGain(10);
    document.getElementById("title").innerHTML = myPet.xp + "/" + myPet.xpCap;
}


