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
                handleMsgUI(window.getGame().items.player_badge.interactions.inspect.actions[0].message)
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
                handleMsgUI(window.getGame().items.player_badge.interactions.use.actions[0].message)
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
                handleMsgUI(window.getGame().items.dossier.interactions.inspect.actions[0].message)
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
                handleMsgUI(window.getGame().items.dossier.interactions.use.actions[0].message)
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
                handleMsgUI(window.getGame().items.player_gun.interactions.inspect.actions[0].message)
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
                handleMsgUI(window.getGame().items.player_gun.interactions.use.actions[0].message)
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
                handleMsgUI(window.getGame().items.cigarettes_open.interactions.inspect.actions[0].message)
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
                handleMsgUI(window.getGame().items.cigarettes_open.interactions.use.actions[0].message)
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
                handleMsgUI(window.getGame().items.player_phone.interactions.inspect.actions[0].message)
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
                handleMsgUI(window.getGame().items.player_phone.interactions.use.actions[0].message)
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