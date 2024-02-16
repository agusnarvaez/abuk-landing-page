import { render, screen } from '@testing-library/react'
import Lessons from './Lessons'

describe('Lessons Component', () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    localStorage.clear()
    render(
      <Lessons />
    )
  })

  test('should render Lessons component', () => {
    expect(screen.getByText('Lessons')).toBeDefined()
  })


})
