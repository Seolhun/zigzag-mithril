import * as m from 'mithril'

export default class Header implements m.ClassComponent<{}> {
  view() {
    return (
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>

            <a
              class="navbar-brand"
              href="/"
            >
              ZIGZAG
            </a>
          </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="active">
                <a href="/">Intro
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
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a
                  href={'/join'}
                  oncreate={m.route.link}
                >
                  Sign in
                  <span class="sr-only">
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
