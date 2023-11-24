## Componente Form

O componente `Form` é utilizado para criar formulários, oferecendo flexibilidade e estilo personalizável. Ele possui as seguintes propriedades:

### Propriedades

- **children**

  - _Tipo:_ `React.ReactNode`
  - _Descrição:_ Conteúdo do formulário.

- **as**

  - _Tipo:_ `"h1" | "h2" | "h3" | "h4" | "h5" | "h6"`
  - _Descrição:_ Define o tipo de elemento HTML a ser renderizado para o título do formulário.

- **fs**

  - _Tipo:_ `"xsmall" | "small" | "medium" | "larger" | string`
  - _Descrição:_ Define o tamanho da fonte do título.

- **fStyle**

  - _Tipo:_ `"normal" | "italic"`
  - _Descrição:_ Define o estilo da fonte do título.

- **fw**

  - _Tipo:_ `"medium" | "larger"`
  - _Descrição:_ Define a espessura da fonte do título.

- **fFamily**

  - _Tipo:_ `string`
  - _Descrição:_ Define a família da fonte do título.

- **tAlign**

  - _Tipo:_ `"start" | "end" | "justify" | "center"`
  - _Descrição:_ Define o alinhamento do texto do título.

- **tTransform**

  - _Tipo:_ `"none" | "capitalize" | "uppercase" | "lowercase"`
  - _Descrição:_ Define a transformação do texto do título.

- **color**

  - _Tipo:_ `string`
  - _Descrição:_ Define a cor do texto do título.

- **bgColor**

  - _Tipo:_ `string`
  - _Descrição:_ Define a cor de fundo do formulário.

- **pd, pdTop, pdRight, pdBottom, pdLeft**

  - _Tipo:_ `"xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"`
  - _Descrição:_ Define o preenchimento (padding) do formulário.

- **mg, mgTop, mgRight, mgBottom, mgLeft**

  - _Tipo:_ `"xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"`
  - _Descrição:_ Define a margem do formulário.

- **width**

  - _Tipo:_ `string`
  - _Descrição:_ Define a largura do formulário.

- **title**
  - _Tipo:_ `string`
  - _Descrição:_ Título do formulário.

### Classes Predefinidas

- _Tipo:_ `string`
- _Descrição:_ Define classes adicionais para estilização personalizada.

O componente `Form` possui as seguintes classes predefinidas que podem ser utilizadas para estilização:

- **grid**

  - _Descrição:_ Aplica um layout de grade ao formulário.

- **grid-block**

  - _Descrição:_ Aplica um layout de grade ao formulário, afetando também seus blocos filhos.

- **block**
  - _Descrição:_ Aplica um layout de bloco padrão ao formulário.
