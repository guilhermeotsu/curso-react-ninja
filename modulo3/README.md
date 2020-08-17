# **Redux**
Este módulo do curso será abordado em sua grande maioria o [Redux](https://redux.js.org/).

## O que é o Redux?
*Redux is a **predictable state container** for Javascript app* - [redux.js.org](https://redux.js.org/)

* Container de estados 
  > Facilita o gerenciamento de estados da aplicação.

### 3 Princípios do Redux
Abaixo listarei os 3 princípios que movem o Redux.

1. #### **Single Source of Truth**
    > O Redux precisa ter apenas uma fonte de verdade, ou seja, você vai ter um único lugar dentro da sua aplicaçao inteira que as informaçoes vão estar centralizadas.

2. #### **The state is read-only**
    > O estado do deve ser somente leitura. A única forma de se atualizar o estado do Redux é disparando uma ação, que é um objeto com uma propriedade type, cujo valor dela deve ser uma representação em string, pois string é um dado serializável.

3. #### **Changes are made with pure functions**
    > Mundaças de estado só podem ser feitas por funções puras.
    * **Reducer**
    > Reducer é uma funçao pura, que recebe por parâmetro o estado atual da aplicação e uma ação e retorna um novo estado. Ele nunca vai modificar o estado anterior, apenas retornar um estado novo. 
        >>**Representação de um Reducer:**   ``` (state, action) => state```

    > Exemplo de um Reducer em uma aplicação de um contador: 
    ```javascript
        const counter = (state = 0, action) => {
            switch (action.type) {
                case 'INCREMENT': return state + 1
                case 'DECREMENT': return state - 1
            }

            return state
        }
    ```
