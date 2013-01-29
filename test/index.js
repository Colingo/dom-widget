var test = require("tape")
var widget = require("../index")

var html = '' +
    '<div>' +
    '    <input data-marker="foo" />' +
    '</div>'

test("widget is a function", function (assert) {
    assert.equal(typeof widget, "function")
    assert.end()
})

test("widget returns a function", function (assert) {
    var w = widget()
    assert.equal(typeof w, "function")
    assert.end()
})

test("widget calls implementation", function (assert) {
    var w = widget(html, function (elements, n) {
        assert.ok(elements)
        assert.equal(n, 5)
        assert.equal(elements.root.tagName, "DIV")
        assert.equal(elements.foo.tagName, "INPUT")
        return { v: 42 }
    })

    var n = w(5)

    assert.equal(n.v, 42)
    assert.equal(n.view.tagName, "DIV")
    assert.end()
})
