import m from 'mithril'

enum ReceiveInformation {
  Email,
  Phone
}

interface User {
  id: number
  email: string
  password: string
  birth: Date
  description: string
  sex: string
  styles: string[]
  receiveInfo: ReceiveInformation[]

  privateAgree: boolean
  serviceAgree: boolean
  createdDate: Date
}

const userModel = {
  list: [] as User[],
  loadList() {
    return m.request<{ data: User[] }>({
      method: 'GET',
      url: 'https://rem-rest-api.herokuapp.com/api/users',
      withCredentials: true
    }).then(result => {
      userModel.list = result.data
    })
  },

  // Current User
  current: {} as User,
  getById(id: number) {
    return m.request<User>({
      method: 'GET',
      url: 'https://rem-rest-api.herokuapp.com/api/users/' + id,
      withCredentials: true
    }).then(result => {
      userModel.current = result
    })
  },

  save() {
    return m.request({
      method: 'PUT',
      url: 'https://rem-rest-api.herokuapp.com/api/users/' + userModel.current.id,
      data: userModel.current,
      withCredentials: true
    })
  }
}

export {User, userModel}
