import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation } from "../../../functions/game"

export const mayors_office = createLocation(
      "mayors_office",
      "Mayor's Office",
      [
        "town_hall"
      ],
      [],
      {town_hall: "A fine wooden door leads to the Mayor's office."},
      "You are in the Mayor's Office.",
     
      {
        go: createInteraction(
          "Go",
          [
          createAction(
            [{
              text: "You enter the Mayor's Office."
            }],
            () => {
              

              
             handleMsgUI("locations", "mayors_office", "go", 0)
              handleChangeLocation("mayors_office")
              setBackgroundImg("mayors_office")
              passTime(180)
              
            },
            () => true
          )]
        )
      }
    )