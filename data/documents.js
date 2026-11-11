import {triggerFlag} from "../functions/game"

export function documentsDataInit(){
  
  function createDocument(name, active){
    return {
      name: name,
      active: active
    }
  }
  
  
  return (
    {
      mission_brief: createDocument(
        "Mission Brief",
        true
        
      ),
      handbook: createDocument(
        "Agency Handbook",
        true
      )
      
/*

      : createDocument(
        "",
        true
      )

*/      
      
    }
  )
}