export function setHeaderActive(bool) {
  window.setGame(prev => ({
    ...prev,
    headerActive: bool
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

export function setPhoneUIActive(bool) {
  window.setGame(prev => ({
    ...prev,
    phoneUIActive: bool
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

export function setChoiceUIActive(bool) {
  window.setGame(prev => ({
    ...prev,
    choiceUIActive: bool
  }))
  
}