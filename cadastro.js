// Obtém o formulário
const form = document.querySelector('form');

// Adiciona um listener de evento para quando o formulário for submetido
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Previne a submissão padrão do formulário

  // Obtém os valores dos campos
  const nome = document.querySelector('#nome').value;
  const placa = document.querySelector('#placa').value;
  const data = document.querySelector('#data').value;
  const horario = document.querySelector('#horario').value;
  const tipoVeiculo = document.querySelector('input[name="tipoVeiculo"]:checked').value;
  const cor = document.querySelector('#cores').value;
  const consultor = document.querySelector('#consultores').value;

  // Cria um objeto com os dados do formulário
  const dataForm = {
    nome: nome,
    placa: placa,
    data: data,
    horario: horario,
    tipoVeiculo: tipoVeiculo,
    cor: cor,
    consultor: consultor
  };

  // Salva os dados no LocalStorage
  localStorage.setItem('dataForm', JSON.stringify(dataForm));

  // Exibe uma mensagem de sucesso
  alert('Formulário enviado com sucesso!');

  // Limpa os campos do formulário
  form.reset();
});
