import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setMessageActive, setInteractionUIActive, setToolsUIActive } from "../../../functions/game"

export const downtown = createLocation(
  "downtown",
  "Downtown",
  ["mall", "apartments", "pier", "residential_district", "industrial_district"], {road_fixed: true},
  "You see Downtown.",
  "You are Downtown.",
  {
    go: createInteraction(
      "Go",
      [


        createAction(
          [
          {
            text: "You go Downtown."
          }],
          () => {
            handleMsgUI("locations", "downtown", "go", 0)
            handleChangeLocation("downtown")
            setBackgroundImg("downtown")
            passTime(300)
          },
          () => true
        )
      ]
    )
  }
)