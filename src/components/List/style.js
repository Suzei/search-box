import styled from 'styled-components'

export const List = styled.div `
  display: grid;
  height: 25px;
  margin-top: 15px;
  padding: 20px;
  flex-wrap: wrap;
  gap: 80px;
  justify-content: center;
  grid-template-columns: 3fr 1fr 1fr;
`
export const ItemList = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    border-radius: 20%;
  }

`