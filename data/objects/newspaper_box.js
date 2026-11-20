import { createObject } from "../objects"
import { createInteraction, createAction, handleMsgUI, passTime, setMessageActive, setChoiceUIActive, setMessage, setSpeaker } from "../../functions/game"

export const newspaper_box = createObject(
  "newspaper_box",
  "Newspaper Box",
  "municipal_district", {},
  "A coin operated metal box displays the front page of the Good Times Daily.",
  {
    examine: createInteraction(
      "Examine",
      [
        createAction(
          [
          {
            text: "You examine today's headline:"
          },
          {
            text: "'Miss Goodwood Pageant Announced!'",
            func: ()=>{setSpeaker("player")}
          },
          {
            text: "\"It looks like the press might not be aware of the case yet. I should probably meet the paper's editor at some point...\"",
            func: ()=>{setSpeaker("")}
          }],
          () => {
            handleMsgUI("objects", "newspaper_box", "examine", 0)
            passTime(60)
          },
          () => window.getGame().day == 1
        )
      ]
    ),
    use: createInteraction(
      "Use",
      [
        createAction(
          [{
            text: "You already have a copy of today's paper."
          }],
          ()=>{handleMsgUI("objects", "newspaper_box", "use", 0)
passTime(60)},
          ()=>window.getGame().documents.newspaper.editions.includes(window.getGame().day) == true
        ),
    
        createAction(
          [
          {
            text: "A paper costs $0.50."
          }],
          () => {
            handleMsgUI("objects", "newspaper_box", "use", 1)
            setChoiceUIActive(true)
            window.setGame(prev => ({
              ...prev,
              interaction: [
              {
                text: "Buy Newspaper",
                actions: [
                {
                  message: [{ text: "" }],
                  func: () => {
                    window.setGame(prev => ({
                      ...prev,
                      player: {
                        ...prev.player,
                        cents: prev.player.cents - 50
                      },
                      documents: {
                        ...prev.documents,
                        newspaper:{
                          ...prev.documents.newspaper,
                          active: true,
                          editions: [
                            ...prev.documents.newspaper.editions,
                            window.getGame().day
                          ]
                        }
                      }
                    }))
                    setChoiceUIActive(false),
                      setMessageActive(true),
                      setMessage([{ text: "You insert a couple coins and open the door to receive today's paper." },
                      {
                        text: "*Document Obtained*",
                        func: () => {
                          window.setGame(prev => ({
                            ...prev,
                            interaction: [window.getGame().currentObj.interactions.examine, window.getGame().currentObj.interactions.use]
                          }))
                        }
                      }])
                  },
                  condition: () => true
                }]
              }]
            }))
            setMessageActive(false)
            passTime(60)
            
          },
          () => window.getGame().player.cents >= 50
        ),
        createAction(
          [
          {
            text: "A paper costs $0.50. If you had some change you could buy one."
          }],
          () => {
            handleMsgUI("objects", "newspaper_box", "use", 2)
            passTime(60)
          },
          () => window.getGame().player.cents == 0
        ),
        createAction(
          [
          {
            text: "A paper costs $0.50. You don't have quite enough change to buy one."
          }],
          () => {
            handleMsgUI("objects", "newspaper_box", "use", 3)
            passTime(60)
          },
          () => window.getGame().player.cents < 50
        )
      ]
    )
  }
)