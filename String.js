class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }

fly(){

this.string.bodyA = null
}

    display(){ 
var bodyA =  this.string.bodyA.position;
var pointB = this.pointB;

    line(bodyA.x, bodyA.y,pointB.x,pointB.y);
}

   
}