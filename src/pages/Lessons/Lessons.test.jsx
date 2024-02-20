import { render, screen } from '@testing-library/react'
import Lessons from './Lessons'
import { MemoryRouter } from 'react-router-dom'

describe('Lessons Component', () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    localStorage.clear()
    render(
      <MemoryRouter>
        <Lessons />
      </MemoryRouter>
    )
  })

  test('should render Lessons component', () => {
    expect(screen.getByText('Start learning with us')).toBeDefined()
  })


})
