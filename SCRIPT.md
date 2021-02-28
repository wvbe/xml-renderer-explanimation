# `xml-renderer` script

`xml-renderer` is a browser and NodeJS module for outputting XML to React.

You can install it using `npm install xml-renderer`.

It works by assigning "templates" to XML elements, text nodes, comments, processing instructions and so on. A template
in `xml-renderer` functions similarly to an XSLT template.

Templates are associated to XML nodes using XPath selectors. This allows for very granular control.

A template itself is simply React component. It is provided with two props by the `xml-renderer` library automatically;

The first prop, `node`, is the XML document object model (DOM) node. It is useful for additional lookups from XML if you
need it.

The second prop is `traverse`, which is a function that lets you select which other XML nodes to render. In this way
templates control the placement of related XML nodes.

If an XML node matches several templates, the template with the most specific XPath selector wins. This makes it easy
to define specialized behaviour on top of generic rules, for example based on additional attributes.

Additional variables, like the name of a document or functions to resolve cross-references, can be passed into templates
using normal React Context.

`xml-renderer` doesn't care where you use it. It is compatible with server-side render, but can also run entirely in the
browser.
