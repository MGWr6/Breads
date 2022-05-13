const React = require("react");

function Default(html) {
  return (
    <html>
    <head>
      <title>{html.title || 'Default'}</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossOrigin="anonymous" />
    </head>
    <body>
      <div className="wrapper">
        <header>
          <h1><a href="/breads">BreadCRUD</a></h1>
        </header>
        <div className="container">
          {html.children}
        </div>
      </div>
    </body>
    </html>
  )
}

// LIne 12: We need to tell the code where to load the HTML children for our different views. We will do this in the body. When using {}, we are telling React/JSX to stop, evaluate what is inside, and then render the contents.

// Use module.exports = Default to export the code and utilize it elsewhere.
module.exports = Default;
