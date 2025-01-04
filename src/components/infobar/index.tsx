import React from 'react'
import BreadCrumb from './bread-crumb'

type Props = {}

const InfoBar = (props: Props) => {
  return (
    <div className="flex w-full justify-between items-center">
      <BreadCrumb />
    </div>
  )
}

export default InfoBar
