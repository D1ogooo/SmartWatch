import { FeedBackContainer, SecondContainer } from './FeedStyle'
import StarVazio from '../../assets/StarRate.svg'
import StarCheio from '../../assets/react.svg'
import { useState } from 'react'

function FeedContainer() {
  const [star, setStar] = useState(false)

  const handleclick: React.MouseEventHandler<HTMLImageElement> = () => {
    firSetstar(!firststar)
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