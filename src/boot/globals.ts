import { boot } from 'quasar/wrappers'
import { Input, InputTextArea, Button } from '../components'

export default boot(async ({ app }) => {
  app.component('c-input', Input),
  app.component('c-input-area', InputTextArea),
  app.component('c-button', Button)
})
