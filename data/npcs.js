import { triggerFlag, createInteraction, createAction, handleMsgUI , passTime} from "../functions/game"

import {sheriff} from "./npcs/sheriff"
import {drew} from "./npcs/drew"
import {gwen} from "./npcs/gwen"
import {rikki} from "./npcs/rikki"
import {breezy} from "./npcs/breezy"
import {sabra} from "./npcs/sabra"
import {heather} from "./npcs/heather"
import {monica} from "./npcs/monica"
import {old_woman} from "./npcs/old_woman"
import {doctor} from "./npcs/doctor"
import {nurse} from "./npcs/nurse"
import {ghost} from "./npcs/ghost"
import {mayor} from "./npcs/mayor"
import {waitress} from "./npcs/waitress"
import {cook} from "./npcs/cook"
import {bartender} from "./npcs/bartender"
import {mechanic} from "./npcs/mechanic"
import {priest} from "./npcs/priest"
import {principal} from "./npcs/principal"
import {mailman} from "./npcs/mailman"
import {homeless} from "./npcs/homeless"
import {teacher} from "./npcs/teacher"
import {coach} from "./npcs/coach"
import {lawyer} from "./npcs/lawyer"


export function createNpc(id, name, preName, location, specialLocation, flags, interactText, interactions, schedule) {
  return {
    id: id,
    type: "npc",
    name: name,
    preName: preName,
    location: location,
    specialLocation: specialLocation,
    flags: flags,
    interactText: interactText,
    interactions: interactions,
    schedule: schedule
  }
}

export function npcDataInit() {
  
  return (
  {
    sheriff: sheriff,
    drew: drew,
    
    gwen: gwen,
    sabra: sabra,
    rikki: rikki,
    breezy: breezy,
    heather: heather,
    monica: monica,
    ghost: ghost,
    
    mayor: mayor,
    doctor: doctor,
    nurse: nurse,
    waitress: waitress,
    cook: cook,
    bartender: bartender,
    mechanic: mechanic,
    priest: priest,
    principal: principal,
    teacher: teacher,
    coach: coach,
    lawyer: lawyer,
    mailman: mailman,
    homeless: homeless,
    
    old_woman: old_woman


    
  })
}