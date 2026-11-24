import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setMessageActive, setInteractionUIActive, setToolsUIActive } from "../../../functions/game"

export const diner = createLocation(
  "diner",
  "Diner",
  ["residential_district"], {},
  {residential_district: "You see the Diner."
  },
  "You are at the Diner.",
  {
    go: createInteraction(
      "Go",
      [
        createAction(
          [
          {
            text: "You enter the Diner."
          }],
          () => {
            handleMsgUI("locations", "diner", "go", 0)
            handleChangeLocation("diner")
            setBackgroundImg("diner")
            passTime(180)
          },
          () => true
        )
      ]
    )
  }
)