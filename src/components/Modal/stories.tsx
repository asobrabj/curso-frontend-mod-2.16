import Modal, { IModal } from '.'
import Button from '../Button'
import Heading from '../Heading'

export default {
  title: 'Components/Modal',
  component: Modal,
}

export const template = (args: IModal) => (
  <div style={{ fontStyle: 'italic', width: '500px' }}>
    <Modal {...args}>
      <Heading>testando</Heading>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
        provident neque molestiae laudantium saepe minima labore, excepturi,
        ipsam nam cum placeat quod reprehenderit architecto adipisci, harum id
        maxime repellat eius!
      </p>
      <Button mgRigth="16" className="error">
        Cancelar
      </Button>
      <Button mgRigth="16" className="success">
        Enviar
      </Button>
    </Modal>
  </div>
)
