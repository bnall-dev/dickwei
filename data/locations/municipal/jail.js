import { createLocation, handleMsgUI } from "../../locations"
import { createInteraction, createAction, passTime, setBackgroundImg, handleChangeLocation, setNpcImg, setSpeaker, setMessageActive, setInteractionUIActive, setToolsUIActive, setMessage, setChoiceUIActive } from "../../../functions/game"

export const jail = createLocation(
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
              text: "As you reach for the knob, the door swings open, a man rushes out, colliding with you and sending his coffee splashing onto himself."
            },
            {
              text: "The man, a deputy by his uniform, wrings coffee from his jacket in frustration before turning his attention to you.",
              func: () => {
                
                setSpeaker("drew")
              }
            },
            {
              text: "\"What the hell is wrong with you?!\"",
              func: () => {
                setNpcImg("player")
                setSpeaker("player")
              }
            },
            {
              text: "\"Hey man, watch the suit!\"",
              func: () => {
                setNpcImg("drew")
                setSpeaker("")
              }
            },
            {
              text: "The deputy steps forward and jams a gloved finger at your chest.",
              func: () => {
                
                setSpeaker("drew")
              }
            },
            {
              text: "\"Listen up, buddy! You've got five seconds to explain who you are, trying to break into the jail, before I throw you in there myself!\""
            },
            {
              text: "\"... And put out that cigarette!\"",
              func: () => {
                
                setSpeaker("")
              }
              
            },
            {
              
              text: "You get the sense that he, too, is a man of action. You savor the moment, slipping your hand into your jacket's inner pocket to pull out...",
              func: () => {
                setChoiceUIActive(false)
                setMessageActive(true)
                setMessage(
                  window.getGame().player.inventory.includes("player_badge") ? [
                    {
                      text: "Your badge!",
                      func: () => {
                        setNpcImg("player")
                        setSpeaker("player")
                      }
                    },
                    { text: "\"I'm Special Operative Richard Wei, here on behalf of The Agency!\"" },
                    {
                      text: "\"I'll need to speak with the town's sheriff regarding this morning's incident.\"",
                      func: () => {
                        setNpcImg("drew")
                        setSpeaker("")
                      }
                    },
                    {
                      text: "The deputy furrows his brow and snatches your badge from your hand and scrutinizes it deeply before tossing it back.",
                      func: () => {
                        setSpeaker("drew")
                      }
                    },
                    {
                      text: "\"Hmm... Nobody told me anything about any 'Special Operatives' getting involved...\""
                    },
                    {
                      text: "\"Well... I guess we better wait for the Sheriff to arrive to verify all this... He should be returning any minute.\"",
                      func: () => {
                        setSpeaker("")
                        setNpcImg("")
                      }
                    },
                    {
                      text: "As he says this, you hear the front door open behind you and an older man in a sheriff's uniform enters.",
                      func: () => {
                        setNpcImg("drew")
                        setSpeaker("drew")
                      }
                    },
                    {
                      text: "\"Sheriff Hayter!\"",
                      func: () => {
                        
                        
                        setNpcImg(""),
                          setSpeaker("")
                        
                      }
                    },
                    {
                      text: "You notice the Sheriff sigh softly as he sets down his belongings.",
                      func: () => {
                        setNpcImg("sheriff")
                        setSpeaker("sheriff")
                      }
                    },
                    {
                      text: "\"Yes, what is it, Drew?\"",
                      func: () => {
                        setSpeaker("drew")
                        setNpcImg("drew")
                      }
                    },
                    {
                      text: "\"Sheriff, this man claims to be from The Agency, here about... what happened this morning... is he serious??\"",
                      func: () => {
                        setSpeaker("")
                        setNpcImg("player")
                      }
                    },
                    {
                      text: "You present your badge as you reach for a handshake.",
                      func: () => {
                        setSpeaker("player")
                      }
                    },
                    {
                      text: "\"Special Operative Richard Wei, sir.\"",
                      func: () => {
                        setSpeaker("")
                        setNpcImg("sheriff")
                      }
                    },
                    {
                      text: "The Sheriff barely glances at your badge before firmly shaking your hand with a weary smile.",
                      func: () => {
                        setSpeaker("sheriff")
                      }
                    },
                    {
                      text: "\"Ah yes, so you're the one they sent. Dave Hayter, Sheriff of GoodWood. We appreciate your being here so urgently.\"",
                      func: () => {
                        setSpeaker("drew")
                        setNpcImg("drew")
                        window.setGame(prev => ({
                          ...prev,
                          npcs: {
                            ...prev.npcs,
                            sheriff: {
                              ...prev.npcs.sheriff,
                              flags: {
                                ...prev.npcs.sheriff.flags,
                                have_met: true
                              }
                            }
                          }
                        }))
                      }
                    },
                    {
                      text: "\"Hmph!\"",
                      func: () => {
                        setSpeaker("sheriff")
                        setNpcImg("sheriff")
                      }
                    },
                    {
                      text: "\"Drew... mind your manners. You'll have to pardon Deputy Bernard, Operative Wei. I may have neglected to inform him of your arrival. He can be... protective of our little jurisdiction.\"",
                      func: () => {
                        setNpcImg("player")
                        setSpeaker("player")
                        window.setGame(prev => ({
                          ...prev,
                          npcs: {
                            ...prev.npcs,
                            drew: {
                              ...prev.npcs.drew,
                              flags: {
                                ...prev.npcs.drew.flags,
                                have_met: true
                              }
                            }
                          }
                        }))
                      }
                    },
                    {
                      text: "\"Heh. Nice to meet ya, 'Drew.' I promise I'm not here to step on anybody's toes.\"",
                      func: () => {
                        setNpcImg("drew")
                        setSpeaker("drew")
                      }
                    },
                    {
                      text: "\"That's Deputy Bernard!!\"",
                      func: () => {
                        setSpeaker("player")
                        setNpcImg("player")
                      }
                    },
                    {
                      text: "\"Sheriff, I'd like to get to business immediately. I've reviewed your initial report and understand that the autopsy has yet to be performed?\"",
                      func: () => {
                        setNpcImg("sheriff")
                        setSpeaker("sheriff")
                      }
                    },
                    {
                      text: "\"That's correct. I've informed Dr. Trey at the hospital that you would be joining us. We should head there immediately.\""
                    },
                    {
                      text: "\"Drew and I will have to meet you there. I imagine you'd prefer you own vehicle to the back of a squad car.\""
                    }
                    
                  ] :
                  [
                    
                    { text: "... Nothing!?" },
                    {
                      text: "You see your empty hand held out limply in the reflection in the deputy's sunglasses. His expression doesn't change but you feel a rise in tension.",
                      func: () => {
                        setNpcImg("player")
                        
                      }
                    },
                    {
                      text: "You swiftly regain your composure and snap your fingers into the shape of a gun.",
                      func: () => {
                        
                        setSpeaker("player")
                      }
                    },
                    { text: "\"I'm Special Operative Richard Wei, here on behalf of The Agency!\"" },
                    {
                      text: "\"I appear to have misplaced my credentials for the moment, but I'm sure we can get that cleared up if you'll just direct me to your superior...\"",
                      func: () => {
                        
                        setSpeaker("")
                        setNpcImg("drew")
                      }
                    },
                    {
                      text: "The deputy seems to process this information and then steps very close to you, tapping a silver badge pinned to his jacket, which still drips the remains of the coffee.",
                      func: () => {
                        setSpeaker("drew")
                      }
                    },
                    { text: "\"You see this here, 'Dick'? This makes me the only authority you need to concern yourself with. And nobody told me anything about any 'Special Operative' getting involved in our town.\"" },
                    {
                      text: "\"So if you can't show me some ID, I think you'd best go back to wherever it is you came from.\"",
                      func: () => {
                        setNpcImg("player")
                        setSpeaker("player")
                      }
                    },
                    { text: "\"... Um, that's 'Richard'.\"" },
                    {
                      text: "\"... Actually, it's 'Special Operative Wei'!\"",
                      func: () => {
                        setNpcImg("drew")
                        setSpeaker("drew")
                      }
                    },
                    {
                      text:"\"It's time for you to leave, 'Dick'.\"" ,
                      func: ()=>{
                         setSpeaker("")
                         setNpcImg("")
                      }
                      
                    },
                    {
                      text:"*Dossier Updated*",
                      func: () => {
                       
                        setChoiceUIActive(false)
                        setInteractionUIActive(true)
                        setToolsUIActive(true)
                        setMessage([{ text: window.getGame().locations[window.getGame().player.location].displayText }])
                        window.setGame(prev => ({
                          ...prev,
                          quests: {
                            ...prev.quests,
                            report_for_duty:
                            {
                              ...prev.quests.report_for_duty,
                              subquests:
                              {
                                ...prev.quests.report_for_duty.subquests,
                              convince_drew: {
                                  ...prev.quests.report_for_duty.subquests.convince_drew,
                                  active: true
                                }
                              }
                            }
                          },
                          npcs: {
                            ...prev.npcs,
                            drew: {
                              ...prev.npcs.drew,
                              specialLocation: ""
                            }
                          }
                        }))
                      }
                    }
                    
                  ]
                )
                
              }
              
            }
            
            
          ],
          () => {
            handleMsgUI("locations", "jail", "go", 0)
            setMessageActive(true)
            setInteractionUIActive(false)
            setToolsUIActive(false)
            setNpcImg("drew")
            window.setGame(prev=>({...prev,
              locations: {
                ...prev.locations,
                sheriffs_station: {
                  ...prev.locations.sheriffs_station,
                  flags: {
                    ...prev.locations.sheriffs_station.flags,
                    player_needs_badge : true
                  }
                }
              }
            }))
            passTime(300)
          },
          () => window.getGame().locations.jail.flags.first_go == false
        ),
        createAction(
          [
          {
            text: "You enter the Jail."
          }],
          () => {
            handleMsgUI("locations", "jail", "go", 1)
            setBackgroundImg("jail")
            handleChangeLocation("jail")
            passTime(180)
          },
          () => true
        )
      ]
      
    )
  }
)