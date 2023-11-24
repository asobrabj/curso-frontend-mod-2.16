## Propriedades do Componente Heading

O componente `Heading` aceita as seguintes propriedades:

### Propriedades Gerais

- **children**

  - _Tipo:_ React.ReactNode
  - _Descrição:_ O conteúdo do elemento de título.

- **as**
  - _Tipo:_ "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  - _Descrição:_ Define o tipo de elemento de título a ser renderizado.

### Propriedades de Estilo de Texto

- **fs**

  - _Tipo:_ "xsmall" | "small" | "medium" | "larger" | string
  - _Descrição:_ Define o tamanho da fonte do elemento de título.

- **fStyle**

  - _Tipo:_ "normal" | "italic"
  - _Descrição:_ Define o estilo da fonte do elemento de título.

- **fw**

  - _Tipo:_ "medium" | "larger"
  - _Descrição:_ Define a espessura da fonte do elemento de título.

- **fFamily**
  - _Tipo:_ string
  - _Descrição:_ Define a família da fonte do elemento de título.

### Propriedades de Alinhamento e Transformação de Texto

- **tAlign**

  - _Tipo:_ "start" | "end" | "justify" | "center"
  - _Descrição:_ Define o alinhamento do texto no elemento de título.

- **tTransform**
  - _Tipo:_ "none" | "capitalize" | "uppercase" | "lowercase"
  - _Descrição:_ Define a transformação do texto no elemento de título.

### Propriedades de Cor e Fundo

- **color**

  - _Tipo:_ string
  - _Descrição:_ Define a cor do texto no elemento de título.

- **bgColor**
  - _Tipo:_ string
  - _Descrição:_ Define a cor de fundo do elemento de título.

### Propriedades de Espaçamento

- **pd, pdTop, pdRight, pdBottom, pdLeft**

  - _Tipo:_ "xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"
  - _Descrição:_ Define o preenchimento (padding) do elemento de título.

- **mg, mgTop, mgRight, mgBottom, mgLeft**
  - _Tipo:_ "xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"
  - _Descrição:_ Define a margem do elemento de título.

### Classes Predefinidas para Estilos Específicos

- **&.success**

  - _Descrição:_ Aplica um estilo de sucesso ao elemento de título, com a cor verde.

- **&.info**

  - _Descrição:_ Aplica um estilo de informação ao elemento de título, com a cor azul.

- **&.error**

  - _Descrição:_ Aplica um estilo de erro ao elemento de título, com a cor vermelha.

- **&.alert**
  - _Descrição:_ Aplica um estilo de alerta ao elemento de título, com a cor amarela.
