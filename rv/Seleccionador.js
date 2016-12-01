var base1Forma = new THREE.CylinderGeometry(2,2,6,6,6,false);
var base2Forma = new THREE.CylinderGeometry(0,4,4,4,4,false);

base2Forma.translate(0,0,0);

var base1Malla = new THREE.Mesh(base1Forma);
var base2Malla= new THREE.Mesh(base2Forma);

var seleccionadorForma = new THREE.Geometry();
seleccionadorForma.merge(base1Malla.geometry, base1Malla.matrix);
seleccionadorForma.merge(base2Malla.geometry, base2Malla.matrix);
var material= new THREE.MeshNormalMaterial();
var seleccionadorMalla = new THREE.Mesh(seleccionadorForma, material);

var escena = new THREE.Scene();
escena.add(seleccionadorMalla);
var camara = new THREE.PerspectiveCamera();
camara.position.z=50;
renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
