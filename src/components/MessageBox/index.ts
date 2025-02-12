import MessageBox from './MessageBox.vue'
import { createApp } from 'vue'

MessageBox.alert = (props:any, callback:any) => {
  const container = document.createElement('div')
  const messageBox = createApp(MessageBox, {
    ...props,
    close,
  })
  open()

  function open() {
    messageBox.mount(container)
    document.body.appendChild(container)
  }

  function close() {
    messageBox.unmount()
    container.remove()
    typeof callback === 'function' && callback()
  }
}
export default MessageBox
