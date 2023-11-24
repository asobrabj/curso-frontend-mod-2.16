## Propriedades do Componente Input

O componente `Input` aceita as seguintes propriedades:

### Propriedades Gerais

- **fs**

  - _Tipo:_ "xsmall" | "small" | "medium" | "larger" | string
  - _Descrição:_ Define o tamanho da fonte do input.

- **fStyle**

  - _Tipo:_ "normal" | "italic"
  - _Descrição:_ Define o estilo da fonte do input.

- **fw**

  - _Tipo:_ "medium" | "larger"
  - _Descrição:_ Define a espessura da fonte do input.

- **fFamily**
  - _Tipo:_ string
  - _Descrição:_ Define a família da fonte do input.

### Propriedades de Alinhamento e Transformação de Texto

- **tAlign**

  - _Tipo:_ "start" | "end" | "justify" | "center"
  - _Descrição:_ Define o alinhamento do texto no input.

- **tTransform**
  - _Tipo:_ "none" | "capitalize" | "uppercase" | "lowercase"
  - _Descrição:_ Define a transformação do texto no input.

### Propriedades de Cor e Fundo

- **color**

  - _Tipo:_ string
  - _Descrição:_ Define a cor do texto no input.

- **bgColor**
  - _Tipo:_ string
  - _Descrição:_ Define a cor de fundo do input.

### Propriedades de Espaçamento

- **pd, pdTop, pdRight, pdBottom, pdLeft**

  - _Tipo:_ "xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"
  - _Descrição:_ Define o preenchimento (padding) do input.

- **mg, mgTop, mgRight, mgBottom, mgLeft**
  - _Tipo:_ "xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"
  - _Descrição:_ Define a margem do input.

### Propriedades Adicionais

- **width, height**

  - _Tipo:_ string
  - _Descrição:_ Define a largura e altura do input.

- **placeholder**

  - _Tipo:_ string
  - _Descrição:_ Define o texto de espaço reservado do input.

- **bdColor**

  - _Tipo:_ string
  - _Descrição:_ Define a cor da borda do input.

- **type**

  - _Tipo:_ "text" | "tel" | "password" | "email" | "time" | "date" | "radio" | "checkbox" | "file" | "hidden" | "number"
  - _Descrição:_ Define o tipo do input.

- **required**
  - _Tipo:_ boolean
  - _Descrição:_ Indica se o input é obrigatório.

### Classes Predefinidas para Estilos Específicos

- **&.primary**

  - _Descrição:_ Aplica um estilo primário ao input, com borda arredondada e cor de borda configurável.

- **&.secondary**

  - _Descrição:_ Aplica um estilo secundário ao input, com borda arredondada, cor de borda configurável e borda inferior sem arredondamento.

- **&.error**

  - _Descrição:_ Aplica um estilo de erro ao input, com borda vermelha e cor de texto vermelha. O estilo da borda é intensificado quando o input está em foco.

- **&.rounded**

  - _Descrição:_ Aplica um estilo com bordas arredondadas ao input.

- **&:focus**
  - _Descrição:_ Define o estilo do input quando está em foco, com uma borda mais espessa e cor configurável.
