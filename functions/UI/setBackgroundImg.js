export function setBackgroundImg(img){
  window.setGame(prev=>({...prev,
    backgroundImage: img
  }))
}