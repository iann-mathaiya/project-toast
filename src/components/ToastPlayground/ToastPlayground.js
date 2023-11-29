import React from "react"
import Button from "../Button"
import Toast from "../Toast/Toast"
import styles from "./ToastPlayground.module.css"

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"]

function ToastPlayground() {
  const [message, setMessage] = React.useState("")
  const [popToast, toggleToast] = React.useState(false)
  const [selectedVariant, setSelectedVariant] = React.useState("notice")

  function handleSubmit(event){
    event.preventDefault()
    toggleToast(true)
  }

  function dismissToast() {
    toggleToast(false)
    setMessage("")
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

      {popToast && (
        <Toast
          variant={selectedVariant}
          popToast={popToast}
          dismissToast={dismissToast}
        >
          {message}
        </Toast>
      )}
    </div>
  )
}

export default ToastPlayground
