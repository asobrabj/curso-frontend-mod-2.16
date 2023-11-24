import Input, { IInput } from '.'

export default {
  title: 'Components/Input',
  component: Input,
}

export const primary = (args: IInput) => (
  <div>
    <Input className="primary" placeholder="text" {...args} />
  </div>
)
