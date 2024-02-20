import { render, screen } from '@testing-library/react'
import NotFound from './NotFound'
import { MemoryRouter } from 'react-router-dom'

describe('NotFound Component', () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    localStorage.clear()
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    )
  })
  test('should render NotFOund component', async () => {
    expect(screen.getByText('SEEMS LIKE YOU GOT LOST')).toBeDefined()
  })


})
