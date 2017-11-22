import m from 'mithril';
import 'assets/scss/layout/header.scss';
import { userModel } from 'models/user/UserModel';
// Public method To use anywhere.
var headerCtrl = {
    searchUser: function () {
        var searchValue = document.getElementById('searchValue').value;
        if (searchValue.length < 1) {
            alert('검색어를 입력해주세요.');
            return;
        }
        else {
            searchValue = searchValue.toLowerCase().trim();
            userModel.list = userModel.storedUserList.filter(function (user) {
                return user.nickname.toLowerCase().indexOf(searchValue) !== -1 || user.email.toLowerCase().indexOf(searchValue) !== -1;
            });
            if (userModel.list.length < 1) {
                alert('매칭 된 검색 결과가 없습니다.');
                return;
            }
        }
    }
};
var headerComponent = {
    view: function () {
        return (m("nav", { class: "navbar navbar-default" },
            m("div", { class: "container-fluid" },
                m("div", { class: "navbar-header" },
                    m("button", { type: "button", class: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false" },
                        m("span", { class: "sr-only" }, "Toggle navigation"),
                        m("span", { class: "icon-bar" }),
                        m("span", { class: "icon-bar" }),
                        m("span", { class: "icon-bar" })),
                    m("a", { class: "navbar-brand", href: '/', oncreate: m.route.link }, "ZIGZAG")),
                m("div", { class: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1" },
                    m("ul", { class: "nav navbar-nav" },
                        m("li", { class: "active" },
                            m("a", { href: '/', oncreate: m.route.link },
                                "Intro",
                                m("span", { class: "sr-only" }))),
                        m("li", null,
                            m("a", { href: '/list', oncreate: m.route.link },
                                "User List",
                                m("span", { class: "sr-only" })))),
                    m("form", { class: "navbar-form navbar-right" },
                        m("div", { class: "form-group" },
                            m("input", { type: "text", class: "form-control", id: 'searchValue', placeholder: "Search" })),
                        m("button", { type: "submit", class: "btn btn-default", onclick: m.withAttr('value', function () {
                                headerCtrl.searchUser();
                            }) }, "Submit"))))));
    }
};
export { headerCtrl, headerComponent };
//# sourceMappingURL=Header.js.map