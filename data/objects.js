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
        first_examine: false
      },
      "You see your car.",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                { text: "You examine your car." }
              ],
              () => {
                handleMsgUI("objects", "player_car", "examine", 0)
                passTime(60)
                setObjFlag("player_car", "first_examine", true)
              },
              () => window.getGame().objects.player_car.flags.first_examine == false
            ),
             createAction(
              [
                { text: "You examine your car again and find your badge." }
              ],
              () => {
                handleMsgUI("objects", "player_car", "Examine", 1)
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
     handleMsgUI("objects", "player_car", "Examine", 2)
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
                handleMsgUI("objects", "town_sign", "examine", 0)
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
                handleMsgUI("objects", "fountain", "examine", 0)
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
                handleMsgUI("objects", "newspaper_box", "examine", 0)
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
                handleMsgUI("objects", "post_box", "examine", 0)
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
                handleMsgUI(window.getGame().objects..interactions.examine.actions[0].message)
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