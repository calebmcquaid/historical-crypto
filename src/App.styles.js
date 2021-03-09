import styled from 'styled-components'

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 30em;
    font-family: 'Mulish', sans-serif;
    
`

export const Centered = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 3em 12em;
`

export const Emoji = styled.div`
    margin-top: .12em;
    font-size: 6em;
`

export const Calculation = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const Card = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -ms-flex-direction:column;
  flex-direction:column;
  position:relative;
  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius:16px;
  overflow:hidden;
  -webkit-box-shadow:  inset 0px 0px 15px ${(props) => props.priceChange ? "#52c146" : "#d35e9b"}, -15px -15px 27px ${(props) => props.priceChange ? "#52c146" : "#d35e9b"};
  box-shadow:  inset 0px 0px 15px ${(props) => props.priceChange ? "#52c146" : "#d35e9b"}, -15px -15px 27px ${(props) => props.priceChange ? "#52c146" : "#d35e9b"};

`