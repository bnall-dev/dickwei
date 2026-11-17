import { triggerFlag, handleScene, changeDisplayText, createAction, createInteraction, handleMsgUI, passTime, setObjFlag, playerGetItem } from "../functions/game"
import {player_car} from "./objects/player_car"
import {town_sign} from "./objects/town_sign"
import {fountain} from "./objects/fountain"
import {post_box} from "./objects/post_box"
import {newspaper_box} from "./objects/newspaper_box"



export function createObject(id, name, location, flags, interactText, interactions) {
  return {
    type: "object",
    id: id,
    name: name,
    location: location,
    flags: flags,
    interactText: interactText,
    interactions: interactions
  }
}

export function objectDataInit() {
  
  
  

  return {
    player_car: player_car,
    town_sign: town_sign,
    newspaper_box: newspaper_box,
    post_box: post_box,
    fountain: fountain
    
    
    
    
    
      /*
  
    : createObject(
      "",
      "",
      {},
      "",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().objects..interactions.examine.actions[0].message)
                passTime()
              },
              ()=>true
            )
          ]
        ),
        use: createInteraction(
          "Use",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().objects..interactions.use.actions[0].message)
                passTime()
              },
              ()=>true
            )
          ]
        )
      }
    )
  
  */
    
    
  }
}