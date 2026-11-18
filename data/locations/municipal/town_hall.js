import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation } from "../../../functions/game"


export const town_hall = createLocation(
  "town_hall",
  "Town Hall",
  [
    "mayors_office",
    "municipal_district"
  ],
  [],
  "You see the Town Hall.",
  "You are in the Town Hall.",
  
  {
    go: createInteraction(
      "Go",
      [
        createAction(
          [
          {
            text: "The door is locked. The town hall doesn't appear to be open on Sundays."
          }],
          () => {
            
            
            
            handleMsgUI("locations", "town_hall", "go", 0)
            
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
            text: "You enter the Town Hall."
          }],
          () => {
            
            
            
            handleMsgUI("locations", "town_hall", "go", 1)
            
            handleChangeLocation("town_hall")
            setBackgroundImg("town_hall")
            passTime(180)
          },
          () => true
          
        )
      ]
    )
  }
)