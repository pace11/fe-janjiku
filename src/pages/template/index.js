import React from 'react'
import { useParams } from 'react-router-dom'
import Template1 from './template-1'
import Template2 from './template-2'

const Template = [
  {
    type: 'paket-1=template-1',
    component: Template1,
  },
  {
    type: 'paket-2=template-1',
    component: Template2,
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
