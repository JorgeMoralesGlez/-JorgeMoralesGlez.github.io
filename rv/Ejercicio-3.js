var forma = new THREE.Geometry();

forma.vertices.push( new THREE.Vector3( 1, 0, 1) );
forma.vertices.push( new THREE.Vector3( 1, 0, -1) );
forma.vertices.push( new THREE.Vector3( -1, 0, -1) );
forma.vertices.push( new THREE.Vector3( -1, 0, 1) );
forma.vertices.push( new THREE.Vector3( 1, 1, 1) );
forma.vertices.push( new THREE.Vector3( 1, 1, -1) );
forma.vertices.push( new THREE.Vector3( -1, 1, -1) );
forma.vertices.push( new THREE.Vector3( -1, 1, 1) );

forma.faces.push( new THREE.Face3( 3, 2, 1 ) );


forma.computeBoundingSphere();
forma.computeFaceNormals();

var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );

var escena = new THREE.Scene();
escena.add( malla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render ( escena, camara );
