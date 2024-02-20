import { render, screen } from '@testing-library/react'
import ContactForm from './ContactForm'

describe('ContactForm Component', () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    localStorage.clear()
    render(
      <ContactForm />
    )
  })

  test('should render Contact component', () => {
    expect(screen.getByText('Enviar')).toBeDefined()
  })
})
