import { createNpc } from "../npcs"
import { createInteraction, createAction, handleMsgUI, passTime, setSpeaker } from "../../functions/game"


export const mechanic = createNpc(
      "mechanic",
      "Mechanic Name",
      "Mechanic",
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
  "mechanic",
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
  "mechanic",
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
  "mechanic",
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
    am: "gas_station",
    pm: "gas_station"
  },
  monday: {
    am: "gas_station",
    pm: "gas_station"
  },
  tuesday: {
    am: "gas_station",
    pm: "gas_station"
  },
  wednesday: {
    am: "gas_station",
    pm: "gas_station"
  },
  thursday: {
    am: "gas_station",
    pm: "gas_station"
  },
  friday: {
    am: "gas_station",
    pm: "gas_station"
  },
  saturday: {
    am: "gas_station",
    pm: "gas_station"
  }}
    )