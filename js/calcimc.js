var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i<pacientes.length; i++) {
  var paciente = pacientes[i];

  var peso = paciente.querySelector('.info-peso').textContent;
  var imc = paciente.querySelector('.info-imc');
  var tdImc = paciente.querySelector('.info-imc');
  var altura = paciente.querySelector('.info-altura').textContent;
  var gordura = paciente.querySelector('.info-gordura').textContent;
  var nome = paciente.querySelector('.info-nome').textContent;

  var pesovalido = validaPeso(peso);
  var alturavalida = validaAltura(altura);

  if(!pesovalido) {
    console.log('peso inválido');
    pesovalido = false;
    tdImc.textContent = 'Peso inválido';
    paciente.classList.add("paciente-invalido");
  }
  if(!alturavalida) {
    alturavalida = false;
    tdImc.textContent = 'Altura inválido';
    paciente.classList.add("paciente-invalido");
  }

  if(pesovalido && alturavalida) {
    imc = calcImc(peso,altura);
    tdImc.textContent = imc
  }
}

function validaPeso(peso) {
  if((peso>0)&&(peso<300)) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if((altura>0)&&(altura<3)) {
    return true;
  } else {
    return false;
  }
}

function calcImc(peso,altura) {
  var imc = 0;
  imc = (peso)/(altura*altura);

  return imc.toFixed(2);;
}


