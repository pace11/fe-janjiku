import React from 'react'
import { useParams } from 'react-router-dom'
import Template1 from './template-1'

const Template = [
  {
    type: 'template-1',
    component: Template1,
  },
]

export default function Paket1() {
  const { packages, template } = useParams()

  return (
    <React.Fragment>
      {Template.filter((item) => item.type === template).map((style, idx) => (
        <style.component
          key={String(idx)}
          packages={packages}
          template={template}
        />
      ))}
    </React.Fragment>
  )
}
