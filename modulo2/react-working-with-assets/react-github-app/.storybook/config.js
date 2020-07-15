import { configure } from '@kadira/storybook';

// Adicionando um contexto de importaçao de arquivos,
// procutando dentro do src/components, 
// true -> procurando tambem nos subdiretorios
const req = require.context('../src/components', true,  /\.story\.js$/)

function loadStories() {
  // retorna um array com todos os nomes dos arquivos encontrados
  req.keys().forEach((fileName) => req(fileName))
}

configure(loadStories, module);
