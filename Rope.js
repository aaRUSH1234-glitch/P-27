class Rope {
    constructor (bobbody,roofbody,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA : bobbody,
            bodyB : roofbody,
            pointB : {x:this.offsetX , y:this.offsetY}
            
            
        }
        
        this.chain = Constraint.create(options);
        World.add(world,this.chain); 
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        //strokeWeight(4);
        //push();
        strokeWeight(5);
        fill("red");
        //stroke(164, 126, 199);
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
        //pop();

    }
}