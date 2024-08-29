import { render, screen, fireEvent } from '@testing-library/react'
import HiddenSection from '../components/HiddenSection'

// qui dentro scriveremo i test per il componente HiddenSection

// to-do per i nostri test

// V- mi aspetto che all'avvio il bottone venga renderizzato correttamente
// V- mi aspetto che all'avvio il bottone abbia l'etichetta 'MOSTRA'

// V- mi aspetto che all'avvio la card NON ci sia
// V- mi aspetto che la card compaia dopo un click al bottone
// - mi aspetto che l'etichetta del bottone cambi dopo un click
// V- mi aspetto che cliccando il bottone DUE VOLTE la card non ci sia

// "describe" delimita un GRUPPO di tests che hanno qualcosa in comune
describe('Just button testing', () => {
  // questa funzione comprenderà i vostri test
  it('mounts correctly the button at launch', () => {
    // qui dentro ci vanno i 4 passaggi del test
    // 4 steps per ogni test:
    // 1) montaggio del componente interessato nel VIRTUAL DOM

    // render monta un componente nel virtual dom
    render(<HiddenSection />)

    // 2) ricerca dell'elemento con cui interagire, tramite i metodi di react-testing-library
    // l'elemento va cercato con getBy*, findBy* o queryBy*
    const mostraButton = screen.getByRole('button')
    // button dovrebbe esserci!

    // 3) (opzionale) eventuale interazione con l'elemento trovato
    // lo saltiamo perchè non ci interessa interagire col bottone in questo test
    // 4) verifica dei risultati attesi
    expect(mostraButton).toBeInTheDocument()
  })

  it('checks if initial button label is MOSTRA', () => {
    // 1) montaggio del componente interessato nel VIRTUAL DOM
    render(<HiddenSection />)
    // 2) ricerca dell'elemento con cui interagire, tramite i metodi di react-testing-library
    // l'elemento va cercato con getBy*, findBy* o queryBy*
    const mostraButton = screen.getByText(/mostra/i)
    // 3)
    // 4)
    expect(mostraButton).toBeInTheDocument()
  })
})

describe('testing card behavior', () => {
  it("shouldn't render the card initially", () => {
    // 1)
    // monto il componente
    render(<HiddenSection />)
    // 2)
    // utilizzo queryBy per verificare l'ASSENZA dell'immagine (e quindi della card)
    const cardImage = screen.queryByRole('img') // queryByRole NON esplode se non trova il riferimento
    // 3)
    // 4)
    // verifico che l'immagine NON ci sia nel documento
    expect(cardImage).not.toBeInTheDocument()
  })

  it('should render the card after a button click', () => {
    // 1)
    render(<HiddenSection />)
    // 2) trovo il bottone
    const mostraButton = screen.getByText(/mostra/i)
    // 3)
    // clicco il bottone! :)
    fireEvent.click(mostraButton) // ho appena "cliccato il bottone"
    // 4)
    const cardImage = screen.getByRole('img')
    expect(cardImage).toBeInTheDocument()
  })

  it('should NOT render the card after TWO button clicks', () => {
    // 1)
    render(<HiddenSection />)
    // 2) trovo il bottone
    const mostraButton = screen.getByText(/mostra/i)
    // 3)
    // clicco il bottone! :)
    fireEvent.click(mostraButton) // ho appena "cliccato il bottone"
    fireEvent.click(mostraButton) // ho appena "cliccato il bottone"
    // 4)
    const cardImage = screen.queryByRole('img')
    expect(cardImage).not.toBeInTheDocument()
  })

  it('checks the new button label after a click', () => {
    // 1)
    render(<HiddenSection />)
    // 2) cerco il bottone "MOSTRA"
    const mostraButton = screen.getByText(/mostra/i)
    // 3) ci clicco sopra
    fireEvent.click(mostraButton)
    // 4) cerco il bottone con etichetta "NASCONDI" e ne verifico l'esistenza
    const nascondiButton = screen.getByText(/nascondi/i)
    expect(nascondiButton).toBeInTheDocument()
  })
})
