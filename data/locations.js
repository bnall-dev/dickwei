import { handleChangeLocation } from "../functions/game"

function createAction(message, func, condition) {
  return {
    message: message,
    func: func,
    condition: condition
  }
}

export function locationDataInit() {
  return (
  {
    outskirts: {
      name: "Outskirts",
      subLocations: [
        "municipal_district"
      ],
      interactText: "You see the town outskirts.",
      displayText: "You are in the town Outskirts.",
      interactions: {
        go: {
          text: "Go",
          actions: [
            createAction(
              [
              {
                text: "You enter the town Outskirts."
              }],
              () => {
                window.setGame(prev => (
                {
                  ...prev,
                  message: prev.locations.outskirts.interactions.go.actions[0].message,
                  messageIndex: 0,
                  choiceUIActive: false,
                  interactionUIActive: true,
                  toolsUIActive: true
                }))
                
                handleChangeLocation("outskirts")
                
              },
              () => true
            )
            
            
            
          ]
          
        }
      }
    },
    municipal_district: {
      name: "Municipal District",
      subLocations: [
        "town_hall",
        "sheriffs_station",
        "hospital",
        "outskirts"
      ],
      interactText: "You see the Municipal District.",
      displayText: "You are in the Municipal District.",
      interactions: {
        go: {
          text: "Go",
          actions: [
          {
            message: [
            {
              text: "You enter the Municipal District."
            }],
            func: () => {
              window.setGame(prev => (
              {
                ...prev,
                message: prev.locations.municipal_district.interactions.go.actions[0].message,
                messageIndex: 0,
                choiceUIActive: false,
                interactionUIActive: true,
                toolsUIActive: true
              }))
              
              handleChangeLocation("municipal_district")
              
            },
            condition: () => true
          }]
          
        }
      }
    },
    town_hall: {
      name: "Town Hall",
      subLocations: [
        "mayors_office",
        "municipal_district"
        
      ],
      displayText: "You are in the Town Hall.",
      interactText: "You see the Town Hall.",
      interactions: {
        go: {
          text: "Go",
          actions: [
          {
            message: [
            {
              text: "You enter the Town Hall."
            }],
            func: () => {
              
              window.setGame(prev => (
              {
                ...prev,
                message: prev.locations.town_hall.interactions.go.actions[0].message,
                messageIndex: 0,
                choiceUIActive: false,
                interactionUIActive: true,
                toolsUIActive: true
                
              }))
              
              handleChangeLocation("town_hall")
            },
            condition: () => true
            
          }]
        }
      }
    },
    mayors_office: {
      name: "Mayor's Office",
      subLocations: [
        "town_hall"
      ],
      displayText: "You are in the Mayor's Office.",
      interactText: "You see the Mayor's Office.",
      interactions: {
        go: {
          text: "Go",
          actions: [
          {
            message: [{
              text: "You enter the Mayor's Office."
            }],
            func: () => {
              
              window.setGame(prev => (
              {
                ...prev,
                message: prev.locations.mayors_office.interactions.go.actions[0].message,
                messageIndex: 0,
                choiceUIActive: false,
                interactionUIActive: true,
                toolsUIActive: true
                
              }))
              handleChangeLocation("mayors_office")
              
            },
            condition: () => true
          }]
        }
      }
    },
    sheriffs_station: {
      name: "Sheriff's Station",
      subLocations: [
        "jail",
        "municipal_district"
      ],
      displayText: "You are in the Sheriff's Station.",
      interactText: "You see the Sheriff's Station.",
      interactions: {
        go: {
          text: "Go",
          actions: [
          {
            message: [
            {
              text: "You enter the Sheriff's Station."
            }],
            func: () => {
              window.setGame(prev => (
              {
                ...prev,
                message: prev.locations.sheriffs_station.interactions.go.actions[0].message,
                messageIndex: 0,
                choiceUIActive: false,
                interactionUIActive: true,
                toolsUIActive: true
              }))
              
              handleChangeLocation("sheriffs_station")
              
            },
            condition: () => true
          }]
          
        }
      }
    },
    jail: {
      name: "Jail",
      subLocations: [
        "cell_a",
        "cell_b",
        "cell_c",
        "sheriffs_station"
      ],
      flags: {
        first_go: false
      },
      displayText: "You are in the Jail.",
      interactText: "A secure door leads toward the jail cells.",
      interactions: {
        go: {
          text: "Go",
          actions: [{
              
              message: [
                {
                  text: "As you pull the handle of the door, it suddenly bursts open. The man hurrying out slams into you and spills coffee all over himself."
                },
                {
                  text: "Angry Man: \"What the hell is wrong with you?!\""
                },
                { text: "Dick: \"Hey man, watch the suit!\"" },
                { text: "The man wrings out his own tie as you register that he, too, is in uniform. A previously unblemished deputy's badge drips black coffee onto his leather jacket." },
                { text: "Angry Deputy: \"Listen here, buddy, you've got about three seconds to explain why you're trying to sneak into the jail before I throw you in there myself!\"" },
                { text: "He jabs you sharply in the chest with a gloved finger. A fellow man of action!" },
                {
                  text: "You stare him dead in the eye, savoring the moment as you cooly reach into your inner pocket. You can't help but grin as you pull out...",
                  func: () => {
                    
                    const hasBadgeMessage = window.getGame().player.inventory.includes("player_badge") ? [
                      { text: "... Your Badge!" }
                    ] : [
                      { text: "... absolutely nothing..." },
                      {text: "You see yourself reflected in the deputy's sunglasses, your hand held limply in the air. The deputy folds his arms."},
                      {text: "You regain your composure clearing your throat and snapping your fingers intothe shape of  a gun."},
                      {text:"Dick: \"I'm Special Operative Richard Wei! I work for The Agency am here regarding last night's incident.\""},
                      {text: "Dick: \"I seem to have misplaced my credentials, but I'm sure we can clear that up if you'll just direct me to your superior...\""},
                      {text: "The deputy's expression hasn't changed, but his face is turning red. He taps the badge on his chest."},
                      {text: "Angry Deputy: \"You see this here, 'Dick'? This makes me the only superior you need to be concerned with.\""},
                      {text: "Angry Deputy: \"And nobody's told me anything about any 'Special Operatives' involving themselves in our case.\""},
                      {text: "Dick: \"'Richard,' please. Actually, 'Special Operative Wei.'\""},
                      {text: "Angry Deputy: \"It's time for you to leave, 'Special Operative Dick.' Come back when you find your badge.\""},
                      {text: "*DOSSIER UPDATED*",
                        func: ()=>{
                          window.setGame(
                            prev =>(
                              {
                                ...prev,
                                quests: {
                                  ...prev.quests,
                                  report_for_duty: {
                                    ...prev.quests.report_for_duty,
                                    subquests: {
                                      ...prev.quests.report_for_duty.subquests,
                                      convince_drew : {
                                        ...prev.quests.report_for_duty.subquests.convince_drew,
                                        active: true
                                      }
                                    }
                                  }
                                }
                              }
                            )
                          )
                          
                          window.setGame(prev=>({...prev, 
           choiceUIActive:window.getGame().sceneActive? false: true,
           messageActive:  false,
           interactionUIActive: window.getGame().sceneActive?  true: false,
           toolsUIActive: window.getGame().sceneActive? true: false,
           messageIndex: 0,
           message:window.getGame().sceneActive == false? [{text: window.getGame().currentObj.interactText}] : [{text: window.getGame().currentObj.displayText}]
          }))
          window.setGame(prev=>({...prev,
            sceneActive: false
          }))
                          
                        }
                      }
                      
                    ]
                    
                    window.setGame(
                      prev => (
                      {
                        ...prev,
                        message: hasBadgeMessage,
                        messageIndex: 0
                      })
                    )
                    
                    
                  }
                }
              ],
              func: () => {
                window.setGame(prev => (
                {
                  ...prev,
                  message: prev.locations.jail.interactions.go.actions[0].message,
                  messageIndex: 0,
                  choiceUIActive: false,
                  messageActive: true,
                  sceneActive: true,
                  npcs: {
                    ...prev.npcs,
                    drew: {
                      ...prev.npcs.drew,
                      location: "sheriffs_station"
                    }
                  },
                  locations: {
                    ...prev.locations,
                    jail: {
                      ...prev.locations.jail,
                      flags: {
                        ...prev.locations.jail.flags,
                        first_go: true
                      }
                    }
                  },
                  currentObj: window.getGame().locations.sheriffs_station
                  
                  
                }))
                
                
                
              },
              condition: () => window.getGame().locations["jail"].flags.first_go == false
            },
            
            {
              message: [
              {
                text: "You enter the Jail."
              }],
              func: () => {
                window.setGame(prev => (
                {
                  ...prev,
                  message: prev.locations.jail.interactions.go.actions[1].message,
                  messageIndex: 0,
                  choiceUIActive: false,
                  interactionUIActive: true,
                  toolsUIActive: true
                }))
                
                handleChangeLocation("jail")
                
              },
              condition: () => true
            }
          ]
          
        }
      }
    },
    cell_a: {
      name: "Cell A",
      subLocations: [
        
        "jail"
      ],
      displayText: "You are in a jail cell.",
      interactText: "You see a jail cell through steel bars.",
      interactions: {
        go: {
          text: "Go",
          actions: [
          {
            message: [
            {
              text: "You enter the cell."
            }],
            func: () => {
              window.setGame(prev => (
              {
                ...prev,
                message: prev.locations.cell_a.interactions.go.actions[0].message,
                messageIndex: 0,
                choiceUIActive: false,
                interactionUIActive: true,
                toolsUIActive: true
              }))
              
              handleChangeLocation("cell_a")
              
            },
            condition: () => true
          }]
          
        }
      }
    },
    cell_b: {
      
      name: "Cell B",
      subLocations: [
        
        "jail"
      ],
      displayText: "You are in a jail cell.",
      interactText: "You see a jail cell through steel bars.",
      interactions: {
        go: {
          text: "Go",
          actions: [
          {
            message: [
            {
              text: "You enter the cell."
            }],
            func: () => {
              window.setGame(prev => (
              {
                ...prev,
                message: prev.locations.cell_b.interactions.go.actions[0].message,
                messageIndex: 0,
                choiceUIActive: false,
                interactionUIActive: true,
                toolsUIActive: true
              }))
              
              handleChangeLocation("cell_b")
              
            },
            condition: () => true
          }]
          
        }
      }
      
    },
    cell_c: {
      
      name: "Cell C",
      subLocations: [
        
        "jail"
      ],
      displayText: "You are in a jail cell.",
      interactText: "You see a jail cell through steel bars.",
      interactions: {
        go: {
          text: "Go",
          actions: [
          {
            message: [
            {
              text: "You enter the cell."
            }],
            func: () => {
              window.setGame(prev => (
              {
                ...prev,
                message: prev.locations.cell_c.interactions.go.actions[0].message,
                messageIndex: 0,
                choiceUIActive: false,
                interactionUIActive: true,
                toolsUIActive: true
              }))
              
              handleChangeLocation("cell_c")
              
            },
            condition: () => true
          }]
          
        }
      }
      
    },
    hospital: {
  
  name: "Hospital",
  subLocations: [
    "morgue",
    "municipal_district"
  ],
  displayText: "You are in the Hospital.",
  interactText: "You see the Hospital.",
  interactions: {
    go: {
      text: "Go",
      actions: [
      {
        message: [
        {
          text: "You enter the Hospital."
        }],
        func: () => {
          window.setGame(prev => (
          {
            ...prev,
            message: prev.locations.hospital.interactions.go.actions[0].message,
            messageIndex: 0,
            choiceUIActive: false,
            interactionUIActive: true,
            toolsUIActive: true
          }))
          
          handleChangeLocation("hospital")
          
        },
        condition: () => true
      }]
      
    }
  }
  
},
morgue: {
  
  name: "Morgue",
  subLocations: [
    
    "hospital"
  ],
  displayText: "You are in the morgue.",
  interactText: "You see a sign indicating the direction of the morgue.",
  interactions: {
    go: {
      text: "Go",
      actions: [
      {
        message: [
        {
          text: "You enter the morgue."
        }],
        func: () => {
          window.setGame(prev => (
          {
            ...prev,
            message: prev.locations.morgue.interactions.go.actions[0].message,
            messageIndex: 0,
            choiceUIActive: false,
            interactionUIActive: true,
            toolsUIActive: true
          }))
          
          handleChangeLocation("morgue")
          
        },
        condition: () => true
      }]
      
    }
  }
  
}
    
  })
}