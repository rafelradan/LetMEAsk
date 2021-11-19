import "../styles/room.scss"

import imgLogo from "../img/logo.svg"
import imgCopy from "../img/copy.svg"
import imgEmptyQuestions from "../img/empty-questions.svg"
import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";

export function Room() {

  var url = window.location.href.split('rooms/')
   
   var codeRoom = url[1];
   console.log(codeRoom);

    
  
  return(

    <div id="page_room">
      <header>
        <img id="img_logo" src={imgLogo} alt="Logo LetMeAsk" />
        <div id="room_code" >
          <div id="copy" >
            <img id="img_copy" src={imgCopy} alt="letme sak" />
            <RoomCode code={codeRoom} />
            
          </div>
        </div>
      </header>

      <main id="page_room_body" >
        <form>
            <h3>Sala React Q&A</h3>
            <span> 4 perguntas </span>
            <textarea placeholder="O que você quer perguntar?" ></textarea>

                <div id="p_and_btn">
                    <div id="text">
                      <p>Para enviar uma pergunta, <button id="p_btn" >faça seu login.</button> </p>
                    </div>

                    <div id="btn">
                      <Button type="submit" >
                        Enviar pergunta
                      </Button>
                    </div>
                </div>

              <div id="page_room_footer" >
                <img id="img_"  src={imgEmptyQuestions} alt="Empty Questions" />
                <h5>Nenhuma pergunta por aqu...</h5>
                <p>Faça o seu login e seja a primeira pessoa a fazer uma pergunta.</p>

              </div>
         </form>
      </main>


    </div>
  )
} //0:55