var camara,escena,renderizador, marmolblanco, marmolcafe, marmolnegro, ceramicablanca, ceramicanegra;

function Torre(textura) {
  var base1Forma = new THREE.CylinderGeometry(5,5,1,20,1,false);
  var base2Forma = new THREE.CylinderGeometry(4,4,1,20,1,false);
  var base3Forma = new THREE.CylinderGeometry(3,4,2,20,2,false);
  var troncoForma = new THREE.CylinderGeometry(3,3,6,20,6,false);
  var cubierta1Forma = new THREE.CylinderGeometry(4,3,2,20,2,false);
  var cubierta2Forma = new THREE.CylinderGeometry(4,4,2,20,3,false);

  var arco1 = new THREE.Shape();
  arco1.moveTo(0, 0);
  arco1.arc(0, 0, 4, .52, -.52, true);
  arco1.lineTo(3.46, -2);
  var pico1 = new THREE.ExtrudeGeometry( arco1, {amount: 1, bevelEnabled: false});
  pico1.rotateX(Math.PI/2);

  var arco2 = new THREE.Shape();
  arco2.moveTo(0, 0);
  arco2.arc(0, 0, 4, .52, -.52, true);
  arco2.lineTo(3.46, -2);
  var pico2 = new THREE.ExtrudeGeometry( arco2, {amount: 1, bevelEnabled: false});
  pico2.rotateX(Math.PI/2);
  pico2.rotateY(Math.PI/2);

  var arco3 = new THREE.Shape();
  arco3.moveTo(0, 0);
  arco3.arc(0, 0, 4, .52, -.52, true);
  arco3.lineTo(3.46, -2);
  var pico3 = new THREE.ExtrudeGeometry( arco3, {amount: 1, bevelEnabled: false});
  pico3.rotateX(Math.PI/2);
  pico3.rotateY(Math.PI);

  var arco4 = new THREE.Shape();
  arco4.moveTo(0, 0);
  arco4.arc(0, 0, 4, .52, -.52, true);
  arco4.lineTo(3.46, -2);
  var pico4 = new THREE.ExtrudeGeometry( arco4, {amount: 1, bevelEnabled: false});
  pico4.rotateX(Math.PI/2);
  pico4.rotateY(Math.PI*3/2);

  base2Forma.translate(0,1,0);
  base3Forma.translate(0,2,0);
  troncoForma.translate(0,4,0);
  cubierta1Forma.translate(0,8,0);
  cubierta2Forma.translate(0,10,0);
  pico1.translate(0,12,0);
  pico2.translate(0,12,0);
  pico3.translate(0,12,0);
  pico4.translate(0,12,0);
  

  var base1Malla = new THREE.Mesh(base1Forma);
  var base2Malla= new THREE.Mesh(base2Forma);
  var base3Malla= new THREE.Mesh(base3Forma);
  var toncoMalla= new THREE.Mesh(troncoForma);
  var cubierta1Malla= new THREE.Mesh(cubierta1Forma);
  var cubierta2Malla= new THREE.Mesh(cubierta2Forma);
  var pico1Malla= new THREE.Mesh(pico1);
  var pico2Malla= new THREE.Mesh(pico2);
  var pico3Malla= new THREE.Mesh(pico3);
  var pico4Malla= new THREE.Mesh(pico4);
  
  var torreForma = new THREE.Geometry();
  torreForma.merge(base1Malla.geometry, base1Malla.matrix);
  torreForma.merge(base2Malla.geometry, base2Malla.matrix);
  torreForma.merge(base3Malla.geometry, base3Malla.matrix);
  torreForma.merge(toncoMalla.geometry, toncoMalla.matrix);
  torreForma.merge(cubierta1Malla.geometry, cubierta1Malla.matrix);
  torreForma.merge(cubierta2Malla.geometry, cubierta2Malla.matrix);
  torreForma.merge(pico1Malla.geometry, pico1Malla.matrix);
  torreForma.merge(pico2Malla.geometry, pico2Malla.matrix);
  torreForma.merge(pico3Malla.geometry, pico3Malla.matrix);
  torreForma.merge(pico4Malla.geometry, pico4Malla.matrix);
  var torreMalla = new THREE.Mesh(torreForma, textura);
}

function Tablero(textura1, textura2) {
  var cubo= new Array();
  var a=2;
  for(var k=0; k<64; k++){
    for(var i=0; i<8; i++){
      for(var j=0; j<8; j++){
        if(a==2){
          cubo[k] = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 4), textura1 );
          a=1;
        }else{
          cubo[k] = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 4), textura2 );
          a=2;
        }
       cubo[k].position.x=j*10;
       cubo[k].position.y=i*10;
       setupcubo();
     }
     if(a==2){
          a=1;
        }else{
          a=2;
        }
    }
  }
}

function setcubo() {
  escena.add(cubo[k]);
}

function Base(textura3) {
  var base = new THREE.Mesh( new THREE.BoxGeometry(90, 90, 2), textura3 );
}

function Textura() {
  var textura1 = new THREE.TextureLoader().load('marnol_blanco.jpg');
  var textura2 = new THREE.TextureLoader().load('marnol_cafe.jpg');
  var textura3 = new THREE.TextureLoader().load('marnol_negro.jpg');
  var textura4 = new THREE.TextureLoader().load('ceramica_blanca.jpg');
  var textura5 = new THREE.TextureLoader().load('ceramica_negra.jpg');
  marmolblanco = new THREE.MeshBasicMaterial({map:textura1});
  marmolcafe = new THREE.MeshBasicMaterial({map:textura2});
  marmolnegro = new THREE.MeshBasicMaterial({map:textura3});
  ceramicablanca = new THREE.MeshBasicMaterial({map:textura4});
  ceramicanegra = new THREE.MeshBasicMaterial({map:textura5});
}

function setup() {
  var Torre1 = new Torre(ceramicablanca);
  var Torre2 = new Torre(ceramicanegra);
  var Torre3 = new Torre(ceramicanegra);
  var Torre4 = new Torre(ceramicablanca);
  

  
  var Tablero1 = new Tablero(marmolnegro, marmolblanco);
  
  var Base1 = new Base(marmolcafe);
 
  var campoVision = 45;
  var relacionAspecto = window.innerWidth / window.innerHeight;
  var planoCercano = 1;
  var planoLejano = 1000;
  camara = new THREE.PerspectiveCamera(campoVision, relacionAspecto, planoCercano, planoLejano);
  camara.position.z=50;
  camara.position.x=160;
  camara.position.y=40;
  camara.lookAt(new THREE.Vector3(40,40,0));
  camara.rotateZ(Math.PI/2);
  
  
  escena = new THREE.Scene();
  escena.add(Base1);
  escena.add(Torre1);
  escena.add(Torre2);
  escena.add(Torre3);
  escena.add(Torre4);
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderizador.domElement);
}

function loop(){
  requestAnimationFrame(loop);
  renderizador.render(escena,camara);
}

Textura();
setup();
loop();
