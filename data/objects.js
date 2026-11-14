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
    ),
    
    town_sign: createObject(
      "Welcome Sign",
      "outskirts",
      {},
      "You see a large sign.",
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
                handleMsgUI(window.getGame().objects.town_sign.interactions.inspect.actions[0].message)
                passTime(60)
              },
              ()=>{}
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
                handleMsgUI(window.getGame().objects.town_sign.interactions.use.actions[0].message)
                passTime(10)
              }
            )
          ]
        )
      }
    ),
    
    fountain: createObject(
      "Fountain",
      "municipal_district",
      {},
      "You see a Fountain.",
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
                handleMsgUI(window.getGame().objects.fountain.interactions.inspect.actions[0].message)
                passTime(60)
              },
              ()=>{}
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
                handleMsgUI(window.getGame().objects.fountain.interactions.use.actions[0].message)
                passTime(30)
              }
            )
          ]
        )
      }
    ),
    
    
    
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
                passTime()
              },
              ()=>{}
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
                passTime()
              },
              ()=>{}
            )
          ]
        )
      }
    )
  
  */
    
    
  }
}