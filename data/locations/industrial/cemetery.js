import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setMessageActive, setInteractionUIActive, setToolsUIActive } from "../../../functions/game"

export const cemetery = createLocation(
  "cemetery",
  "Cemetery",
  [ "industrial_district"], {},
  {
    
    industrial_district: "A wrought-iron gate stands open permitting passage to the Cemetery."
  },
  "You stand, taking in the ominous silence of the Cemetary.",
  {
    go: createInteraction(
      "Go",
      [
        createAction(
          [
          {
            text: "The Cemetery is eerily silent aside from the crunch of leaves as you enter."
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