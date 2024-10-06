let currency = 0;
let bgIndex = 0;
let backgroundItems;
function BackgroundItem(name, color = "black", price, mult = 1, owned = false){
    this.name = name;
    this.color = color;
    this.price = price;
    this.mult = mult;
    this.owned = owned;
}

function purchaseBG(num){
    //IF ALREADY OWNS JUST CHANGE INSTEAD
    if(backgroundItems[num].owned){
        changeBg(num);
    }
    //CHECK TO SEE IF YOU HAVE ENOUGH MONEY
    else if(backgroundItems[num].price <= currency){
        currency -= backgroundItems[num].price;
        backgroundItems[num].owned = true;
    }
}

function initializeBackgroundItems(){
    backgroundItems = new Array();
    

    //HARD CODE POSSIBLE BACKGROUNDS
    backgroundItems.push(new BackgroundItem("bg1", "#FFC0CB", 100, 1.25));
    backgroundItems.push(new BackgroundItem("bg2", "#FF0000", 300, 1.5));
    backgroundItems.push(new BackgroundItem("bg3", "#00FF00", 1000, 1.75));
    backgroundItems.push(new BackgroundItem("bg4", "#0000FF", 2000, 2));
}

function changeBg(num){
    //CHANGES BG COLOUR
    bgIndex = num;
    if(backgroundItems[num].owned == true){
        bgIndex = num;
        console.log(backgroundItems[num].name);
        document.getElementById("body").style.backgroundColor = (backgroundItems[num].color);
    }
}