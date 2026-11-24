import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setMessageActive, setInteractionUIActive, setToolsUIActive } from "../../../functions/game"

export const suburban_neighborhood = createLocation(
  "suburban_neighborhood",
  "Suburban Neighborhood",
  ["gwens_house", "residential_district"], {},
  "You see the Suburban Neighborhood.",
  "You are in the Suburban Neighborhood.",
  {
    go: createInteraction(
      "Go",
      [
        createAction(
          [
          {
            text: "You enter the suburban neighborhood."
          }],
          () => {
            handleMsgUI("locations", "suburban_neighborhood", "go", 0)
            handleChangeLocation("suburban_neighborhood")
            setBackgroundImg("suburban_neighborhood")
            passTime(180)
          },
          () => true
        )
      ]
    )
  }
)