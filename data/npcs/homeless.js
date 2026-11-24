import { createNpc } from "../npcs"
import { createInteraction, createAction, handleMsgUI, passTime, setSpeaker } from "../../functions/game"


export const homeless = createNpc(
      "homeless",
      "homeless Name",
      "Homeless Man",
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
                handleMsgUI(window.getGame().npcs.homeless.interactions.examine.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.homeless.interactions.investigate.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.homeless.interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "downtown",
    pm: "downtown"
  },
  monday: {
    am: "downtown",
    pm: "downtown"
  },
  tuesday: {
    am: "downtown",
    pm: "downtown"
  },
  wednesday: {
    am: "downtown",
    pm: "downtown"
  },
  thursday: {
    am: "downtown",
    pm: "downtown"
  },
  friday: {
    am: "downtown",
    pm: "downtown"
  },
  saturday: {
    am: "downtown",
    pm: "downtown"
  }}
    )