import {setMessage, setMessageActive, setChoiceUIActive, setNpcImg, setSpeaker, setInteractionUIActive, setToolsUIActive} from "../../functions/game"
import {jail_no_badge} from "./jail_no_badge"
import {jail_has_badge} from "./jail_has_badge"


export const jail_first_go = [
            {
              text: "As you reach for the knob, the door swings open, a man rushes out, colliding with you and sending his coffee splashing onto himself."
            },
            {
              text: "The man, a deputy by his uniform, wrings coffee from his jacket in frustration before turning his attention to you.",
              func: () => {
                
                setSpeaker("drew")
              }
            },
            {
              text: "\"What the hell is wrong with you?!\"",
              func: () => {
                setNpcImg("player")
                setSpeaker("player")
              }
            },
            {
              text: "\"Hey man, watch the suit!\"",
              func: () => {
                setNpcImg("drew")
                setSpeaker("")
              }
            },
            {
              text: "The deputy steps forward and jams a gloved finger at your chest.",
              func: () => {
                
                setSpeaker("drew")
              }
            },
            {
              text: "\"Listen up, buddy! You've got five seconds to explain who you are, trying to break into the jail, before I throw you in there myself!\""
            },
            {
              text: "\"... And put out that cigarette!\"",
              func: () => {
                
                setSpeaker("")
              }
              
            },
            {
              
              text: "You get the sense that he, too, is a man of action. You savor the moment, slipping your hand into your jacket's inner pocket to pull out...",
              func: () => {
                setChoiceUIActive(false)
                setMessageActive(true)
                setMessage(
                  window.getGame().player.inventory.includes("player_badge") ? jail_has_badge :
                  jail_no_badge
                )
                
              }
              
            }
            
            
          ]