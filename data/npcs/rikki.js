import { createNpc } from "../npcs"
import { createInteraction, createAction, handleMsgUI , passTime} from "../../functions/game"

export const rikki = createNpc(
      "rikki",
      "Rikki",
      "Girl with Glasses",
      "",
      {
        have_met: false
      },
      "You see Rikki.",
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
                handleMsgUI("npcs", "rikki", "examine", 0)
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
                handleMsgUI("npcs", "rikki", "investigate", 0)
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
                handleMsgUI("npcs", "rikki", "chat", 0)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "rikki_house",
    pm: "factory"
  },
  monday: {
  am: "rikki_house",
  pm: "factory"
},
  tuesday: {
  am: "rikki_house",
  pm: "factory"
},
  wednesday: {
  am: "rikki_house",
  pm: "factory"
},
  thursday: {
  am: "rikki_house",
  pm: "factory"
},
  friday: {
  am: "rikki_house",
  pm: "factory"
},
  saturday: {
  am: "rikki_house",
  pm: "factory"
}}
    )