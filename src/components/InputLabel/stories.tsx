import InputLabel, { IInputLabel } from '.'

export default {
  title: 'Components/InputLabel',
  component: InputLabel,
  args: {
    label: 'teste',
    id: 'id',
  },
}

export const primary = (args: IInputLabel) => (
  <div style={{ marginTop: '50px' }}>
    <InputLabel {...args} />
  </div>
)
