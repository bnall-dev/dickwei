import { createObject } from "../objects"
import { createInteraction, createAction, handleMsgUI, passTime, setMessageActive, setChoiceUIActive, setMessage } from "../../functions/game"

export const fountain = createObject(
      "fountain",
      "Fountain",
      "municipal_district",
      {},
      "A large fountain dominates the town square.",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: "The fountain is a statue of a mermaid pouring out an ewer. Water cascades from the ewer and from the mouths of several majestic fish that form the statue's base. Various coins glimmer at the bottom of the pool."
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
                  text: "Make a wish?"
                }
              ],
              ()=>{
                handleMsgUI("objects", "fountain", "use", 0)
                setMessageActive(false)
                setChoiceUIActive(true)
                window.setGame(prev=>({...prev,
                  interaction: [
                    {
                     text: "Toss all your change",
                     actions: [
                       {
                          message: [{
   text: ""
 }],
 func: ()=>{
   
   setMessageActive(true),
   setChoiceUIActive(false)
   setMessage([{
     text: `You toss $${window.getGame().player.cents * 0.01} in change and wish for something magnificent!`
   }])
    window.setGame(prev => ({
   ...prev,
   interaction: [window.getGame().currentObj.interactions.examine, window.getGame().currentObj.interactions.use],
   player: {
     ...prev.player,
     cents: 0
   }
 }))
 },
 condition: ()=> true
                       }
                     ]
                    }
                  ]
                }))
              
              },
              ()=> window.getGame().player.cents > 0
            ),
            createAction(
              [
                {
                  text: "If you had some change, you could make a wish..."
                }
              ],
              ()=>{
                handleMsgUI("objects", "fountain", "use", 1)
                passTime(30)
              },
              ()=> window.getGame().player.cents == 0
            )
          ]
        )
      }
    )