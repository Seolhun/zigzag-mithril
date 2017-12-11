import m from 'mithril';
import { commonCtrl } from './CommonCtrl';
export var commonFormCtrl = {
    // When bool is false, this have a error.
    validateAll: function (model) {
        var bool = true;
        Object.keys(model).some(function (field) {
            bool = model[field].validate();
            return bool === false;
        });
        return bool;
    },
    inputForm: function (attrs) {
        return (m("div", null,
            m("input", { class: 'form-control', className: attrs.field.error ? 'error' : '', id: attrs.field.id, oninput: m.withAttr('value', (function (value) {
                    attrs.field.value(value);
                    attrs.field.validate();
                })), placeholder: attrs.field.placeholder, type: attrs.field.type, value: attrs.field.value() }),
            m("p", { class: 'isError' }, attrs.field.errorMsg)));
    },
    radioForm: function (attrs, inputId) {
        return (m("div", null,
            m("label", { for: inputId, class: 'label' },
                m("input", { className: attrs.field.error ? 'error' : '', id: inputId, name: attrs.field.name, onchange: m.withAttr('value', (function (value) {
                        attrs.field.value(value);
                        attrs.field.validate();
                    })), placeholder: attrs.field.placeholder, type: attrs.field.type, value: inputId }),
                inputId),
            m("p", { class: 'isError' }, attrs.field.errorMsg)));
    },
    checkboxForm: function (attrs, inputId) {
        return (m("div", null,
            m("label", { for: inputId, class: 'label' },
                m("input", { className: attrs.field.error ? 'error' : '', id: inputId, name: attrs.field.name, onchange: m.withAttr('value', (function (value) {
                        commonCtrl.pushIntoListNotDuplication(attrs.field.value(), value);
                        attrs.field.validate();
                    })), placeholder: attrs.field.placeholder, type: attrs.field.type, value: inputId }),
                inputId),
            m("p", { class: 'isError' }, attrs.field.errorMsg)));
    },
    textAreaForm: function (attrs) {
        return (m("div", null,
            m("textarea", { class: "form-control", className: attrs.field.error ? 'error' : '', oninput: m.withAttr('value', (function (value) {
                    attrs.field.value(value);
                    attrs.field.validate();
                })), placeholder: attrs.field.placeholder, value: attrs.field.value() }),
            m("p", { class: 'isError' }, attrs.field.error)));
    }
};
//# sourceMappingURL=commonFormCtrl.js.map