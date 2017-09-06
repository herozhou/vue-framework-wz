<template>
<div translate="no"  class="body">
    






<div class="content">
  <canvas class="snow" id="snow" width="1349" height="400"></canvas>
  <div class="main-text">
    <h1>天啊。<br>那页失踪了。</h1>
    <div class="main-text-a"><a href="#">< 返回首页</a></div>  
  </div>
  <div class="ground">
    <div class="mound"> 
      <div class="mound_text">404 </div>
      <div class="mound_spade"></div> 
    </div>
  </div>
</div>

  

</div>
</template>

<script>
import Vue from 'vue'

 
   export default {

        data () {
            return {
           
            }
        },
        mounted(){
            (function() {
    function ready(fn) {
        if (document.readyState != 'loading'){
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }
    
    function makeSnow(el) {
        var ctx = el.getContext('2d');
        var width = 0;
        var height = 0;
        var particles = [];
        
        var Particle = function() {
            this.x = this.y = this.dx = this.dy = 0;
            this.reset();
        }
        
        Particle.prototype.reset = function() {
            this.y = Math.random() * height;
            this.x = Math.random() * width;
            this.dx = (Math.random() * 1) - 0.5;
            this.dy = (Math.random() * 0.5) + 0.5;
        }
        
        function createParticles(count) {
            if (count != particles.length) {
                particles = [];
                for (var i = 0; i < count; i++) {
                    particles.push(new Particle());
                }
            }
        }
                
        function onResize() {
            width = window.innerWidth;
            height = window.innerHeight;
            el.width = width;
            el.height = height;
            
            createParticles((width * height) / 10000);
        }
        
        function updateParticles() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = '#f6f9fa';
            
            particles.forEach(function(particle) {
                particle.y += particle.dy;
                particle.x += particle.dx;
                
                if (particle.y > height) {
                    particle.y = 0;
                }
                
                if (particle.x > width) {
                    particle.reset();
                    particle.y = 0;
                }
                
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, 5, 0, Math.PI * 2, false);
                ctx.fill();
            });
            
            window.requestAnimationFrame(updateParticles);
        }
        
        onResize();
        updateParticles();
    }
    
    ready(function() {
        var canvas = document.getElementById('snow');
        makeSnow(canvas);
    });
})();

        }
       
       
    }

</script>


 <style>
 .body {
  height: 700px;
  min-height: 450px;
  font-size: 32px;
  font-weight: 500;
  color: #5d7399;
  margin:0;padding:0;border:0;
}

.content {
  height: 100%;
  position: relative;
  z-index: 1;
  background-color: #d2e1ec;
  background-image: -webkit-linear-gradient(top, #bbcfe1 0%, #e8f2f6 80%);
  background-image: linear-gradient(to bottom, #bbcfe1 0%, #e8f2f6 80%);
  overflow: hidden;
}

.snow {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 20;
}

.main-text {
  padding: 20vh 20px 0 20px;
  text-align: center;
  line-height: 2em;
  font-size: 5vh;
}
.main-text h1 {
  font-size:45px;
  line-height:48px;
  margin:0;
  padding:0;}
.main-text-a{
  height:32px;
  margin-left:auto;
  margin-right:auto;
  text-align:center;
}
.main-text-a a {
   font-size:16px;
   text-decoration:none;
   color:#0066CC;
 }
.main-text-a a:hover{
   color:#000;
}
.home-link {
  font-size: 0.6em;
  font-weight: 400;
  color: inherit;
  text-decoration: none;
  opacity: 0.6;
  border-bottom: 1px dashed rgba(93, 115, 153, 0.5);
}
.home-link:hover {
  opacity: 1;
}

.ground {
  height: 160px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #f6f9fa;
  box-shadow: 0 0 10px 10px #f6f9fa;
}
.ground:before, .ground:after {
  content: '';
  display: block;
  width: 250px;
  height: 250px;
  position: absolute;
  top: -62.5px;
  z-index: -1;
  background: transparent;
  -webkit-transform: scaleX(0.2) rotate(45deg);
          transform: scaleX(0.2) rotate(45deg);
}
.ground:after {
  left: 50%;
  margin-left: -166.66667px;
  box-shadow: -340px 260px 15px #8193b2, -620px 580px 15px #8193b2, -900px 900px 15px #b0bccf, -1155px 1245px 15px #b4bed1, -1515px 1485px 15px #8193b2, -1755px 1845px 15px #8a9bb8, -2050px 2150px 15px #91a1bc, -2425px 2375px 15px #bac4d5, -2695px 2705px 15px #a1aec6, -3020px 2980px 15px #8193b2, -3315px 3285px 15px #94a3be, -3555px 3645px 15px #9aa9c2, -3910px 3890px 15px #b0bccf, -4180px 4220px 15px #bac4d5, -4535px 4465px 15px #a7b4c9, -4840px 4760px 15px #94a3be;
}
.ground:before {
  right: 50%;
  margin-right: -166.66667px;
  box-shadow: 325px -275px 15px #b4bed1, 620px -580px 15px #adb9cd, 925px -875px 15px #a1aec6, 1220px -1180px 15px #b7c1d3, 1545px -1455px 15px #7e90b0, 1795px -1805px 15px #b0bccf, 2080px -2120px 15px #b7c1d3, 2395px -2405px 15px #8e9eba, 2730px -2670px 15px #b7c1d3, 2995px -3005px 15px #9dabc4, 3285px -3315px 15px #a1aec6, 3620px -3580px 15px #8193b2, 3880px -3920px 15px #aab6cb, 4225px -4175px 15px #9dabc4, 4510px -4490px 15px #8e9eba, 4785px -4815px 15px #a7b4c9;
}

.mound {
  margin-top: -80px;
  font-weight: 800;
  font-size: 180px;
  text-align: center;
  color: #dd4040;
  pointer-events: none;
}
.mound:before {
  content: '';
  display: block;
  width: 600px;
  height: 200px;
  position: absolute;
  left: 50%;
  margin-left: -300px;
  top: 50px;
  z-index: 1;
  border-radius: 100%;
  background-color: #e8f2f6;
  background-image: -webkit-linear-gradient(top, #dee8f1, #f6f9fa 60px);
  background-image: linear-gradient(to bottom, #dee8f1, #f6f9fa 60px);
}
.mound:after {
  content: '';
  display: block;
  width: 28px;
  height: 6px;
  position: absolute;
  left: 50%;
  margin-left: -150px;
  top: 68px;
  z-index: 2;
  background: #dd4040;
  border-radius: 100%;
  -webkit-transform: rotate(-15deg);
          transform: rotate(-15deg);
  box-shadow: -56px 12px 0 1px #dd4040, -126px 6px 0 2px #dd4040, -196px 24px 0 3px #dd4040;
}

.mound_text {
  -webkit-transform: rotate(6deg);
          transform: rotate(6deg);
}

.mound_spade {
  display: block;
  width: 35px;
  height: 30px;
  position: absolute;
  right: 50%;
  top: 42%;
  margin-right: -250px;
  z-index: 0;
  -webkit-transform: rotate(35deg);
          transform: rotate(35deg);
  background: #dd4040;
}
.mound_spade:before, .mound_spade:after {
  content: '';
  display: block;
  position: absolute;
}
.mound_spade:before {
  width: 40%;
  height: 30px;
  bottom: 98%;
  left: 50%;
  margin-left: -20%;
  background: #dd4040;
}
.mound_spade:after {
  width: 100%;
  height: 30px;
  top: -55px;
  left: 0%;
  box-sizing: border-box;
  border: 10px solid #dd4040;
  border-radius: 4px 4px 20px 20px;
}
 </style>
