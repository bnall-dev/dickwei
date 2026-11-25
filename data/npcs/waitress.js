import { createNpc } from "../npcs"
import { createInteraction, createAction, handleMsgUI, passTime, setSpeaker } from "../../functions/game"


export const waitress = createNpc(
      "waitress",
      "Waitress Name",
      "Waitress", 
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
                handleMsgUI(
  "npcs",
  "waitress",
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
  "waitress",
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
  "waitress",
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