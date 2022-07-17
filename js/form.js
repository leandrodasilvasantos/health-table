var botao = document.querySelector('#adicionar-paciente');
botao.addEventListener('click', function(event) {
  event.preventDefault();

  var form = document.querySelector('#form-adiciona');
  var paciente = obtemPacienteForm(form);
  var erros = validaPaciente(paciente);

  //before add new client, scan.
  if(erros.length > 0) {
    
    exibeMensagensErro(erros);

    return; //if is not valid, END FUNCTION;
  }
  
  addPacienteTabela(paciente);

  //reset form
  form.reset();
  //reset error messages
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

});

function addPacienteTabela(paciente) {
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector('#tabela-pacientes');
  tabela.appendChild(pacienteTr);
}

function exibeMensagensErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = ""; //reset all LI before add new LI
  erros.forEach(function(erroOne) {
    var li = document.createElement("li");
    li.textContent = erroOne;
    ul.appendChild(li);
  });
}



function obtemPacienteForm(form) {

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement('tr');
  pacienteTr.classList.add('paciente');

  var nomeTd = document.createElement('td');
  nomeTd.classList.add('info-nome');
  nomeTd.textContent = paciente.nome;
  //same thing here, using functions
  var pesoTd = montaTd(paciente.peso, "info-peso");
  var alturaTd = montaTd(paciente.altura, "info-altura");
  var gorduraTd = montaTd(paciente.gordura, "info-gordura");
  var imcTd = montaTd(paciente.imc, "info-imc");


  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;
}

function montaTd(dado,classe){
  var td = document.createElement('td');
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente) {

  var erros = [];

  if((!validaPeso(paciente.peso))||(paciente.peso.length == 0)) {
    erros.push("Peso inválido");
  }
  if((!validaAltura(paciente.altura))||(paciente.altura.length == 0)) {
    erros.push("Altura inválida");
  }
  if(paciente.nome.length == 0) {
    erros.push("Nome inválido");
  }
  if(paciente.gordura.length == 0) {
    erros.push("Gordura inválida");
  }

  return erros;
}
