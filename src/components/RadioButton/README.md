## Propriedades do Componente RadioButton

O componente `RadioButton` aceita as seguintes propriedades:

### Propriedades Gerais

- **listOptions**

  - _Tipo:_ Array de strings
  - _Descrição:_ Lista de opções disponíveis para os botões de rádio.

- **name**
  - _Tipo:_ string
  - _Descrição:_ Nome do grupo de botões de rádio. Os botões com o mesmo nome pertencem ao mesmo grupo.

### Propriedades de Estilo

- **fs**

  - _Tipo:_ "xsmall" | "small" | "medium" | "larger" | string
  - _Descrição:_ Define o tamanho da fonte dos botões de rádio.

- **fStyle**

  - _Tipo:_ "normal" | "italic"
  - _Descrição:_ Define o estilo da fonte dos botões de rádio.

- **fw**

  - _Tipo:_ "medium" | "larger"
  - _Descrição:_ Define a espessura da fonte dos botões de rádio.

- **fFamily**
  - _Tipo:_ string
  - _Descrição:_ Define a família da fonte dos botões de rádio.

### Propriedades de Alinhamento e Transformação de Texto

- **tAlign**

  - _Tipo:_ "start" | "end" | "justify" | "center"
  - _Descrição:_ Define o alinhamento do texto dos botões de rádio.

- **tTransform**
  - _Tipo:_ "none" | "capitalize" | "uppercase" | "lowercase"
  - _Descrição:_ Define a transformação do texto dos botões de rádio.

### Propriedades de Cor e Fundo

- **color**

  - _Tipo:_ string
  - _Descrição:_ Define a cor do texto dos botões de rádio.

- **bgColor**
  - _Tipo:_ string
  - _Descrição:_ Define a cor de fundo dos botões de rádio.

### Propriedades de Espaçamento

- **pd, pdTop, pdRight, pdBottom, pdLeft**

  - _Tipo:_ "xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"
  - _Descrição:_ Define o preenchimento (padding) dos botões de rádio.

- **mg, mgTop, mgRight, mgBottom, mgLeft**
  - _Tipo:_ "xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"
  - _Descrição:_ Define a margem dos botões de rádio.

### Classes Predefinidas para Estilos Específicos

- **&.scale**

  - _Descrição:_ Aplica um estilo que escala os botões de rádio, exibindo-os de forma centralizada e espaçada uniformemente.

- **&.options**

  - _Descrição:_ Aplica um estilo específico para apresentar as opções dos botões de rádio. As opções são exibidas em blocos, com margens e alinhamento específicos.

- **&.primary**

  - _Descrição:_ Aplica um estilo primário aos botões de rádio, com borda arredondada e outros estilos definidos internamente.

- **&.secondary**
  - _Descrição:_ Aplica um estilo secundário aos botões de rádio, com borda arredondada e outros estilos definidos internamente.

```jsx
<RadioButton
  listOptions={['Option 1', 'Option 2']}
  name="group1"
  className="primary scale"
/>
```
