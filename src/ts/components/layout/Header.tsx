import m from 'mithril'
import 'assets/scss/layout/header.scss'
import {userModel} from '../../models/user/UserModel'

// Public method To use anywhere.
const headerCtrl = {
  searchUser() {
    let searchValue = (document.getElementById('searchValue') as HTMLTextAreaElement).value
    if (searchValue.length < 1) {
      alert('검색어를 입력해주세요.')
      return
    } else {
      searchValue = searchValue.toLowerCase().trim()
      userModel.list = userModel.storedUserList.filter(function (user) {
        return user.nickname.toLowerCase().indexOf(searchValue) !== -1 || user.email.toLowerCase().indexOf(searchValue) !== -1
      })

      if (userModel.list.length < 1) {
        alert('매칭 된 검색 결과가 없습니다.')
      }
    }
  }
}


const headerComponent = {
  view() {
    return (
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a
              class="navbar-brand"
              href={'/'}
              oncreate={m.route.link}
            >
              ZIGZAG
            </a>
          </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="active">
                <a href={'/'}
                   oncreate={m.route.link}
                >
                  Intro
                  <span class="sr-only">
                  </span>
                </a>
              </li>
              <li>
                <a href={'/list'}
                   oncreate={m.route.link}
                >
                  User List
                  <span class="sr-only">
                  </span>
                </a>
              </li>
            </ul>
            <form class="navbar-form navbar-right">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id={'searchValue'}
                  placeholder="Search"
                />
              </div>
              <button
                type="submit"
                class="btn btn-default"
                onclick={(e: Event) => {
                  e.preventDefault()
                  headerCtrl.searchUser()
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

export {headerCtrl, headerComponent}
