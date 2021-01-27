class Drops
{
    constructor(x,y,r)
    {
        var options=
        {
            restitution : 0.9
            // friction : 0.1,
            // density : 0.5
        }
        this.x = x;
        this.y = y;
        this.r=r;
        this.body=Bodies.rectangle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
    display()
    {
        push();
        var pos=this.body.position;
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}