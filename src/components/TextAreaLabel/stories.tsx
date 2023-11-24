import TextAreaLabel, { ITextAreaLabel } from '.'

export default {
  title: 'Components/TextAreaLabel',
  component: TextAreaLabel,
  args: {
    label: 'Label',
    id: 'id',
  },
}

export const primary = (args: ITextAreaLabel) => (
  <div>
    <TextAreaLabel className="secondary" placeholder="text" {...args} />
  </div>
)
