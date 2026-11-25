import { createNpc } from "../npcs"
import { meetNpc, createInteraction, createAction, handleMsgUI, passTime, setSpeaker } from "../../functions/game"



 export const doctor = createNpc(
  "doctor",
  "Dr. Trey",
  "Doctor",
  "", 
  "",{
    have_met: false
  },
  "You see the doctor.",
  {
    examine: createInteraction(
      "Examine",
      [
        createAction(
          [
          {
            text: ""
          }],
          () => {
            handleMsgUI("npcs", "doctor", "examine", 0)
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
            text:"\"You're the man The Agency sent? The Sheriff informed me that you would be joining us. Still, we'll want him present as well before beginning the autopsy.\"", 
            func: ()=>{setSpeaker("")}
          }],
          () => {
            handleMsgUI("npcs", "doctor", "investigate", 0)
            setSpeaker("doctor")
            passTime(30)
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
            text: "\"Nice to meet you. I'm Dr. Devon Trey, Head Physician...\""
          },
          {
            text: "\"...\""
          },
          {
  text: "\"Sir, this is a hospital!!\""},
          {
            text: "*Dossier Updated*",
            func: ()=>{setSpeaker("")}
          }],
          () => {
            handleMsgUI("npcs", "doctor", "chat", 0)
            setSpeaker("doctor")
            meetNpc("doctor")
            passTime(30)
          },
          () => window.getGame().npcs.doctor.flags.have_met == false
        ),
        createAction(
          [
          {
            text: "\"Goodwood is usually a very calm place, some might even say boring. Still, being the primary physician for most of the town keeps me busy.\""
          },
          {
            text: "\"Sometimes I end up sleeping in my office... eheh...\"",
            func: ()=>{setSpeaker("")}
          }],
          () => {
            handleMsgUI("npcs", "doctor", "chat", 1)
            setSpeaker("doctor")
            passTime(30)
          },
          () => true
        )
      ]
    )
    
  },
  {
    sunday: {
      am: "hospital",
      pm: "hospital"
    },
    monday: {
      am: "hospital",
      pm: "hospital"
    },
    tuesday: {
      am: "hospital",
      pm: "hospital"
    },
    wednesday: {
      am: "hospital",
      pm: "hospital"
    },
    thursday: {
      am: "hospital",
      pm: "hospital"
    },
    friday: {
      am: "hospital",
      pm: "hospital"
    },
    saturday: {
      am: "hospital",
      pm: "hospital"
    }
  }
)