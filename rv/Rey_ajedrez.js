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

base2Forma.translate(0,1,0);
base3Forma.translate(0,6,0);
troncoForma.translate(0,12,0);
detalle2Forma.translate(0,14,0);
detalle1Forma.translate(0,14.3,0);
detalle3Forma.translate(0,14.8,0);
cubierta1Forma.translate(0,15.1,0);
cubierta2Forma.translate(0,17,0);
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
var cabeza1Malla= new THREE.Mesh(cabeza1Forma);

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
var material= new THREE.MeshNormalMaterial();
var reyMalla = new THREE.Mesh(reyForma, material);

reyMalla.rotateX(Math.PI/4);

var escena = new THREE.Scene();
escena.add(reyMalla);
var camara = new THREE.PerspectiveCamera();
camara.position.z=50;
renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
