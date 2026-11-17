import { createNpc } from "../npcs"
import { createInteraction, createAction, handleMsgUI, passTime } from "../../functions/game"

export const doctor = createNpc(
  "doctor",
    "Dr. Trey",
    "", {},
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
              text: ""
            }],
            () => {
 handleMsgUI("npcs", "doctor", "investigate", 0)
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
               handleMsgUI("npcs", "doctor", "chat", 0)
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