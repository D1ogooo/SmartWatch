import styled from 'styled-components'

export const FeedBackContainer = styled.div`
 :root {
  --brand-purple-dark: #4439C7;
 }

 ul {
  display: flex;
  gap: 20px;
  flex-direction: row;
  align-items: center;
 }

 p {
  
 }

 li {
  list-style: none;
  cursor: pointer;
 }
`

export const SecondContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0px 10px 40px 10px;

 p {
  width: 40px;
  color: var(--base-gray-300, #75747A);
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
 }
`