import Heading, { IHeading } from '.'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Hello world',
  },
}

export const template = (args: IHeading) => (
  <div style={{ fontStyle: 'italic', width: '500px' }}>
    <Heading {...args} />
  </div>
)
