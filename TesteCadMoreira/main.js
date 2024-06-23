document.getElementById('formCadastro').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const nome = document.getElementById('nome').value;
  const informacoes = document.getElementById('informacoes').value;
  const imagem = document.getElementById('imagem').value;

  const fruta = {
    nome: nome,
    informacoes: informacoes,
    imagem: imagem
  };

  fetch('https://frutas-json.repl.co/frutas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(fruta)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Fruta adicionada:', data);
  })
  .catch(error => {
    console.error('Erro ao adicionar fruta:', error);
  });

  this.reset();
});
