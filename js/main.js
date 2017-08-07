var mapa=[
"******************",
"*_________*______*",
"*_*****_____******",
"*______***__*__*_*",
"***_*____*____**_*",
"*___*____**__*___*",
"*_********__**_*_*",
"*____*______*__*_*",
"*_**_*__*****_**_*",
"*o*__*________**W*",
"******************"];

var map = [];
for (var i = 0; i < mapa.length; i++){
  map[i]=[];
  for (var j = 0; j < mapa[0].length; j++) {
    map[i][j]=mapa[i][j];
  }
}

function generarMapa(map) {
  laberinto.innerHTML='';
  var tabla = document.createElement('table');
  tabla.setAttribute("class","celdita");
  for (var i = 0; i < map.length; i++) {
    var fila = document.createElement('tr');
    for (var j = 0; j < map[i].length; j++) {
        var celda = document.createElement('td');
        if(map[i][j]=='*'){
          celda.setAttribute("class","celda");
        } else if(map[i][j]=='o'){
          x=j;
          y=i;
          celda.style.backgroundColor='blue';
        } else if (map[i][j]=='W') {
          celda.style.backgroundColor='green';
        }
        fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }
  laberinto.appendChild(tabla);
}

generarMapa(map);
