import { render } from '@testing-library/vue'
import { createRouter, createMemoryHistory } from 'vue-router'
import routes from './routes'

describe('Rotas', () => {
  it('deve renderizar a página inicial ao navegar para "/"', async () => {
    const history = createMemoryHistory()
    const roteador = createRouter({ history, routes })

    const { getByTestId } = render(roteador)

    await roteador.push('/')
    await roteador.isReady()

    const paginaInicial = getByTestId('home-page')
    expect(paginaInicial).toBeTruthy()
  })
})
