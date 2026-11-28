import {setMessage, setMessageActive, setChoiceUIActive, setNpcImg, setSpeaker, setInteractionUIActive, setToolsUIActive, passTime} from "../../functions/game"

export const jail_no_badge = [
  
  { text: "... Nothing!?" },
  {
    text: "You see your empty hand held out limply in the reflection in the deputy's sunglasses. His expression doesn't change but you feel a rise in tension.",
    func: () => {
      setNpcImg("player")
      passTime(10)
    }
  },
  {
    text: "You swiftly regain your composure and snap your fingers into the shape of a gun.",
    func: () => {
      
      setSpeaker("player")
    }
  },
  { text: "\"I'm Special Operative Richard Wei, here on behalf of The Agency!\"" },
  {
    text: "\"I appear to have misplaced my credentials for the moment, but I'm sure we can get that cleared up if you'll just direct me to your superior...\"",
    func: () => {
      
      setSpeaker("")
      setNpcImg("drew")
      passTime(10)
    }
  },
  {
    text: "The deputy seems to process this information and then steps very close to you, tapping a silver badge pinned to his jacket, which still drips the remains of the coffee.",
    func: () => {
      setSpeaker("drew")
    }
  },
  { text: "\"You see this here, 'Dick'? This makes me the only authority you need to concern yourself with. And nobody told me anything about any 'Special Operative' getting involved in our town.\"" },
  {
    text: "\"So if you can't show me some ID, I think you'd best go back to wherever it is you came from.\"",
    func: () => {
      setNpcImg("player")
      setSpeaker("player")
    }
  },
  { text: "\"... Um, that's 'Richard'.\"" },
  {
    text: "\"... Actually, it's 'Special Operative Wei'!\"",
    func: () => {
      setNpcImg("drew")
      setSpeaker("drew")
    }
  },
  {
    text: "\"It's time for you to leave, 'Dick'.\"",
    func: () => {
      setSpeaker("")
      setNpcImg("")
      passTime(10)
    }
    
  },
  {
    text: "*Dossier Updated*",
    func: () => {
      
      setChoiceUIActive(false)
      setInteractionUIActive(true)
      setToolsUIActive(true)
      setMessage([{ text: window.getGame().locations[window.getGame().player.location].displayText }])
      window.setGame(prev => ({
        ...prev,
        quests: {
          ...prev.quests,
          report_for_duty:
          {
            ...prev.quests.report_for_duty,
            subquests:
            {
              ...prev.quests.report_for_duty.subquests,
              convince_drew: {
                ...prev.quests.report_for_duty.subquests.convince_drew,
                active: true
              }
            }
          }
        },
        npcs: {
          ...prev.npcs,
          drew: {
            ...prev.npcs.drew,
            specialLocation: ""
          }
        }
      }))
    }
  }
  
]