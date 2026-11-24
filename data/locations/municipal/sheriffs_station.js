import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setInteractionUIActive, setToolsUIActive, setMessageActive, setNpcImg, setSpeaker } from "../../../functions/game"

export const sheriffs_station = createLocation(
    "sheriffs_station",
    "Sheriff's Station",
    [
      "jail",
      "municipal_district"
    ], { player_needs_badge: false },
    {municipal_district: "You see the Sheriff's Station.",
      jail: "The secure door leads back into the Sheriff's Station."
    },
    "You are in the Sheriff's Station.",
    
    {
      go: createInteraction(
        "Go",
        [
          createAction(
            [
              {
                text: "As you enter the Sheriff's station, you can hear the deputy from earlier talking to someone.",
                func: () => { setSpeaker("drew") }
              },
              {
                text: "\"...and there are ashes all over the floor beca-- Oh great, and now he's back!\"",
                func: () => {
                  setNpcImg("drew")
                  }
                },
                {
                  text: "\"That's it, you! Hands behind your back!\"",
                  func:()=>{
                    setNpcImg("sheriff")
                    setSpeaker("sheriff")
                  }
                },
                {
                  text: "\"Settle down, Drew.\"",
                  func: ()=>{
                    setSpeaker("")
                  }
                },
                {
                  text: "An older man in a sheriff's uniform approaches from behind the deputy, placing a hand on his shoulder. The deputy huffs, but immediately ceases his attempt to restrain you.",
func: () => {
  setNpcImg("player")
  setSpeaker("player")
}
                },
                {
                 text: "You seize the moment and present your badge with a flourish as you reach for a handshake."
                },
                 {
   text: "\"Special Operative Richard Wei, sir.\"",
   func: () => {
     setSpeaker("")
     setNpcImg("sheriff")
   }
 },
 {
   text: "The Sheriff barely glances at your badge before firmly shaking your hand with a weary smile.",
   func: () => {
     setSpeaker("sheriff")
   }
 },
 {
   text: "\"Ah yes, so you're the one they sent. Dave Hayter, Sheriff of GoodWood. We appreciate your being here so urgently.\"",
   func: () => {
     setSpeaker("drew")
     setNpcImg("drew")
     window.setGame(prev => ({
       ...prev,
       npcs: {
         ...prev.npcs,
         sheriff: {
           ...prev.npcs.sheriff,
           flags: {
             ...prev.npcs.sheriff.flags,
             have_met: true
           }
         }
       }
     }))
   }
 },
 {
   text: "\"Hmph!\"",
   func: () => {
     setSpeaker("sheriff")
     setNpcImg("sheriff")
   }
 },
 {
   text: "\"Drew... mind your manners. You'll have to pardon Deputy Bernard, Operative Wei. I may have neglected to inform him of your arrival. He can be... protective of our little jurisdiction.\"",
   func: () => {
     setNpcImg("player")
     setSpeaker("player")
     window.setGame(prev => ({
       ...prev,
       npcs: {
         ...prev.npcs,
         drew: {
           ...prev.npcs.drew,
           flags: {
             ...prev.npcs.drew.flags,
             have_met: true
           }
         }
       }
     }))
   }
 },
 {
   text: "\"Heh. Nice to meet ya, 'Drew.' I promise I'm not here to step on anybody's toes.\"",
   func: () => {
     setNpcImg("drew")
     setSpeaker("drew")
   }
 },
 {
   text: "\"That's Deputy Bernard!!\"",
   func: () => {
     setSpeaker("player")
     setNpcImg("player")
   }
 },
 {
   text: "\"Sheriff, I'd like to get to business immediately. I've reviewed your initial report and understand that the autopsy has yet to be performed?\"",
   func: () => {
     setNpcImg("sheriff")
     setSpeaker("sheriff")
   }
 },
 {
   text: "\"That's correct. I've informed Dr. Trey at the hospital that you would be joining us. We should head there immediately.\""
 },
 {
   text: "\"Drew and I will have to meet you there. I imagine you'd prefer you own vehicle to the back of a squad car.\""
 }
                
              
                
              ],
              () => {
                
                handleMsgUI("locations", "sheriffs_station", "go", 0)
                handleChangeLocation("sheriffs_station")
                setBackgroundImg("sheriffs_station")
                setInteractionUIActive(false)
                setToolsUIActive(false)
                setMessageActive(true)
                passTime(300)
                
              },
              () => window.getGame().locations.sheriffs_station.flags.player_needs_badge == true && window.getGame().player.inventory.includes("player_badge")
            ),
            createAction(
              [
              {
                text: "You enter the Sheriff's Station."
              }],
              () => {
                
                handleMsgUI("locations", "sheriffs_station", "go", 1)
                handleChangeLocation("sheriffs_station")
                setBackgroundImg("sheriffs_station")
                passTime(180)
                
              },
              () => true
            )
          ]
          
        )
      }
    )