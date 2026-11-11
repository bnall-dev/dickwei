import {triggerFlag} from "../functions/game"

export function questDataInit(){
  
  function createQuest(name, active, complete, failed, subquests) {
    return{
      name: name,
      active: active,
      complete: complete,
      failed: failed,
      subquests: subquests
    }
  }
  
  function createSubquest(objective, description, active, complete, failed) {
    return {
      objective: objective,
      description: description,
      active: active,
      complete: complete,
      failed: failed
    }
  }
  
  return (
    {
      report_for_duty: createQuest(
        "Answering the Call",
        true,
        false,
        false,
        {
          report_to_sheriff: createSubquest(
            "Report to the sheriff's station.",
            "First order of business is to get acquainted with the local authorities.",
            true,
            false,
            false
        ),
          convince_drew: createSubquest(
            "Convince the deputy that you're you.",
            "That guy sure had a stick up his... Well, it's pretty bad that I lost my badge... I'll have to retrace my steps.",
            false,
            false,
            false
          )
        }
      )
      
/*
      
  : createQuest(
   "",
   false,
   false,
   false,
   {
     : createSubquest(
       "",
       "",
       true,
       false,
       false
     )
     
   }
 )
      
*/
      
    }
  )
}