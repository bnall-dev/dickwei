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
                handleMsgUI(window.getGame().npcs.mechanic.interactions.examine.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.mechanic.interactions.investigate.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.mechanic.interactions.chat.actions[0].message)
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