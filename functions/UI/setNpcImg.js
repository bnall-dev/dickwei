export function setNpcImg(img){
  window.setGame(prev=>({...prev,
    npcImage: img
  }))
}