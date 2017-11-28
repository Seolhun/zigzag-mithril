import m from 'mithril'
import {commonCtrl} from '../../../index'

interface User {
  nickname: string
  email: string
  password: string
  birth: Date
  description: string
  sex: string
  styles: string[]
  receiveInfo: string[]

  privateAgree: boolean
  serviceAgree: boolean
  createdDate: Date
}

class Client implements User {
  nickname: string
  email: string
  password: string
  birth: Date
  description: string
  sex: string
  styles: string[]
  receiveInfo: string[]

  privateAgree: boolean
  serviceAgree: boolean
  createdDate: Date

  constructor() {
    this.nickname = null
    this.email = null
    this.password = null
    this.birth = null
    this.description = null
    this.sex = null
    this.styles = []
    this.receiveInfo = []
    this.privateAgree = false
    this.serviceAgree = false
    this.createdDate = null
  }
}

const userModel = {
  list: [] as Client[],
  storedUserList: [] as Client[],
  current: new Client(),

  isValid(): boolean {
    // Interface?
    console.log(userModel.current.email)
    if (userModel.current.email === null) {
      alert('이메일을 입력해주세요.')
      return true
    } else if (!commonCtrl.isNickname(userModel.current.nickname)) {
      alert('닉네임 값이 올바르지 않습니다.')
      return true
    } else if (userModel.current.password === null) {
      alert('비밀번호를 입력해주세요.')
      return true
    } else if (userModel.current.sex === null) {
      alert('성별을 골라주세요')
      return true
    }
    return false
  },

  loadList(): void {
    userModel.storedUserList = userModel.getFromStroage('userList')
    if (userModel.storedUserList === null) {
      userModel.storedUserList = [] as Client[]
    }
    //----------API Call Examples----------
    // return m.request<{ data: User[] }>({
    //   method: 'GET',
    //   url: 'https://rem-rest-api.herokuapp.com/api/users',
    //   withCredentials: true
    // }).then(result => {
    //   userModel.list = result.data
    // })
  },

  // Current User
  getByNickname(nickname: string): void {
    userModel.current = userModel.getFromStroage(nickname)
    if (userModel.current === null) {
      userModel.current = new Client()
    }
    //----------API Call Examples----------
    // return m.request<User>({
    //   method: 'GET',
    //   url: 'https://rem-rest-api.herokuapp.com/api/users/' + nickname,
    //   withCredentials: true
    // }).then(result => {
    //   userModel.current = result
    // })
  },

  save(): void {
    //UserForm Validation
    if (this.isValid()) {
      return
    }

    userModel.storedUserList.push(userModel.current)
    userModel.setIntoStorageOne()
    userModel.setIntoStorageList(userModel.storedUserList)

    alert(userModel.current.nickname + '님 ZIGZAG에 오신것을 환영합니다.')
    m.route.set('/' + userModel.current.nickname)
    userModel.current = new Client()
    //----------API Call Examples----------
    // return m.request({
    //   method: 'PUT',
    //   url: 'https://rem-rest-api.herokuapp.com/api/users/' + userModel.current.id,
    //   data: userModel.current,
    //   withCredentials: true
    // })
  },

  removeFromStroage(key): void {
    commonCtrl.removeFromList(userModel.storedUserList, key)
    if (confirm('삭제하시겠습니까?')) {
      userModel.setIntoStorageList(userModel.storedUserList)
      localStorage.removeItem(key)
      alert(key + '님이 정상적으로 삭제되었습니다.')
      m.route.set('/list')
    }
  },

  getFromStroage(key) {
    return JSON.parse(localStorage.getItem(key))
  },

  setIntoStorageList(userList: Client[]): void {
    localStorage.setItem('userList', JSON.stringify(userList))
  },

  setIntoStorageOne(): void {
    localStorage.setItem(userModel.current.nickname, JSON.stringify(userModel.current))
  }
}

export {Client, userModel}
