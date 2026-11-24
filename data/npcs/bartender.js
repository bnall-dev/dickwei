import { createNpc } from "../npcs"
import { createInteraction, createAction, handleMsgUI, passTime, setSpeaker } from "../../functions/game"


export const bartender = createNpc(
      "bartender",
      "Bartender Name",
      "Bartender",
      "",
      "",
      {have_met: false},
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
                handleMsgUI(window.getGame().npcs.bartender.interactions.examine.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.bartender.interactions.investigate.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.bartender.interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "",
    pm: "saloon"
  },
  monday: {
    am: "",
    pm: "saloon"
  },
  tuesday: {
    am: "",
    pm: "saloon"
  },
  wednesday: {
    am: "",
    pm: "saloon"
  },
  thursday: {
    am: "",
    pm: "saloon"
  },
  friday: {
    am: "",
    pm: "saloon"
  },
  saturday: {
    am: "",
    pm: "saloon"
  }}
    )