import { render, screen  } from '@testing-library/react'
import About from './About'

describe('About Component', () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    localStorage.clear()
    render(
      <About />
    )
  })

  test('should render About component', async () => {
    expect(screen.getByText('About')).toBeDefined()
  })
})
