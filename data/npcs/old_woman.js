import { createNpc } from "../npcs"
import { createInteraction, createAction, handleMsgUI, passTime } from "../../functions/game"

export const old_woman = createNpc(
      "old_woman",
      "Old Woman",
      "municipal_district", {},
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
                text: "Old Woman: \"It's just terrible... that poor girl...\""
              }],
              () => {
                
                handleMsgUI("npcs", "old_woman", "investigate", 0)
                passTime(10)
                
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
                text: "Old Woman: \"You really shouldn't smoke, dear. It will rob you of your looks!\""
              }],
              () => {
                handleMsgUI("npcs", "old_woman", "chat", 0)
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