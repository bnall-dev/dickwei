import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setMessageActive, setInteractionUIActive, setToolsUIActive } from "../../../functions/game"

export const diner = createLocation(
  "diner",
  "The Silver Spoon",
  ["residential_district"], {},
  {residential_district: "You see the Diner."
  },
  "You are at the Silver Spoon Diner.",
  {
    go: createInteraction(
      "Go",
      [
        createAction(
          [
          {
            text: "A bell rings against the door as you enter the diner and take in the smell of flapjacks and fresh coffee."
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