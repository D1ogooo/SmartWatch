import { FeedBackContainer, SecondContainer } from './FeedStyle'
import StarVazio from '../../assets/StarRate.svg'
import StarCheio from '../../assets/react.svg'
import { useState } from 'react'

function FeedContainer() {
  const [firststar, firSetstar] = useState(false)
  const [secondstar, secondSetstar] = useState(false)
  const [thirdstar, thirdSetstar] = useState(false)
  const [forstar, forSetstar] = useState(false)
  const [fivestar, fiveSetstar] = useState(false)

  const handleclick: React.MouseEventHandler<HTMLImageElement> = () => {
    firSetstar(!firststar)
  }
  const secondhandleclick: React.MouseEventHandler<HTMLImageElement> = () => {
    secondSetstar(!secondstar)
  }
  const thirdhandleclick: React.MouseEventHandler<HTMLImageElement> = () => {
    thirdSetstar(!thirdstar)
  }
  const forhandleclick: React.MouseEventHandler<HTMLImageElement> = () => {
    forSetstar(!forstar)
  }
  const fivehandleclick: React.MouseEventHandler<HTMLImageElement> = () => {
    fiveSetstar(!fivestar)
  }

  return (
  <>
   <FeedBackContainer>
   <ul>
    <li><img src={firststar ? StarCheio : StarVazio } onClick={handleclick}/><a href="#"></a></li>
    <li><img src={secondstar ? StarCheio : StarVazio } onClick={secondhandleclick}/><a href="#"></a></li>
    <li><img src={thirdstar ? StarCheio : StarVazio } onClick={thirdhandleclick}/><a href="#"></a></li>
    <li><img src={forstar ? StarCheio : StarVazio } onClick={forhandleclick}/><a href="#"></a></li>
    <li><img src={fivestar ? StarCheio : StarVazio} onClick={fivehandleclick}/><a href="#"></a></li>
   </ul>
    <SecondContainer>
     <p>Ruim</p>
     <p>Ótimo</p>
    </SecondContainer>
   </FeedBackContainer>
  </>
  )
}


export default FeedContainer