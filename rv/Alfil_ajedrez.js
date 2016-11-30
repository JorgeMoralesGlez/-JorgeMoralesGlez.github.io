var base1Forma = new THREE.CylinderGeometry(5,5,1,20,1,false);
var base2Forma = new THREE.CylinderGeometry(4,4,1,20,1,false);
var troncoForma = new THREE.CylinderGeometry(1.5,3,12,12,12,false);
var detalle1Forma = new THREE.CylinderGeometry(4,4,.5,20,.5,false);
var detalle2Forma = new THREE.CylinderGeometry(3,3,.3,20,.3,false);
var detalle3Forma = new THREE.CylinderGeometry(3,3,.3,20,.3,false);
var cabeza1Forma = new THREE.SphereGeometry(2);
var cabeza2Forma = new THREE.SphereGeometry(.5);

base1Forma.translate(0,1,0);
base2Forma.translate(0,2,0);
troncoForma.translate(0,8,0);
cabeza1Forma.translate(0,12,0);
cabeza2Forma.translate(0,15,0);
detalle1Forma.translate(0,7,0);
detalle2Forma.translate(0,6.7,0);
detalle3Forma.translate(0,7.5,0);

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
var material= new THREE.MeshNormalMaterial();
var alfilMalla = new THREE.Mesh(alfilForma, material);

var escena = new THREE.Scene();
escena.add(alfilMalla);
var camara = new THREE.PerspectiveCamera();
camara.position.z=50;
renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
