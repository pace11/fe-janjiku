import Axios from 'axios'

const apiUrl = 'https://api.steinhq.com/v1/storages/605364b8f62b6004b3eb6788'

export const getListGreetings = async () => {
  try {
    const { data } = await Axios({
      method: 'GET',
      url: `${apiUrl}/inbox`
    })
    return data
  } catch (error) {
    console.error(error)
  }
} 

export const postGreeting = async (params) => {
  try {
    let response
    const { status } = await Axios({
      method: 'POST',
      url: `${apiUrl}/inbox`,
      data: JSON.stringify(params)
    })
    if (status === 200) {
      const { data } = await Axios({
        method: 'GET',
        url: `${apiUrl}/inbox`,
      })
      response = data
    }
    return response
  } catch (error) {
    console.error(error)
  }
} 
