import { triggerFlag, setMessage, setMessageActive, setDossierUIActive, setChoiceUIActive } from "../functions/game"

export function documentsDataInit() {
  
  function createDocument(name, active) {
    return {
      name: name,
      active: active,
      editions: []
    }
  }
  
  
  return (
  {
    mission_brief: {
      name: "Mission Brief",
      active: true,
      func: (setDossMods) => {
        setMessage([{
          text: "Case #D5007004 \nAssigned Operative: [SO] R. Wei\n\nOn March 1, 20XX, at 4:30AM, a resident of the remote town of GoodWood was found dead. Initial reports from local authorities indicate murder. Details suggest possible connection to [REDACTED], necessitating immediate intervention.\n\nMission Objective: Operator is to assist local authorities in investigating the murder and apprehending the culprit. Assess validity of [REDACTED] involvement and proceed accordingly.",
          func: () => {
            setDossierUIActive(true)
            setChoiceUIActive(false)
            setMessage([{ text: "You review your case files." }])
          }
        }])
        setMessageActive(true)
        setDossierUIActive(false)
      }
      
    },
    handbook: {
      name: "Agency Handbook",
      active: true,
      chapters: [
      [{
        text: "Introduction",
        func: ()=>{setChoiceUIActive(false)
          setDossierUIActive(true)
          
          window.setGame(prev=>({...prev,
            dossModules: "handbook"
          }))
          window.getGame().documents.handbook.func()
        }
      }],
      [{
        text: "Mastering the Craft",
        func: ()=>{setChoiceUIActive(false)
          setDossierUIActive(true)

          window.setGame(prev=>({...prev,
            dossModules: "handbook"
          }))
          window.getGame().documents.handbook.func()
        }
      }],
      [
        {
          text: "Tools of the Trade\n\nOperatives are issued a standard set of tools to aid in case work.\n\nBadge - The Operative's primary means of identification. Operative class grants Top Secret security clearance and supercedence over local jurisdictions.\n\nDossier - A specially designed organizational tool for tracking mission objectives and organizing case-related documents."
        },
        {
        text:"Smart Phone - A cellular communications device. Sattelite connection provides high speed internet access globally. Several proprietary applications are installed to assist in case work. Operatives are encouraged not to install applications for personal use.\n\nSidearm - The Operative's last resort in defense of self or civilian life. Typically a standard issue 9mm handgun, Operatives of [Special] deaignation are permitted personal choice of model.",
        func: ()=>{setChoiceUIActive(false)
          setDossierUIActive(true)

          window.setGame(prev=>({...prev,
            dossModules: "handbook"
            
          }))
          window.getGame().documents.handbook.func()
        }
      }],
      [{
        text: "Professionalism in the Line of Duty\n\nOperatives are expected to represent The Agency to the highest standard.\n\n- Use of drugs, alcohol, and tobacco products is strictly forbidden while on duty.\n- Fraternization or personal relationships with individuals relevant to case work is strictly forbidden.\n\n* While Operatives of [Special] designation are permitted additional liberties in the field, it is highly encouraged to follow these rules as guidelines.",
        func: ()=>{setChoiceUIActive(false)
          setDossierUIActive(true)

          window.setGame(prev=>({...prev,
            dossModules: "handbook"
          }))
          window.getGame().documents.handbook.func()
        }
      }]],
    
      func: () => {
        window.setGame(prev => ({
          ...prev,
          dossModule: "handbook",
          message: [{text:"The Agency Handbook\nOperative Field Guide & Reference\n\nTable of Contents\n\nCh. 1: Introduction\nCh. 2: Mastering the Craft\nCh. 3: Tools of the Trade\nCh. 4: Professionalism in the Line of Duty"}]
        }))
        
      }
    },
    persons_of_interest: {
      name: "Persons of Interest",
      active: true,
      npcs: {
        doctor: [{
          text: "Name: Trey, Devon\nAge: 40\nOccupation: Doctor"
          ,
        func: ()=>{setChoiceUIActive(false)
          setDossierUIActive(true)
          window.setGame(prev=>({...prev,
            dossModules: "persons_of_interest"
          }))
          window.getGame().documents.persons_of_interest.func()
        }
        }]
      },
      func: () => {
        window.setGame(prev => ({
          ...prev,
          dossModule: "persons_of_interest",
          message: [{ text: "This file contains information on individuals you meet during your investigation." }]
          
        }))
      }
    },
    newspaper: {
      name: "Good Times Daily",
      active: false,
      editions: [],
      editionsData: [
        {
          article:[{
            text:"Miss GoodWood Pageant Announced!\n\nOn Saturday, Mayor Hawthorne made an announcement that the annual Miss GoodWood Pageant will be held at the end of the month. Applications can be obtained and submitted at the Town Hall.",
            func: ()=>{
              setChoiceUIActive(false),
              setDossierUIActive(true)
              window.setGame(prev=>({...prev,
                dossModule: "newspaper"
              }))
            }
          }]
      
        }
      ],
      func: () => {
        window.setGame(prev => ({
          ...prev,
          dossModule: "newspaper",
          message: [{ text: "The Good Times Daily Newspaper\n\"How Things Are in Your Neck of the Woods\"\n\n Community Funded" }]
        }))
      }
    }
    
    /*

          : createDocument(
            "",
            true
          )

    */
    
  })
}