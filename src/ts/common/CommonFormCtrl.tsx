import m from 'mithril'

export const commonFormCtrl = {
  validateAll(model): boolean {
    console.log('model', model)
    let bool = true
    Object.keys(model).forEach((field) => {
      bool = model[field].validate()
      if (!bool) {
        return bool
      }
    })
    return bool
  },

  inputForm(attrs) {
    return (
      <div>
        <input
          type={attrs.field.type}
          value={attrs.field.value}
          placeholder={attrs.field.placeholder}
          className={attrs.field.error ? 'error' : ''}
          class={'form-control'}
          id={attrs.field.id}
          oninput={
            m.withAttr('value', attrs.field.value)
          }
          onchange={
            m.withAttr('value', attrs.field.value)
          }
        />
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
            oninput={
              m.withAttr('value', attrs.field.value)
            }
            placeholder={attrs.field.placeholder}
            type={attrs.field.type}
            value={attrs.field.value()}
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
          value={attrs.field.value()}
          placeholder={attrs.field.placeholder}
          className={attrs.field.error ? 'error' : ''}
          class="form-control"
          oninput={
            m.withAttr('value', attrs.field.value)
          }
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
