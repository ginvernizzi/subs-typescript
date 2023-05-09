import { Sub, SubApi } from "../types"

const INITIAL_STATE = [ {
    nick: "Juancito",
    avatar: "https://i.pravatar.cc/150?u=juancito",
    submonths: 5,
    description: ""
  },
  {
    nick: "caro",
    avatar: "https://i.pravatar.cc/150?u=caro",
    submonths: 7,
    description: "hermana mayor"
  },
  {
    nick: "almiron",
    avatar: "https://i.pravatar.cc/150?u=almiron",
    submonths: 2,
    description: "soy de la boca, y ya vamos a mostrar"
  }]

const URL_SUBS = "http://localhost:9000/subs"

export const getSubsMemory = () => {
  return INITIAL_STATE
}

export const getSubsFromApi = (): Promise<Array<SubApi>> => {
  return fetch(URL_SUBS)
    .then(res => res.json())
    .then(data => data)
    .catch((err) => {
    throw new Error
  });
}

export const mapSubsFromApiToSubs = (subs:Array<SubApi>):Array<Sub> =>{
  return subs.map((sub) => {
    return {...sub,
      avatar: sub.profileUrl,
      submonths: sub.months
    }
  })
}