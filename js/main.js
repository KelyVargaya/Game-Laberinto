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

var mapita = [];
for (var i = 0; i < mapa.length; i++){
  mapita[i]=[];
  for (var j = 0; j < mapa[0].length; j++) {
    mapita[i][j]=mapa[i][j];
  }
}

function generarMapa(mapita) {
  laberinto.innerHTML='';
  var tabla = document.createElement('table');
  tabla.setAttribute("class","celdita");
  for (var i = 0; i < mapita.length; i++) {
    var fila = document.createElement('tr');
    for (var j = 0; j < mapita
[i].length; j++) {
        var celda = document.createElement('td');
        if(mapita
    [i][j]=='*'){
          celda.setAttribute("class","celda");
        } else if(mapita
    [i][j]=='o'){
          x=j;
          y=i;
          celda.setAttribute("class","inicio");
        } else if (mapita
    [i][j]=='W') {
          celda.setAttribute("class","final");
        }
        fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }
  laberinto.appendChild(tabla);
}

generarMapa(mapita);


arriba.onclick=function() {
  if(mapita[y-1][x]!='*'){
    mapita[y][x]='_';
    y-=1;
    mapita[y][x]='o';
    generarMapa(mapita);
  }
}

derecha.onclick=function() {
  if(mapita[y][x+1]!='*'){
    mapita[y][x]='_';
    x+=1;
    mapita[y][x]='o';
    generarMapa(mapita);
  }
}

izquierda.onclick=function() {
  if(mapita[y][x-1]!='*'){
    mapita[y][x]='_';
    x-=1;
    mapita[y][x]='o';
    generarMapa(mapita);
  }
}
abajo.onclick=function() {
  if(mapita[y+1][x]!='*'){
    mapita[y][x]='_';
    y+=1;
    mapita[y][x]='o';
    generarMapa(mapita);
  }
}
