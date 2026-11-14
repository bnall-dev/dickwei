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
                handleMsgUI("items", "player_badge", "inspect", 0)
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
                handleMsgUI("items", "dossier", "inspect", 0)
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
                handleMsgUI("items", "player_gun", "inspect", 0)
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
                handleMsgUI("items", "cigarettes_open", "inspect", 0)
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
                handleMsgUI("items", "player_phone", "inspect", 0)
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