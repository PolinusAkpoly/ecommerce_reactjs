import { webApiUrL } from '../enviromments/enviromment'
import { get, post } from './fetchhelpers'
import { User } from '../models/user';
import { setItem } from '../services/localstorage.service';

export const getDatas = async (entityName: string) => {
  const url = webApiUrL + entityName

  const datas = await get(url)
  return datas
}

export const getDatasByPage = async (entityName: string, page = 1, limit = 5) => {
  const url = webApiUrL + entityName + "/by/page" + "?pageNumber=" + page + "&pageLimit=" + limit

  const datas = await get(url)
  return datas
}

export const signup = async (user: User) => {
  const url = webApiUrL + "user/signup"
  const data = await post(url, user)

  return data

}

export const signin = async (user: User) => {
  const url = webApiUrL + "user/signin"
  const datas = await post(url, user)

  if (datas.isSuccess) {
    setItem("auth", {token: datas.token, userId: datas.userId})
  }

  return datas
}







