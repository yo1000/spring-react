import React from 'react';
import {css} from "@emotion/react";

export default function Panel({border = true, ...props}) {
  const style = css`
    .panel {
      margin-top: 0;
    }
  `

  return (
    <div css={style} className={`panel mt-6 bg-white ${border ? "shadow ring-1 ring-gray-900/5 rounded-lg" : ""}`}>
      {props.children}
    </div>
  )
}

export function Section({...props}) {
  return (
    <section className="section gap-x-6 px-6 py-6 border-t border-gray-900/10 first-of-type:border-none">
      {props.children}
    </section>
  )
}

export function Grid({...props}) {
  return (
    <div className={`grid-layout sm:grid grid-cols-12 gap-x-4 gap-y-4 mt-4 first:mt-0`}>
      {props.children}
    </div>
  )
}

export function Flow({align, ...props}) {
  return (
    <div className={`flow-layout flex ${align === "right" ? "justify-end" : ""} gap-x-4 gap-y-4 mt-4 first:mt-0`}>
      {props.children}
    </div>
  )
}

export function FullWidth({...props}) {
  return (
    <div className="full-width col-span-12 mt-4 sm:mt-0 first:mt-0">
      {props.children}
    </div>
  )
}

export function HalfWidth({...props}) {
  return (
    <div className="half-width col-span-6 mt-4 sm:mt-0 first:mt-0">
      {props.children}
    </div>
  )
}

export function ThirdWidth({...props}) {
  return (
    <div className="third-width col-span-4 mt-4 sm:mt-0 first:mt-0">
      {props.children}
    </div>
  )
}

export function TwoThirdsWidth({...props}) {
  return (
    <div className="two-thirds-width col-span-8 mt-4 sm:mt-0 first:mt-0">
      {props.children}
    </div>
  )
}

export function QuarterWidth({...props}) {
  return (
    <div className="quarter-width col-span-3 mt-4 sm:mt-0 first:mt-0">
      {props.children}
    </div>
  )
}
