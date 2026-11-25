import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation } from "../../../functions/game"


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
      {outskirts: "The road leads East, where you can see peeks of a few buildings beyond the trees.",
        downtown:"The road leads North, toward the Municipal district.",
        residential_district:"The road leads West, toward the Municipal District.",
        high_school:"The front gate of the campus exits back to the Municipal District.",
        town_hall:"The front door leads back outside to the Municipal District.",
        sheriffs_station:"The front door leads back outside to the Municipal District.",
        hospital:"The front door leads back outside to the Municipal District."
      },

      "You stand in the Municipal District.",
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