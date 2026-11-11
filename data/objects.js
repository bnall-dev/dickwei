import { triggerFlag, handleScene, changeDisplayText, createAction, createInteraction, handleMsgUI } from "../functions/game"

export function objectDataInit() {
  
  function createObject(name, location, flags, interactText, interactions) {
    return {
      name: name,
      location: location,
      flags: flags,
      interactText: interactText,
      interactions: interactions
    }
  }
  

  return {
    player_car: createObject(
      "Your Car",
      "outskirts",
      {
        first_inspect: false
      },
      "You see your car.",
      {
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                { text: "You inspect your car." }
              ],
              () => {
                handleMsgUI(window.getGame().objects.player_car.interactions.inspect.actions[0].message)
              },
              () => true
            )
          ]
        )
      }
    )
  }
}