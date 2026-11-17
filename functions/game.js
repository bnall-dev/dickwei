import {setBackgroundImg} from "./UI/setBackgroundImg"
import {setNpcImg} from "./UI/setNpcImg"
import {changeDisplayText} from "./UI/changeDisplayText"
import {setHeaderActive, setInventoryUIActive, setDossierUIActive, setPhoneUIActive, setToolsUIActive, setInteractionUIActive, setChoiceUIActive} from "./UI/setUIActive"

export function triggerFlag(category, item, flag) {
  
}

export {
  setBackgroundImg,
  setNpcImg,
  changeDisplayText,
  setInventoryUIActive,
  setDossierUIActive,
  setPhoneUIActive,
  setToolsUIActive,
  setInteractionUIActive,
  setChoiceUIActive,
  setHeaderActive
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





export function setSceneActive(bool) {
  window.setGame(prev => ({
    ...prev,
    sceneActive: bool
  }))
}



export function setMessageActive(bool) {
  window.setGame(prev => ({
    ...prev,
    messageActive: bool
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
   cigs: 19,
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
      if (obj.type !== "location"){
        if (obj.type == "npc") {setNpcImg(obj.id)} else setBackgroundImg(obj.id)
      }
           

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
    
    export function startNewGame(){
      setMessageActive(true)
      setChoiceUIActive(false)
      setBackgroundImg("opening1")
      setMessage([{ text: "You are driving deep in the mountains, on the way to investigate a very important case." ,
      func: ()=>{setBackgroundImg("opening2")}
    },
      { text: "As you apprach your destination, something suddenly averts your attention and the car spins out of control!",
      func: ()=>{setBackgroundImg("opening3")}
 },
      { text: "Miraculously, you aren't harmed, but your car has been wrapped around a tree." },
      { text: "Dick: \"I can't believe I survived that! I shall take it as a cosmic mandate that I must solve this case!\"" },
       { text: "Dick: \"But it looks like we're on foot from here...\"" },
      { text: "You light up a cigarette.",
      func: ()=>{
        setBackgroundImg("outskirts")
        setHeaderActive(true)
      }
 }
    ])
    }
    
    export function loadGame(setGame) {
  const savedGame = localStorage.getItem("savedGame_1");
  
  if (savedGame) {
    window.setGame(JSON.parse(savedGame));
    setMessage([{text:"*Game Loaded*"}, {
      text: `It is ${Object.values(window.getGame().weekDays).find(d=>d.day == window.getGame().day % 7).name}${window.getGame().dayTime == "pm" ? " evening": ""}, day ${window.getGame().day} of your investigation.`
    }])
    setChoiceUIActive(false)
    setInteractionUIActive(true)
    setToolsUIActive(true)
    
  }
}