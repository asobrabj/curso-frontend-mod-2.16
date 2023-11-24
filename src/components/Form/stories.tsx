import Form, { IForm } from '.'
import Button from '../Button'
import InputLabel from '../InputLabel'
import SelectLabel from '../SelectLabel'
import TextAreaLabel from '../TextAreaLabel'

export default {
  title: 'Components/Form',
  component: Form,
  args: {
    title: 'Formulario',
  },
}

export const template = (args: IForm) => (
  <div>
    <Form className="grid-block" {...args}>
      <InputLabel
        className="input"
        id="nome"
        label="Nome"
        required
        width="250"
      />
      <InputLabel
        className="input"
        id="nome"
        label="Nome"
        required
        width="250"
      />
      <InputLabel
        className="input"
        id="nome"
        label="Nome"
        required
        width="250"
      />
      <InputLabel
        className="input"
        id="email"
        label="Email"
        required
        width="250"
      />
      <InputLabel
        className="input"
        id="texto"
        label="Texto"
        required
        width="250"
      />
      <InputLabel
        className="input"
        id="texto"
        label="Texto"
        required
        width="250"
      />
      <SelectLabel
        className="select"
        id="select"
        label="Select"
        required
        listOptions={['op1', 'op2', 'op3', 'op4']}
        height="20"
        width="565"
      />
      <TextAreaLabel
        className="text-area"
        id="area"
        label="Message"
        required
        width="565"
      />
      <Button className="info-ligth" width="200">
        Enviar
      </Button>
    </Form>
  </div>
)
