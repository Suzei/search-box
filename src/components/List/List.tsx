import { List } from './style.js'
import data from './ListJSON.json'

export const SearchList = (props) => {
  const filteredData = data.filter((el) => { // uma const que vai filtrar os elementos
    if (props.input === '') { // se o input tiver vazio, você retorna a lista toda
      return el // retorne os elementos, todos eles, listados.
    } else {
      return el.text.toLocaleLowerCase().includes(props.input) // senão, retorne o que está no input text
    }
  })
  
  return (
    <List>
      <>
        <ul>
          {filteredData.map((item) => ( // para cada item filtrado
            <li key={item.id}>{item.text}</li> // se faz um ID
          ))}
        </ul>
      </>
    </List>
  )
}