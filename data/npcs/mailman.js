import { createNpc } from "../npcs"
import { createInteraction, createAction, handleMsgUI, passTime, setSpeaker } from "../../functions/game"


export const mailman = createNpc(
      "mailman",
      "mailman Name",
      "Mailman",
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
                handleMsgUI(window.getGame().npcs.mailman.interactions.examine.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.mailman.interactions.investigate.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.mailman.interactions.chat.actions[0].message)
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
    am: "municipal_district",
    pm: ""
  },
  tuesday: {
    am: "residential_district",
    pm: ""
  },
  wednesday: {
    am: "downtown",
    pm: ""
  },
  thursday: {
    am: "industrial_district",
    pm: ""
  },
  friday: {
    am: "municipal_district",
    pm: ""
  },
  saturday: {
    am: "residential_district",
    pm: ""
  }}
    )