import {triggerFlag, createInteraction, createAction, handleMsgUI} from "../functions/game"

export function npcDataInit(){
  
  function createNpc(name, location, flags, interactText, interactions) {
    return {
      name: name,
      location: location,
      flags: flags,
      interactText: interactText,
      interactions: interactions
    }
  }
  
  return (
    {
      drew: {
        name: "Drew",
        location: "jail",
        interactText: "You see the deputy.",
        interactions: {
          inspect: {
           text: "Inspect",
            actions: [
              {
                message:[
                  {
                    text: "He is a lanky man wearing a deputy's uniform under a leather bomber jacket. Even with his dark sunglasses, you can sense him staring at you with suspicion."
                  }
                ],
                func: ()=>{
                             window.setGame(prev => (
           {
             ...prev,
             message: prev.npcs.drew.interactions.inspect.actions[0].message,
             messageIndex: 0,
             
             choiceUIActive: false,
            messageActive: true
           }))
     
                },
                condition: ()=> true
              }
            ]
          },
          talk: {
            
           text: "Talk",
            actions: [
              {
                message:[
                  {
                    text: "Angry Deputy: \"Are you trying to get jammed up? If you can't prove who you are, get out of here!\""
                  }
                ],
                func: ()=>{
                             window.setGame(prev => (
           {
             ...prev,
             message: prev.npcs.drew.interactions.talk.actions[0].message,
             messageIndex: 0,
             choiceUIActive: false,
             messageActive: true
          
           }))
     
                },
                condition: ()=> window.getGame().player.inventory.includes("player_badge")== false
             } ,
              {
                message:[
                  {
                    text: "\"What do you want?\""
                  }
                ],
                func: ()=>{
                             window.setGame(prev => (
           {
             ...prev,
             message: prev.npcs.drew.interactions.talk.actions[1].message,
             messageIndex: 0,
             choiceUIActive: false,
             messageActive: true
          
           }))
     
                },
                condition: ()=> true
              }
            ]
          
          }
        }
      }, 
      gwen: {
        name: "Gwen",
        preName: "Girl with Pink Hair",
        location: "town_hall",
        interactText: "She sits at the front desk typing furiously at her computer. She seems stressed out.",
        interactions: {
          inspect: {
            text: "Inspect",
            actions: [
              {
                message: [
                  {text: "Her hair is a bright pink bob. She is wearing a purple cardigan over a white blouse with a red bow tie."}
                ],
                func: ()=> {
                  
                             window.setGame(prev => (
           {
             ...prev,
             message: prev.npcs.gwen.interactions.inspect.actions[0].message,
             messageIndex: 0,
             choiceUIActive: false,
             messageActive: true
          
           }))
     
                
                },
                condition: ()=> true
              }
            ]
          },
          talk: {
            text: "Talk",
            actions: [
              {
                message: [
                  {
                    text:"Dick: \"Excuse me...\""
                  },
                   {
   text: "The girl seems extremely absorbed in her work and doesn't seem to even register your presence. Perhaps now isn't the time..."
 }
                ],
                func: ()=>{
                  
                             window.setGame(prev => (
           {
             ...prev,
             message: prev.npcs.gwen.interactions.talk.actions[0].message,
             messageIndex: 0,
             choiceUIActive: false,
             messageActive: true
          
           }))
     
                
                },
                condition: ()=>true
              }
            ]
          }
        }
      },
      old_woman: {
        name: "Old Woman",
        location: "municipal_district",
        interactText: "An old woman putters down the sidewalk.",
        interactions: {
          inspect: {
            text: "Inspect",
            actions: [
              {
                message: [
                  {text: "She uses a walker with tennis balls fixed to its feet."}
                ],
                func: ()=> {
                  
                             window.setGame(prev => (
           {
             ...prev,
             message: prev.npcs.old_woman.interactions.inspect.actions[0].message,
             messageIndex: 0,
             choiceUIActive: false,
             messageActive: true
          
           }))
     
                
                },
                condition: ()=> true
              }
            ]
          },
          talk: {
            text: "Talk",
            actions: [
              {
                message: [
                  {
                    text:"Old Woman: \"It's just terrible... that poor girl...\""
                  }
                ],
                func: ()=>{
                  
                             window.setGame(prev => (
           {
             ...prev,
             message: prev.npcs.old_woman.interactions.talk.actions[0].message,
             messageIndex: 0,
             choiceUIActive: false,
             messageActive: true
          
           }))
     
                
                },
                condition: ()=>true
              }
            ]
          }
        }
      }
      
      
        /*
  
    : createNPC(
      "",
      "",
      {},
      "",
      {
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.inspect.actions[0].message)
              },
              ()=>true
            )
          ]
        ),
         investigate: createInteraction(
          "Investigate",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.investigate.actions[0].message)
              },
              ()=>true
            )
          ]
        ),
         chat: createInteraction(
          "Chat",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions..actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      }
    )
  
  */
      
      
    }
  )
}