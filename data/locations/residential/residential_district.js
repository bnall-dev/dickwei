import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setMessageActive, setInteractionUIActive, setToolsUIActive } from "../../../functions/game"


export const residential_district = createLocation(
      "residential_district",
      "Residential District",
      ["hotel", "gas_station", "diner", "church","municipal_district", "industrial_district"],
      {
        road_fixed: false
      },
      "You see the Residential District.",
      "You are in the Residential District.",
      {
        go: createInteraction(
          "Go",
          [
             createAction(
              [
                {
                  text: "The road is blocked."
                }
              ],
              ()=>{
                handleMsgUI("locations", "residential_district", "go", 0)
                passTime(60)
                setMessageActive(true)
                setInteractionUIActive(false)
                setToolsUIActive(false)
                
              },
              ()=>window.getGame().locations.residential_district.flags.road_fixed== false
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