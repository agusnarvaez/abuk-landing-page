import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Services from './Services'

describe('Services Component', () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    localStorage.clear()
    render(
      <MemoryRouter>
        <Services />
      </MemoryRouter>
    )
  })

  test('should render Services component', () => {
    expect(screen.getAllByText('Mix & Mastering')).toBeDefined()
  })


})
