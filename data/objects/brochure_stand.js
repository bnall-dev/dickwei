import { createObject } from "../objects"
import { createInteraction, createAction, handleMsgUI, passTime } from "../../functions/game"

export const brochure_stand = createObject(
      "brochure_stand",
      "Brochure Stand",
      "town_hall",
      {},
      "The stand holds a variety of paper pamphlets.",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: "Most of the brochures advertise local businesses and natural attractions... but one catches your eye."
                }
              ],
              ()=>{
                handleMsgUI("objects", "brochure_stand", "examine", 0)
                passTime(30)
              },
              ()=> !window.getGame().documents.brochure.active
            ),
            createAction(
              [
                {text: "Most of the brochures advertise local businesses and natural attractions."}
              ],
               () => {
   handleMsgUI("objects", "brochure_stand", "examine", 1)
   passTime(30)
 },
 ()=>true
            )
          ]
        ),
        use: createInteraction(
          "Use",
          [
            createAction(
              [
                {text:"You take a brochure that says 'Tourist Guide'."},
                {text: "*Document Obtained*"}
              ],
              () => {
  handleMsgUI("objects", "brochure_stand", "use", 0)
  window.setGame(prev=>({...prev,
    documents: {
      ...prev.documents,
      brochure: {
        ...prev.documents.brochure,
        active: true
      }
    }
  }))
  passTime(30)
},
()=> !window.getGame().documents.brochure.active
            ),
            createAction(
              [
                {
                  text: "None of these seem useful."
                }
              ],
              ()=>{
                handleMsgUI("objects", "brochure_stand", "use", 1)
                passTime(30)
              },
              ()=>true
            )
          ]
        )
      }
    )