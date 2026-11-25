import {triggerFlag, meetNpc, setMessage, setMessageActive, setChoiceUIActive, setNpcImg, setSpeaker, setInteractionUIActive, setToolsUIActive, setNpcLocation, completeQuest, addQuest, setBackgroundImg } from "../../functions/game"


export const autopsy = [
  {
    text: "As you step into the lobby, the Sheriff catches your attention and waves you over.",
    func: ()=>{
      setNpcImg("drew")
      setSpeaker("drew")
    }
  },
  {
    text: "\"Oh for God's sake, sir! He's doing it in a hospital! It's indecent!\"",
    func: () => {
  setNpcImg("sheriff")
  setSpeaker("sheriff")
}
  },
  {
    text: "\"Drew, I can't say I like it either, but I understand these Agency men have their way of doing things. Now no more of that.\"",
    func: () => {
  setNpcImg("player")
  setSpeaker("player")
}
  },
  {
  text: "\"Sheriff. Deputy Drew.\"",
  func: () => {
    setNpcImg("drew")
    setSpeaker("")
  }
},
{
  text: "Deputy Drew looks at you in disgust.",
  func: () => {
    setNpcImg("sheriff")
    setSpeaker("sheriff")
  }
},
{
  text: "\"Special Operative Wei, this is Dr. Devon Trey, the Head Physician here at the Hospital.\"",
  func: () => {
    setNpcImg("doctor")
    setSpeaker("doctor")
  },
},
  {
  text: "\"Pleased to make your acquaintance. I'm also the coroner, though it's not a role I have to serve often.\"",
  func: () => {
    meetNpc("doctor")
    setNpcImg("sheriff")
    setSpeaker("sheriff")
  }
},
{
  text: "\"Well, Doc, shall we get to it?\"",
  func: () => {
    setNpcImg("doctor")
    setSpeaker("doctor")
  }
},
{
  text: "\"Yes, you can follow me this way down to the morgue.\"",
  func: () => {
    setNpcImg("")
    setSpeaker("")
  }
},
{
  text: "Dr. Trey waves a card on a lanyard near the scanner by the door to the morgue. As you follow him down the stairs, you notice that the Sheriff and Deputy hang back for a moment.",
  func: () => {
   setBackgroundImg("morgue")
  }
},
{
  text: "You shiver as the temperature plummets and follow the doctor to a curtained off area.",
  
},
{
  text: "The Sheriff joins you shortly, but Deputy Drew seems to have remained upstairs.",
  func: () => {
  setBackgroundImg("corpse")
}
},
{
  text: "The doctor draws back the curtain to reveal a shrouded figure laid upon an examination table.",
  func: () => {
    setNpcImg("doctor")
    setSpeaker("doctor")
  }
},
{
  text: "Holding a clipboard, the doctor draws back the curtain to reveal a shrouded figure laid upon an examination table.",
  func: () => {
    setNpcImg("doctor")
    setSpeaker("doctor")
  }
},

  {
    text: "The doctor draws back the curtain to reveal a shrouded figure laid upon an examination table.",
    func: () => {
      setNpcImg("doctor")
      setSpeaker("doctor")
    }
  },

  {
    text: "\"Her name is Grace Orlean.\"",
  },
  {
  text: "\"Eighteen years old. Born and raised here and as far as I know, she never spent more than a few months away.\"",
  func: ()=>{
    setNpcImg("sheriff")
    setSpeaker("sheriff")
  }
},
{
  text: "\"Near everyone in town knew her.\"",
  func: () => {
    setNpcImg("player")
    setSpeaker("player")
  }
},
{
  text: "\"Family?\"",
  func: () => {
    setNpcImg("doctor")
    setSpeaker("doctor")
  }
},
{
  text: "\"Her parents live here in town. She was still in school. They identified the body early this morning.\"",
  func: () => {
    setNpcImg("sheriff")
    setSpeaker("sheriff")
  }
},
{
  text: "\"Neither of them are handling it very well. We'll want to meet with them after they've had some time to process.\"",
  func: () => {
    setNpcImg("player")
    setSpeaker("player")
  }
},
{
  text: "\"Ever any trouble with the law? Wrong crowd?\"",
  func: () => {
    setNpcImg("sheriff")
    setSpeaker("sheriff")
  }
},
{
  text: "\"Never. She was a good girl. Very involved in the community, always helping out with things at her school and church. Heck, she was last year's Miss GoodWood!\"",
  func: () => {
    setNpcImg("player")
    setSpeaker("player")
  }
},
{
  text: "\"Quite the reputation.\"",
  func: () => {
    setNpcImg("doctor")
    setSpeaker("doctor")
  }
},
{
  text: "\"The body was recovered shortly after sunrise. There's considerable bruising, some abrasions, but nothing that immediately tells us what happened...\"",
  func: () => {
    setNpcImg("player")
    setSpeaker("player")
  }
},
{
  text: "\"Cause of death, undetermined...\"",
  func: () => {
    setNpcImg("doctor")
    setSpeaker("doctor")
  }
},
  {
  text: "\"There are indications of asphyxiation, but I haven't ruled out other possibilities. I'll need more time.\"",
  func: () => {
    setNpcImg("sheriff")
    setSpeaker("sheriff")
  }
},
{
  text: "\"She was found at the edge of Splitwood Lake, down in the Industrial District. We searched the surrounding area, but nothing turned up.\"",
  func: () => {
    setNpcImg("doctor")
    setSpeaker("doctor")
  }
},
{
  text: "\"Cause of death, undetermined...\"",
  func: () => {
    setNpcImg("doctor")
    setSpeaker("doctor")
  }
}
  
  

  
  



]