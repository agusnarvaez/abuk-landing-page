import { fireEvent, render, screen } from '@testing-library/react'
import ServiceCard from './ServiceCard'
describe('ServiceCard Component', () => {
  const data = [
    {
      service: 'Service 1',
      price: 100
    },
    {
      service: 'Service 2',
      price: 200
    }
  ]
  const title = 'Title'
  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    localStorage.clear()
    render(
        <ServiceCard title={title} data={data}  />
    )
  })

  test('Service Card renders', () => {
    expect(screen.getByText(title)).toBeDefined()
  })

  test('Header has 2 services', () => {
    expect(screen.getAllByTestId('service-info').length).toBe(2)
  })

  test('Burger button toggles nav', () => {
    const button = screen.getByTestId('service-card-button')
    const mainInfo = screen.getByTestId('service-card-main-info')

    expect(mainInfo).not.toHaveClass('show')

    fireEvent.click(button)

    expect(mainInfo).toHaveClass('show')
  })

})
