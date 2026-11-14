import { handleChangeLocation, createAction, createInteraction, passTime } from "../functions/game"



export function locationDataInit() {
  
  function createLocation(name, subLocations, flags, interactText, displayText, interactions) {
    return {
      name: name,
      subLocations: subLocations,
      flags: flags,
      interactText: interactText,
      displayText: displayText,
      interactions: interactions
    }
  }
  
 function handleMsgUI(msg) {
  window.setGame(
    prev => ({
      ...prev,
      messageIndex: 0,
      choiceUIActive: false,
     interactionUIActive: true,
     toolsUIActive: true,
      message: msg
      
    })
  )
}
  
  return (
  {
    outskirts: createLocation(
      "Outskirts",
      [
        "municipal_district"
      ],
      [],
      "You see the town outskirts.",
      "You are in the town Outskirts.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
                //DEFAULT
                {
                  text: "You enter the town Outskirts."
                }
                
              ],
              () => {

                handleMsgUI(window.getGame().locations.outskirts.interactions.go.actions[0].message)
                handleChangeLocation("outskirts")
                passTime(300)
                
              },
              () => true
              
              
            )
          ])
      }),
    
    municipal_district: createLocation(
      "Municipal District",
      [
        "town_hall",
        "sheriffs_station",
        "hospital",
        "high_school",
        "residential_district",
        "downtown",
        "outskirts"
      ],
      [],
      "You see the Municipal District.",
      "You are in the Municipal District.",
      {
        go: createInteraction(
          "Go",
          [
            createAction( 
            [
            {
              text: "You enter the Municipal District."
            }],
             () => {

              
              handleMsgUI(window.getGame().locations.municipal_district.interactions.go.actions[0].message)
              handleChangeLocation("municipal_district")
              passTime(300)
              
            },
             () => true
          )]
          
        )
      }
    ),
    
    town_hall: createLocation(
      "Town Hall",
      [
        "mayors_office",
        "municipal_district"
      ],
      [],
      "You see the Town Hall.",
      "You are in the Town Hall.",
     
      {
        go: createInteraction(
          "Go",
          [
          createAction(
            [
            {
              text: "You enter the Town Hall."
            }],
            () => {
              

              
 handleMsgUI(window.getGame().locations.town_hall.interactions.go.actions[0].message)
              
              handleChangeLocation("town_hall"
              )
                passTime(180)
            },
            () => true
            
          )]
        )
      }
    ),
    
    mayors_office: createLocation(
      "Mayor's Office",
      [
        "town_hall"
      ],
      [],
       "You see the Mayor's Office.",
      "You are in the Mayor's Office.",
     
      {
        go: createInteraction(
          "Go",
          [
          createAction(
            [{
              text: "You enter the Mayor's Office."
            }],
            () => {
              

              
             handleMsgUI(window.getGame().locations.mayors_office.interactions.go.actions[0].message)
              handleChangeLocation("mayors_office")
              passTime(180)
              
            },
            () => true
          )]
        )
      }
    ),
    
    sheriffs_station: createLocation(
      "Sheriff's Station",
      [
        "jail",
        "municipal_district"
      ],
      [],
      "You see the Sheriff's Station.",
      "You are in the Sheriff's Station.",
     
      {
        go: createInteraction(
          "Go",
          [
          createAction(
            [
            {
              text: "You enter the Sheriff's Station."
            }],
            () => {
              
              handleMsgUI(window.getGame().locations.sheriffs_station.interactions.go.actions[0].message)
              handleChangeLocation("sheriffs_station")
              passTime(180)
              
            },
            () => true
          )]
          
        )
      }
    ),
    
    jail: createLocation(
      "Jail",
      [
     
        "sheriffs_station"
      ],
      {
        first_go: false
      },
      "A secure door leads toward the jail cells.",
      "You are in the Jail.",
      
      {
        go: createInteraction(
          "Go",
          [createAction(
              
              [
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
                      { text: "You see yourself reflected in the deputy's sunglasses, your hand held limply in the air. The deputy folds his arms." },
                      { text: "You regain your composure clearing your throat and snapping your fingers intothe shape of  a gun." },
                      { text: "Dick: \"I'm Special Operative Richard Wei! I work for The Agency am here regarding last night's incident.\"" },
                      { text: "Dick: \"I seem to have misplaced my credentials, but I'm sure we can clear that up if you'll just direct me to your superior...\"" },
                      { text: "The deputy's expression hasn't changed, but his face is turning red. He taps the badge on his chest." },
                      { text: "Angry Deputy: \"You see this here, 'Dick'? This makes me the only superior you need to be concerned with.\"" },
                      { text: "Angry Deputy: \"And nobody's told me anything about any 'Special Operatives' involving themselves in our case.\"" },
                      { text: "Dick: \"'Richard,' please. Actually, 'Special Operative Wei.'\"" },
                      { text: "Angry Deputy: \"It's time for you to leave, 'Special Operative Dick.' Come back when you find your badge.\"" },
                      {
                        text: "*DOSSIER UPDATED*",
                        func: () => {
                          window.setGame(
                            prev => (
                            {
                              ...prev,
                              quests: {
                                ...prev.quests,
                                report_for_duty: {
                                  ...prev.quests.report_for_duty,
                                  subquests: {
                                    ...prev.quests.report_for_duty.subquests,
                                    convince_drew: {
                                      ...prev.quests.report_for_duty.subquests.convince_drew,
                                      active: true
                                    }
                                  }
                                }
                              }
                            })
                          )
                          
                          window.setGame(prev => ({
                            ...prev,
                            choiceUIActive: window.getGame().sceneActive ? false : true,
                            messageActive: false,
                            interactionUIActive: window.getGame().sceneActive ? true : false,
                            toolsUIActive: window.getGame().sceneActive ? true : false,
                            messageIndex: 0,
                            message: window.getGame().sceneActive == false ? [{ text: window.getGame().currentObj.interactText }] : [{ text: window.getGame().currentObj.displayText }]
                          }))
                          window.setGame(prev => ({
                            ...prev,
                            sceneActive: false
                          }))
                          passTime(300)
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
              () => {
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
              () => window.getGame().locations["jail"].flags.first_go == false
            ),
            
            createAction(
               [
              {
                text: "You enter the Jail."
              }],
               () => {
             handleMsgUI(window.getGame().locations.jail.interactions.go.actions[1].message)
                
                handleChangeLocation("jail")
                passTime(180)
              },
               () => true
            )
          ]
          
        )
      }
    ),
    
    hospital: createLocation(
      
      "Hospital",
      [
        "morgue",
        "municipal_district"
      ],
      {},
      "You see the Hospital.",
      "You are in the Hospital.",
      
     {
        go: createInteraction(
          "Go",
          [
          createAction(
            [
            {
              text: "You enter the Hospital."
            }],
            () => {
              handleMsgUI(window.getGame().locations.hospital.interactions.go.actions[0].message)
              
              handleChangeLocation("hospital")
              passTime(180)
            },
            () => true
          )]
          
        )
      }
      
    ),
    morgue: createLocation(
      
      "Morgue",
      [
        "hospital"
      ],
      {},
       "You see a sign indicating the direction of the morgue.",
      "You are in the morgue.",
     
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
            {
              text: "You enter the morgue."
            }],
            () => {
           
                handleMsgUI(window.getGame().locations.morgue.interactions.go.actions[0].message)
              
              handleChangeLocation("morgue")
              passTime(180)
            },
            () => true
          )])
          
      }  ),
      
    residential_district: createLocation(
      "Residential District",
      ["hotel", "gas_station", "diner", "church","municipal_district", "industrial_district"],
      {},
      "You see the Residential District.",
      "You are in the Residential District.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
                {
                  text: "You enter the Residential District."
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().locations.residential_district.interactions.go.actions[0].message)
                handleChangeLocation("residential_district")
                passTime(300)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    hotel: createLocation(
      "Hotel",
      ["player_room", "residential_district"],
      {},
      "You see the Hotel.",
      "You are in the Hotel.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
                {
                  text: "You enter the Hotel."
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().locations.hotel.interactions.go.actions[0].message)
                handleChangeLocation("hotel")
                passTime(180)
              },
              ()=> true
              
            )
          ]
        )
      }
    ),
    player_room: createLocation(
      "Your Room",
      ["hotel"],
      {},
      "You see your hotel room.",
      "You are in your hotel room.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
                {
                  text: "You enter your hotel room."
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().locations.player_room.interactions.go.actions[0].message)
                handleChangeLocation("player_room")
                passTime(180)
              },
              ()=> true
            )
          ]
        )
      }
    ),
    
    downtown: createLocation(
      "Downtown",
      ["mall", "apartments", "pier","municipal_district", "industrial_district"],
      {},
      "You see Downtown.",
      "You are Downtown.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
                {
                  text: "You go Downtown."
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().locations.downtown.interactions.go.actions[0].message)
                handleChangeLocation("downtown")
                passTime(300)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    industrial_district: createLocation(
      "Industrial District",
      ["trailer_park","cemetary", "mill", "factory","residential_district",
        "downtown"
      ],
      {},
      "You see the Industrial District.",
      "You are in the Industrial District.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
                {
                  text: "You enter the Industrial District."
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().locations.industrial_district.interactions.go.actions[0].message)
                handleChangeLocation("industrial_district")
                passTime(300)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    
    high_school: createLocation(
      "Goodwood High",
      ["residential_district"],
      {},
      "You see Goodwood High School.",
      "You are in the High School.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
                {
                  text: "You enter the High School."
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().locations.high_school.interactions.go.actions[0].message)
                handleChangeLocation("high_school")
                passTime(180)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    
    mall: createLocation(
      "Goodwood Town Mall",
      ["downtown"],
      {},
      "You see the Mall.",
      "You are in the Mall.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
                {
                  text: "You enter the Mall."
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().locations.mall.interactions.go.actions[0].message)
                handleChangeLocation("mall")
                passTime(180)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    
    apartments: createLocation(
      "Apartment Building",
      ["downtown"],
      {},
      "You see an Apartment Building.",
      "You are in the Apartment Building.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
                {
                  text: "You enter the Apartment Building."
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().locations.apartments.interactions.go.actions[0].message)
                handleChangeLocation("apartments")
                passTime(180)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    
    pier: createLocation(
      "Pier",
      ["beach", "lighthouse","downtown"],
      {},
      "You see the Pier.",
      "You are on the Pier.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
                {
                  text: "You walk to the Pier."
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().locations.pier.interactions.go.actions[0].message)
                handleChangeLocation("pier")
                passTime(180)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    
    beach: createLocation(
      "Beach",
      ["pier"],
      {},
      "You see the Beach.",
      "You are on the Beach.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
                {
                  text: "You walk down to the Beach."
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().locations.beach.interactions.go.actions[0].message)
                handleChangeLocation("beach")
                passTime(180)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    
    lighthouse: createLocation(
      "Lighthouse",
      ["pier"],
      {},
      "You see the Lighthouse.",
      "You are in the Lighthouse.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
                {
                  text: "You enter the Lighthouse."
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().locations.lighthouse.interactions.go.actions[0].message)
                handleChangeLocation("lighthouse")
                passTime(180)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    
    gas_station: createLocation(
      "Gas Station",
      ["residential_district"],
      {},
      "You see the Gas Station.",
      "You are in the Gas Station.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
                {
                  text: "You enter the Gas Station."
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().locations.gas_station.interactions.go.actions[0].message)
                handleChangeLocation("gas_station")
                passTime(180)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    
    diner: createLocation(
      "Diner",
      ["residential_district"],
      {},
      "You see the Diner.",
      "You are in the Diner.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
                {
                  text: "You enter the Diner."
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().locations.diner.interactions.go.actions[0].message)
                handleChangeLocation("diner")
                passTime(180)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    church: createLocation(
      "Church",
      ["cemetary","residential_district"],
      {},
      "You see the Church.",
      "You are in the Church.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
                {
                  text: "You enter the Church."
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().locations.church.interactions.go.actions[0].message)
                handleChangeLocation("church")
                passTime(180)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    
    cemetary: createLocation(
      "Cemetary",
      ["church", "industrial_district"],
      {},
      "You see the Cemetary.",
      "You are in the Cemetary.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
                {
                  text: "You enter the Cemetary."
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().locations.cemetary.interactions.go.actions[0].message)
                handleChangeLocation("cemetary")
                passTime(180)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    
    trailer_park: createLocation(
      "Trailer Park",
      ["industrial_district"],
      {},
      "You see the Trailer Park.",
      "You are in the Trailer Park.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
                {
                  text: "You enter the Trailer Park."
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().locations.trailer_park.interactions.go.actions[0].message)
                handleChangeLocation("trailer_park")
                passTime(180)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    factory: createLocation(
      "Abandoned Factory",
      ["industrial_district"],
      {},
      "You see an Abandoned Factory.",
      "You are in the Abandoned Factory.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
                {
                  text: "You enter the Abandoned Factory."
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().locations.factory.interactions.go.actions[0].message)
                handleChangeLocation("factory")
                passTime(180)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    mill: createLocation(
      "Mill",
      ["industrial_district"],
      {},
      "You see the Mill.",
      "You are in the Mill.",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
                {
                  text: "You enter the Mill "
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().locations.mill.interactions.go.actions[0].message)
                handleChangeLocation("mill")
                passTime(180)
              },
              ()=>true
            )
          ]
        )
      }
    )
    



    
      
  /*
  
    : createLocation(
      "",
      [],
      {},
      "",
      "",
      {
        go: createInteraction(
          "Go",
          [
            createAction(
              [
                {
                  text: ""
                }
              ],
              ()=>{
                handleMsgUI(window.getGame().locations..interactions.go.actions[0].message)
                handleChangeLocation()
                passTime()
              },
              ()=>true
            )
          ]
        )
      }
    )
  
  */
      
      
    
    
  })
}