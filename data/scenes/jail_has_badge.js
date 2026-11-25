import {setMessage, setMessageActive, setChoiceUIActive, setNpcImg, setSpeaker, setInteractionUIActive, setToolsUIActive} from "../../functions/game"

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
    }
  },
  {
    text: "You present your badge as you reach for a handshake.",
    func: () => {
      setSpeaker("player")
    }
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
  
]