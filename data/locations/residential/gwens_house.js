import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setMessageActive, setInteractionUIActive, setToolsUIActive } from "../../../functions/game"

export const gwens_house = createLocation(
  "gwens_house",
  "Gwen's House",
  ["suburban_neighborhood"], {},
  "You see Gwen's house.",
  "You are in Gwen's house.",
  {
    go: createInteraction(
      "Go",
      [
        createAction(
          [
          {
            text: "You enter Gwen's house."
          }],
          () => {
            handleMsgUI("locations", "gwens_house", "go", 0)
            handleChangeLocation("gwens_house")
            setBackgroundImg("gwens_house")
            passTime(180)
          },
          () => true
        )
      ]
    )
  }
)