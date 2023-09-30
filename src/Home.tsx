import { Card, HeaderCard, FooterCard } from './style/AppStyle'
import { LinkA, ConfirmButton } from './style/AppStyle'
import ConfirmImage from './assets/Type=ArrowRight.svg'
import SmartWatchImage from './assets/Image.svg'
import FeedContainer from './components/FeedBack/Feed'
import { Link } from "react-router-dom";

function HomePage() {
  return(
   <>
    <Card>
    <HeaderCard>
     <img src={SmartWatchImage}/>
    </HeaderCard>
    <FooterCard>
     <h1>Avalie o produto</h1>
     <p>O que você achou do produto</p>
     <LinkA href="#">Smartwatch Amazfit Bip U Pro?</LinkA>
     <FeedContainer/>
     <ConfirmButton>
      <Link to="/comentario"><img src={ConfirmImage}/></Link>
     </ConfirmButton>
    </FooterCard>
    </Card>
   </>
  )
}

export default HomePage
