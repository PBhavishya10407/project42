class Umbrella
{
    constructor()
    {
        var options =
        {
            isStatic : true
        }
       this.image = loadImage("Walking Frame/walking_1.png");
    }
    display()
    {
        imageMode(CENTER);
        image(this.image,250,750);
        image.scale = 0.3;
    }
}