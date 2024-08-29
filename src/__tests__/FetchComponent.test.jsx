// test per il componente FetchComponent

import { fireEvent, render, screen } from '@testing-library/react'
import FetchComponent from '../components/FetchComponent'

// V- verifichiamo che il campo input ci sia all'avvio
// - verifichiamo che all'avvio (quindi a promise ancora NON terminata) la lista sia vuota!c

describe('user list behavior', () => {
  it('render input field at launch', () => {
    // 1)
    render(<FetchComponent />)
    // 2) cerchiamo l'input field grazie al suo placeholder
    // const searchInput = screen.getByPlaceholderText(/cerca per nome/i)
    const searchInput = screen.getByRole('textbox') // alternativa
    // 3)
    // 4)
    expect(searchInput).toBeInTheDocument()
  })

  it("doesn't render any list item initially", () => {
    render(<FetchComponent />)
    // cerco TUTTI i list-element della pagina
    const allListElements = screen.queryAllByTestId('list-element') // raggruppa tutti i list-element in un array
    // 4)
    expect(allListElements).toHaveLength(0) // che sia vuoto!
  })

  it('should have 10 list-elements when component fully loads', async () => {
    render(<FetchComponent />)
    // per aspettare che lo useEffect dentro FetchComponent termini,
    // devo utilizzare l'unica famiglia di metodi di react-testing-library
    // asincrona, ovvero che torna una Promise
    const allListElements = await screen.findAllByTestId('list-element')
    // in teoria, allListElements è stato compilato FINITA la fetch!
    expect(allListElements.length).toBeGreaterThan(0)
    // expect(allListElements).toHaveLength(10)
  })

  it('should have 10 list-elements when component fully loads with .then', () => {
    render(<FetchComponent />)
    // per aspettare che lo useEffect dentro FetchComponent termini,
    // devo utilizzare l'unica famiglia di metodi di react-testing-library
    // asincrona, ovvero che torna una Promise

    // eslint-disable-next-line jest/valid-expect-in-promise
    screen
      .findAllByTestId('list-element')
      .then((allListElements) => {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(allListElements.length).toBeGreaterThan(0)
      })
      .catch((err) => console.log(err))
    // in teoria, allListElements è stato compilato FINITA la fetch!
    // expect(allListElements).toHaveLength(10)
  })

  // - inserendo "kurtis" nel campo di ricerca, otteniamo una lista con esattamente UN elemento
  it('creates a list with just 1 user after waiting for the fetch the complete and writing "kurtis" in the search field', async () => {
    render(<FetchComponent />)
    const searchField = screen.getByPlaceholderText(/cerca per nome/i)
    // dobbiamo scrivere "kurtis" dentro l'input field
    fireEvent.change(searchField, { target: { value: 'kurtis' } }) // cambio l'input value del target
    const userslist = await screen.findAllByTestId('list-element') // deve essere una array con UN elemento
    expect(userslist).toHaveLength(1)
  })
})
