import '../styles/coderoom.scss'

type RoomCodeProps = {
  code: string
}


export function RoomCode(props: RoomCodeProps){


function copyRoomCedeToClipboard(){
  navigator.clipboard.writeText(props.code)
    
}

  return(
    <button id="btn" onClick={copyRoomCedeToClipboard} >{props.code}</button>
  )
}