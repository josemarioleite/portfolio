import { render } from '@testing-library/vue'
import Home from './Home.vue'

describe('Home', () => {
  it('deve renderizar o texto oi', () => {
    const { getByText } = render(Home)
    const texto = getByText('oi')

    expect(texto).toBeTruthy()
  })
})
