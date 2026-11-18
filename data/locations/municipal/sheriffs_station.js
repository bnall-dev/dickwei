import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation } from "../../../functions/game"

export const sheriffs_station  = createLocation(
      "sheriffs_station",
      "Sheriff's Station",
      [
        "jail",
        "municipal_district"
      ],
      [],
      "You see the Sheriff's Station.",
      "You are in the Sheriff's Station.",
     
      {
        go: createInteraction(
          "Go",
          [
          createAction(
            [
            {
              text: "You enter the Sheriff's Station."
            }],
            () => {
              
              handleMsgUI("locations", "sheriffs_station", "go", 0)
              handleChangeLocation("sheriffs_station")
              setBackgroundImg("sheriffs_station")
              passTime(180)
              
            },
            () => true
          )]
          
        )
      }
    )