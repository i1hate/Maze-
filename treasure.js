// Registering component in Target.js

AFRAME.registerComponent("treasure", {
    init: function () {
      var posX = [-22,-8,-3,16,28,-23,-19,-13,-11,-28]
      var posZ = [-28,-16,-5,-22,-23,-19,-15,-7,3,-13]
      for (var i = 1; i <= 10; i++) {
        var id = `treasure${i}`;
         px = posX[i]
         pz = posZ[i]
        var position = { x: px, y: 0, z: pz };
  
        //call the function
        this.createTreasure(id, position);
      }
    } ,
  
    createTreasure: function(id, position) { 
      
      var environmentEl = document.querySelector("#environment");
  
      var treasureEl = document.createElement("a-entity");
  
      treasureEl.setAttribute("id",id);
      treasureEl.setAttribute("position",position);
      
      treasureEl.setAttribute("gltf-model","./assets/treasure/scene.gltf");
      treasureEl.setAttribute("aim",{eid:`#${id}`})
      treasureEl.setAttribute("scale",{x:1, y:1, z:3});   
      treasureEl.setAttribute("static-body",{shape:"sphere",shpereRadius:1})
      treasureEl.setAttribute("aim",{eid:`#${id}`})
      environmentEl.appendChild(treasureEl);

    }
  });