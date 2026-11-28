import {setMessage, setMessageActive, setChoiceUIActive, setNpcImg, setSpeaker, setInteractionUIActive, setToolsUIActive, passTime} from "../../functions/game"


import {meeting_sheriff} from "./meeting_sheriff"


export const sheriff_station_have_badge = [
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
    func: () => {
      setNpcImg("sheriff")
      setSpeaker("sheriff")
    }
  },
  {
    text: "\"Settle down, Drew.\"",
    func: () => {
      setSpeaker("")
      passTime(10)
    }
  },
  {
    text: "An older man in a sheriff's uniform approaches from behind the deputy, placing a hand on his shoulder. The deputy huffs, but immediately ceases his attempt to restrain you.",
    func: () => {
      setNpcImg("player")
      setSpeaker("player")
      passTime(10)
    }
  },
  {
    text: "You seize the moment and present your badge with a flourish as you reach for a handshake.",
func: ()=>{
  
  setMessage(meeting_sheriff)
  setChoiceUIActive(false)
  setMessageActive(true)
}
  }
  
  
  
]