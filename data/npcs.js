import { triggerFlag, createInteraction, createAction, handleMsgUI , passTime} from "../functions/game"

import {sheriff} from "./npcs/sheriff"
import {drew} from "./npcs/drew"
import {gwen} from "./npcs/gwen"
import {rikki} from "./npcs/rikki"
import {breezy} from "./npcs/breezy"
import {sabra} from "./npcs/sabra"
import {heather} from "./npcs/heather"
import {monica} from "./npcs/monica"
import {old_woman} from "./npcs/old_woman"
import {doctor} from "./npcs/doctor"
import {nurse} from "./npcs/nurse"

export function createNpc(id, name, preName, location, specialLocation, flags, interactText, interactions, schedule) {
  return {
    id: id,
    type: "npc",
    name: name,
    preName: preName,
    location: location,
    specialLocation: specialLocation,
    flags: flags,
    interactText: interactText,
    interactions: interactions,
    schedule: schedule
  }
}

export function npcDataInit() {
  
  return (
  {
    sheriff: sheriff,
    drew: drew,
    
    gwen: gwen,
    sabra: sabra,
    rikki: rikki,
    breezy: breezy,
    heather: heather,
    monica: monica,
    
    doctor: doctor,
    nurse: nurse,
    
    old_woman: old_woman
    /*
    ,
    dispatcher: createNPC(
      "",
      "",
      {},
      "",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.examine.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.investigate.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "",
    pm: ""
  },
  monday: {
    am: "",
    pm: ""
  },
  tuesday: {
    am: "",
    pm: ""
  },
  wednesday: {
    am: "",
    pm: ""
  },
  thursday: {
    am: "",
    pm: ""
  },
  friday: {
    am: "",
    pm: ""
  },
  saturday: {
    am: "",
    pm: ""
  }}
    ),
    coroner: createNPC(
      "",
      "",
      {},
      "",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.examine.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.investigate.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "",
    pm: ""
  },
  monday: {
    am: "",
    pm: ""
  },
  tuesday: {
    am: "",
    pm: ""
  },
  wednesday: {
    am: "",
    pm: ""
  },
  thursday: {
    am: "",
    pm: ""
  },
  friday: {
    am: "",
    pm: ""
  },
  saturday: {
    am: "",
    pm: ""
  }}
    ),
    
    nurse: createNPC(
      "",
      "",
      {},
      "",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.examine.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.investigate.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "",
    pm: ""
  },
  monday: {
    am: "",
    pm: ""
  },
  tuesday: {
    am: "",
    pm: ""
  },
  wednesday: {
    am: "",
    pm: ""
  },
  thursday: {
    am: "",
    pm: ""
  },
  friday: {
    am: "",
    pm: ""
  },
  saturday: {
    am: "",
    pm: ""
  }}
    ),
    mayor: createNPC(
      "",
      "",
      {},
      "",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.examine.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.investigate.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "",
    pm: ""
  },
  monday: {
    am: "",
    pm: ""
  },
  tuesday: {
    am: "",
    pm: ""
  },
  wednesday: {
    am: "",
    pm: ""
  },
  thursday: {
    am: "",
    pm: ""
  },
  friday: {
    am: "",
    pm: ""
  },
  saturday: {
    am: "",
    pm: ""
  }}
    ),
    waitress: createNPC(
      "",
      "",
      {},
      "",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.examine.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.investigate.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "",
    pm: ""
  },
  monday: {
    am: "",
    pm: ""
  },
  tuesday: {
    am: "",
    pm: ""
  },
  wednesday: {
    am: "",
    pm: ""
  },
  thursday: {
    am: "",
    pm: ""
  },
  friday: {
    am: "",
    pm: ""
  },
  saturday: {
    am: "",
    pm: ""
  }}
    ),
    cook: createNPC(
      "",
      "",
      {},
      "",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.examine.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.investigate.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "",
    pm: ""
  },
  monday: {
    am: "",
    pm: ""
  },
  tuesday: {
    am: "",
    pm: ""
  },
  wednesday: {
    am: "",
    pm: ""
  },
  thursday: {
    am: "",
    pm: ""
  },
  friday: {
    am: "",
    pm: ""
  },
  saturday: {
    am: "",
    pm: ""
  }}
    ),
    bartender: createNPC(
      "",
      "",
      {},
      "",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.examine.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.investigate.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "",
    pm: ""
  },
  monday: {
    am: "",
    pm: ""
  },
  tuesday: {
    am: "",
    pm: ""
  },
  wednesday: {
    am: "",
    pm: ""
  },
  thursday: {
    am: "",
    pm: ""
  },
  friday: {
    am: "",
    pm: ""
  },
  saturday: {
    am: "",
    pm: ""
  }}
    ),
    mechanic: createNPC(
      "",
      "",
      {},
      "",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.examine.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.investigate.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "",
    pm: ""
  },
  monday: {
    am: "",
    pm: ""
  },
  tuesday: {
    am: "",
    pm: ""
  },
  wednesday: {
    am: "",
    pm: ""
  },
  thursday: {
    am: "",
    pm: ""
  },
  friday: {
    am: "",
    pm: ""
  },
  saturday: {
    am: "",
    pm: ""
  }}
    ),
    priest: createNPC(
      "",
      "",
      {},
      "",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.examine.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.investigate.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "",
    pm: ""
  },
  monday: {
    am: "",
    pm: ""
  },
  tuesday: {
    am: "",
    pm: ""
  },
  wednesday: {
    am: "",
    pm: ""
  },
  thursday: {
    am: "",
    pm: ""
  },
  friday: {
    am: "",
    pm: ""
  },
  saturday: {
    am: "",
    pm: ""
  }}
    ),
    principal: createNPC(
      "",
      "",
      {},
      "",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.examine.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.investigate.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "",
    pm: ""
  },
  monday: {
    am: "",
    pm: ""
  },
  tuesday: {
    am: "",
    pm: ""
  },
  wednesday: {
    am: "",
    pm: ""
  },
  thursday: {
    am: "",
    pm: ""
  },
  friday: {
    am: "",
    pm: ""
  },
  saturday: {
    am: "",
    pm: ""
  }}
    ),
    lawyer: createNPC(
      "",
      "",
      {},
      "",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.examine.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.investigate.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "",
    pm: ""
  },
  monday: {
    am: "",
    pm: ""
  },
  tuesday: {
    am: "",
    pm: ""
  },
  wednesday: {
    am: "",
    pm: ""
  },
  thursday: {
    am: "",
    pm: ""
  },
  friday: {
    am: "",
    pm: ""
  },
  saturday: {
    am: "",
    pm: ""
  }}
    ),
    teacher: createNPC(
      "",
      "",
      {},
      "",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.examine.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.investigate.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "",
    pm: ""
  },
  monday: {
    am: "",
    pm: ""
  },
  tuesday: {
    am: "",
    pm: ""
  },
  wednesday: {
    am: "",
    pm: ""
  },
  thursday: {
    am: "",
    pm: ""
  },
  friday: {
    am: "",
    pm: ""
  },
  saturday: {
    am: "",
    pm: ""
  }}
    ),
    coach: createNPC(
      "",
      "",
      {},
      "",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.examine.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.investigate.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "",
    pm: ""
  },
  monday: {
    am: "",
    pm: ""
  },
  tuesday: {
    am: "",
    pm: ""
  },
  wednesday: {
    am: "",
    pm: ""
  },
  thursday: {
    am: "",
    pm: ""
  },
  friday: {
    am: "",
    pm: ""
  },
  saturday: {
    am: "",
    pm: ""
  }}
    ),
    foreman: createNPC(
      "",
      "",
      {},
      "",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.examine.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.investigate.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "",
    pm: ""
  },
  monday: {
    am: "",
    pm: ""
  },
  tuesday: {
    am: "",
    pm: ""
  },
  wednesday: {
    am: "",
    pm: ""
  },
  thursday: {
    am: "",
    pm: ""
  },
  friday: {
    am: "",
    pm: ""
  },
  saturday: {
    am: "",
    pm: ""
  }}
    ),
    mailman: createNPC(
      "",
      "",
      {},
      "",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.examine.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.investigate.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "",
    pm: ""
  },
  monday: {
    am: "",
    pm: ""
  },
  tuesday: {
    am: "",
    pm: ""
  },
  wednesday: {
    am: "",
    pm: ""
  },
  thursday: {
    am: "",
    pm: ""
  },
  friday: {
    am: "",
    pm: ""
  },
  saturday: {
    am: "",
    pm: ""
  }}
    ),
    deejay: createNPC(
      "",
      "",
      {},
      "",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.examine.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.investigate.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "",
    pm: ""
  },
  monday: {
    am: "",
    pm: ""
  },
  tuesday: {
    am: "",
    pm: ""
  },
  wednesday: {
    am: "",
    pm: ""
  },
  thursday: {
    am: "",
    pm: ""
  },
  friday: {
    am: "",
    pm: ""
  },
  saturday: {
    am: "",
    pm: ""
  }}
    ),
    fortune_teller: createNPC(
      "",
      "",
      {},
      "",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.examine.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.investigate.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "",
    pm: ""
  },
  monday: {
    am: "",
    pm: ""
  },
  tuesday: {
    am: "",
    pm: ""
  },
  wednesday: {
    am: "",
    pm: ""
  },
  thursday: {
    am: "",
    pm: ""
  },
  friday: {
    am: "",
    pm: ""
  },
  saturday: {
    am: "",
    pm: ""
  }}
    ),
    drunk: createNPC(
      "",
      "",
      {},
      "",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.examine.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.investigate.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "",
    pm: ""
  },
  monday: {
    am: "",
    pm: ""
  },
  tuesday: {
    am: "",
    pm: ""
  },
  wednesday: {
    am: "",
    pm: ""
  },
  thursday: {
    am: "",
    pm: ""
  },
  friday: {
    am: "",
    pm: ""
  },
  saturday: {
    am: "",
    pm: ""
  }}
    ),
    homeless: createNPC(
      "",
      "",
      {},
      "",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.examine.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.investigate.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "",
    pm: ""
  },
  monday: {
    am: "",
    pm: ""
  },
  tuesday: {
    am: "",
    pm: ""
  },
  wednesday: {
    am: "",
    pm: ""
  },
  thursday: {
    am: "",
    pm: ""
  },
  friday: {
    am: "",
    pm: ""
  },
  saturday: {
    am: "",
    pm: ""
  }}
    )
    
    
    /*
  
    : createNPC(
      "",
      "",
      {},
      "",
      {
        examine: createInteraction(
          "Examine",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.examine.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.investigate.actions[0].message)
              },
              ()=>true
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
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "",
    pm: ""
  },
  monday: {
    am: "",
    pm: ""
  },
  tuesday: {
    am: "",
    pm: ""
  },
  wednesday: {
    am: "",
    pm: ""
  },
  thursday: {
    am: "",
    pm: ""
  },
  friday: {
    am: "",
    pm: ""
  },
  saturday: {
    am: "",
    pm: ""
  }}
    )
  
  */
    
    
  })
}