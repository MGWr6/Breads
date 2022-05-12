const React = require('react')

function Default(html) {
  return (
    <html>
      <head>
        <title>Default</title>
      </head>
      <body>
        <h1>HTML Rendered!</h1>
        <div className="container">
        {html.children}
        </div>
      </body>
    </html>
  )
}
 // LIne 12: We need to tell the code where to load the HTML children for our different views. We will do this in the body. When using {}, we are telling React/JSX to stop, evaluate what is inside, and then render the contents.

// Use module.exports = Default to export the code and utilize it elsewhere.
module.exports = Default