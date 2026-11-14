import { triggerFlag, createInteraction, createAction, handleMsgUI , passTime} from "../functions/game"

export function npcDataInit() {

  
  function createNpc(name, location, flags, interactText, interactions, schedule) {
    return {
      name: name,
      location: location,
      flags: flags,
      interactText: interactText,
      interactions: interactions,
      schedule: schedule
    }
  } 
  
  return (
  {
    drew: createNpc(
      "Drew",
      "jail", {},
      "You see the deputy.",
      {
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
              {
                text: "He is a lanky man wearing a deputy's uniform under a leather bomber jacket. Even with his dark sunglasses, you can sense him staring at you with suspicion."
              }],
              () => {
                handleMsgUI(window.getGame().npcs.drew.interactions.inspect.actions[0].message)
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
                text: "Angry Deputy: \"Are you trying to get jammed up? If you can't prove who you are, get out of here!\"",
               
              }],
              () => {
                handleMsgUI(window.getGame().npcs.drew.interactions.investigate.actions[0].message)
                passTime(10)
              },
              () => window.getGame().player.inventory.includes("player_badge") == false
            ),
            createAction(
              [
              {
                text: "\"What do you want?\"",
           
              }],
              () => {
                handleMsgUI(window.getGame().npcs.drew.interactions.investigate.actions[1].message)
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
                text: ""
              }],
              () => {
                handleMsgUI(window.getGame().npcs.drew.interactions.chat.actions[0].message)
                  passTime(10)
                
              },
              () => true
            )
          ]
        )
      },
      {
        sunday: {
          am: "sheriffs_station",
          pm: "drews_house"
        },
        monday: {
          am: "sheriffs_station",
          pm: "drews_house"
        },
        tuesday: {
          am: "sheriffs_station",
          pm: "drews_house"
        },
        wednesday: {
          am: "sheriffs_station",
          pm: "drews_house"
        },
        thursday: {
          am: "sheriffs_station",
          pm: "drews_house"
        },
        friday: {
          am: "sheriffs_station",
          pm: "drews_house"
        },
        saturday: {
          am: "sheriffs_station",
          pm: "drews_house"
        }
        
      }
    ),
    
    gwen: createNpc(
      "Gwen",
      "",
      {},
      "She sits at the front desk typing furiously at her computer. She seems stressed out.",
      {
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                { text: "Her hair is a bright pink bob. She is wearing a purple cardigan over a white blouse with a red bow tie." ,
                 
                }
              ],
              () => {
                
                handleMsgUI(window.getGame().npcs.gwen.interactions.inspect.actions[0].message)
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
                
                handleMsgUI(window.getGame().npcs.gwen.interactions.investigate.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.gwen.interactions.chat.actions[0].message)
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
    ),
    
    old_woman: createNpc(
      "Old Woman",
      "municipal_district", {},
      "An old woman putters down the sidewalk.",
      {
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                { text: "She uses a walker with tennis balls fixed to its feet." }
              ],
              () => {
                
                
                handleMsgUI(window.getGame().npcs.old_woman.interactions.inspect.actions[0].message)
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
                
                handleMsgUI(window.getGame().npcs.old_woman.interactions.investigate.actions[0].message)
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
                text: ""
              }],
              () => {
                handleMsgUI(window.getGame().npcs.old_woman.interactions.chat.actions[0].message)
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
    ),
    
    sabra: createNpc(
      "Sabra",
      "",
      {},
      "You see Sabra.",
      {
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs.sabra.interactions.inspect.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.sabra.interactions.investigate.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.sabra.interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "sabra_house",
    pm: "church"
  },
  monday: {
    am: "high_school",
    pm: "sabra_house"
  },
  tuesday: {
    am: "high_school",
    pm: "sabra_house"
  },
  wednesday: {
    am: "high_school",
    pm: "sabra_house"
  },
  thursday: {
    am: "high_school",
    pm: "sabra_house"
  },
  friday: {
    am: "high_school",
    pm: "sabra_house"
  },
  saturday: {
    am: "sabra_house",
    pm: "sabra_house"
  }}
    ),
    rikki: createNpc(
      "Rikki",
      "",
      {},
      "You see Rikki.",
      {
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs.rikki.interactions.inspect.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.rikki.interactions.investigate.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.rikki.interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "rikki_house",
    pm: "factory"
  },
  monday: {
  am: "rikki_house",
  pm: "factory"
},
  tuesday: {
  am: "rikki_house",
  pm: "factory"
},
  wednesday: {
  am: "rikki_house",
  pm: "factory"
},
  thursday: {
  am: "rikki_house",
  pm: "factory"
},
  friday: {
  am: "rikki_house",
  pm: "factory"
},
  saturday: {
  am: "rikki_house",
  pm: "factory"
}}
    ),
    breezy: createNpc(
      "Breezy",
      "",
      {},
      "You see Breezy.",
      {
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs.breezy.interactions.inspect.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.breezy.interactions.investigate.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.breezy.interactions.chat.actions[0].message)
              },
              ()=>true
            )
          ]
        )
        
      },
      {
  sunday: {
    am: "beach",
    pm: "breezy_house"
  },
  monday: {
    am: "high_school",
    pm: "breezy_house"
  },
  tuesday: {
    am: "high_school",
    pm: "breezy_house"
  },
  wednesday: {
    am: "high_school",
    pm: "breezy_house"
  },
  thursday: {
    am: "high_school",
    pm: "breezy_house"
  },
  friday: {
    am: "high_school",
    pm: "breezy_house"
  },
  saturday: {
    am: "",
    pm: "breezy_house"
  }}
    ),
    heather: createNpc(
      "Heather",
      "",
      {},
      "",
      {
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs.heather.interactions.inspect.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.heather.interactions.investigate.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.heather.interactions.chat.actions[0].message)
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
    monica: createNpc(
      "Monica",
      "",
      {},
      "",
      {
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs.monica.interactions.inspect.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.monica.interactions.investigate.actions[0].message)
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
                handleMsgUI(window.getGame().npcs.monica.interactions.chat.actions[0].message)
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
    sheriff: createNPC(
      "",
      "",
      {},
      "",
      {
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.inspect.actions[0].message)
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
    dispatcher: createNPC(
      "",
      "",
      {},
      "",
      {
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.inspect.actions[0].message)
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
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.inspect.actions[0].message)
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
    doctor: createNPC(
      "",
      "",
      {},
      "",
      {
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.inspect.actions[0].message)
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
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.inspect.actions[0].message)
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
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.inspect.actions[0].message)
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
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.inspect.actions[0].message)
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
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.inspect.actions[0].message)
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
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.inspect.actions[0].message)
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
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.inspect.actions[0].message)
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
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.inspect.actions[0].message)
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
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.inspect.actions[0].message)
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
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.inspect.actions[0].message)
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
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.inspect.actions[0].message)
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
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.inspect.actions[0].message)
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
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.inspect.actions[0].message)
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
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.inspect.actions[0].message)
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
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.inspect.actions[0].message)
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
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.inspect.actions[0].message)
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
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.inspect.actions[0].message)
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
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.inspect.actions[0].message)
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
        inspect: createInteraction(
          "Inspect",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().npcs..interactions.inspect.actions[0].message)
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