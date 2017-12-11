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

    this.styles = []
    this.receiveInfo = []

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
  getByNickname(nickname: string): Client {
    let user = {} as Client
    user = userModel.getFromStroage(nickname)
    if (user === null) {
      return user
    }
    return user
  },

  save(user: Client): void {
    userModel.storedUserList.push(user)
    userModel.saveIntoStorageOne(user)
    userModel.saveIntoStorageList(userModel.storedUserList)

    alert('Hello, ' + user.nickname + ' Welcome to ZIGZAG!!! :)')
    m.route.set('/' + user.nickname)
  },

  removeFromStroage(key): void {
    commonCtrl.removeFromList(userModel.storedUserList, key)
    if (confirm('Do yo wanna ' + key + ' user delete?')) {
      userModel.saveIntoStorageList(userModel.storedUserList)
      localStorage.removeItem(key)
      alert(key + ' user is deleted.')
      m.route.set('/list')
    }
  },

  getFromStroage(key) {
    return JSON.parse(localStorage.getItem(key))
  },

  saveIntoStorageList(userList: Client[]): void {
    localStorage.setItem('userList', JSON.stringify(userList))
  },

  saveIntoStorageOne(one): void {
    localStorage.setItem(one.nickname, JSON.stringify(one))
  }
}

export {Client, userModel}
