import { createNpc } from "../npcs"
import { createInteraction, createAction, handleMsgUI, passTime, setSpeaker } from "../../functions/game"


export const mayor = createNpc(
      "mayor",
      "Mayor Hawthorne",
      "Mayor",
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
                handleMsgUI(window.getGame().npcs.mayor.interactions.examine.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.mayor.interactions.investigate.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.mayor.interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "mayors_house",
    pm: "mayors_house"
  },
  monday: {
    am: "mayors_office",
    pm: "mayors_house"
  },
  tuesday: {
    am: "mayors_office",
    pm: "mayors_house"
  },
  wednesday: {
    am: "mayors_office",
    pm: "mayors_house"
  },
  thursday: {
    am: "mayors_office",
    pm: "mayors_house"
  },
  friday: {
    am: "mayors_office",
    pm: "mayors_house"
  },
  saturday: {
    am: "mayors_house",
    pm: "mayors_house"
  }}
    )