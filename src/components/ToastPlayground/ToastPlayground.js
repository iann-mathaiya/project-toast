import React from "react"
import Button from "../Button"
import styles from "./ToastPlayground.module.css"
import ToastShelf from "../ToastShelf/ToastShelf"
import { ToastContext } from "../ToastProvider/ToastProvider"

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"]

function ToastPlayground() {
  const [message, setMessage] = React.useState("")
  const {createToast} = React.useContext(ToastContext)
  const [selectedVariant, setSelectedVariant] = React.useState(VARIANT_OPTIONS[0])

  function handleSubmit(event){
    event.preventDefault()

    createToast(message, selectedVariant);

    setMessage('');
    setSelectedVariant(VARIANT_OPTIONS[0])
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor='message'
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              required
              id='message'
              value={message}
              className={styles.messageInput}
              onChange={(event) => {
                setMessage(event.target.value)
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => {
              const id = `variant-${variant}`
              return (
                <label key={variant} htmlFor={id}>
                  <input
                    id={id}
                    type='radio'
                    name='variant'
                    value={variant}
                    checked={variant === selectedVariant}
                    onChange={(event) => {
                      setSelectedVariant(event.target.value)
                    }}
                  />
                  {variant}
                </label>
              )
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type='submit'>
              Pop Toast!
            </Button>
          </div>
        </div>
      </form>

      <ToastShelf />
    </div>
  )
}

export default ToastPlayground
