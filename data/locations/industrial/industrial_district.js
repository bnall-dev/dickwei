import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setMessageActive, setInteractionUIActive, setToolsUIActive, setNpcImg, setSpeaker } from "../../../functions/game"

export const industrial_district = createLocation(
  "industrial_district",
  "Industrial District",
  ["trailer_park", "cemetery", "mill", "factory", "municipal_district",
    "downtown"
  ], { road_blocked: true },
  {
    municipal_district: "A sturdy bridge crosses the river into the Industrial District."
  },
  "You are in the Industrial District.",
  {
    go: createInteraction(
      "Go",
      [
        createAction(
          [
          {
            text: "A flatbed truck carrying logs has stopped on the bridge. A couple of its cargo straps have broken and several logs rolled off, blocking the bridge. Several men are helping the driver.",
            func:()=>{
              setNpcImg("player")
              setSpeaker("player")
            }
          },
            {
              text: "\"They seem to have the situation handled. I'm sure they'll have the way cleared soon enough.\"",
              func: ()=>{
                setNpcImg("")
                setSpeaker("")
              }
            }
          ],
          () => {
            handleMsgUI("locations", "industrial_district", "go", 0)
            passTime(60)
            setMessageActive(true)
            setInteractionUIActive(false)
            setToolsUIActive(false)
            
          },
          () => window.getGame().locations.industrial_district.flags.road_blocked
          
        ),
        createAction(
          [
          {
            text: "You enter the Industrial District."
          }],
          () => {
            handleMsgUI("locations", "industrial_district", "go", 1)
            handleChangeLocation("industrial_district")
            setBackgroundImg("industrial_district")
            passTime(300)
          },
          () => true
        )
      ]
    )
  }
)