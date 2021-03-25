class Plinko{
    constructor(x,y,radius){
        var options={
            isStatic:true
        }

        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.radius=radius;
    }
    display(){
        var pos=this.body.position;
        push();
        fill(255);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,10,10);
        pop();
    }
}