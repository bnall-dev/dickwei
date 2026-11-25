import { createNpc } from "../npcs"
import { meetNpc, createInteraction, createAction, handleMsgUI, passTime, setSpeaker } from "../../functions/game"


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
                  text: "test"
                }
              ],
              ()=>{
                handleMsgUI(
                  "npcs",
                  "cook",
                  "examine",
                  0
                )
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
                handleMsgUI(
  "npcs",
  "cook",
  "investigate",
  0
)
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
                handleMsgUI(
  "npcs",
  "cook",
  "chat",
  0
)
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