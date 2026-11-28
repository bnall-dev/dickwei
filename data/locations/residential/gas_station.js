import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setMessageActive, setInteractionUIActive, setToolsUIActive } from "../../../functions/game"

export const gas_station = createLocation(
  "gas_station",
  "Last Stop",
  ["residential_district"], {},
  {residential_district: "The fuel station has gas pumps, a garage, and a convenience store."
  },
  "You are at the Last Stop Fuel Depot.",
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