import React from 'react'
import { useParams } from 'react-router-dom'
import Template1 from './template-1'
import Template2 from './template-2'

const Template = [
  {
    type: 'template-1',
    component: Template1,
  },
  {
    type: 'template-2',
    component: Template2,
  },
]

export default function Paket1() {
  const { template } = useParams()

  return (
    <React.Fragment>
      {Template.filter((item) => item.type === template).map((style) => (
        <style.component
          key={style.type}
          template={template}
        />
      ))}
    </React.Fragment>
  )
}
