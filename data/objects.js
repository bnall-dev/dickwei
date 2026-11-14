import { triggerFlag, handleScene, changeDisplayText, createAction, createInteraction, handleMsgUI, passTime, setObjFlag, playerGetItem } from "../functions/game"

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
                handleMsgUI("objects", "player_car", "inspect", 0)
                passTime(60)
                setObjFlag("player_car", "first_inspect", true)
              },
              () => window.getGame().objects.player_car.flags.first_inspect == false
            ),
             createAction(
              [
                { text: "You inspect your car again and find your badge." }
              ],
              () => {
                handleMsgUI("objects", "player_car", "inspect", 1)
                passTime(60)
                playerGetItem("player_badge")
              },
              () => !window.getGame().player.inventory.includes("player_badge")
            ),
             createAction(
   [
     { text: "It's broken down." }
   ],
   () => {
     handleMsgUI("objects", "player_car", "inspect", 2)
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
                handleMsgUI("objects", "player_car", "use", 0)
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
                handleMsgUI("objects", "town_sign", "inspect", 0)
                passTime(60)
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
                handleMsgUI("objects", "town_sign", "use", 0)
                passTime(60)
              },
              ()=> true
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
                handleMsgUI("objects", "fountain", "inspect", 0)
                passTime(60)
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
                handleMsgUI("objects", "fountain", "use", 0)
                passTime(30)
              },
              ()=> true
            )
          ]
        )
      }
    ),
    
    newspaper_box: createObject(
      "Newspaper Box",
      "municipal_district",
      {},
      "You see a newspaper box.",
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
                handleMsgUI("objects", "newspaper_box", "inspect", 0)
                passTime(60)
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
                handleMsgUI("objects", "newspaper_box", "use", 0)
                passTime(60)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    
    post_box: createObject(
      "Post Box",
      "municipal_district",
      {},
      "You see a post box. You could send a letter in the mail if you had one.",
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
                handleMsgUI("objects", "post_box", "inspect", 0)
                passTime(60)
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
                handleMsgUI("objects", "post_box", "", 0)
                passTime()
              },
              ()=>true
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
                handleMsgUI(window.getGame().objects..interactions.use.actions[0].message)
                passTime()
              },
              ()=>true
            )
          ]
        )
      }
    )
  
  */
    
    
  }
}