## Propriedades do Componente InputLabel

O componente `InputLabel` aceita as seguintes propriedades:

### Propriedades Gerais

- **fs**

  - _Tipo:_ "xsmall" | "small" | "medium" | "larger" | string
  - _Descrição:_ Define o tamanho da fonte do label e do input.

- **fStyle**

  - _Tipo:_ "normal" | "italic"
  - _Descrição:_ Define o estilo da fonte do label e do input.

- **fw**

  - _Tipo:_ "medium" | "larger"
  - _Descrição:_ Define a espessura da fonte do label e do input.

- **fFamily**
  - _Tipo:_ string
  - _Descrição:_ Define a família da fonte do label e do input.

### Propriedades de Alinhamento e Transformação de Texto

- **tAlign**

  - _Tipo:_ "start" | "end" | "justify" | "center"
  - _Descrição:_ Define o alinhamento do texto do label.

- **tTransform**
  - _Tipo:_ "none" | "capitalize" | "uppercase" | "lowercase"
  - _Descrição:_ Define a transformação do texto do label.

### Propriedades de Cor e Fundo

- **color**

  - _Tipo:_ string
  - _Descrição:_ Define a cor do texto do label.

- **bgColor**
  - _Tipo:_ string
  - _Descrição:_ Define a cor de fundo do label.

### Propriedades de Espaçamento

- **pd, pdTop, pdRight, pdBottom, pdLeft**

  - _Tipo:_ "xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"
  - _Descrição:_ Define o preenchimento (padding) do label e do input.

- **mg, mgTop, mgRight, mgBottom, mgLeft**
  - _Tipo:_ "xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"
  - _Descrição:_ Define a margem do label e do input.

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

- **label**

  - _Tipo:_ string
  - _Descrição:_ Texto do label.

- **id**
  - _Tipo:_ string
  - _Descrição:_ ID único associado ao input.

### Classes Predefinidas para Estilos Específicos

- **&.primary**

  - _Descrição:_ Aplica um estilo primário ao input e ao label, com borda arredondada.

- **&.secondary**

  - _Descrição:_ Aplica um estilo secundário ao input e ao label, com borda arredondada e borda inferior sem arredondamento.

- **&.error**
  - _Descrição:_ Aplica um estilo de erro ao input, com borda vermelha e cor de texto vermelha. O estilo da borda é intensificado quando o input está em foco.
