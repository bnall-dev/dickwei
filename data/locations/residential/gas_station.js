import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setMessageActive, setInteractionUIActive, setToolsUIActive } from "../../../functions/game"

export const gas_station = createLocation(
  "gas_station",
  "Gas Station",
  ["residential_district"], {},
  {residential_district: "You see the Gas Station."
  },
  "You are at the Gas Station.",
  {
    go: createInteraction(
      "Go",
      [
        createAction(
          [
          {
            text: "You enter the Gas Station."
          }],
          () => {
            handleMsgUI("locations", "gas_station", "go", 0)
            handleChangeLocation("gas_station")
            setBackgroundImg("gas_station")
            passTime(180)
          },
          () => true
        )
      ]
    )
  }
)