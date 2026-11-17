import {createNpc} from "../npcs"
import {createInteraction, createAction, handleMsgUI, passTime} from "../../functions/game"


export const drew = createNpc(
  "drew",
  "Drew",
  "jail", {},
  "You see the deputy.",
  {
    examine: createInteraction(
      "Examine",
      [
        createAction(
          [
          {
            text: "He is a lanky man wearing a deputy's uniform under a leather bomber jacket. Even with his dark sunglasses, you can sense him staring at you with suspicion."
          }],
          () => {
            handleMsgUI("npcs", "drew", "examine", 0)
            passTime(30)
            
          },
          () => true
        )
      ]
    ),
    investigate: createInteraction(
      
      "Investigate",
      [
        createAction(
          [
          {
            text: "Angry Deputy: \"Are you trying to get jammed up? If you can't prove who you are, get out of here!\"",
            
          }],
          () => {
            handleMsgUI("npcs", "drew", "investigate", 0)
            passTime(10)
          },
          () => window.getGame().player.inventory.includes("player_badge") == false
        ),
        createAction(
          [
          {
            text: "\"What do you want?\"",
            
          }],
          () => {
            handleMsgUI("npcs", "drew", "investigate", 1)
            passTime(10)
          },
          () => true
        )
      ]
      
    ),
    chat: createInteraction(
      "Chat",
      [
        createAction(
          [
          {
            text: ""
          }],
          () => {
            handleMsgUI("npcs", "drew", "chat", 0)
            passTime(10)
            
          },
          () => true
        )
      ]
    )
  },
  {
    sunday: {
      am: "sheriffs_station",
      pm: "drews_house"
    },
    monday: {
      am: "sheriffs_station",
      pm: "drews_house"
    },
    tuesday: {
      am: "sheriffs_station",
      pm: "drews_house"
    },
    wednesday: {
      am: "sheriffs_station",
      pm: "drews_house"
    },
    thursday: {
      am: "sheriffs_station",
      pm: "drews_house"
    },
    friday: {
      am: "sheriffs_station",
      pm: "drews_house"
    },
    saturday: {
      am: "sheriffs_station",
      pm: "drews_house"
    }
    
  }
)