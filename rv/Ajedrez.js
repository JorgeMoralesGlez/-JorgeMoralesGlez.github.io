//Iluminación
var iluminacion= new THREE.PointLight(0xFFFFFF);
iluminacion.position.y= 40;
iluminacion.position.x= 40;
iluminacion.position.z= 50;

//Seleccionador
var base1selec = new THREE.CylinderGeometry(2,2,6,6,6,false);
var base2selec = new THREE.CylinderGeometry(4,0,4,4,4,false);
base2selec.translate(0,-4,0);
var base1selec = new THREE.Mesh(base1selec);
var base2selec= new THREE.Mesh(base2selec);
var seleccionadorForma = new THREE.Geometry();
seleccionadorForma.merge(base1selec.geometry, base1selec.matrix);
seleccionadorForma.merge(base2selec.geometry, base2selec.matrix);
var material= new THREE.MeshBasicMaterial({color: 0xB40100});
var seleccionadorMalla = new THREE.Mesh(seleccionadorForma, material);
seleccionadorMalla.rotateX(Math.PI/2);
seleccionadorMalla.translateY(30);
var posicionador= new THREE.MeshBasicMaterial({color: 0x0096D6});

var camara,escena,renderizador, valor, posicionadorMalla, auxx, auxy;
var torreMalla, torreMalla1, torreMalla2, torreMalla3;
var alfilMalla, alfilMalla1, alfilMalla2, alfilMalla3;
var reyMalla, reyMalla1;
var reinaMalla, reinaMalla1;
var peonMalla, peonMalla1, peonMalla2, peonMalla3, peonMalla4, peonMalla5, peonMalla6, peonMalla7, peonMalla8, peonMalla9;
var peonMalla10, peonMalla11, peonMalla12, peonMalla13, peonMalla14, peonMalla15;
var cuyo=1;
var vacio1, vacio2, vacio3, vacio4, vacio5, vacio6, vacio7, vacio8, vacio9, vacio10;
var vacio12, vacio13, vacio14, vacio15, vacio16, vacio17, vacio18, vacio19, vacio11, vacio20;
var vacio21, vacio22, vacio23, vacio24, vacio25, vacio26, vacio27, vacio28, vacio29, vacio30;
var vacio31, vacio32, vacio33, vacio34, vacio35, vacio36;

function setup(){
  //Texturas
  var textura1 = new THREE.TextureLoader().load('marnol_blanco.jpg');
  var textura2 = new THREE.TextureLoader().load('marnol_cafe.jpg');
  var textura3 = new THREE.TextureLoader().load('marnol_negro.jpg');
  var textura4 = new THREE.TextureLoader().load('ceramica_blanca.jpg');
  var textura5 = new THREE.TextureLoader().load('ceramica_negra.jpg');
  var marmolblanco = new THREE.MeshLambertMaterial({map:textura1});
  var marmolcafe = new THREE.MeshLambertMaterial({map:textura2});
  var marmolnegro = new THREE.MeshLambertMaterial({map:textura3});
  var ceramicablanca = new THREE.MeshLambertMaterial({map:textura4});
  var ceramicanegra = new THREE.MeshLambertMaterial({map:textura5});

  
  //Torres
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
  //var material= new THREE.MeshNormalMaterial();
  torreMalla = new THREE.Mesh(torreForma, ceramicablanca);
  torreMalla1 = new THREE.Mesh(torreForma, ceramicanegra);
  torreMalla2 = new THREE.Mesh(torreForma, ceramicanegra);
  torreMalla3 = new THREE.Mesh(torreForma, ceramicablanca);
  
  torreMalla.rotateX(Math.PI/2);
  torreMalla.translateY(3);

  torreMalla1.rotateX(Math.PI/2);
  torreMalla1.translateY(3);
  torreMalla1.translateZ(-70);

  torreMalla2.rotateX(Math.PI/2);
  torreMalla2.translateY(3);
  torreMalla2.translateZ(-70);
  torreMalla2.translateX(70);
  
  torreMalla3.rotateX(Math.PI/2);
  torreMalla3.translateY(3);
  torreMalla3.translateX(70);
  
  //Rey
  var base1Forma = new THREE.CylinderGeometry(5,5,1,20,1,false);
  var base2Forma = new THREE.CylinderGeometry(4,4,1,20,1,false);
  var base3Forma = new THREE.CylinderGeometry(2,4,10,20,10,false);
  var troncoForma = new THREE.CylinderGeometry(2,2,4,20,4,false);
  var detalle1Forma = new THREE.CylinderGeometry(4,4,.5,20,.5,false);
  var detalle2Forma = new THREE.CylinderGeometry(3,3,.3,20,.3,false);
  var detalle3Forma = new THREE.CylinderGeometry(3,3,.3,20,.3,false);
  var cubierta1Forma = new THREE.CylinderGeometry(2.5,2.5,1.9,20,1.9,false);
  var cubierta2Forma = new THREE.CylinderGeometry(4,2.5,3,20,3,false);
  var cabeza1Forma = new THREE.BoxGeometry(1,1,1)
  var cabeza2Forma = new THREE.BoxGeometry(1,1,1)
  var cabeza3Forma = new THREE.BoxGeometry(1,1,1)
  var cabeza4Forma = new THREE.BoxGeometry(1,1,1)
  var cabeza5Forma = new THREE.BoxGeometry(1,1,1)

  base2Forma.translate(0,1,0);
  base3Forma.translate(0,6,0);
  troncoForma.translate(0,12,0);
  detalle2Forma.translate(0,14,0);
  detalle1Forma.translate(0,14.3,0);
  detalle3Forma.translate(0,14.8,0);
  cubierta1Forma.translate(0,15.1,0);
  cubierta2Forma.translate(0,17,0);
  cabeza1Forma.translate(0,19.5,0);
  cabeza2Forma.translate(0,20.5,0);
  cabeza3Forma.translate(0,21.5,0);
  cabeza4Forma.translate(-1,20.5,0);
  cabeza5Forma.translate(1,20.5,0);

  var base1Malla = new THREE.Mesh(base1Forma);
  var base2Malla= new THREE.Mesh(base2Forma);
  var base3Malla= new THREE.Mesh(base3Forma);
  var toncoMalla= new THREE.Mesh(troncoForma);
  var detalle1Malla= new THREE.Mesh(detalle1Forma);
  var detalle2Malla= new THREE.Mesh(detalle2Forma);
  var detalle3Malla= new THREE.Mesh(detalle3Forma);
  var cubierta1Malla= new THREE.Mesh(cubierta1Forma);
  var cubierta2Malla= new THREE.Mesh(cubierta2Forma);
  var cabeza1Malla= new THREE.Mesh(cabeza1Forma);
  var cabeza2Malla= new THREE.Mesh(cabeza2Forma);
  var cabeza3Malla= new THREE.Mesh(cabeza3Forma);
  var cabeza4Malla= new THREE.Mesh(cabeza4Forma);
  var cabeza5Malla= new THREE.Mesh(cabeza5Forma);

  var reyForma = new THREE.Geometry();
  reyForma.merge(base1Malla.geometry, base1Malla.matrix);
  reyForma.merge(base2Malla.geometry, base2Malla.matrix);
  reyForma.merge(base3Malla.geometry, base3Malla.matrix);
  reyForma.merge(toncoMalla.geometry, toncoMalla.matrix);
  reyForma.merge(detalle1Malla.geometry, detalle1Malla.matrix);
  reyForma.merge(detalle2Malla.geometry, detalle2Malla.matrix);
  reyForma.merge(detalle3Malla.geometry, detalle3Malla.matrix);
  reyForma.merge(cubierta1Malla.geometry, cubierta1Malla.matrix);
  reyForma.merge(cubierta2Malla.geometry, cubierta2Malla.matrix);
  reyForma.merge(cabeza1Malla.geometry, cabeza1Malla.matrix);
  reyForma.merge(cabeza2Malla.geometry, cabeza2Malla.matrix);
  reyForma.merge(cabeza3Malla.geometry, cabeza3Malla.matrix);
  reyForma.merge(cabeza4Malla.geometry, cabeza4Malla.matrix);
  reyForma.merge(cabeza5Malla.geometry, cabeza5Malla.matrix);
  //var material= new THREE.MeshNormalMaterial();
  reyMalla = new THREE.Mesh(reyForma, ceramicablanca);
  reyMalla1 = new THREE.Mesh(reyForma, ceramicanegra);

  reyMalla.rotateX(Math.PI/2);
  reyMalla.translateY(3);
  reyMalla.translateX(30);
  
  reyMalla1.rotateX(Math.PI/2);
  reyMalla1.translateY(3);
  reyMalla1.translateZ(-70);
  reyMalla1.translateX(30);  
  
  //Reina
  var base1Forma = new THREE.CylinderGeometry(5,5,1,20,1,false);
  var base2Forma = new THREE.CylinderGeometry(4,4,1,20,1,false);
  var base3Forma = new THREE.CylinderGeometry(2,4,10,20,10,false);
  var troncoForma = new THREE.CylinderGeometry(2,2,4,20,4,false);
  var detalle1Forma = new THREE.CylinderGeometry(4,4,.5,20,.5,false);
  var detalle2Forma = new THREE.CylinderGeometry(3,3,.3,20,.3,false);
  var detalle3Forma = new THREE.CylinderGeometry(3,3,.3,20,.3,false);
  var cubierta1Forma = new THREE.CylinderGeometry(2.5,2.5,1.9,20,1.9,false);
  var cubierta2Forma = new THREE.CylinderGeometry(4,2.5,3,20,3,false);
  var cabeza1Forma = new THREE.SphereGeometry(1);

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
  base3Forma.translate(0,6,0);
  troncoForma.translate(0,12,0);
  detalle2Forma.translate(0,14,0);
  detalle1Forma.translate(0,14.3,0);
  detalle3Forma.translate(0,14.8,0);
  cubierta1Forma.translate(0,15.1,0);
  cubierta2Forma.translate(0,17,0);
  pico1.translate(0,19.5,0);
  pico2.translate(0,19.5,0);
  pico3.translate(0,19.5,0);
  pico4.translate(0,19.5,0);
  cabeza1Forma.translate(0,19.5,0);

  var base1Malla = new THREE.Mesh(base1Forma);
  var base2Malla= new THREE.Mesh(base2Forma);
  var base3Malla= new THREE.Mesh(base3Forma);
  var toncoMalla= new THREE.Mesh(troncoForma);
  var detalle1Malla= new THREE.Mesh(detalle1Forma);
  var detalle2Malla= new THREE.Mesh(detalle2Forma);
  var detalle3Malla= new THREE.Mesh(detalle3Forma);
  var cubierta1Malla= new THREE.Mesh(cubierta1Forma);
  var cubierta2Malla= new THREE.Mesh(cubierta2Forma);
  var pico1Malla= new THREE.Mesh(pico1);
  var pico2Malla= new THREE.Mesh(pico2);
  var pico3Malla= new THREE.Mesh(pico3);
  var pico4Malla= new THREE.Mesh(pico4);
  var cabeza1Malla= new THREE.Mesh(cabeza1Forma);

  var reinaForma = new THREE.Geometry();
  reinaForma.merge(base1Malla.geometry, base1Malla.matrix);
  reinaForma.merge(base2Malla.geometry, base2Malla.matrix);
  reinaForma.merge(base3Malla.geometry, base3Malla.matrix);
  reinaForma.merge(toncoMalla.geometry, toncoMalla.matrix);
  reinaForma.merge(pico1Malla.geometry, pico1Malla.matrix);
  reinaForma.merge(pico2Malla.geometry, pico2Malla.matrix);
  reinaForma.merge(pico3Malla.geometry, pico3Malla.matrix);
  reinaForma.merge(pico4Malla.geometry, pico4Malla.matrix);
  reinaForma.merge(detalle1Malla.geometry, detalle1Malla.matrix);
  reinaForma.merge(detalle2Malla.geometry, detalle2Malla.matrix);
  reinaForma.merge(detalle3Malla.geometry, detalle3Malla.matrix);
  reinaForma.merge(cubierta1Malla.geometry, cubierta1Malla.matrix);
  reinaForma.merge(cubierta2Malla.geometry, cubierta2Malla.matrix);
  reinaForma.merge(cabeza1Malla.geometry, cabeza1Malla.matrix);
  //var material= new THREE.MeshNormalMaterial();
  reinaMalla = new THREE.Mesh(reinaForma, ceramicablanca);
  reinaMalla1 = new THREE.Mesh(reinaForma, ceramicanegra);

  reinaMalla.rotateX(Math.PI/2);
  reinaMalla.translateY(3);
  reinaMalla.translateX(40);
  
  reinaMalla1.rotateX(Math.PI/2);
  reinaMalla1.translateY(3);
  reinaMalla1.translateX(40);
  reinaMalla1.translateZ(-70);
  
  //Alfil
 var base1Forma = new THREE.CylinderGeometry(5,5,1,20,1,false);
  var base2Forma = new THREE.CylinderGeometry(4,4,1,20,1,false);
  var troncoForma = new THREE.CylinderGeometry(1.5,3,12,12,12,false);
  var detalle1Forma = new THREE.CylinderGeometry(3.5,3.5,.5,20,.5,false);
  var detalle2Forma = new THREE.CylinderGeometry(2.5,2.5,.3,20,.3,false);
  var detalle3Forma = new THREE.CylinderGeometry(2.5,2.5,.3,20,.3,false);
  var cabeza1Forma = new THREE.SphereGeometry(2);
  var cabeza2Forma = new THREE.SphereGeometry(.5);

  base1Forma.translate(0,1,0);
  base2Forma.translate(0,2,0);
  troncoForma.translate(0,8,0);
  cabeza1Forma.translate(0,15,0);
  cabeza2Forma.translate(0,17,0);
  detalle1Forma.translate(0,11,0);
  detalle2Forma.translate(0,10.7,0);
  detalle3Forma.translate(0,11.5,0);

  var base1Malla = new THREE.Mesh(base1Forma);
  var base2Malla= new THREE.Mesh(base2Forma);
  var troncoMalla= new THREE.Mesh(troncoForma);
  var cabeza1Malla= new THREE.Mesh(cabeza1Forma);
  var cabeza2Malla= new THREE.Mesh(cabeza2Forma);
  var detalle1Malla= new THREE.Mesh(detalle1Forma);
  var detalle2Malla= new THREE.Mesh(detalle2Forma);
  var detalle3Malla= new THREE.Mesh(detalle3Forma);

  var alfilForma = new THREE.Geometry();
  alfilForma.merge(base1Malla.geometry, base1Malla.matrix);
  alfilForma.merge(base2Malla.geometry, base2Malla.matrix);
  alfilForma.merge(troncoMalla.geometry, troncoMalla.matrix);
  alfilForma.merge(cabeza1Malla.geometry, cabeza1Malla.matrix);
  alfilForma.merge(cabeza2Malla.geometry, cabeza2Malla.matrix);
  alfilForma.merge(detalle1Malla.geometry, detalle1Malla.matrix);
  alfilForma.merge(detalle2Malla.geometry, detalle2Malla.matrix);
  alfilForma.merge(detalle3Malla.geometry, detalle3Malla.matrix);
  //var material= new THREE.MeshNormalMaterial();
  alfilMalla = new THREE.Mesh(alfilForma, ceramicablanca);
  alfilMalla1 = new THREE.Mesh(alfilForma, ceramicanegra);
  alfilMalla2 = new THREE.Mesh(alfilForma, ceramicablanca);
  alfilMalla3 = new THREE.Mesh(alfilForma, ceramicanegra);
  
  alfilMalla.rotateX(Math.PI/2);
  alfilMalla.translateY(3);
  alfilMalla.translateX(20);
  
  alfilMalla1.rotateX(Math.PI/2);
  alfilMalla1.translateY(3);
  alfilMalla1.translateX(20);
  alfilMalla1.translateZ(-70);
  
  alfilMalla2.rotateX(Math.PI/2);
  alfilMalla2.translateY(3);
  alfilMalla2.translateX(50);
  
  alfilMalla3.rotateX(Math.PI/2);
  alfilMalla3.translateY(3);
  alfilMalla3.translateX(50);
  alfilMalla3.translateZ(-70);
  
  //Peon
  var base1Forma = new THREE.CylinderGeometry(5,5,1,20,1,false);
  var base2Forma = new THREE.CylinderGeometry(4,4,1,20,1,false);
  var troncoForma = new THREE.CylinderGeometry(1.5,3,7,7,7,false);
  var cabezaForma = new THREE.SphereGeometry(2);

  base2Forma.translate(0,1,0);
  troncoForma.translate(0,5,0);
  cabezaForma.translate(0,9.5,0);

  var base1Malla = new THREE.Mesh(base1Forma);
  var base2Malla= new THREE.Mesh(base2Forma);
  var troncoMalla= new THREE.Mesh(troncoForma);
  var cabezaMalla= new THREE.Mesh(cabezaForma);

  var peonForma = new THREE.Geometry();
  peonForma.merge(base1Malla.geometry, base1Malla.matrix);
  peonForma.merge(base2Malla.geometry, base2Malla.matrix);
  peonForma.merge(troncoMalla.geometry, troncoMalla.matrix);
  peonForma.merge(cabezaMalla.geometry, cabezaMalla.matrix);
  peonMalla = new THREE.Mesh(peonForma, ceramicablanca);
  peonMalla1 = new THREE.Mesh(peonForma, ceramicablanca);
  peonMalla2 = new THREE.Mesh(peonForma, ceramicablanca);
  peonMalla3 = new THREE.Mesh(peonForma, ceramicablanca);
  peonMalla4 = new THREE.Mesh(peonForma, ceramicablanca);
  peonMalla5 = new THREE.Mesh(peonForma, ceramicablanca);
  peonMalla6 = new THREE.Mesh(peonForma, ceramicablanca);
  peonMalla7 = new THREE.Mesh(peonForma, ceramicablanca);
  peonMalla8 = new THREE.Mesh(peonForma, ceramicanegra);
  peonMalla9 = new THREE.Mesh(peonForma, ceramicanegra);
  peonMalla10 = new THREE.Mesh(peonForma, ceramicanegra);
  peonMalla11 = new THREE.Mesh(peonForma, ceramicanegra);
  peonMalla12 = new THREE.Mesh(peonForma, ceramicanegra);
  peonMalla13 = new THREE.Mesh(peonForma, ceramicanegra);
  peonMalla14 = new THREE.Mesh(peonForma, ceramicanegra);
  peonMalla15 = new THREE.Mesh(peonForma, ceramicanegra);
  
  peonMalla.rotateX(Math.PI/2);
  peonMalla.translateY(3);
  peonMalla.translateZ(-10);
  
  peonMalla1.rotateX(Math.PI/2);
  peonMalla1.translateY(3);
  peonMalla1.translateZ(-10);
  peonMalla1.translateX(10);
  
  peonMalla2.rotateX(Math.PI/2);
  peonMalla2.translateY(3);
  peonMalla2.translateZ(-10);
  peonMalla2.translateX(20);
  
  peonMalla3.rotateX(Math.PI/2);
  peonMalla3.translateY(3);
  peonMalla3.translateZ(-10);
  peonMalla3.translateX(30);
  
  peonMalla4.rotateX(Math.PI/2);
  peonMalla4.translateY(3);
  peonMalla4.translateZ(-10);
  peonMalla4.translateX(40);
  
  peonMalla5.rotateX(Math.PI/2);
  peonMalla5.translateY(3);
  peonMalla5.translateZ(-10);
  peonMalla5.translateX(50);
  
  peonMalla6.rotateX(Math.PI/2);
  peonMalla6.translateY(3);
  peonMalla6.translateZ(-10);
  peonMalla6.translateX(60);
  
  peonMalla7.rotateX(Math.PI/2);
  peonMalla7.translateY(3);
  peonMalla7.translateZ(-10);
  peonMalla7.translateX(70);
  
  peonMalla8.rotateX(Math.PI/2);
  peonMalla8.translateY(3);
  peonMalla8.translateZ(-60);
  
  peonMalla9.rotateX(Math.PI/2);
  peonMalla9.translateY(3);
  peonMalla9.translateZ(-60);
  peonMalla9.translateX(10);
  
  peonMalla10.rotateX(Math.PI/2);
  peonMalla10.translateY(3);
  peonMalla10.translateZ(-60);
  peonMalla10.translateX(20);
  
  peonMalla11.rotateX(Math.PI/2);
  peonMalla11.translateY(3);
  peonMalla11.translateZ(-60);
  peonMalla11.translateX(30);
  
  peonMalla12.rotateX(Math.PI/2);
  peonMalla12.translateY(3);
  peonMalla12.translateZ(-60);
  peonMalla12.translateX(40);
  
  peonMalla13.rotateX(Math.PI/2);
  peonMalla13.translateY(3);
  peonMalla13.translateZ(-60);
  peonMalla13.translateX(50);
  
  peonMalla14.rotateX(Math.PI/2);
  peonMalla14.translateY(3);
  peonMalla14.translateZ(-60);
  peonMalla14.translateX(60);
  
  peonMalla15.rotateX(Math.PI/2);
  peonMalla15.translateY(3);
  peonMalla15.translateZ(-60);
  peonMalla15.translateX(70);
  
  //Vacios
  var materialt= new THREE.MeshLambertMaterial({color: 0xFFFFFF, transparent: true});
  materialt.opacity = 0;
  
  vacio1 = new THREE.Mesh(peonForma, materialt);
  vacio2 = new THREE.Mesh(peonForma, materialt);
  vacio3 = new THREE.Mesh(peonForma, materialt); 
  vacio4 = new THREE.Mesh(peonForma, materialt);
  vacio5 = new THREE.Mesh(peonForma, materialt);
  vacio6 = new THREE.Mesh(peonForma, materialt);
  vacio7 = new THREE.Mesh(peonForma, materialt);
  vacio8 = new THREE.Mesh(peonForma, materialt);
  vacio9 = new THREE.Mesh(peonForma, materialt);
  vacio10 = new THREE.Mesh(peonForma, materialt);
  vacio11 = new THREE.Mesh(peonForma, materialt);
  vacio12 = new THREE.Mesh(peonForma, materialt);
  vacio13 = new THREE.Mesh(peonForma, materialt);
  vacio14 = new THREE.Mesh(peonForma, materialt);
  vacio15 = new THREE.Mesh(peonForma, materialt);
  vacio16 = new THREE.Mesh(peonForma, materialt);
  vacio17 = new THREE.Mesh(peonForma, materialt);
  vacio18 = new THREE.Mesh(peonForma, materialt);
  vacio19 = new THREE.Mesh(peonForma, materialt);
  vacio20 = new THREE.Mesh(peonForma, materialt);
  vacio21 = new THREE.Mesh(peonForma, materialt);
  vacio22 = new THREE.Mesh(peonForma, materialt);
  vacio23 = new THREE.Mesh(peonForma, materialt);
  vacio24 = new THREE.Mesh(peonForma, materialt);
  vacio25 = new THREE.Mesh(peonForma, materialt);
  vacio26 = new THREE.Mesh(peonForma, materialt);
  vacio27 = new THREE.Mesh(peonForma, materialt);
  vacio28 = new THREE.Mesh(peonForma, materialt);
  vacio29 = new THREE.Mesh(peonForma, materialt);
  vacio30 = new THREE.Mesh(peonForma, materialt);
  vacio31 = new THREE.Mesh(peonForma, materialt);
  vacio32 = new THREE.Mesh(peonForma, materialt);
  vacio33 = new THREE.Mesh(peonForma, materialt);
  vacio34 = new THREE.Mesh(peonForma, materialt);
  vacio35 = new THREE.Mesh(peonForma, materialt);
  vacio36 = new THREE.Mesh(peonForma, materialt);
  vacio37 = new THREE.Mesh(peonForma, materialt);
  vacio38 = new THREE.Mesh(peonForma, materialt);
  
  vacio1.translateY(3);
  vacio1.translateZ(-20);
  vacio1.translateX(0);  
  
  vacio9.translateY(3);
  vacio9.translateZ(-30);
  vacio9.translateX(0);
  
  vacio17.translateY(3);
  vacio17.translateZ(-40);
  vacio17.translateX(0); 
  
  vacio25.translateY(3);
  vacio25.translateZ(-50);
  vacio25.translateX(0); 
  
  vacio2.translateY(3);
  vacio2.translateZ(-20);
  vacio2.translateX(10);
  
  vacio10.translateY(3);
  vacio10.translateZ(-30);
  vacio10.translateX(10);
  
  vacio18.translateY(3);
  vacio18.translateZ(-40);
  vacio18.translateX(10);
  
  vacio26.translateY(3);
  vacio26.translateZ(-50);
  vacio26.translateX(10);
  
  vacio3.translateY(3);
  vacio3.translateZ(-20);
  vacio3.translateX(20);
  
  vacio11.translateY(3);
  vacio11.translateZ(-30);
  vacio11.translateX(20);
  
  vacio19.translateY(3);
  vacio19.translateZ(-40);
  vacio19.translateX(20);
  
  vacio27.translateY(3);
  vacio27.translateZ(-50);
  vacio27.translateX(20);
  
  vacio4.translateY(3);
  vacio4.translateZ(-20);
  vacio4.translateX(30);
  
  vacio12.translateY(3);
  vacio12.translateZ(-30);
  vacio12.translateX(30);
  
  vacio20.translateY(3);
  vacio20.translateZ(-40);
  vacio20.translateX(30);
  
  vacio28.translateY(3);
  vacio28.translateZ(-50);
  vacio28.translateX(30);
  
  vacio5.translateY(3);
  vacio5.translateZ(-20);
  vacio5.translateX(40);
  
  vacio13.translateY(3);
  vacio13.translateZ(-30);
  vacio13.translateX(40);
  
  vacio21.translateY(3);
  vacio21.translateZ(-40);
  vacio21.translateX(40);
  
  vacio29.translateY(3);
  vacio29.translateZ(-50);
  vacio29.translateX(40);

  vacio6.translateY(3);
  vacio6.translateZ(-20);
  vacio6.translateX(50);
  
  vacio14.translateY(3);
  vacio14.translateZ(-30);
  vacio14.translateX(50);
  
  vacio22.translateY(3);
  vacio22.translateZ(-40);
  vacio22.translateX(50);
  
  vacio30.translateY(3);
  vacio30.translateZ(-50);
  vacio30.translateX(50);
  
  vacio7.translateY(3);
  vacio7.translateZ(-20);
  vacio7.translateX(60);
  
  vacio15.translateY(3);
  vacio15.translateZ(-30);
  vacio15.translateX(60);
  
  vacio23.translateY(3);
  vacio23.translateZ(-40);
  vacio23.translateX(60);
  
  vacio31.translateY(3);
  vacio31.translateZ(-50);
  vacio31.translateX(60);
  
  vacio8.translateY(3);
  vacio8.translateZ(-20);
  vacio8.translateX(70);
  
  vacio16.translateY(3);
  vacio16.translateZ(-30);
  vacio16.translateX(70);
  
  vacio24.translateY(3);
  vacio24.translateZ(-40);
  vacio24.translateX(70);
  
  vacio32.translateY(3);
  vacio32.translateZ(-50);
  vacio32.translateX(70);
  
  vacio33.translateY(3);
  vacio33.translateZ(0);
  vacio33.translateX(10);
  
  vacio34.translateY(3);
  vacio34.translateZ(-70);
  vacio34.translateX(10);
  
  vacio35.translateY(3);
  vacio35.translateZ(-70);
  vacio35.translateX(60);
  
  vacio36.translateY(3);
  vacio36.translateZ(0);
  vacio36.translateX(60);
  
  //Tablero
  var campoVision = 45;
  var relacionAspecto = window.innerWidth / window.innerHeight;
  var planoCercano = 1;
  var planoLejano = 1000;
  camara = new THREE.PerspectiveCamera(campoVision, relacionAspecto, planoCercano, planoLejano);
  camara.position.z=50;
  camara.position.x=160;
  camara.position.y=40;
  //camara.rotateY(1.365);
  //camara.rotateX(Math.PI/4);
  camara.lookAt(new THREE.Vector3(40,40,0));
  camara.rotateZ(Math.PI/2);
  
  
  escena = new THREE.Scene();
  var cubo= new Array();
  var a=2;
  for(var k=0; k<64; k++){
    for(var i=0; i<8; i++){
      for(var j=0; j<8; j++){
        if(a==2){
          cubo[k] = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 4), marmolblanco );
          a=1;
        }else{
          cubo[k] = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 4), marmolnegro );
          a=2;
        }
       cubo[k].position.x=j*10;
       cubo[k].position.y=i*10;
       escena.add(cubo[k]);
       cubo[k].receiveShadow=true;
     }
     if(a==2){
          a=1;
        }else{
          a=2;
        }
    }
  }
  
  valor = new Array(80)
  valor[0] = new Array(80);
  valor[0][0] = torreMalla;
  valor[0][10] = peonMalla;
  valor[0][20] = vacio1;
  valor[0][30] = vacio9;
  valor[0][40] = vacio17;
  valor[0][50] = vacio25;
  valor[0][60] = peonMalla8;
  valor[0][70] = torreMalla1;

  valor[10] = new Array(8);
  valor[10][0] = vacio33;
  valor[10][10] = peonMalla1;
  valor[10][20] = vacio2;
  valor[10][30] = vacio10;
  valor[10][40] = vacio18;
  valor[10][50] = vacio26;
  valor[10][60] = peonMalla9;
  valor[10][70] = vacio34;

  valor[20] = new Array(8);
  valor[20][0] = alfilMalla;
  valor[20][10] = peonMalla2;
  valor[20][20] = vacio3;
  valor[20][30] = vacio11;
  valor[20][40] = vacio19;
  valor[20][50] = vacio27;
  valor[20][60] = peonMalla10;
  valor[20][70] = alfilMalla1;

  valor[30] = new Array(80);
  valor[30][0] = reyMalla;
  valor[30][10] = peonMalla3;
  valor[30][20] = vacio4;
  valor[30][30] = vacio12;
  valor[30][40] = vacio20;
  valor[30][50] = vacio28;
  valor[30][60] = peonMalla11;
  valor[30][70] = reyMalla1;

  valor[40] = new Array(80);
  valor[40][0] = reinaMalla;
  valor[40][10] = peonMalla4;
  valor[40][20] = vacio5;
  valor[40][30] = vacio13;
  valor[40][40] = vacio21;
  valor[40][50] = vacio29;
  valor[40][60] = peonMalla12;
  valor[40][70] = reinaMalla1;

  valor[50] = new Array(80);
  valor[50][0] = alfilMalla2;
  valor[50][10] = peonMalla5;
  valor[50][20] = vacio6;
  valor[50][30] = vacio14;
  valor[50][40] = vacio22;
  valor[50][50] = vacio30;
  valor[50][60] = peonMalla13;
  valor[50][70] = alfilMalla3;

  valor[60] = new Array(80);
  valor[60][0] = vacio35;
  valor[60][10] = peonMalla6;
  valor[60][20] = vacio7;
  valor[60][30] = vacio15;
  valor[60][40] = vacio23;
  valor[60][50] = vacio31;
  valor[60][60] = peonMalla14;
  valor[60][70] = vacio36;

  valor[70] = new Array(8);
  valor[70][0] = torreMalla3;
  valor[70][10] = peonMalla7;
  valor[70][20] = vacio8;
  valor[70][30] = vacio16;
  valor[70][40] = vacio24;
  valor[70][50] = vacio32;
  valor[70][60] = peonMalla15;
  valor[70][70] = torreMalla2;  
  
  
  var base = new THREE.Mesh( new THREE.BoxGeometry(90, 90, 2), marmolcafe );
  base.position.x=35;
  base.position.y=35;
  base.position.z=-2;
  escena.add(seleccionadorMalla);
  escena.add(base);
  escena.add(torreMalla);
  escena.add(torreMalla1);
  escena.add(torreMalla2);
  escena.add(torreMalla3);
  escena.add(reyMalla);
  escena.add(reyMalla1);
  escena.add(reinaMalla);
  escena.add(reinaMalla1);
  escena.add(alfilMalla);
  escena.add(alfilMalla1);
  escena.add(alfilMalla2);
  escena.add(alfilMalla3);
  escena.add(peonMalla);
  escena.add(peonMalla1);
  escena.add(peonMalla2);
  escena.add(peonMalla3);
  escena.add(peonMalla4);
  escena.add(peonMalla5);
  escena.add(peonMalla6);
  escena.add(peonMalla7);
  escena.add(peonMalla8);
  escena.add(peonMalla9);
  escena.add(peonMalla10);
  escena.add(peonMalla11);
  escena.add(peonMalla12);
  escena.add(peonMalla13);
  escena.add(peonMalla14);
  escena.add(peonMalla15);
  escena.add(vacio1);
  escena.add(vacio2);
  escena.add(vacio3);
  escena.add(vacio4);
  escena.add(vacio5);
  escena.add(vacio6);
  escena.add(vacio7);
  escena.add(vacio8);
  escena.add(vacio9);
  escena.add(vacio10);
  escena.add(vacio11);
  escena.add(vacio12);
  escena.add(vacio13);
  escena.add(vacio14);
  escena.add(vacio15);
  escena.add(vacio16);
  escena.add(vacio17);
  escena.add(vacio18);
  escena.add(vacio19);
  escena.add(vacio20);
  escena.add(vacio21);
  escena.add(vacio22);
  escena.add(vacio23);
  escena.add(vacio24);
  escena.add(vacio25);
  escena.add(vacio26);
  escena.add(vacio27);
  escena.add(vacio28);
  escena.add(vacio29);
  escena.add(vacio30);
  escena.add(vacio31);
  escena.add(vacio32);
  escena.add(vacio33);
  escena.add(vacio34);
  escena.add(vacio35);
  escena.add(vacio36);
  escena.add(iluminacion);
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderizador.domElement);
  renderizador.shadowMapEnabled=true;
  iluminacion.castShadow=true;
  torreMalla.castShadow=true;
  torreMalla1.castShadow=true;
  torreMalla2.castShadow=true;
  torreMalla3.castShadow=true;
  reyMalla.castShadow=true;
  reyMalla1.castShadow=true;
  reinaMalla.castShadow=true;
  reinaMalla1.castShadow=true;
  alfilMalla.castShadow=true;
  alfilMalla1.castShadow=true;
  alfilMalla2.castShadow=true;
  alfilMalla3.castShadow=true;
  peonMalla.castShadow=true;
  peonMalla1.castShadow=true;
  peonMalla2.castShadow=true;
  peonMalla3.castShadow=true;
  peonMalla4.castShadow=true;
  peonMalla5.castShadow=true;
  peonMalla6.castShadow=true;
  peonMalla7.castShadow=true;
  peonMalla8.castShadow=true;
  peonMalla9.castShadow=true;
  peonMalla10.castShadow=true;
  peonMalla11.castShadow=true;
  peonMalla12.castShadow=true;
  peonMalla13.castShadow=true;
  peonMalla14.castShadow=true;
  peonMalla15.castShadow=true;
  base.receiveShadow=true;
}


function loop(){
  if(cuyo==2){
      auxx=parseInt(posicionadorMalla.position.x);
      auxy=parseInt(posicionadorMalla.position.y);
      cuyo=cuyo+1;
      requestAnimationFrame(loop);
      renderizador.render(escena,camara);
  }
  else if(cuyo==4){
    alert(auxx)
    if(auxx==0 && auxy==0){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[0][0].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[0][0].position.y
      valor[0][0].position.x=seleccionadorMalla.position.x;
      valor[0][0].position.y=seleccionadorMalla.position.y;
      var a = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var a1 = valor[0][0];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= a1;
      valor[0][0]= a;
    }else if(auxx==10 && auxy==0){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[10][0].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[10][0].position.y
      valor[10][0].position.x=seleccionadorMalla.position.x;
      valor[10][0].position.y=seleccionadorMalla.position.y;      
      var b = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var b1 = valor[10][0];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= b1;
      valor[10][0]= b;
    }else if(auxx==20 && auxy==0){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[20][0].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[20][0].position.y
      valor[20][0].position.x=seleccionadorMalla.position.x;
      valor[20][0].position.y=seleccionadorMalla.position.y;      
      var c = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var c1 = valor[20][0];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= c1;
      valor[20][0]= c; 
    }else if(auxx==30 && auxy==0){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[30][0].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[30][0].position.y
      valor[30][0].position.x=seleccionadorMalla.position.x;
      valor[30][0].position.y=seleccionadorMalla.position.y;      
      var d = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var d1 = valor[30][0];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= d1;
      valor[30][0]= d;
    }else if(auxx==40 && auxy==0){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[40][0].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[40][0].position.y
      valor[40][0].position.x=seleccionadorMalla.position.x;
      valor[40][0].position.y=seleccionadorMalla.position.y;      
      var e = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var e1 = valor[40][0];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= e1;
      valor[40][0]= e;
    }else if(auxx==50 && auxy==0){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[50][0].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[50][0].position.y
      valor[50][0].position.x=seleccionadorMalla.position.x;
      valor[50][0].position.y=seleccionadorMalla.position.y;      
      var f = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var f1 = valor[50][0];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= f1;
      valor[50][0]= f;
    }else if(auxx==60 && auxy==0){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[60][0].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[60][0].position.y
      valor[60][0].position.x=seleccionadorMalla.position.x;
      valor[60][0].position.y=seleccionadorMalla.position.y;      
      var g = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var g1 = valor[60][0];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= g1;
      valor[60][0]= g;
    }else if(auxx==70 && auxy==0){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[70][0].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[70][0].position.y
      valor[70][0].position.x=seleccionadorMalla.position.x;
      valor[70][0].position.y=seleccionadorMalla.position.y;      
      var h = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var h1 = valor[70][0];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= h1;
      valor[70][0]= h;
      
    }else if(auxx==0 && auxy==10){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[0][10].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[0][10].position.y
      valor[0][10].position.x=seleccionadorMalla.position.x;
      valor[0][10].position.y=seleccionadorMalla.position.y;
      var a2 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var a3 = valor[0][10];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= a3;
      valor[0][10]= a2;
    }else if(auxx==10 && auxy==10){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[10][10].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[10][10].position.y
      valor[10][10].position.x=seleccionadorMalla.position.x;
      valor[10][10].position.y=seleccionadorMalla.position.y;      
      var b2 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var b3 = valor[10][10];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= b3;
      valor[10][10]= b2;
    }else if(auxx==20 && auxy==10){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[20][10].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[20][10].position.y
      valor[20][10].position.x=seleccionadorMalla.position.x;
      valor[20][10].position.y=seleccionadorMalla.position.y;      
      var c2 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var c3 = valor[20][10];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= c3;
      valor[20][10]= c2; 
    }else if(auxx==30 && auxy==10){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[30][10].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[30][10].position.y
      valor[30][10].position.x=seleccionadorMalla.position.x;
      valor[30][10].position.y=seleccionadorMalla.position.y;      
      var d2 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var d3 = valor[30][10];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= d3;
      valor[30][10]= d2;
    }else if(auxx==40 && auxy==10){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[40][10].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[40][10].position.y
      valor[40][10].position.x=seleccionadorMalla.position.x;
      valor[40][10].position.y=seleccionadorMalla.position.y;      
      var e2 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var e3 = valor[40][10];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= e3;
      valor[40][10]= e2;
    }else if(auxx==50 && auxy==10){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[50][10].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[50][10].position.y
      valor[50][10].position.x=seleccionadorMalla.position.x;
      valor[50][10].position.y=seleccionadorMalla.position.y;      
      var f3 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var f2 = valor[50][10];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= f3;
      valor[50][10]= f2;
    }else if(auxx==60 && auxy==10){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[60][10].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[60][10].position.y
      valor[60][10].position.x=seleccionadorMalla.position.x;
      valor[60][10].position.y=seleccionadorMalla.position.y;      
      var g3 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var g2 = valor[60][10];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= g3;
      valor[60][10]= g2;
    }else if(auxx==70 && auxy==10){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[70][10].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[70][10].position.y
      valor[70][10].position.x=seleccionadorMalla.position.x;
      valor[70][10].position.y=seleccionadorMalla.position.y;      
      var h3 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var h2 = valor[70][10];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= h3;
      valor[70][10]= h2;
      
    }else if(auxx==0 && auxy==20){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[0][20].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[0][20].position.y
      valor[0][20].position.x=seleccionadorMalla.position.x;
      valor[0][20].position.y=seleccionadorMalla.position.y;
      var a4 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var a5 = valor[0][20];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= a5;
      valor[0][20]= a4;
    }else if(auxx==10 && auxy==20){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[10][20].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[10][20].position.y
      valor[10][20].position.x=seleccionadorMalla.position.x;
      valor[10][20].position.y=seleccionadorMalla.position.y;      
      var b4 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var b5 = valor[10][20];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= b5;
      valor[10][10]= b4;
    }else if(auxx==20 && auxy==20){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[20][20].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[20][20].position.y
      valor[20][20].position.x=seleccionadorMalla.position.x;
      valor[20][20].position.y=seleccionadorMalla.position.y;      
      var c4 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var c5 = valor[20][20];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= c5;
      valor[20][20]= c4; 
    }else if(auxx==30 && auxy==20){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[30][20].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[30][20].position.y
      valor[30][20].position.x=seleccionadorMalla.position.x;
      valor[30][20].position.y=seleccionadorMalla.position.y;      
      var d4 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var d5 = valor[30][10];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= d5;
      valor[30][20]= d4;
    }else if(auxx==40 && auxy==20){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[40][20].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[40][20].position.y
      valor[40][20].position.x=seleccionadorMalla.position.x;
      valor[40][20].position.y=seleccionadorMalla.position.y;      
      var e4 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var e5 = valor[40][20];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= e5;
      valor[40][20]= e4;
    }else if(auxx==50 && auxy==20){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[50][20].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[50][20].position.y
      valor[50][20].position.x=seleccionadorMalla.position.x;
      valor[50][20].position.y=seleccionadorMalla.position.y;      
      var f4 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var f5 = valor[50][20];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= f5;
      valor[50][20]= f4;
    }else if(auxx==60 && auxy==20){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[60][20].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[60][20].position.y
      valor[60][20].position.x=seleccionadorMalla.position.x;
      valor[60][20].position.y=seleccionadorMalla.position.y;      
      var g4 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var g5 = valor[60][10];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= g5;
      valor[60][20]= g4;
    }else if(auxx==70 && auxy==20){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[70][20].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[70][20].position.y
      valor[70][20].position.x=seleccionadorMalla.position.x;
      valor[70][20].position.y=seleccionadorMalla.position.y;      
      var h4 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var h5 = valor[70][20];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= h5;
      valor[70][20]= h4;
    
     }else if(auxx==0 && auxy==30){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[0][30].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[0][30].position.y
      valor[0][30].position.x=seleccionadorMalla.position.x;
      valor[0][30].position.y=seleccionadorMalla.position.y;
      var a6 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var a7 = valor[0][30];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= a7;
      valor[0][30]= a6;
    }else if(auxx==10 && auxy==30){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[10][30].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[10][30].position.y
      valor[10][30].position.x=seleccionadorMalla.position.x;
      valor[10][30].position.y=seleccionadorMalla.position.y;      
      var b6 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var b7 = valor[10][30];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= b7;
      valor[10][30]= b6;
    }else if(auxx==20 && auxy==30){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[20][30].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[20][30].position.y
      valor[20][30].position.x=seleccionadorMalla.position.x;
      valor[20][30].position.y=seleccionadorMalla.position.y;      
      var c6 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var c7 = valor[20][30];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= c7;
      valor[20][30]= c6; 
    }else if(auxx==30 && auxy==30){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[30][30].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[30][30].position.y
      valor[30][30].position.x=seleccionadorMalla.position.x;
      valor[30][30].position.y=seleccionadorMalla.position.y;      
      var d6 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var d7 = valor[30][30];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= d7;
      valor[30][30]= d6;
    }else if(auxx==40 && auxy==30){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[40][30].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[40][30].position.y
      valor[40][30].position.x=seleccionadorMalla.position.x;
      valor[40][30].position.y=seleccionadorMalla.position.y;      
      var e6 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var e7 = valor[40][30];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= e7;
      valor[40][30]= e6;
    }else if(auxx==50 && auxy==30){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[50][30].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[50][30].position.y
      valor[50][30].position.x=seleccionadorMalla.position.x;
      valor[50][30].position.y=seleccionadorMalla.position.y;      
      var f6 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var f7 = valor[50][30];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= f7;
      valor[50][30]= f6;
    }else if(auxx==60 && auxy==30){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[60][30].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[60][30].position.y
      valor[60][30].position.x=seleccionadorMalla.position.x;
      valor[60][30].position.y=seleccionadorMalla.position.y;      
      var g6 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var g7 = valor[60][30];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= g7;
      valor[60][30]= g6;
    }else if(auxx==70 && auxy==30){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[70][30].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[70][30].position.y
      valor[70][30].position.x=seleccionadorMalla.position.x;
      valor[70][30].position.y=seleccionadorMalla.position.y;      
      var h6 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var h7 = valor[70][30];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= h5;
      valor[70][30]= h4;
    
    }else if(auxx==0 && auxy==40){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[0][40].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[0][40].position.y
      valor[0][40].position.x=seleccionadorMalla.position.x;
      valor[0][40].position.y=seleccionadorMalla.position.y;
      var a8 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var a9 = valor[0][40];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= a8;
      valor[0][40]= a9;
    }else if(auxx==10 && auxy==40){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[10][40].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[10][40].position.y
      valor[10][40].position.x=seleccionadorMalla.position.x;
      valor[10][40].position.y=seleccionadorMalla.position.y;      
      var b8 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var b9 = valor[10][40];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= b9;
      valor[10][40]= b8;
    }else if(auxx==20 && auxy==40){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[20][40].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[20][40].position.y
      valor[20][40].position.x=seleccionadorMalla.position.x;
      valor[20][40].position.y=seleccionadorMalla.position.y;      
      var c8 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var c9 = valor[20][40];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= c9;
      valor[20][40]= c8; 
    }else if(auxx==30 && auxy==40){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[30][40].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[30][40].position.y
      valor[30][40].position.x=seleccionadorMalla.position.x;
      valor[30][40].position.y=seleccionadorMalla.position.y;      
      var d8 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var d9 = valor[30][40];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= d9;
      valor[30][40]= d8;
    }else if(auxx==40 && auxy==40){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[40][40].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[40][40].position.y
      valor[40][40].position.x=seleccionadorMalla.position.x;
      valor[40][40].position.y=seleccionadorMalla.position.y;      
      var e8 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var e9 = valor[40][40];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= e9;
      valor[40][40]= e8;
    }else if(auxx==50 && auxy==40){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[50][40].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[50][40].position.y
      valor[50][40].position.x=seleccionadorMalla.position.x;
      valor[50][40].position.y=seleccionadorMalla.position.y;      
      var f8 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var f9 = valor[50][40];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= f9;
      valor[50][40]= f8;
    }else if(auxx==60 && auxy==20){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[60][40].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[60][40].position.y
      valor[60][40].position.x=seleccionadorMalla.position.x;
      valor[60][40].position.y=seleccionadorMalla.position.y;      
      var g8 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var g9 = valor[60][40];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= g9;
      valor[60][40]= g8;
    }else if(auxx==70 && auxy==40){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[70][40].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[70][40].position.y
      valor[70][40].position.x=seleccionadorMalla.position.x;
      valor[70][40].position.y=seleccionadorMalla.position.y;      
      var h8 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var h9 = valor[70][40];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= h9;
      valor[70][40]= h8;
    
    }else if(auxx==0 && auxy==20){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[0][20].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[0][20].position.y
      valor[0][20].position.x=seleccionadorMalla.position.x;
      valor[0][20].position.y=seleccionadorMalla.position.y;
      var a4 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var a5 = valor[0][20];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= a5;
      valor[0][20]= a4;
    }else if(auxx==10 && auxy==20){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[10][20].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[10][20].position.y
      valor[10][20].position.x=seleccionadorMalla.position.x;
      valor[10][20].position.y=seleccionadorMalla.position.y;      
      var b4 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var b5 = valor[10][20];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= b5;
      valor[10][10]= b4;
    }else if(auxx==20 && auxy==20){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[20][20].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[20][20].position.y
      valor[20][20].position.x=seleccionadorMalla.position.x;
      valor[20][20].position.y=seleccionadorMalla.position.y;      
      var c4 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var c5 = valor[20][20];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= c5;
      valor[20][20]= c4; 
    }else if(auxx==30 && auxy==20){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[30][20].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[30][20].position.y
      valor[30][20].position.x=seleccionadorMalla.position.x;
      valor[30][20].position.y=seleccionadorMalla.position.y;      
      var d4 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var d5 = valor[30][10];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= d5;
      valor[30][20]= d4;
    }else if(auxx==40 && auxy==20){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[40][20].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[40][20].position.y
      valor[40][20].position.x=seleccionadorMalla.position.x;
      valor[40][20].position.y=seleccionadorMalla.position.y;      
      var e4 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var e5 = valor[40][20];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= e5;
      valor[40][20]= e4;
    }else if(auxx==50 && auxy==20){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[50][20].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[50][20].position.y
      valor[50][20].position.x=seleccionadorMalla.position.x;
      valor[50][20].position.y=seleccionadorMalla.position.y;      
      var f4 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var f5 = valor[50][20];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= f5;
      valor[50][20]= f4;
    }else if(auxx==60 && auxy==20){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[60][20].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[60][20].position.y
      valor[60][20].position.x=seleccionadorMalla.position.x;
      valor[60][20].position.y=seleccionadorMalla.position.y;      
      var g4 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var g5 = valor[60][10];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= g5;
      valor[60][20]= g4;
    }else if(auxx==70 && auxy==20){
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.x=valor[70][20].position.x
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y].position.y=valor[70][20].position.y
      valor[70][20].position.x=seleccionadorMalla.position.x;
      valor[70][20].position.y=seleccionadorMalla.position.y;      
      var h4 = valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y];
      var h5 = valor[70][20];
      valor[seleccionadorMalla.position.x][seleccionadorMalla.position.y]= h5;
      valor[70][20]= h4;
    }

    seleccionadorMalla.position.x=0;
    seleccionadorMalla.position.y=0;
    seleccionadorMalla.position.z=30;
    posicionadorMalla.position.x=0;
    posicionadorMalla.position.y=0;
    posicionadorMalla.position.z=1000;
    cuyo=1;
    requestAnimationFrame(loop);
    renderizador.render(escena,camara);
  }else{
    window.onload=function(){document.onkeydown=desplazar};
      function desplazar(objeto){
      var tecla = objeto.which;
          switch (tecla){
              case 37 : 
                  seleccionadorMalla.translateZ(10);
                  break;
              case 38 : 
                  seleccionadorMalla.translateX(-10);
                  break;
              case 39 :  
                  seleccionadorMalla.translateZ(-10);
                  break;
              case 40 : 
                  seleccionadorMalla.translateX(10);
                  break;
              case 13 :
                  escena.remove(posicionadorMalla);
                  posicionadorMalla = new THREE.Mesh(seleccionadorForma, posicionador);
                  posicionadorMalla.rotateX(Math.PI/2);
                  posicionadorMalla.position.x=seleccionadorMalla.position.x;
                  posicionadorMalla.position.y=seleccionadorMalla.position.y;
                  posicionadorMalla.position.z=seleccionadorMalla.position.z;
                  escena.add(posicionadorMalla);
                  cuyo=cuyo+1;
                  break;
          default :alert("Se ha equivocado, debe pulsar las flechas del teclado");
          }
      }
    requestAnimationFrame(loop);
    renderizador.render(escena,camara);
  }
}


setup();
loop();
