import { render } from '@testing-library/react'
import HiddenSection from '../components/HiddenSection'

// qui dentro scriveremo i test per il componente HiddenSection

// to-do per i nostri test

// - mi aspetto che all'avvio il bottone venga renderizzato correttamente
// - mi aspetto che all'avvio il bottone abbia l'etichetta 'MOSTRA'
// - mi aspetto che all'avvio la card NON ci sia

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

    // 3) (opzionale) eventuale interazione con l'elemento trovato
    // 4) verifica dei risultati attesi
  })
})
