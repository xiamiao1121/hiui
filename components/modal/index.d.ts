import { React.CSSProperties } from "react"
export interface Props {
  title?: string | JSX.Element
  visible?: boolean
  closeable?: boolean
  maskClosable?: boolean
  cancelText?: string
  confirmText?: string
  size?: 'default' | 'large'
  style?: React.CSSProperties
  footer?: JSX.Element | null
  onCancel?: (e: MouseEvent) => void
  onConfirm?: (e: MouseEvent) => void
  style?: React.CSSProperties
  className?: string
}
const confirmFun: (options:Props) => void
declare class Modal extends React.Component<Props, any> {
  static confirm = confirmFun
}
export default Modal
