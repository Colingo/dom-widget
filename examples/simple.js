var events = require("dom-reduce/event")
var fold = require("reducers/fold")
var document = require("global-scope/document")
var console = require("console")

var Widget = require("../index")

var html = "<div><input data-marker='foo' /></div>"

var widget = Widget(html, function (elements, data) {
    console.log("args", arguments)
    elements.foo.value = data

    return events(elements.foo, "keypress")
})

var item = widget("hello world")
document.body.appendChild(item.view)

fold(item, function (event) {
    console.log("keypress events", event)
    // keypress events
})
