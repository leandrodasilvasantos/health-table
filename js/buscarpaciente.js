var botaobuscar = document.querySelector("#buscar-paciente");

botaobuscar.addEventListener("click", function(){

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function(){
    var erroAjax = document.querySelector("#erro-ajax");

    if(xhr.status == 200) {
      erroAjax.classList.add("invisivel");
      var pacientes = JSON.parse(xhr.responseText); //string to object
      pacientes.forEach(function (paciente) {
        addPacienteTabela(paciente);
      });
    } else {
      console.log(xhr.status);
      erroAjax.classList.remove("invisivel");
    }
  });

  xhr.send();
});