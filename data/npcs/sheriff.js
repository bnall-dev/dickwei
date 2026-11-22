import { createNpc } from "../npcs"
import { createInteraction, createAction, handleMsgUI, passTime, setSpeaker } from "../../functions/game"

export const sheriff = createNpc(
      "sheriff",
      "Sheriff Hayter",
      "Sheriff",
      "",
      {have_met: false},
      "You see the Sheriff.",
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
                handleMsgUI(window.getGame().npcs.sheriff.interactions.examine.actions[0].message)
              },
              ()=>true
            )
          ]
        ),
         investigate: createInteraction(
          "Investigate",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs.sheriff.interactions.investigate.actions[0].message)
              },
              ()=>true
            )
          ]
        ),
         chat: createInteraction(
          "Chat",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs.sheriff.interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "",
    pm: ""
  },
  monday: {
    am: "",
    pm: ""
  },
  tuesday: {
    am: "",
    pm: ""
  },
  wednesday: {
    am: "",
    pm: ""
  },
  thursday: {
    am: "",
    pm: ""
  },
  friday: {
    am: "",
    pm: ""
  },
  saturday: {
    am: "",
    pm: ""
  }}
    )