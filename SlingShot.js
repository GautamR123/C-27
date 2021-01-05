class SlingShot{
    constructor(bodyA,bodyB){
        var options = {
            stiffness:0.05,
            length:1.0,
            bodyA:bodyA,
            bodyB:bodyB
        }
this.SlingShot=Constraint.create(options)
World.add(world,this.SlingShot)
    }
    display(){
var pointA =this.SlingShot.bodyA.position
var pointB =this.SlingShot.bodyB.position
strokeWeight(10)
line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}