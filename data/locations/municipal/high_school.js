import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setMessageActive, setInteractionUIActive, setToolsUIActive } from "../../../functions/game"


export const high_school = createLocation(
  "high_school",
  "Goodwood High",
  ["residential_district"], {},
  "You see Goodwood High School.",
  "You are in the High School.",
  {
    go: createInteraction(
      "Go",
      [
        createAction(
          [
          {
            text: "The front door is locked. The school doesn't appear to be open on Sundays."
          }],
          () => {
            
            
            
            handleMsgUI("locations", "high_school", "go", 0)
            
            setMessageActive(true)
            setInteractionUIActive(false)
            setToolsUIActive(false)
            passTime(60)
          },
          () => window.getGame().day % 7 == 1
          
        ),
        createAction(
          [
          {
            text: "You enter the High School."
          }],
          () => {
            handleMsgUI("locations", "high_school", "go", 1)
            handleChangeLocation("high_school")
            setBackgroundImg("high_school")
            passTime(180)
          },
          () => true
        )
      ]
    )
  }
)