import Select, { ISelect } from '.'

export default {
  title: 'Components/Select',
  component: Select,
  args: {
    listOptions: ['text 1', 'text 2', 'text 3'],
  },
}

export const template = (args: ISelect) => (
  <div>
    <Select {...args} bdColor="#168456"></Select>
  </div>
)
