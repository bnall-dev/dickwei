import { triggerFlag, handleScene, changeDisplayText, createAction, createInteraction, handleMsgUI, passTime } from "../functions/game"

export function objectDataInit() {
  
  function createObject(name, location, flags, interactText, interactions) {
    return {
      name: name,
      location: location,
      flags: flags,
      interactText: interactText,
      interactions: interactions
    }
  }
  

  return {
    player_car: createObject(
      "Your Car",
      "outskirts",
      {
        first_inspect: false
      },
      "You see your car.",
      {
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                { text: "You inspect your car." }
              ],
              () => {
                handleMsgUI(window.getGame().objects.player_car.interactions.inspect.actions[0].message)
                passTime(60)
              },
              () => true
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
                handleMsgUI(window.getGame().objects.player_car.interactions.use.actions[0].message)
                passTime(60)
              },
              ()=> true
            )
          ]
        )
      }
    )
    
      /*
  
    : createObject(
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
                handleMsgUI(window.getGame().objects..interactions.inspect.actions[0].message)
              }
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
                handleMsgUI(window.getGame().objects..interactions.use.actions[0].message)
              }
            )
          ]
        )
      }
    )
  
  */
    
    
  }
}