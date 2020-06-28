class Rain{
    constructor(x,y){
        var options ={
            isStatic: false,
            density: 1,
            restitution: 0.6,
            friction: 0.7
        }
        
        this.body = Bodies.rectangle(x,y,6,15,options);
        this.x = x;
        this.y = y;
        this.col = rgb(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body); 
    }
    display(){
        push();
        var pos = this.body.position;
        rectMode(CENTER);
        fill(this.col);
        noStroke();
        translate(pos.x,pos.y);
        rect(this.x,this.y,6,15);
        pop();
    }
}