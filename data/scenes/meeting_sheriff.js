import {triggerFlag, meetNpc, setMessage, setMessageActive, setChoiceUIActive, setNpcImg, setSpeaker, setInteractionUIActive, setToolsUIActive, setNpcLocation, completeQuest, addQuest , passTime} from "../../functions/game"



export const meeting_sheriff = [
  {
    text: "\"Special Operative Richard Wei, sir.\"",
    func: () => {
      setSpeaker("")
      setNpcImg("sheriff")
      passTime(10)
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
      meetNpc("sheriff")
      
      
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
      meetNpc("drew")
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
    text: "\"Drew and I will have to meet you there. I imagine you'd prefer you own vehicle to the back of a squad car.\"",
    func: ()=>{
      setNpcImg("player")
      setSpeaker("player")
    }
  },
   {
   text: "\"Ehh... Yes, about my vehicle... I had a bit of a hiccup as I was getting into town and had to walk the rest of the way...\"",
   func: () => {
     setNpcImg("drew")
     setSpeaker("drew")
   }
 },
  {
   text: `\"That was *your* car?! Little Mike said that heap was smashed like a can!\"`,
   
 },
  {
   text: "\"Bahaha!! Some hiccup! What were you drunk?\"",
   func: () => {
     setNpcImg("sheriff")
     setSpeaker("sheriff")
   }
 },
  {
   text: "\"That was some wreck by the sound of it... A truck driver called it in not long before you came in.\"",
 },
  {
   text: "\"Our local mechanic was sent to tow it to the gas station in the Residential District.\"",
   func: () => {
     setNpcImg("player")
     setSpeaker("player")
   },
  },
    {
   text: "\"I appreciate that Sheriff. In the meantime, I'm perfectly content performing my investigation on foot. The town isn't that big and it's best I learn my way around.\"",
   func: () => {
     setNpcImg("sheriff")
     setSpeaker("sheriff")
   }
 },
  {
   text: "\"Fair enough. Drew and I will go on ahead. The Hospital isn't far. It's here in the Municipal District.\"",
   func: () => {
     setNpcImg("")
     setSpeaker("")
     passTime(60)
   },
  },
  {
    text: "The Sheriff and Deputy head out the door and you hear the squad car pull away.",
  },

  {
   text: "*Dossier Updated*",
   func: () => {
     setInteractionUIActive(true)
     setToolsUIActive(true)
     setChoiceUIActive(false)
     passTime(60)
     setMessage([{text: window.getGame().locations[window.getGame().player.location].displayText}])
     setNpcLocation("sheriff", "hospital")
     setNpcLocation("drew", "hospital")
     triggerFlag("locations","sheriffs_station", "player_needs_badge", false)
     triggerFlag("locations","jail", "first_go", true)
     completeQuest("reporting_for_duty")
     addQuest("autopsy")
   }
 },
  
  
]