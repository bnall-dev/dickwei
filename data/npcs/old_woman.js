import { createNpc } from "../npcs"
import { createInteraction, createAction, handleMsgUI, passTime, setSpeaker } from "../../functions/game"

export const old_woman = createNpc(
      "old_woman",
      "Old Woman",
      "Old Woman",
      "municipal_district", {have_met: false},
      "An old woman putters down the sidewalk.",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                { text: "She uses a walker with tennis balls fixed to its feet." }
              ],
              () => {
                
                
                handleMsgUI("npcs", "old_woman", "examine", 0)
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
                text: "\"It's just terrible... that poor girl...\"",
                func: ()=>{setSpeaker("")}
              }],
              () => {
                
                handleMsgUI("npcs", "old_woman", "investigate", 0)
                passTime(10)
              setSpeaker("old_woman")
                
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
                text: "\"You really shouldn't smoke, dear. It will rob you of your looks!\"",
                func: ()=>{setSpeaker("")}
              }],
              () => {
                handleMsgUI("npcs", "old_woman", "chat", 0)
                setSpeaker("old_woman")
                passTime(10)
              },
              () => true
            )
          ]
        )
      },
      {
  sunday: {
    am: "municipal_district",
    pm: "municipal_district"
  },
  monday: {
    am: "municipal_district",
    pm: "municipal_district"
  },
  tuesday: {
    am: "municipal_district",
    pm: "municipal_district"
  },
  wednesday: {
    am: "municipal_district",
    pm: "municipal_district"
  },
  thursday: {
    am: "municipal_district",
    pm: "municipal_district"
  },
  friday: {
    am: "municipal_district",
    pm: "municipal_district"
  },
  saturday: {
    am: "municipal_district",
    pm: "municipal_district"
  }}
    )