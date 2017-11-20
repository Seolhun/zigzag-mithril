import m from 'mithril'
import 'assets/scss/layout/header.scss'

export default {
  view() {
    return (
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed"
                    data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false">
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
                <input type="text" class="form-control" placeholder="Search"/>
              </div>
              <button type="submit" class="btn btn-default">
                Submit
              </button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
} as m.Component<{}, {}>
