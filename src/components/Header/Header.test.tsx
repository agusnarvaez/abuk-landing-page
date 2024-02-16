import { fireEvent, render, screen } from '@testing-library/react'
import Header from './Header'
import { MemoryRouter } from 'react-router-dom'
describe('Header Component', () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    localStorage.clear()
    render(
      <MemoryRouter>
        <Header theme='light-theme' path='/' />
      </MemoryRouter>
    )
  })

  test('Header renders', () => {
    expect(screen.getByText('ABUK')).toBeDefined()
  })

  test('Header has 5 links', () => {
    expect(screen.getAllByRole('link').length).toBe(5)
  })

  test('Burger button toggles nav', () => {
    const button = screen.getByTestId('burger-button')
    const nav = screen.getByTestId('nav')

    expect(nav).not.toHaveClass('show')

    fireEvent.click(button)

    expect(nav).toHaveClass('show')
  })

  test('Clicking on a link closes the nav', () => {
    const button = screen.getByTestId('burger-button')
    const nav = screen.getByTestId('nav')
    const links = screen.getAllByRole('link')

    fireEvent.click(button)

    expect(nav).toHaveClass('show')

    fireEvent.click(links[0])

    expect(nav).not.toHaveClass('show')
  })

  test('If path is / title must be hidden', () => {
    const header = screen.getByTestId('main-header')
    expect(header).not.toHaveClass('show-title')

  })

})

describe('Header Component without home route', () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    localStorage.clear()
    render(
      <MemoryRouter>
        <Header theme='light-theme' path='/about'/>
      </MemoryRouter>
    )
  })

  test('If path is not / title must be shown', () => {
    const header = screen.getByTestId('main-header')
    expect(header).toHaveClass('show-title')

  })

})
