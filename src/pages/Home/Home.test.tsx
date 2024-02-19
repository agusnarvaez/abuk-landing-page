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
    expect(screen.getByText('A')).toBeDefined()
    expect(screen.getByText('B')).toBeDefined()
    expect(screen.getByText('U')).toBeDefined()
    expect(screen.getByText('K')).toBeDefined()
  })

})
