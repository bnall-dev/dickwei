import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setMessageActive, setInteractionUIActive, setToolsUIActive } from "../../../functions/game"

export const player_room = createLocation(
  "player_room",
  "Your Room",
  ["hotel"], {},
 {hotel: "The door to your room is down the hallway."},
  "You are in your hotel room.",
  {
    go: createInteraction(
      "Go",
      [
        createAction(
          [
          {
            text: "You enter your hotel room."
          }],
          () => {
            handleMsgUI("locations", "player_room", "go", 0)
            handleChangeLocation("player_room")
            setBackgroundImg("player_room")
            passTime(180)
          },
          () => true
        )
      ]
    )
  }
)