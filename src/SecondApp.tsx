import { Card, HeaderCard, FooterCard } from './style/AppStyle'
import { LinkA, ConfirmButton, ComentContainer } from './style/AppStyle'
import ConfirmImage from './assets/Type=ArrowRight.svg'
import SmartWatchImage from './assets/Image.svg'
import { Link } from "react-router-dom";

function Comentario() {
  return(
   <>
    <Card>
    <HeaderCard>
     <img src={SmartWatchImage}/>
    </HeaderCard>
    <FooterCard>
     <h1>Deixe um comentário</h1>
     <p>Conte sobre o motivo da sua avaliação</p>
     <LinkA href="#">Smartwatch Amazfit Bip U Pro?</LinkA>
     <ComentContainer placeholder="Escreva aqui seu comentário">
     </ComentContainer>
     <ConfirmButton>
      <Link to="/home"><img src={ConfirmImage}/></Link>
     </ConfirmButton>
    </FooterCard>
    </Card>
   </>
  )
}

export default Comentario
