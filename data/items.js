import {triggerFlag, createInteraction, createAction, handleMsgUI, passTime, openDossier, openPhone} from "../functions/game"

export function itemDataInit(){
  
    function createItem(id, name, flags, interactText, interactions) {
    return {
      type: "item",
      id: id,
      name: name,
      flags: flags,
      interactText: interactText,
      interactions: interactions
    }
  }
  
  return (
    {
      player_badge: createItem(
        "player_badge",
      "Badge",
      {},
      "This badge signifies your authority as a Special Operative for The Agency.",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: "It's a gold metal badge featuring The Agency's official insignia. It is affixed to a leather wallet which contains your credentials."
                }
              ],
              ()=>{
                handleMsgUI("items", "player_badge", "examine", 0
                 
                )
                passTime(30)
              },
              ()=>true
            )
          ]
        ),
        use: createInteraction(
          "Use",
          [
            createAction(
              [
                {
                  text: "You give the badge a polish with your tie and admire its luster."
                }
              ],
              ()=>{
                handleMsgUI("items", "player_badge", "use", 0)
                passTime(60)
              },
              ()=>true
            )])
        
      }),
      dossier:  createItem(
        "dossier",
      "Dossier",
      {},
      "This contains all relevant information regarding your current case.",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: "The cover of the black leather folder is embossed with The Agency's insignia. It is designed to hold a broad array of documents."
                }
              ],
              ()=>{
                handleMsgUI("items", "dossier", "examine", 0)
                passTime(30)
              },
              ()=>true
            )
          ]
        ),
        use: createInteraction(
          "Use",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                openDossier()
                passTime(30)
              },
              ()=> true
            )])}),
      player_gun: createItem(
        "player_gun",
      "Gun",
      {},
      "Your trusty sidearm. For emergencies only.",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: "It's a customized snub-nose revolver chambered in .357 Magnum. It holds six rounds, more than enough."
                }
              ],
              ()=>{
                handleMsgUI("items", "player_gun", "examine", 0)
                passTime(30)
              },
              ()=> true
            )
          ]
        ),
        use: createInteraction(
          "Use",
          [
            createAction(
              [
                {
                  text: "You take several moments to deeply consider the matter before deciding that now is not the time for that."
                }
              ],
              ()=>{
                handleMsgUI("items", "player_gun", "use", 0)
                passTime(300)
              },
              ()=>true
            )
          ]
        )
      }
    ),
      cigarettes_open: createItem(
        "cigarettes_open",
      "Cigarettes",
      {},
      "It's an open pack of cigarettes.",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text:()=> `Your favorite brand. There's ${window.getGame().player.cigs} left.`
                }
              ],
              ()=>{
                handleMsgUI("items", "cigarettes_open", "examine", 0)
                passTime(30)
              },
              ()=> true
            )
          ]
        ),
        use: createInteraction(
          "Use",
          [
            createAction(
              [
                {
                  text: "You stand around for a while and smoke an entire cigarette before moving on."
                }
              ],
              ()=>{
                handleMsgUI("items", "cigarettes_open", "use", 0)
                window.setGame(prev=>({...prev,
                  player: {
                    ...prev.player,
                    cigs: prev.player.cigs -1,
                    currentCig: 1
                  }
                }))
              },
              ()=>true
            )
          ]
        )
      }
    ),
      player_phone: createItem(
        "player_phone",
      "Cell Phone",
      {},
      "An untraceable smart phone issued by The Agency.",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: "You take a moment to appreciate your custom wallpaper. The phone has several apps installed."
                }
              ],
              ()=>{
                handleMsgUI("items", "player_phone", "examine", 0)
              },
              ()=> true
            )
          ]
        ),
        use: createInteraction(
          "Use",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                openPhone()
              },
              ()=>true
            )
          ]
        )
      }
    )
      
      
        /*
  
    : createItem(
      "",
      {},
      "",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().items..interactions.inspect.actions[0].message)
              },
              ()=> true
            )
          ]
        ),
        use: createInteraction(
          "Use",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().items..interactions.use.actions[0].message)
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