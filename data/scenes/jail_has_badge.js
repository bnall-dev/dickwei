import {setMessage, setMessageActive, setChoiceUIActive, setNpcImg, setSpeaker, setInteractionUIActive, setToolsUIActive, passTime} from "../../functions/game"

import {meeting_sheriff} from "./meeting_sheriff"

export const jail_has_badge = [
  {
    text: "Your badge!",
    func: () => {
      setNpcImg("player")
      setSpeaker("player")
    }
  },
  { text: "\"I'm Special Operative Richard Wei, here on behalf of The Agency!\"" },
  {
    text: "\"I'll need to speak with the town's sheriff regarding this morning's incident.\"",
    func: () => {
      setNpcImg("drew")
      setSpeaker("")
      passTime(10)
    }
  },
  {
    text: "The deputy furrows his brow and snatches your badge from your hand and scrutinizes it deeply before tossing it back.",
    func: () => {
      setSpeaker("drew")
    }
  },
  {
    text: "\"Hmm... Nobody told me anything about any 'Special Operatives' getting involved...\""
  },
  {
    text: "\"Well... I guess we better wait for the Sheriff to arrive to verify all this... He should be returning any minute.\"",
    func: () => {
      setSpeaker("")
      setNpcImg("")
      passTime(10)
    }
  },
  {
    text: "As he says this, you hear the front door open behind you and an older man in a sheriff's uniform enters.",
    func: () => {
      setNpcImg("drew")
      setSpeaker("drew")
    }
  },
  {
    text: "\"Sheriff Hayter!\"",
    func: () => {
      
      
      setNpcImg(""),
        setSpeaker("")
      passTime(10)
    }
  },
  {
    text: "You notice the Sheriff sigh softly as he sets down his belongings.",
    func: () => {
      setNpcImg("sheriff")
      setSpeaker("sheriff")
    }
  },
  {
    text: "\"Yes, what is it, Drew?\"",
    func: () => {
      setSpeaker("drew")
      setNpcImg("drew")
    }
  },
  {
    text: "\"Sheriff, this man claims to be from The Agency, here about... what happened this morning... is he serious??\"",
    func: () => {
      setSpeaker("")
      setNpcImg("player")
      passTime(10)
    }
  },
  {
    text: "You present your badge as you reach for a handshake.",
  
      func: () => {
  
  setMessage(meeting_sheriff)
  setChoiceUIActive(false)
  setMessageActive(true)
}
    
  }

  
]