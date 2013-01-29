var html = require("unpack-html")
var append = require("insert/append")
var document = require("global-scope/document")

var slice = Array.prototype.slice
var head = document.head

module.exports = Widget

function Widget(template, css, impl) {
    if (typeof css === "function") {
        impl = css
        css = null
    }

    if (css) {
        var style = Style(css)

        append(head, style)
    }

    return widget

    function widget() {
        var elements = html(template)
        var args = slice.call(arguments)
        args.unshift(elements)

        var value = impl.apply(null, args) || {}
        if (!value.view) {
            value.view = elements.root
        }

        return value
    }
}

function Style(str) {
    var elem = document.createElement("style")
    elem.type = "text/css"
    elem.textContent = str
    return elem
}
