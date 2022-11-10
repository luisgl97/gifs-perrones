const { render, screen, fireEvent } = require("@testing-library/react")
const { AddCategory } = require("../../src/components")

describe('Pruebas en <AddCategory/>', () => {
  test('debe de cambiar el valor de la caja del texto',()=>{
    render(<AddCategory onAddCategory={()=>{}}/>)
    const input = screen.getByRole('textbox');
    fireEvent.input(input, {target: {value: 'Saitama'}})
    expect(input.value).toBe('Saitama')
    screen.debug()

    // screen.debug()
  })
})
