AFRAME.registerComponent("aim",{
    schema:{eid:{type:"string",default:"#treasure"}},
    iscollided:function(eid){
      var element = document.querySelector(eid)
      element.addEventListener("collide", e=>{
          console.log("hello")
          if (eid.includes ("#treasure")){
              element.setAttribute("visible", false)
          }
      }) 
    },
    update:function(){
        this.iscollided(this.data.eid)
    }
})