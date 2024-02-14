import { render, screen } from '@testing-library/react'
import NotFound from './NotFound'

describe('NotFound Component', () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    localStorage.clear()
    render(
      <NotFound />
    )
  })
  test('should render NotFOund component', async () => {
    expect(screen.getByText('404 NotFound')).toBeDefined()
  })


})
