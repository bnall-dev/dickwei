export function triggerFlag(category, item, flag) {
  
}

export function handleChangeLocation(id) {
  console.log(id)
  window.setGame(
    prev => (
    {
      ...prev,
      choiceActive: false,
      player: {
        ...prev.player,
        location: id
      }
    })
  )
}

export function handleScene(scene) {
  
}

export function changeDisplayText(newText) {
  window.setGame(prev => (
  {
    ...prev,
    displayText: newText
  }))
}

export function setSceneActive(bool) {
  window.setGame(prev => ({
    ...prev,
    sceneActive: bool
  }))
}

export function setChoiceUIActive(bool) {
  window.setGame(prev => ({
    ...prev,
    choiceUIActive: bool
  }))
  
}

export function setMessageActive(bool) {
  window.setGame(prev => ({
    ...prev,
    messageActive: bool
  }))
  
}

export function setInteractionUIActive(bool) {
  window.setGame(prev => ({
    ...prev,
    interactionUIActive: bool
  }))
  
}

export function setInventoryUIActive(bool) {
  window.setGame(prev => ({
    ...prev,
    inventoryUIActive: bool
  }))
  
}

export function setDossierUIActive(bool) {
  window.setGame(prev => ({
    ...prev,
    dossierUIActive: bool
  }))
  
}

export function setToolsUIActive(bool) {
  window.setGame(prev => ({
    ...prev,
    toolsUIActive: bool
  }))
  
}

export function resetMessageIndex() {
  window.setGame(prev => ({
    ...prev,
    messageIndex: 0,
  }))
  
}

export function setMessage(arr) {
  window.setGame(prev => ({
    ...prev,
    message: arr
  }))
  
}

export function setMessageCurrentObj() {
  const msg = window.getGame().sceneActive ? [{ text: window.getGame().currentObj.displayText }] : [{ text: window.getGame().currentObj.interactText }]
  setMessage(msg)
}

export function endScene() {
  setChoiceUIActive(!window.getGame().sceneActive)
  setMessageActive(false)
  setInteractionUIActive(window.getGame().sceneActive)
  setToolsUIActive(window.getGame().sceneActive)
  resetMessageIndex()
  setMessageCurrentObj()
  setSceneActive(false)
}