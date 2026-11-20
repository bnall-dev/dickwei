import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setMessageActive, setInteractionUIActive, setToolsUIActive } from "../../../functions/game"

export const industrial_district = createLocation(
  "industrial_district",
  "Industrial District",
  ["trailer_park", "cemetary", "mill", "factory", "residential_district",
    "downtown"
  ], {},
  "You see the Industrial District.",
  "You are in the Industrial District.",
  {
    go: createInteraction(
      "Go",
      [
        createAction(
          [
          {
            text: "You enter the Industrial District."
          }],
          () => {
            handleMsgUI("locations", "industrial_district", "go", 0)
            handleChangeLocation("industrial_district")
            setBackgroundImg("industrial_district")
            passTime(300)
          },
          () => true
        )
      ]
    )
  }
)