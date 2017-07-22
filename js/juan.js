
// variable donde se guardarán los json creados
var estudiantes =[];
/*
Contructor que permite formar objetos JSON

function Estudiante(codigo, nombre, nota){
  this.codigo = codigo;
  this.nombre = nombre;
  this.nota = nota;
}
/*
  Evento listener que permite la creación del json y la inserción a la tabla
*/
 document.getElementById("registro").addEventListener("click", function(){
  // se atrapan los datos desde la interfaz
  var cod = document.getElementById("codigo").value;
  var nombre = document.getElementById("nombre").value;
  var nota = parseInt(document.getElementById("nota").value);

  // se valida que la nota sea una numero
  if (isNaN(nota)){
    alert("La nota debe ser un número");
    return;
  }
  else{
    //se crea el json
    var nuevoEstudiante = new Estudiante(cod, nombre, nota);
    //se agrega a la variable el json creado
      if (guardarJSON(nuevoEstudiante)==false){
        return;
      }

    var  tabla = document.getElementById("myTable"); // se obtiene la tabla mediante el id
    var i;
    var filaFinal;
    var fila;

    filaFinal = tabla.rows.length; // se obtiene el total de filas de la tabla
    fila = tabla.insertRow(filaFinal); // se crea la fila nueva en la tabla

    // ahora se crearán las celdas
    var celda0 = fila.insertCell(0);
    var celda1 = fila.insertCell(1);
    var celda2 = fila.insertCell(2);

    // se asignan los datos a las celdas
    celda0.innerHTML = nuevoEstudiante.codigo;
    celda1.innerHTML = nuevoEstudiante.nombre;
    celda2.innerHTML = nuevoEstudiante.nota;
    // limpiar los campos
    document.getElementById("codigo").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("nota").value = "";

  }
  });

/*
  Funcion que permite guardar un json al arreglo
*/
 function guardarJSON(json){
  for (i=0; i< estudiantes.length; i++){ // ciclo para recorrer el JSON
    if (estudiantes[i].codigo == json.codigo){
      alert("No pueden haber dos estudiantes con el mismo código");
      return false;
    }
  }
  estudiantes[estudiantes.length] = json;
  alert("Registro completado...");
  document.getElementById("codigo").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("nota").value = "";
  return true;

} // final del almacenarJSON   /*


function calcularPromedio(){
  var promedio=0;
    for (var i = 0; i < estudiantes.length; i++) {
      promedio += estudiantes[i].nota;
    }
  promedio /= estudiantes.length;
  alert("El promedio del grupo es: " + promedio);
}  // Esta funcion recorre el JSON y calcular las calificaciones para obtener el promedio.


function maximaPromedio(){
  var maxPromedio=0;
  var out="";
    for(var i=0; i < estudiantes.length;i++){
      if(maxPromedio < estudiantes[i].nota){
        maxPromedio =  estudiantes[i].nota;
        out = "Cod:"+ estudiantes[i].codigo + " Nombre: "+ estudiantes[i].nombre + " Nota: " + maxPromedio;
      }
    }

alert(out);
} // Esta funcion recorre el JSON y calcula y revuelve la mayor calificacion.

function minimoPromedio(){
  var minPromedio=100;
  var out="";
    for(var i=0;i<estudiantes.length;i++){
      if(minPromedio>estudiantes[i].nota){
        minPromedio = estudiantes[i].nota;
        out = "Cod:"+ estudiantes[i].codigo + " Nombre: "+ estudiantes[i].nombre +" Nota: "+ minPromedio;
      }
    }

  alert(out);
} // Esta funcion recorre el JSON y calcula y revuelve la menor calificacion.
