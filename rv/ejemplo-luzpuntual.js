var luzPuntual = new THREE.PointLight(0xFFFFFF);
luzPuntual.position.x = 10;
luzPuntual.position.y = 10;
luzPuntual.position.z = 10;

var forma = new THREE.SphereGeometry( 1 );
var material = new THREE.MeshLambertMaterial( {color: '#00cc00'} );
var malla = new THREE.Mesh( forma, material );

var escena = new THREE.Scene();
escena.add(malla);
escena.add(luzPuntual);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var lienzo = document.getElementById("luzPuntual");
var renderizador = new THREE.WebGLRenderer( {canvas: lienzo, antialias: true});

renderizador.setSize( 600, 600);
renderizador.render( escena, camara );
