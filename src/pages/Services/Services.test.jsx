import { render, screen } from '@testing-library/react'
import Services from './Services'

describe('Services Component', () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    localStorage.clear()
    render(
      <Services />
    )
  })

  test('should render Services component', () => {
    expect(screen.getAllByText('Mix & Mastering')).toBeDefined()
  })


})
