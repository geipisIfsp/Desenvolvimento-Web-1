document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
  
    // Validação do CPF
    let cpf = document.getElementById('cpf').value;
    if (!validarCPF(cpf)) {
      isValid = false;
      document.getElementById('cpf').classList.add('invalid');
    } else {
      document.getElementById('cpf').classList.remove('invalid');
    }
  
    // Validação do telefone
    let telefone = document.getElementById('telefone').value;
    if (telefone.length < 14) {
      isValid = false;
      document.getElementById('telefone').classList.add('invalid');
    } else {
      document.getElementById('telefone').classList.remove('invalid');
    }
  
    if (isValid) {
      alert('Formulário enviado com sucesso!');
    } else {
      alert('Preencha os campos corretamente!');
    }
});
  
// Máscara para CPF
document.getElementById('cpf').addEventListener('input', function() {
this.value = mascaraCPF(this.value);
});

// Máscara para Telefone
document.getElementById('telefone').addEventListener('input', function() {
this.value = mascaraTelefone(this.value);
});

function mascaraCPF(cpf) {
cpf = cpf.replace(/\D/g, ''); // Remove tudo o que não for número
cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
return cpf;
}

function mascaraTelefone(telefone) {
telefone = telefone.replace(/\D/g, ''); // Remove tudo o que não for número
telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
return telefone;
}

function validarCPF(cpf) {
cpf = cpf.replace(/\D/g, ''); // Remove tudo o que não for número

// Verifica se o CPF tem 11 dígitos e não é uma sequência de números repetidos
if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

// Valida o primeiro dígito verificador
let soma = 0;
for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
}
let resto = soma % 11;
if (resto < 2 ? 0 : 11 - resto !== parseInt(cpf.charAt(9))) return false;

// Valida o segundo dígito verificador
soma = 0;
for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
}
resto = soma % 11;
if (resto < 2 ? 0 : 11 - resto !== parseInt(cpf.charAt(10))) return false;

return true;
}
  
  