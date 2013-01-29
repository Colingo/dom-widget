# dom-widget

[![browser support][3]][4]

Sugar to create a widget

## Example

A widget in this case is a combination of a HTML string and an
    JavaScript implementation.

Widget returns a function which when called will create a new
    elements hash from [unpack-html][5] using the given HTML
    template and pass it to you.

The value you return will be passed through but if it doesn't
    have a view property then a view property will be set to be
    `elements.root`

```js
var events = require("dom-reduce/event")
var fold = require("reducers/fold")
var document = require("global-scope/document")
var console = require("console")

var Widget = require("dom-widget")

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

```

## Installation

`npm install dom-widget`

## Contributors

 - Raynos

## MIT Licenced


  [1]: https://secure.travis-ci.org/Colingo/dom-widget.png
  [2]: http://travis-ci.org/Colingo/dom-widget
  [3]: http://ci.testling.com/Colingo/dom-widget.png
  [4]: http://ci.testling.com/Colingo/dom-widget
  [5]: https://github.com/Raynos/unpack-html
