import SelectLabel, { ISelectLabel } from '.'

export default {
  title: 'Components/SelectLabel',
  component: SelectLabel,
  args: {
    listOptions: ['text 1', 'text 2', 'text 3'],
    label: 'teste',
    required: true,
    id: 'id',
  },
}

export const template = (args: ISelectLabel) => (
  <div>
    <SelectLabel {...args}></SelectLabel>
  </div>
)
