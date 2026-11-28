import { createNpc } from "../npcs"
import { createInteraction, createAction, handleMsgUI, passTime, setSpeaker } from "../../functions/game"


export const concierge = createNpc(
      "concierge",
      "concierge Name",
      "Concierge",
      "elsewhere",
      "elsewhere",
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
                handleMsgUI(window.getGame().npcs.concierge.interactions.examine.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.concierge.interactions.investigate.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.concierge.interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "hotel",
    pm: "hotel"
  },
  monday: {
    am: "hotel",
    pm: "hotel"
  },
  tuesday: {
    am: "hotel",
    pm: "hotel"
  },
  wednesday: {
    am: "hotel",
    pm: "hotel"
  },
  thursday: {
    am: "hotel",
    pm: "hotel"
  },
  friday: {
    am: "hotel",
    pm: "hotel"
  },
  saturday: {
    am: "hotel",
    pm: "hotel"
  }}
    )