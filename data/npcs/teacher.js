import { createNpc } from "../npcs"
import { createInteraction, createAction, handleMsgUI, passTime, setSpeaker } from "../../functions/game"


export const teacher = createNpc(
      "teacher",
      "teacher Name",
      "Teacher",
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
                handleMsgUI(window.getGame().npcs.teacher.interactions.examine.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.teacher.interactions.investigate.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.teacher.interactions.chat.actions[0].message)
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
    am: "high_school",
    pm: ""
  },
  tuesday: {
    am: "high_school",
    pm: ""
  },
  wednesday: {
    am: "high_school",
    pm: ""
  },
  thursday: {
    am: "high_school",
    pm: ""
  },
  friday: {
    am: "high_school",
    pm: ""
  },
  saturday: {
    am: "",
    pm: ""
  }}
    )