import { createLocation, handleMsgUI } from "../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation } from "../../functions/game"


export const municipal_district = createLocation(
      "municipal_district",
      "Municipal District",
      [
        "town_hall",
        "sheriffs_station",
        "hospital",
        "high_school",
        "residential_district",
        "downtown",
        "outskirts"
      ],
      [],
      "You see the Municipal District.",
      "You are in the Municipal District.",
      {
        go: createInteraction(
          "Go",
          [
            createAction( 
            [
            {
              text: "You enter the Municipal District."
            }],
             () => {
             
              handleChangeLocation("municipal_district")
              handleMsgUI("locations", "municipal_district", "go", 0)
              setBackgroundImg("municipal_district")
              passTime(300)
              
            },
             () => true
          )]
          
        )
      }
    )