import { createObject } from "../objects"
import { createInteraction, createAction, handleMsgUI, passTime, setNpcImg, setChoiceUIActive, setSpeaker, setMessage, setMessageActive } from "../../functions/game"

export const booth = createObject(
      "booth",
      "Booth",
      "diner",
      {},
      "There is a free booth if you want something to eat.",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: "The table and seats are immaculately clean and all the condiments have been freshly stocked."
                }
              ],
              ()=>{
                handleMsgUI("objects", "booth", "examine", 0)
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
                  text: "You take a seat.",
                  func:()=>{
                    setMessage([
                      {text: "\"What can we get ya, hon'?\"",
                        func: ()=>{
                         
                          setSpeaker("")
                        
                          setMessageActive(false)
                          setChoiceUIActive(true)
                       
                        },
                      },
                      {text:"You take a look at the menu."
                                         }
                    ])
                    setNpcImg("waitress")
                    setSpeaker("waitress")
                    setMessageActive(true)
                    setChoiceUIActive(false)
                  }
                }
              ],
              ()=>{
                handleMsgUI("objects", "booth", "use", 0)
                passTime(30)
              },
              ()=>true
            )
          ]
        )
      }
    )