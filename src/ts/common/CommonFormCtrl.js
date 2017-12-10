import m from 'mithril';
export var commonFormCtrl = {
    validateAll: function (model) {
        console.log('model', model);
        var bool = true;
        Object.keys(model).forEach(function (field) {
            bool = model[field].validate();
            if (!bool) {
                return bool;
            }
        });
        return bool;
    },
    inputForm: function (attrs) {
        return (m("div", null,
            m("input", { type: attrs.field.type, value: attrs.field.value, placeholder: attrs.field.placeholder, className: attrs.field.error ? 'error' : '', class: 'form-control', id: attrs.field.id, oninput: m.withAttr('value', attrs.field.value), onchange: m.withAttr('value', attrs.field.value) }),
            m("p", { class: 'isError' }, attrs.field.errorMsg)));
    },
    checkboxForm: function (attrs, inputId) {
        return (m("div", null,
            m("label", { for: inputId, class: 'label' },
                m("input", { className: attrs.field.error ? 'error' : '', id: inputId, name: attrs.field.name, oninput: m.withAttr('value', attrs.field.value), placeholder: attrs.field.placeholder, type: attrs.field.type, value: attrs.field.value() }),
                inputId),
            m("p", { class: 'isError' }, attrs.field.errorMsg)));
    },
    textAreaForm: function (attrs) {
        return (m("div", null,
            m("textarea", { value: attrs.field.value(), placeholder: attrs.field.placeholder, className: attrs.field.error ? 'error' : '', class: "form-control", oninput: m.withAttr('value', attrs.field.value) }),
            m("p", { class: 'isError' }, attrs.field.error)));
    }
};
//# sourceMappingURL=CommonFormCtrl.js.map