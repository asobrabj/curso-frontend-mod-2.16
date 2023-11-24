import Button, { IButton } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Hello world',
  },
}

export const template = (args: IButton) => (
  <div>
    <Button className="alert-ligth" {...args} />
  </div>
)
