import {triggerFlag} from "../functions/game"

export function documentsDataInit(){
  
  function createDocument(name, active){
    return {
      name: name,
      active: active,
      editions: [] 
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
      ),
      newspaper: createDocument(
        "Good Times Daily",
        false
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