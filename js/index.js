
function listarEstudiante() {

    var tabla = "";
    var divTabla = $("#myTable");

    tabla += '<table>';
    tabla += '<tr>';
    tabla += '<th>Codigo</th>';
    tabla += ' <th>Nombre</th>';
    tabla += '<th>Nota</th>';
    tabla += '<th>Editar</th>';
    tabla += '<th>Elimimar</th>';
    tabla += '</tr>';

    for (var i = 0; i < localStorage.length; i++) {

        var clave = localStorage.key(i);
        var estudiantes = $.parseJSON(localStorage.getItem(clave));
        tabla += '<tr>';
        tabla += '<td>' + estudiantes.codigo + '</td>';
        tabla += '<td>' + estudiantes.nombre + '</td>';
        tabla += '<td>' + estudiantes.nota + '</td>';
        tabla += '<td><button onclick="editarEstudiante(\'' + estudiantes.codigo + '\');">Editar</button></td>';
        tabla += '<td><button onclick="eliminarEstudiante(\'' + estudiantes.codigo + '\');">Eliminar</button></td>';
        tabla += '</tr>';
    }

    tabla += '</table>';

    $(divTabla).html(tabla);

}
    function editarEstudiante(codigo) {

        var estudiante;

        for (var i = 0; i < localStorage.length; i++) {
            var clave = localStorage.key(i);
            if (clave == codigo) {

                estudiante = $.parseJSON(localStorage.getItem(clave));

                $("#codigo").val(estudiante.codigo);
                $("#nombre").val(estudiante.nombre);
                $("#nota").val(estudiante.nota);
            }
        }
    }

    function eliminarEstudiante(codigo) {
        localStorage.removeItem(codigo);
        listarEstudiante();
    }



var contador;
$(document).ready(function() {

  $("#registrar").click(function(){
    var codigo = $("#codigo").val();
    var nombre = $("#nombre").val();
    var nota = $("#nota").val();

    var estudiantes = {
        codigo: codigo,
        nombre: nombre,
        nota: nota
    };

    localStorage.setItem(codigo, JSON.stringify(estudiantes));
    contador = localStorage.length + 1;

    listarEstudiante();
    reestablecer();
  });

  function reestablecer() {

      $("#codigo").val("");
      $("#nombre").val("");
      $("#nota").val("");
  }



      listarEstudiante();
});