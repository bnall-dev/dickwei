import { createNpc } from "../npcs"
import { createInteraction, createAction, handleMsgUI, passTime, setSpeaker } from "../../functions/game"


export const cook = createNpc(
      "cook",
      "Cook Name",
      "Cook",
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
                handleMsgUI(window.getGame().npcs.cook.interactions.examine.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.cook.interactions.investigate.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.cook.interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "diner",
    pm: "diner"
  },
  monday: {
    am: "diner",
    pm: "diner"
  },
  tuesday: {
    am: "diner",
    pm: "diner"
  },
  wednesday: {
    am: "diner",
    pm: "diner"
  },
  thursday: {
    am: "diner",
    pm: "diner"
  },
  friday: {
    am: "diner",
    pm: "diner"
  },
  saturday: {
    am: "diner",
    pm: "diner"
  }}
    )