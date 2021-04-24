 class Plane {
constructor(x, y,width,height,options) {
 var options = {
             isStatic:true
            //  'density':12,
             // 'friction': 0.9,
             // 'restitution':0.8,
            };
      this.body = Bodies.rectangle(x,y,width,50,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      
    }
  };