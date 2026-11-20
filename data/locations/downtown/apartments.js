import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setMessageActive, setInteractionUIActive, setToolsUIActive } from "../../../functions/game"

export const apartments = createLocation(
  "apartments",
  "Apartment Building",
  ["downtown"], {},
  "You see an Apartment Building.",
  "You are in the Apartment Building.",
  {
    go: createInteraction(
      "Go",
      [
        createAction(
          [
          {
            text: "You enter the Apartment Building."
          }],
          () => {
            handleMsgUI("locations", "apartments", "go", 0)
            handleChangeLocation("apartments")
            setBackgroundImg("apartments")
            passTime(180)
          },
          () => true
        )
      ]
    )
  }
)