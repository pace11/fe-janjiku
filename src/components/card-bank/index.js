import React from 'react'
import Bca from './bca'
import Mandiri from './mandiri'
import Bri from './bri'
import Dana from './dana'
import Ovo from './ovo'
import Gopay from './gopay'

const Template = [
  {
    id: 'bca',
    component: Bca,
  },
  {
    id: 'mandiri',
    component: Mandiri,
  },
  {
    id: 'bri',
    component: Bri,
  },
  {
    id: 'dana',
    component: Dana,
  },
  {
    id: 'ovo',
    component: Ovo,
  },
  {
    id: 'gopay',
    component: Gopay,
  },
]

const CardBank = (props) =>
  Template.filter((item) => item.id === props.type).map((style) => (
    <style.component key={String(style.id)} {...props} />
  ))

export default CardBank
