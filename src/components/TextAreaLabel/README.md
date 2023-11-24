## Propriedades do Componente `TextAreaLabel`

O componente `TextAreaLabel` é composto por uma etiqueta (`Label`) e uma área de texto (`TextArea`). Ele aceita as seguintes propriedades:

### Propriedades Gerais

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

- **resize**

  - _Tipo:_ "both" | "none" | "vertical" | "horizontal"
  - _Descrição:_ Define a capacidade de redimensionamento do componente.

- **bdColor**

  - _Tipo:_ string
  - _Descrição:_ Define a cor da borda do componente.

- **required**

  - _Tipo:_ boolean
  - _Descrição:_ Indica se o preenchimento do campo é obrigatório.

- **label**

  - _Tipo:_ string
  - _Descrição:_ Texto que será exibido como rótulo para a área de texto.

- **id**
  - _Tipo:_ string
  - _Descrição:_ Identificador único para o componente.

### Estados Internos

- **none**

### Elementos Filhos

- **Label**

  - _Tipo:_ Componente de etiqueta estilizada.

- **TextArea**
  - _Tipo:_ Componente de área de texto estilizado.

```jsx
<TextAreaLabel
  fs="medium"
  fw="medium"
  bgColor="#f5f5f5"
  pd="medium"
  mg="medium"
  width="300"
  height="150"
  placeholder="Type here..."
  resize="both"
  bdColor="#cccccc"
  required={true}
  label="Your Text"
  id="uniqueId"
/>
```
