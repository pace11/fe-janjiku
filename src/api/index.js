import Axios from 'axios'
import { messageTelegram } from '../utils'

export const getListGreetings = async () => {
  try {
    const { data } = await Axios({
      method: 'GET',
      url: `${process.env.REACT_APP_URL_STEIN}/inbox_fina`,
    })
    return data
  } catch (error) {
    console.error(error)
  }
}

export const getInvoiceById = async (params) => {
  try {
    const filter = {
      id: params,
    }
    const response = await Axios.get(
      `${process.env.REACT_APP_URL_STEIN}/register`,
      { params: { search: JSON.stringify(filter) } },
    )
    return response
  } catch (error) {
    console.error(error)
  }
}

export const postGreeting = async (params) => {
  try {
    let response
    const { status } = await Axios({
      method: 'POST',
      url: `${process.env.REACT_APP_URL_STEIN}/inbox_fina`,
      data: JSON.stringify(params),
    })
    if (status === 200) {
      const { data } = await Axios({
        method: 'GET',
        url: `${process.env.REACT_APP_URL_STEIN}/inbox_fina`,
      })
      response = data
    }
    return response
  } catch (error) {
    console.error(error)
  }
}

export const postRegister = async (params) => {
  try {
    const response = await Axios({
      method: 'POST',
      url: `${process.env.REACT_APP_URL_STEIN}/register`,
      data: JSON.stringify(params),
    })
    if (response?.status === 200) {
      await Axios({
        method: 'GET',
        url: `${process.env.REACT_APP_TELEGRAM_API_URL}/${
          process.env.REACT_APP_TELEGRAM_BOT_ID
        }:${
          process.env.REACT_APP_TELEGRAM_TOKEN
        }/sendMessage?chat_id=${
          process.env.REACT_APP_TELEGRAM_CHAT_ID
        }&text=${messageTelegram(params)}`,
      })
    }
    return response
  } catch (error) {
    console.error(error)
  }
}
