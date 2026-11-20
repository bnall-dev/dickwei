import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation , setNpcImg, setSpeaker, setMessageActive, setInteractionUIActive,  setToolsUIActive} from "../../../functions/game"

export const jail = createLocation(
  "jail",
  "Jail",
  [
    
    "sheriffs_station"
  ],
  {
    first_go: false
  },
  "A secure door leads toward the jail cells.",
  "You are in the Jail.",
  
  {
    go: createInteraction(
      "Go",
      [
        
        
            createAction(
          [
          {
            text: "As you reach for the knob, the door swings open, a man rushes out, colliding with you and sending his coffee splashing onto himself."},
{
              text:"The man, a deputy by his uniform, wrings coffee from his jacket in frustration before turning his attention to you.",
func:()=>{

              setSpeaker("drew")}
            },
            {
              text:"\"What the hell is wrong with you?!\"",
              func:()=>{
              setNpcImg("player")
              setSpeaker("player")}
            },
            {
              text:"\"Hey man, watch the suit!\"",
              func:()=>{
              setNpcImg("drew")
              setSpeaker("")}
            },
             {
              text:"The deputy steps forward and jams a gloved finger at your chest.",
              func:()=>{
              
              setSpeaker("drew")}
            },
             {
              text:"\"Listen up, buddy! You've got five seconds to explain who you are, trying to break into the jail, before I throw you in there myself!\"",
              func:()=>{
              
              setSpeaker("")}
            },
            

          ],
          () => {
            handleMsgUI("locations", "jail", "go", 0)
           setMessageActive(true)
           setInteractionUIActive(false)
           setToolsUIActive(false)
           setNpcImg("drew")

            passTime(300)
          },
          () => !window.getGame().locations.jail.first_go
        ),
        createAction(
    [
          {
            text: "You enter the Jail."
          }],
          () => {
            handleMsgUI("locations", "jail", "go", 1)
            setBackgroundImg("jail")
            handleChangeLocation("jail")
            passTime(180)
          },
          () => true
        )
      ]
      
    )
  }
)