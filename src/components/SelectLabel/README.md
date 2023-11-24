## Propriedades do Componente SelectLabel

O componente `SelectLabel` aceita as seguintes propriedades:

### Propriedades Gerais

- **listOptions**
  - _Tipo:_ Array de strings
  - _Descrição:_ Lista de opções disponíveis no menu suspenso.

### Propriedades de Estilo

- **fs**

  - _Tipo:_ "xsmall" | "small" | "medium" | "larger" | string
  - _Descrição:_ Define o tamanho da fonte do componente.

- **fStyle**

  - _Tipo:_ "normal" | "italic"
  - _Descrição:_ Define o estilo da fonte do componente.

- **fw**

  - _Tipo:_ "medium" | "larger"
  - _Descrição:_ Define a espessura da fonte do componente.

- **fFamily**
  - _Tipo:_ string
  - _Descrição:_ Define a família da fonte do componente.

### Propriedades de Alinhamento e Transformação de Texto

- **tAlign**

  - _Tipo:_ "start" | "end" | "justify" | "center"
  - _Descrição:_ Define o alinhamento do texto do componente.

- **tTransform**
  - _Tipo:_ "none" | "capitalize" | "uppercase" | "lowercase"
  - _Descrição:_ Define a transformação do texto do componente.

### Propriedades de Cor e Fundo

- **color**

  - _Tipo:_ string
  - _Descrição:_ Define a cor do texto do componente.

- **bgColor**
  - _Tipo:_ string
  - _Descrição:_ Define a cor de fundo do componente.

### Propriedades de Espaçamento

- **pd, pdTop, pdRight, pdBottom, pdLeft**

  - _Tipo:_ "xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"
  - _Descrição:_ Define o preenchimento (padding) do componente.

- **mg, mgTop, mgRight, mgBottom, mgLeft**

  - _Tipo:_ "xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"
  - _Descrição:_ Define a margem do componente.

- **width, height**

  - _Tipo:_ string
  - _Descrição:_ Define a largura e a altura do componente.

- **className**

  - _Tipo:_ string
  - _Descrição:_ Define a classe do componente.

- **placeholder**

  - _Tipo:_ string
  - _Descrição:_ Define o texto de placeholder do componente.

- **bdColor**
  - _Tipo:_ string
  - _Descrição:_ Define a cor da borda do componente.

### Estados Internos

- **visible**

  - _Tipo:_ boolean
  - _Descrição:_ Controla a visibilidade do menu suspenso.

- **selectedValue**
  - _Tipo:_ string
  - _Descrição:_ Armazena o valor selecionado no menu suspenso.

### Funções de Controle

- **changeVisible**

  - _Descrição:_ Altera a visibilidade do menu suspenso.

- **handleOptionClick(value: string)**
  - _Descrição:_ Manipula o clique em uma opção no menu suspenso.

### Elementos Filhos

- **Label**
  - _Tipo:_ Componente de rótulo estilizado.
  - _Descrição:_ Rótulo associado ao componente `SelectLabel`.

```jsx
<SelectLabel
  listOptions={['Option 1', 'Option 2']}
  className="primary"
  required={true}
  label="Select an Option"
  id="selectId"
/>
```
