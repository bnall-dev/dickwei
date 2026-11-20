import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setMessageActive, setInteractionUIActive, setToolsUIActive } from "../../../functions/game"

export const mall = createLocation(
  "mall",
  "Goodwood Town Mall",
  ["downtown"], {},
  "You see the Mall.",
  "You are in the Mall.",
  {
    go: createInteraction(
      "Go",
      [
        createAction(
          [
          {
            text: "You enter the Mall."
          }],
          () => {
            handleMsgUI("locations", "mall", "go", 0)
            handleChangeLocation("mall")
            setBackgroundImg("mall")
            passTime(180)
          },
          () => true
        )
      ]
    )
  }
)