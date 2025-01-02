import React from 'react'
import BreadCrumb from './bread-crumb'

type Props = {}

const InfoBar = (props: Props) => {
  return (
    <div className="flex w-full justify-between items-center py-1 mb-8 ">
      <BreadCrumb />
    </div>
  )
}

export default InfoBar
