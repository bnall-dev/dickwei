import { createObject } from "../objects"
import { createInteraction, createAction, handleMsgUI, passTime, setObjFlag, playerGetItem, setSpeaker, setNpcImg} from "../../functions/game"

export const player_car = createObject(
  "player_car",
  "Your Car",
  "outskirts",
  {
    first_examine: false
  },
  "Your field service vehicle.",
  {
    examine: createInteraction(
      "Examine",
      [
        createAction(
          [
            { text: "It's a reliable and impressive piece of modern engineering." },
            {
              text: "It is completely wrecked."
            }
          ],
          () => {
            handleMsgUI("objects", "player_car", "examine", 0)
            passTime(60)
            setObjFlag("player_car", "first_examine", true)
          },
          () => window.getGame().objects.player_car.flags.first_examine == false
        ),
        createAction(
          [
            { text: "You give the car and the area around it a thorough search. Under the gas pedal, you discover... ",
            func: ()=>{
              setNpcImg("player")
              setSpeaker("player")}},
            {
              text: "\"My badge!\""
            },
            {
              text: "\"I certainly wouldn't get far without this...\"",
              func: ()=>{setSpeaker("")
                setNpcImg("")
              }
            },
            {
              text: "*Obtained Badge*"
            }
          ],
          () => {
            handleMsgUI("objects", "player_car", "examine", 1)
            passTime(180)
            playerGetItem("player_badge")
          },
          () => !window.getGame().player.inventory.includes("player_badge")
        ),
        createAction(
          [
            { text: "It's completely wrecked." }
          ],
          () => {
            handleMsgUI("objects", "player_car", "examine", 2)
            passTime(60)
          },
          () => true
        )
      ]
    ),
    use: createInteraction(
      "Use",
      [
        createAction(
          [
          {
            text: "It is in absolutely no state to drive."
          },
          {
            text: "You pat the crumpled hood empathetically."
          }],
          () => {
            handleMsgUI("objects", "player_car", "use", 0)
            passTime(60)
          },
          () => true
        )
      ]
    )
  }
)