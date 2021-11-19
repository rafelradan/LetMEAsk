type RoomCode = {
  code: string
}


export function CodeRoom(props: RoomCode){

function copyRoomCedeToClipboard(){
  navigator.clipboard.writeText(props.code)
}

  return(
    <button onClick={copyRoomCedeToClipboard} >{props.code}</button>
  )
}