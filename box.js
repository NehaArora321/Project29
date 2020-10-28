class Box{
    constructor(x,y,color){
        var options={
            restitution :0.4,
            friction :0.0
        }
        this.body=Bodies.rectangle(x,y,30,40,options);
        this.color=color;
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;
        fill(this.color);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,30,40);
        pop();
    }
}