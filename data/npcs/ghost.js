import { createNpc } from "../npcs"
import { createInteraction, createAction, handleMsgUI , passTime} from "../../functions/game"

export const ghost = createNpc(
      "ghost",
      "Grace",
      "Ghost",
      "",
      "",
      {
        have_met: false
      },
      "You see... a ghost??",
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
                handleMsgUI("npcs", "ghost", "examine", 0)
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
                handleMsgUI("npcs", "ghost", "investigate", 0)
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
                handleMsgUI("npcs", "ghost", "chat", 0)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "",
    pm: "cemetary"
  },
  monday: {
  am: "",
  pm: "cemetary"
},
  tuesday: {
  am: "",
  pm: "cemetary"
},
  wednesday: {
  am: "",
  pm: "cemetary"
},
  thursday: {
  am: "",
  pm: "cemetary"
},
  friday: {
  am: "",
  pm: "cemetary"
},
  saturday: {
  am: "",
  pm: "cemetary"
}}
    )