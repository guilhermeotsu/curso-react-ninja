# Lifecycle
Ciclo de vida de um componente do React.

## Métodos do lifecycle do React
Basicamento temos dois fluxos no ciclo de vida de um componente.
- mounting/unmounting
  |
  +---- Ciclo de montagem de desmontagem de um componente.

- updating
  |
  +---- Ciclo de atualização de um componente.

Cada um desses tem alguns métodos em específicos, para que possamos saber alguns momentos do nosso componente.

### Mounting/Unmounting - Esses métodos só executam uma vez
- componentWillMount
  |
  +--- "O componente vai montar", momento antes de o componente ser montado.

- componentDidMount
  |
  +--- "O componente acabou de ser montado", momento onde o componente acabou de ser montado. Esse é o método que poderá ser utilizado para eventualmente fazer **manipulação de DOM**. Só executa no Front-End.

- componenteWillUnmount
  |
  +--- "O componente será desmontado ou removido da tela", momento antes do componente ser desmontado.

#### Ordem de Execuçao Mounting de um Componente
1 - constructor()
2 - componentWillMount
3 - render()
4 - componenteDidMount

### Updating
- componetWillReceiveProps (nextProps)
  |
  +--- "O componente vai receber novas propriedades", e é possível pegar essas próximas propriedades através do parametro **nextProps**.

- shouldComponentUpdate (nextProps, nextState) => bool
  |
  +--- Esse método vai ser executado para saber se o componente deve ou não ser atualizado.

- componenteWillUpdate (nextProps, nextState)
  |
  +--- Momento onde o componente vai ser atualizado, ou seja, ele passou do shouldComponentUpdate. Momento antes do atualização do componente.

- componenteDidUpdate (prevProps, prevState)
  |
  +--- Momento onde o componete foi atualizado.
