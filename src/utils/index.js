import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export const useQuery = () => {
  const { search } = useLocation()

  return useMemo(() => new URLSearchParams(search), [search])
}

export const messageTelegram = (params) => {
  return `Halo admin. ada pesanan baru nih **invoice id: ${params[0]?.id}, **nama: ${params[0]?.name}, **phone: ${params[0]?.phone}. Untuk informasi detailnya bisa dicek disini ya min ${process.env.REACT_APP_GOOGLE_SHEET}`
}

export const generateIdRegister = () => {
  const lastNumber = Math.random().toFixed(6) * 1000000
  const date = new Date().toLocaleString()
  const sliceDate = date.split(',')

  return `INV/${sliceDate[0].replace(/[/]/g, '')}/${lastNumber}`
}
