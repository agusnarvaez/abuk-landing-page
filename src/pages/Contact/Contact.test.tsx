import { render, screen } from '@testing-library/react'
import Contact from './Contact'

describe('Contact Component', () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    localStorage.clear()
    render(
      <Contact />
    )
  })

  test('should render Contact component', () => {
    expect(screen.getByText('Contact')).toBeDefined()
  })
})
