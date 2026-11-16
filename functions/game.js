

export function triggerFlag(category, item, flag) {
  
}

export function setBackgroundImg(img){
  window.setGame(prev=>({...prev,
    backgroundImage: img
  }))
}

export function handleChangeLocation(id) {

  window.setGame(
    prev => (
    {
      ...prev,
      
      player: {
        ...prev.player,
        location: id
      },
    })
  )
}



export function changeDisplayText(newText) {
  window.setGame(prev => (
  {
    ...prev,
    displayText: typeof newText === "function"
  ? newText()
  : newText
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

  export function createInteraction(text, actions) {
    return {
      text: text,
      actions: actions
    }
  }
  
  export function createAction(msg, func, cond) {
    return {
      message: msg,
      func: func,
      condition: cond
    }
  }
  
 export function handleMsgUI(cat, obj, act, i) {
    window.setGame(
      prev => ({
        ...prev,
        messageIndex: 0,
        messageActive: true,
        choiceUIActive: false,
        message: window.getGame()[cat][obj].interactions[act].actions[i].message
        
      })
    ) 
    
    
  }
  
  export function lightCig() {
    var newText = " You light up a cigarette."
    if (window.getGame().player.cigs == 1) {
      newText += " It's your last one! You'll have to take a break and get more if you run out."
    }
     window.setGame(prev => ({
   ...prev,
   player: {
     ...prev.player,
     cigs: prev.player.cigs - 1,
     currentCig: 1440

   },
   
 displayText: prev.message.map((msg, index) =>
     index === window.getGame().messageIndex ?
     prev.displayText + newText  :
     prev.displayText),


 }))
  }
  
  export function endDay() {

     window.setGame(prev => ({
   ...prev,
   
 message: [{text: "You ran out of smokes!"},
   {text: "You return to the hotel to rest and restock."},
   prev.dayTime == "am" ? {text: "The sun sets outside your window. It is now evening. You light up a cigarette."} : {text: "You fall asleep until your alarm wakes you. It is "+ window.getGame().weekDays[Object.keys(window.getGame().weekDays).find(d=>window.getGame().weekDays[d].day == (window.getGame().day + 1) % 7)].name +  ", day " + (window.getGame().day + 1) + " of your investigation. You light up a cigarette."}
 ],
 dayTime: prev.dayTime == "am" ? "pm" : "am",
 day: prev.dayTime == "am" ? prev.day : prev.day + 1,
 player: {
   ...prev.player,
   currentCig: 1440,
   cigs: 0,
   location: "player_room"
   
 } ,
 messageActive: true,
 interactionUIActive: false,
 toolsUIActive: false,
 choiceUIActive: false,
 currentObj: prev.locations.player_room,
 sceneActive: true


 }))
  }
  
  export function passTime(sec) {
    
    window.setGame(prev=>({
      ...prev,
      player: {
        ...prev.player,
        currentCig: prev.player.currentCig - sec
      }
    }))
    
    if(window.getGame().player.currentCig <= 0) {
      if (window.getGame().player.cigs > 0)
      lightCig()
      else endDay()
    }
    
  }
 
export  function setObjFlag(obj, flag, bool){
                 window.setGame(prev=>({...prev,
                  objects: {
                    ...prev.objects,
                    [obj]: {
                      ...prev.objects[obj],
                      flags: {
                        ...prev.objects[obj].flags,
                        [flag]:bool
                      }
                    }
                  }
                }))
              }
              
  export function playerGetItem(item){
    window.setGame(prev=>({...prev,
      player: {
        ...prev.player,
        inventory: [
          ...prev.player.inventory,
          "player_badge"
        ]
      }
    }))
  }
  export function handleInteraction(obj) {
      if (obj.name)
      {window.setGame(
        prev => (
        {
          ...prev,
          displayText: obj.interactText,
          currentObj: obj,
          interaction: Object.values(obj.interactions),
          choiceUIActive: true,
          interactionUIActive: false,
          toolsUIActive: false, 
          inventoryUIActive: false
          
          
        })
      )
           if(obj.type != "npc"){setBackgroundImg(obj.id)}

      passTime(10)}
    }
    
     export  function openInventory(){
     setInventoryUIActive(true)
     setInteractionUIActive(false)
     setToolsUIActive(false)
     setMessage([{text:"You take a look through your belongings."}])
   }
   
  export function openDossier(){
     setDossierUIActive(true)
setInteractionUIActive(false)
setToolsUIActive(false)
setChoiceUIActive(false)
setMessage([{text:"You review your case files."}])
   }
   
  export function openPhone() {
  setPhoneUIActive(true)
  setInteractionUIActive(false)
  setToolsUIActive(false)
  setChoiceUIActive(false)
  setMessage([{text:"You take a look at your phone."}])
}
    