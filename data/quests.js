import {triggerFlag} from "../functions/game"

export function questDataInit(){
  return (
    {
      report_for_duty: {
        name: "Answering the Call",
        active: true,
        complete: false,
        subquests: {
          report_to_sheriff: {
            objective: "Report to the sheriff's station.",
            description:"First order of business is to get acquainted with the local authorities.",
            active: true,
            complete: false
          },
          convince_drew: {
            objective: "Convince the deputy that you're you.",
            description: "That guy sure had a stick up his... Well, it's pretty bad that I lost my badge... I'll have to retrace my steps.",
            active: false,
            complete: false
          }
        }
      }
      
    }
  )
}