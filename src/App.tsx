import { SearchList } from "./components/List/List"
import { Divider, Input} from "antd"
import { useState } from "react"

export default function App() {

const [inputText, setInputText] = useState("") // usando o useState
let inputHandler = (event) => { //
  var lowercase = event.target.value.toLowerCase() // vai pegar o valor do input e por em minúscuclo
  setInputText(lowercase) // setando o valor de inputText para lowercase
}

  return (
    <>
    <Divider direction="center"> 
    <Input.Search enterButton={true}
    allowClear
    maxLength={20}
    onChange={inputHandler}>

    </Input.Search>
    <SearchList input={inputText /* o valor em minúsculo, sendo também o valor da prop */}></SearchList>
    </Divider>
    </> 
  )
}
