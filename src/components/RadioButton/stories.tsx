import RadioButton, { IRadioButton } from '.'

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  args: {
    name: 'options',
    listOptions: ['option 1', 'option 2', 'option 3', 'option 4'],
    className: 'scale secondary',
  },
}

export const primary = (args: IRadioButton) => (
  <div>
    <RadioButton placeholder="text" {...args} />
  </div>
)
