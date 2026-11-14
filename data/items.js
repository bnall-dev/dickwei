import {triggerFlag, createInteraction, createAction, handleMsgUI} from "../functions/game"

export function itemDataInit(){
  
    function createItem(name, flags, interactText, interactions) {
    return {
      name: name,
      flags: flags,
      interactText: interactText,
      interactions: interactions
    }
  }
  
  return (
    {
      player_badge: createItem(
      "Badge",
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
                handleMsgUI("items", "player_badge", "examine", 0)
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
                handleMsgUI("items", "player_badge", "use", 0)
              },
              ()=>true
            )])
        
      }),
      dossier:  createItem(
      "Dossier",
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
                handleMsgUI("items", "dossier", "examine", 0)
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
                handleMsgUI("items", "dossier", "use", 0)
              }
            )])}),
      player_gun: createItem(
      "Gun",
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
                handleMsgUI("items", "player_gun", "examine", 0)
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
                handleMsgUI("items", "player_gun", "use", 0)
              },
              ()=>true
            )
          ]
        )
      }
    ),
      cigarettes_open: createItem(
      "Cigarettes",
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
                handleMsgUI("items", "cigarettes_open", "examine", 0)
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
                handleMsgUI("items", "cigarettes_open", "use", 0)
              },
              ()=>true
            )
          ]
        )
      }
    ),
      player_phone: createItem(
      "Cell Phone",
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
                handleMsgUI("items", "player_phone", "use", 0)
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