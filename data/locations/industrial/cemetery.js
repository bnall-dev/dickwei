import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setMessageActive, setInteractionUIActive, setToolsUIActive } from "../../../functions/game"

export const cemetery = createLocation(
  "cemetery",
  "Cemetery",
  ["church", "industrial_district"], {},
  {
    church: "A door toward the back of the Church leads to the Cemetery.",
    industrial_district: "A wrought-iron gate stands open permitting passage to the Cemetery."
  },
  "You are in the Cemetery.",
  {
    go: createInteraction(
      "Go",
      [
        createAction(
          [
          {
            text: "You enter the Cemetery."
          }],
          () => {
            handleMsgUI("locations", "cemetery", "go", 0)
            handleChangeLocation("cemetery")
            setBackgroundImg("cemetery")
            passTime(180)
          },
          () => true
        )
      ]
    )
  }
)