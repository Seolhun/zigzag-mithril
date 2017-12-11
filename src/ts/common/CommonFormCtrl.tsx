import m from 'mithril'
import {commonCtrl} from './CommonCtrl'

export const commonFormCtrl = {
  // When bool is false, this have a error.
  validateAll(model): boolean {
    let bool = true
    Object.keys(model).some((field) => {
      bool = model[field].validate()
      return bool === false
    })
    return bool
  },

  inputForm(attrs) {
    return (
      <div>
        <input
          class={'form-control'}
          className={attrs.field.error ? 'error' : ''}
          id={attrs.field.id}
          oninput={
            m.withAttr('value', (value => {
              attrs.field.value(value)
              attrs.field.validate()
            }))
          }
          placeholder={attrs.field.placeholder}
          type={attrs.field.type}
          value={attrs.field.value()}
        />
        <p
          class={'isError'}
        >
          {attrs.field.errorMsg}
        </p>
      </div>
    )
  },

  radioForm(attrs, inputId: string) {
    return (
      <div>
        <label
          for={inputId}
          class={'label'}
        >
          <input
            className={attrs.field.error ? 'error' : ''}
            id={inputId}
            name={attrs.field.name}
            onchange={
              m.withAttr('value', (value => {
                attrs.field.value(value)
                attrs.field.validate()
              }))
            }
            placeholder={attrs.field.placeholder}
            type={attrs.field.type}
            value={inputId}
          />
          {inputId}
        </label>
        <p
          class={'isError'}
        >
          {attrs.field.errorMsg}
        </p>
      </div>
    )
  },

  checkboxForm(attrs, inputId: string) {
    return (
      <div>
        <label
          for={inputId}
          class={'label'}
        >
          <input
            className={attrs.field.error ? 'error' : ''}
            id={inputId}
            name={attrs.field.name}
            onchange={
              m.withAttr('value', (value => {
                commonCtrl.pushIntoListNotDuplication(attrs.field.value(), value)
                attrs.field.validate()
              }))
            }
            placeholder={attrs.field.placeholder}
            type={attrs.field.type}
            value={inputId}
          />
          {inputId}
        </label>
        <p
          class={'isError'}
        >
          {attrs.field.errorMsg}
        </p>
      </div>
    )
  },

  textAreaForm(attrs) {
    return (
      <div>
        <textarea
          class="form-control"
          className={attrs.field.error ? 'error' : ''}
          oninput={
            m.withAttr('value', (value => {
              attrs.field.value(value)
              attrs.field.validate()
            }))
          }
          placeholder={attrs.field.placeholder}
          value={attrs.field.value()}
        >
        </textarea>
        <p
          class={'isError'}
        >
          {attrs.field.error}
        </p>
      </div>
    )
  }
}
