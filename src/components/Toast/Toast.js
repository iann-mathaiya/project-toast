import React from "react"
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather"

import styles from "./Toast.module.css"
import VisuallyHidden from "../VisuallyHidden"
import { ToastContext } from "../ToastProvider/ToastProvider"

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
}

function Toast({ id, children, variant }) {
  const { dismissToast } = React.useContext(ToastContext)

  const Icon = ICONS_BY_VARIANT[variant]
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} aria-hidden='true' />
      </div>
      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton} onClick={() => dismissToast(id)}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  )
}

export default Toast
