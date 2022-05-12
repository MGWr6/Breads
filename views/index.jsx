const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads, title}) {
  return (
    <Default title={title}>
      <h2>Index Page</h2>
      {/* <p>I have {breads[2].name} bread!</p> */}
      {/* The .map() function takes a callback as an argument. The callback requires a minimum of one argument. The first is the item in the array we are iterating over. The second argument is optional and will be the index position of the array item. */}
      <ul>
        {
          breads.map((bread, index)=> {
            return (
              <li key={index}>'
                <a href={`/breads/${index}`}>
                  {bread.name}
                </a>
              </li>
            )
          })
        }
      </ul>
    </Default>
  )
}

//export the code and utilize it elsewhere
module.exports = Index