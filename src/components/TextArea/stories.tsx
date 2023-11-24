import TextArea, { ITextArea } from '.'

export default {
  title: 'Components/TextArea',
  component: TextArea,
}

export const primary = (args: ITextArea) => (
  <div>
    <TextArea placeholder="text" {...args} />
  </div>
)
