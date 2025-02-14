import { loadPlugins } from '../../utils/plugins'
import MessageBox from './MessageBox.vue'
import { createApp } from 'vue'

interface MessageBoxProps {
  title?: string
  content?: string
  btnText?: string
  // 可以根据需求扩展更多的字段
}

MessageBox.alert = (props: MessageBoxProps, callback: () => void) => {
  const container = document.createElement('div')
  const messageBox = createApp(MessageBox, {
    ...props,
    close,
  })
  loadPlugins(messageBox)
  open()
  function open() {
    document.body.appendChild(container)
    messageBox.mount(container)
  }

  function close() {
    messageBox.unmount()
    container.remove()
    typeof callback === 'function' && callback()
  }
}

export default MessageBox
