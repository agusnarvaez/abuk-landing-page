import { render, screen } from '@testing-library/react'
import Home from './Home'

describe('Home Component', () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    localStorage.clear()
    render(
      <Home />
    )
  })

  test('Home renders', () => {
    expect(screen.getByText('ABUK')).toBeDefined()
  })

})
