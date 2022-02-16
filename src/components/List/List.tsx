import { List, ItemList } from './style.js'
import data from './ListJSON.json'

export const SearchList = ( props ) => {
  const filteredData = data.filter((el) => { // uma const que vai filtrar os elementos
    if (props.input === '') { // se o input tiver vazio, você retorna a lista toda
      return // retorne os elementos, todos eles, listados.
    } else {
      return el.name.toLocaleLowerCase().includes(props.input) // senão, retorne o que está no input text
    }
  })
  
  return (
    <List>
      <>
        {filteredData.map((item) => ( // para cada item filtrado se faz um ID
          <ItemList key={item.id}>
            <h3>{item.name}</h3>
            <img src={item.image} alt="" />
          </ItemList>
        ))}
      </>
    </List>
  )
}