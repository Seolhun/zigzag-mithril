import * as m from 'mithril'
import userModel from '../../models/UserModel'

export interface Attrs {
  id: string
}

export default {
  oninit(vnode) {
    userModel.getById(Number(vnode.attrs.id))
  },
  // view() {
  //   return m('form.user-form',
  //     {
  //       onsubmit: (e: Event) => {
  //         e.preventDefault()
  //         userModel.save()
  //       }
  //     },
  //     [
  //       m('label.label', 'First name'),
  //       m('input.input[type=text][placeholder=First name]', {
  //         oninput: m.withAttr('value', value => {
  //           userModel.current.firstName = value
  //         }),
  //         value: userModel.current.firstName
  //       }),

  //       m('label.label', 'Last name'),
  //       m('input.input[placeholder=Last name]', {
  //         oninput: m.withAttr('value', value => {
  //           userModel.current.lastName = value
  //         }),
  //         value: userModel.current.lastName
  //       }),

  //       m('button.button[type=submit]', 'Save'),
  //     ]
  //   )
  // },
  view() {
    return (
      <div class={'container'}>
        <div class={'row'}>
          <div class={'col-sm-12'}>
            <form
              class={'user-form'}
              onsubmit={(e: Event) => {
                e.preventDefault()
                userModel.save()
              }}
            >
              <label class={'label'}>
                FirstName
                <input
                  class={'input'}
                  placeholder={'First Name'}
                  oninput={m.withAttr('value', value => {
                    userModel.current.firstName = value
                  })}
                  value={userModel.current.firstName}
                />
              </label>
              <label class={'label'}>
                LastName
                <input
                  class={'input'}
                  placeholder={'Last Name'}
                  oninput={m.withAttr('value', value => {
                    userModel.current.lastName = value
                  })}
                  value={userModel.current.lastName}
                />
              </label>
              <button
                class={'btn btn-primary'}
                type={'submit'}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
} as m.Component<Attrs, {}>


