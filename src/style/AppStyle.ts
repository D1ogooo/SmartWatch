import { Link } from "react-router-dom";
import styled from 'styled-components'

export const Card = styled.div`
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
 margin-top: 9.5rem;
`

export const ConfirmButton = styled(Link)`
 width: 314px;
 height: 56px;
 border: none;
 position: fiex;
 bottom: 0;
 
 a {
 justify-content: space-between;
 border-radius: 8px;
 cursor: pointer;
 flex: 1 0 0;
 border: none;
 display: flex;
 align-items: center;
 color: #FAFAFA;
 font-family: Inter;
 font-size: 1rem;
 font-style: normal;
 font-weight: 700;
 line-height: 150%;
 }
`

export const LinkA = styled.a`
 color: var(--brand-purple-dark, #4439C7);
 font-family: Inter;
 font-size: 1rem;
 font-style: normal;
 font-weight: 400;
 line-height: 150%;
 margin-bottom: 2rem;
 text-decoration: none;
`

export const HeaderCard = styled.div`
 width: 410px;
 height: 184px;
 display: flex;
 justify-content: center;
 border-radius: 20px 20px 0px 0px;
 background: var(--brand-gradient-light, linear-gradient(77deg, #4453B2 -0.41%, #502C9E 98.95%));

 img {
 width: 140px;
 height: 232px;
 margin-top: -48.6px;
 }
`

export const FooterCard = styled.div`
 :root {
  --base-gray-500: #0C0C0D;
  --base-gray-400: #2F2F33;
 }
 display: flex;
 align-items: center;
 flex-direction: column;
 padding-top: 48px;
 width: 410px;
 height: 376px;
 background-color: #fff;
 border-radius: 0px 0px 40px 40px;
 box-shadow: 0px 4px 30px -1px rgba(0,0,0,0.31);

 h1 {
  color: var(--base-gray-500);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 00;
  line-height: 130%;
  margin-top: 0.5rem;
 }

 p {
  color: var(--base-gray-400, #2F2F33);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
 }
`

export const ComentContainer = styled.textarea`
 border: none;
 resize: none;
 display: flex;
 margin-bottom: 24px;
 width: 314px;
 height: 120px;
 padding: 12px;
 gap: 8px;
 overflow: hidden;
 color: var(--base-gray-300, #75747A);
 text-overflow: ellipsis;
 border-radius: 8px;
 background: var(--base-gray-200, #E3E1E4);

 ::placeholder {
  overflow: hidden;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
 }
`