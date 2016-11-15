var base1Forma = new THREE.CylinderGeometry(5,5,1,20,1,false);
var base2Forma = new THREE.CylinderGeometry(4,4,1,20,1,false);
var base3Forma = new THREE.CylinderGeometry(3,4,2,20,2,false);
var troncoForma = new THREE.CylinderGeometry(3,3,8,20,8,false);
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
var material= new THREE.MeshNormalMaterial();
var torreMalla = new THREE.Mesh(torreForma, material);

var escena = new THREE.Scene();
escena.add(torreMalla);
var camara = new THREE.PerspectiveCamera();
camara.position.z=50;
renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
