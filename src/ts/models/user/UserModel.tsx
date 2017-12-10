import m from 'mithril'
import {commonCtrl} from '../../common/CommonCtrl'

interface BasicFields {
  id: string
  createdDate: Date
  createdBy: string
  modifiedDate: Date
  modifiedBy: string
}

interface User {
  nickname: string
  email: string
  password: string
  birth: Date
  description: string
  gender: string
}

class Client implements User, BasicFields {
  id: string
  nickname: string
  email: string
  password: string
  birth: Date
  description: string
  gender: string

  createdDate: Date
  createdBy: string
  modifiedDate: Date
  modifiedBy: string

  styles: string[]
  receiveInfo: string[]
  privateAgree: boolean
  serviceAgree: boolean


  constructor() {
    this.id = null
    this.nickname = null
    this.email = null
    this.password = null
    this.birth = null
    this.description = null
    this.gender = null
    this.receiveInfo = []
    this.styles = []
    this.privateAgree = false
    this.serviceAgree = false
    this.createdBy = null
    this.createdDate = null
    this.modifiedBy = null
    this.modifiedDate = null
  }
}

const userModel = {
  list: [] as Client[],
  storedUserList: [] as Client[],
  current: new Client(),

  loadList(): void {
    userModel.storedUserList = userModel.getFromStroage('userList')
    if (userModel.storedUserList === null) {
      userModel.storedUserList = [] as Client[]
    }
  },

  // Current User
  getByNickname(nickname: string): void {
    userModel.current = userModel.getFromStroage(nickname)
    if (userModel.current === null) {
      userModel.current = new Client()
    }
  },

  save(user: Client): void {
    userModel.storedUserList.push(user)
    userModel.setIntoStorageOne()
    userModel.setIntoStorageList(userModel.storedUserList)

    alert(user.nickname + '님 ZIGZAG에 오신것을 환영합니다.')
    m.route.set('/' + user.nickname)
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
