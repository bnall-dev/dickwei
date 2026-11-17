import { createNpc } from "../npcs"
import { createInteraction, createAction, handleMsgUI, passTime } from "../../functions/game"

export const nurse = createNpc(
  "nurse",
  "Nurse",
  "", {},
  "A nurse overlooks the reception desk.",
  {
    examine: createInteraction(
      "Examine",
      [
        createAction(
          [
          {
            text: "She wears a standard white nurse's uniform. She looks down at her feet as though distressed."
          }],
          () => {
            handleMsgUI("npcs", "nurse", "examine", 0)
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
            text: "Nurse: \"I really don't know the details... You'll want to speak to the doctor. \""
          }],
          () => {
            handleMsgUI("npcs", "nurse", "investigate", 0)
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
            text: "Nurse: \"Sir! Please put out your cigarette!\""
          }],
          () => {
            handleMsgUI("npcs", "nurse", "chat", 0)
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