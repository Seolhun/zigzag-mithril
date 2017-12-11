import m from 'mithril';
export default {
    view: function () {
        return (m("div", { class: 'container' },
            m("div", { class: 'row' },
                m("div", { class: 'col-sm-12' },
                    m("h1", null, "ZIGZAG Backend Developer Junior Coding Test"),
                    m("p", null, "\uC548\uB155\uD558\uC138\uC694. ZIGZAG\uC5D0 \uC9C0\uC6D0\uD55C \uC124\uD6C8\uC785\uB2C8\uB2E4."),
                    m("p", null,
                        "\uC774\uBC88 \uACFC\uC81C \uB0B4\uC6A9\uC740",
                        m("a", { href: 'https://github.com/Seolhun/vue-example/tree/master/cli/ch5', target: '_blank' }, "Vue\uB85C \uC791\uC131\uB41C \uD574\uB2F9 \uD398\uC774\uC9C0"),
                        "\uB97C Mithril Js \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uBCC0\uD658\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4.",
                        m("ul", null,
                            m("li", null,
                                m("h4", null, "\uD544\uC218\uC0AC\uD56D")),
                            m("ol", null,
                                m("li", null, "\uD55C\uAC1C \uC774\uC0C1\uC758 \uC11C\uBE0C \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD574\uC8FC\uC138\uC694. - \uC801\uC6A9(Header, Detail, Agreement...)"))),
                        m("ul", null,
                            m("li", null,
                                m("h4", null, "\uC120\uD0DD\uC0AC\uD56D")),
                            m("ol", null,
                                m("li", null, "TypeScript \uC0AC\uC6A9 - \uC801\uC6A9"),
                                m("li", null, "CSS class\uB97C local scope\uB85C \uC815\uC758 - \uC801\uC6A9"),
                                m("li", null, "\uBAA8\uB378 \uB370\uC774\uD130(\uC18D\uC131)\uC5D0 Mithril stream\uC744 \uC801\uC6A9 - \uC801\uC6A9"))))))));
    }
};
//# sourceMappingURL=Root.js.map