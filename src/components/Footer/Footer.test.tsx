import { render, screen } from '@testing-library/react'
import Footer from './Footer'
import { MemoryRouter } from 'react-router-dom'

describe('Footer Component', () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    localStorage.clear()
    render(
      <MemoryRouter>
        <Footer theme='light-color' />
      </MemoryRouter>
    )
  })

  test('Footer renders', () => {
    expect(screen.getByText('ABUK')).toBeDefined()
  })

  test('Footer has 4 links', () => {
    expect(screen.getAllByTestId('footer-link').length).toBe(4)
  })

  test('Footer has 3 social media links', () => {
    expect(screen.getAllByTestId('social-link').length).toBe(3)
  })

})
