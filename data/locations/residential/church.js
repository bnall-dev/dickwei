import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setMessageActive, setInteractionUIActive, setToolsUIActive } from "../../../functions/game"

export const church = createLocation(
  "church",
  "Church",
  ["residential_district"], {},
  {
    residential_district: "To the South, you can see the steeple of the Church above the trees.",
    
  },
  "You are in the Church.",
  {
    go: createInteraction(
      "Go",
      [
        createAction(
          [
          {
            text: "You enter the Church."
          }],
          () => {
            handleMsgUI("locations", "church", "go", 0)
            handleChangeLocation("church")
            setBackgroundImg("church")
            passTime(180)
          },
          () => true
        )
      ]
    )
  }
)