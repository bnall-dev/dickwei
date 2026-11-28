import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setMessageActive, setInteractionUIActive, setToolsUIActive } from "../../../functions/game"


export const residential_district = createLocation(
      "residential_district",
      "Residential District",
      ["high_school", "diner", "gas_station", "church", "suburban_neighborhood","municipal_district", "downtown"],
      {
        road_blocked: true
      },
      {
        downtown: "The road leads Wast, toward the Residential District.",
        municipal_district: "The road leads South to the Residential District.",
        high_school: "The campus gate exits back into the Residential District.",
        diner: "The front door leads back outside into the Residential District.",
        church: "The front door leads back outside into the Residential District.",
        gas_station: "The front door leads back outside into the Residential District.",
      },
      "You are in the Residential District.",
      {
        go: createInteraction(
          "Go",
          [
             createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI("locations", "residential_district", "go", 0)
                passTime(60)
                setMessageActive(true)
                setInteractionUIActive(false)
                setToolsUIActive(false)
                
              },
              ()=>window.getGame().locations.residential_district.flags.road_blocked
            ),
            createAction(
              [
                {
                  text: "You enter the Residential District."
                }
              ],
              ()=>{
                handleMsgUI("locations", "residential_district", "go", 1)
                handleChangeLocation("residential_district")
                setBackgroundImg("residential_district")
                passTime(300)
              },
              ()=>true
            )
          ]
        )
      }
    )