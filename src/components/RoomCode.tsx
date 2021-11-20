import '../styles/roomcode.scss'

type RoomCodeProps = {
  code: string
}


export function RoomCode(props: RoomCodeProps){


function copyRoomCedeToClipboard(){
  navigator.clipboard.writeText(props.code)
  alert('RoomCode was copied to clipboard.')
    
}

  return(
    <button id="btn" onClick={copyRoomCedeToClipboard} >{props.code}</button>
  )
}