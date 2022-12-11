import React from 'react'
import { useParams } from 'react-router-dom'
import Template11 from './template-11'
import Template12 from './template-12'
import Template21 from './template-21'
import Template23 from './template-23'

const Template = [
  {
    type: 'paket-1=template-1',
    component: Template11,
  },
  {
    type: 'paket-1=template-2',
    component: Template12,
  },
  {
    type: 'paket-2=template-1',
    component: Template21,
  },
  {
    type: 'paket-2=template-3',
    component: Template23,
  },
]

export default function Paket1() {
  const { packages, template } = useParams()

  return (
    <React.Fragment>
      {Template.filter((item) => item.type === `${packages}=${template}`).map((style) => (
        <style.component
          key={style.type}
          packages={packages}
          template={template}
        />
      ))}
    </React.Fragment>
  )
}
