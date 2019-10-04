const comandos = [
  {
    nome: '!teste',
    acao: () => 'Comando executado com sucesso'
  },
  {
    nome: '!java',
    acao: () => 'LUL 4Head'
  }
];

module.exports.executarComando = ({ message }) => {
  let existe = comandos.filter(c => c.nome === message);
  if (existe.length) return existe[0].acao();
  return 'Comando não existe';
};
