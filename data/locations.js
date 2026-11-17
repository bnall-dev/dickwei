import { handleChangeLocation, createAction, createInteraction, passTime , setMessageActive, setInteractionUIActive, setBackgroundImg, setToolsUIActive} from "../functions/game"



export function locationDataInit() {
  
  function createLocation(id, name, subLocations, flags, interactText, displayText, interactions) {
    return {
      type: "location",
      id: id,
      name: name,
      subLocations: subLocations,
      flags: flags,
      interactText: interactText,
      displayText: displayText,
      interactions: interactions
    }
  }
  
 function handleMsgUI(cat, obj, act, i) {
  window.setGame(
    prev => ({
      ...prev,
      messageIndex: 0,
      choiceUIActive: false,
     interactionUIActive: true,
     toolsUIActive: true,
      message: window.getGame()[cat][obj].interactions[act].actions[i].message
        
    
      
    })
  )
}
  
  return (
  {
    outskirts: createLocation(
      "outskirts",
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

                handleMsgUI("locations", "outskirts", "go", 0)
                handleChangeLocation("outskirts")
                setBackgroundImg("outskirts")
                passTime(300)
                
              },
              () => true
              
              
            )
          ])
      }),
    
    municipal_district: createLocation(
      "municipal_district",
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
             
              handleChangeLocation("municipal_district")
              handleMsgUI("locations", "municipal_district", "go", 0)
              setBackgroundImg("municipal_district")
              passTime(300)
              
            },
             () => true
          )]
          
        )
      }
    ),
    
    town_hall: createLocation(
      "town_hall",
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
              

              
 handleMsgUI("locations", "town_hall", "go", 0)
              
              handleChangeLocation("town_hall"
              )
              setBackgroundImg("town_hall")
                passTime(180)
            },
            () => true
            
          )]
        )
      }
    ),
    
    mayors_office: createLocation(
      "mayors_office",
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
              

              
             handleMsgUI("locations", "mayors_office", "go", 0)
              handleChangeLocation("mayors_office")
              setBackgroundImg("mayors_office")
              passTime(180)
              
            },
            () => true
          )]
        )
      }
    ),
    
    sheriffs_station: createLocation(
      "sheriffs_station",
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
              
              handleMsgUI("locations", "sheriffs_station", "go", 0)
              handleChangeLocation("sheriffs_station")
              setBackgroundImg("sheriffs_station")
              passTime(180)
              
            },
            () => true
          )]
          
        )
      }
    ),
    
    jail: createLocation(
      "jail",
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
          [
            
            createAction(
               [
              {
                text: "You enter the Jail."
              }],
               () => {
             handleMsgUI("locations", "jail", "go", 0)
                setBackgroundImg("jail")
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
      "hospital",
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
              handleMsgUI("locations", "hospital", "go", 0)
              
              handleChangeLocation("hospital")
              setBackgroundImg("hospital")
              passTime(180)
            },
            () => true
          )]
          
        )
      }
      
    ),
    morgue: createLocation(
      "morgue",
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
           
                handleMsgUI("locations", "morgue", "go", 0)
              
              handleChangeLocation("morgue")
              setBackgroundImg("morgue")
              passTime(180)
            },
            () => true
          )])
          
      }  ),
      
    residential_district: createLocation(
      "residential_district",
      "Residential District",
      ["hotel", "gas_station", "diner", "church","municipal_district", "industrial_district"],
      {
        road_fixed: false
      },
      "You see the Residential District.",
      "You are in the Residential District.",
      {
        go: createInteraction(
          "Go",
          [
             createAction(
              [
                {
                  text: "The road is blocked."
                }
              ],
              ()=>{
                handleMsgUI("locations", "residential_district", "go", 0)
                passTime(60)
                setMessageActive(true)
                setInteractionUIActive(false)
                setToolsUIActive(false)
                
              },
              ()=>window.getGame().locations.residential_district.flags.road_fixed== false
            ),
            createAction(
              [
                {
                  text: "You enter the Residential District."
                }
              ],
              ()=>{
                handleMsgUI("locations", "residential_district", "go", 1)
                handleChangeLocation("residential_district")
                setBackgroundImg("residential_district")
                passTime(300)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    hotel: createLocation(
      "hotel",
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
                handleMsgUI("locations", "hotel", "go", 0)
                handleChangeLocation("hotel")
                setBackgroundImg("hotel")
                passTime(180)
              },
              ()=> true
              
            )
          ]
        )
      }
    ),
    player_room: createLocation(
      "player_room",
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
                handleMsgUI("locations", "player_room", "go", 0)
                handleChangeLocation("player_room")
                setBackgroundImg("player_room")
                passTime(180)
              },
              ()=> true
            )
          ]
        )
      }
    ),
    
    downtown: createLocation(
      "downtown",
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
                handleMsgUI("locations", "downtown", "go", 0)
                handleChangeLocation("downtown")
                setBackgroundImg("downtown")
                passTime(300)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    industrial_district: createLocation(
      "industrial_district",
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
                handleMsgUI("locations", "industrial_district", "go", 0)
                handleChangeLocation("industrial_district")
                setBackgroundImg("industrial_district")
                passTime(300)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    
    high_school: createLocation(
      "high_school",
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
                handleMsgUI("locations", "high_school", "go", 0)
                handleChangeLocation("high_school")
                setBackgroundImg("high_school")
                passTime(180)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    
    mall: createLocation(
      "mall",
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
                handleMsgUI("locations", "mall", "go", 0)
                handleChangeLocation("mall")
                setBackgroundImg("mall")
                passTime(180)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    
    apartments: createLocation(
      "apartments",
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
                handleMsgUI("locations", "apartments", "go", 0)
                handleChangeLocation("apartments")
                setBackgroundImg("apartments")
                passTime(180)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    
    pier: createLocation(
      "pier",
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
                handleMsgUI("locations", "pier", "go", 0)
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
      "beach",
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
                handleMsgUI("locations", "beach", "go", 0)
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
      "lighthouse",
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
                handleMsgUI("locations", "lighthouse", "go", 0)
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
      "gas_station",
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
                handleMsgUI("locations", "gas_station", "go", 0)
                handleChangeLocation("gas_station")
                setBackgroundImg("gas_station")
                passTime(180)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    
    diner: createLocation(
      "diner",
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
                handleMsgUI("locations", "diner", "go", 0)
                handleChangeLocation("diner")
                setBackgroundImg("diner")
                passTime(180)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    church: createLocation(
      "church",
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
                handleMsgUI("locations", "church", "go", 0)
                handleChangeLocation("church")
                setBackgroundImg("church")
                passTime(180)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    
    cemetary: createLocation(
      "cemetary",
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
                handleMsgUI("locations", "cemetary", "go", 0)
                handleChangeLocation("cemetary")
                setBackgroundImg("cemetary")
                passTime(180)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    
    trailer_park: createLocation(
      "trailer_park",
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
                handleMsgUI("locations", "trailer_park", "go", 0)
                handleChangeLocation("trailer_park")
                setBackgroundImg("trailer_park")
                passTime(180)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    factory: createLocation(
      "factory",
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
                handleMsgUI("locations", "factory", "go", 0)
                handleChangeLocation("factory")
                setBackgroundImg("factory")
                passTime(180)
              },
              ()=>true
            )
          ]
        )
      }
    ),
    mill: createLocation(
      "mill",
      "Saw Mill",
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
                handleMsgUI("locations", "mill", "go", 0)
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