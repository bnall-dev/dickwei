import { createNpc } from "../npcs"
import { createInteraction, createAction, handleMsgUI, passTime } from "../../functions/game"


export const gwen = createNpc(
      "gwen",
      "Gwen",
      "Girl with Pink Hair",
      "",
      "",
      {have_met: false},
      "She sits at the front desk typing furiously at her computer. She seems stressed out.",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                { text: "Her hair is a bright pink bob. She is wearing a purple cardigan over a white blouse with a red bow tie." ,
                 
                }
              ],
              () => {
                
                handleMsgUI("npcs", "gwen", "examine", 0)
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
                text: "Dick: \"Excuse me...\""
              },
              {
                text: "The girl seems extremely absorbed in her work and doesn't seem to even register your presence. Perhaps now isn't the time...",
               
              }],
              () => {
                
                handleMsgUI("npcs", "gwen", "investigate", 0)
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
                text: ""
              }],
              () => {
                handleMsgUI("npcs", "gwen", "chat", 0)
                passTime(10)
              },
              () => true
            )
          ]
        )
      },
      
{
  sunday: {
    am: "town_hall",
    pm: "gwens_house"
  },
  monday: {
    am: "high_school",
    pm: "gwens_house"
  },
  tuesday: {
    am: "high_school",
    pm: "gwens_house"
  },
  wednesday: {
    am: "high_school",
    pm: "gwens_house"
  },
  thursday: {
    am: "high_school",
    pm: "gwens_house"
  },
  friday: {
    am: "high_school",
    pm: "gwens_house"
  },
  saturday: {
    am: "town_hall",
    pm: "gwens_house"
  }}
    )