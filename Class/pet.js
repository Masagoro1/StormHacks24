class pet{
    


    constructor(img, imgPaths, level = 0, xp = 0, xpCap = 100)
    {
        this.img = img;
        this.imgPaths = imgPaths;
        this.level = level;
        this.img.src = this.imgPaths + 'image' + this.level + ".png";
        
        this.xp = xp;
        this.xpCap = xpCap;
    };
    
    xpGain(num){
        this.xp += num;
        if(this.xp >= this.xpCap){
            this.levelUp();
        }
    }

    levelUp(){
        this.xp -= this.xpCap;
        this.xpCap *= 1.5;

        //logic to handle image swap
        this.level++;
        this.img.src = this.imgPaths + 'image' + this.level + ".png";

        
    }


}