import React from 'react';

export default function Panel({...props}) {
  return (
    <div className="mt-6 bg-white shadow ring-1 ring-gray-900/5 rounded-lg">
      {props.children}
    </div>
  )
}

export function Section({...props}) {
  return (
    <section className="gap-x-6 px-6 py-6 border-t border-gray-900/10 first-of-type:border-none">
      {props.children}
    </section>
  )
}

export function Grid({...props}) {
  return (
    <div className={`sm:grid grid-cols-12 gap-x-4 gap-y-4 mt-4 first:mt-0`}>
      {props.children}
    </div>
  )
}

export function Flow({align, ...props}) {
  return (
    <div className={`flex ${align === "right" ? "justify-end" : ""} gap-x-4 gap-y-4 mt-4 first:mt-0`}>
      {props.children}
    </div>
  )
}

export function FullWidth({...props}) {
  return (
    <div className="col-span-12 mt-4 sm:mt-0 first:mt-0">
      {props.children}
    </div>
  )
}

export function HalfWidth({...props}) {
  return (
    <div className="col-span-6 mt-4 sm:mt-0 first:mt-0">
      {props.children}
    </div>
  )
}

export function ThirdWidth({...props}) {
  return (
    <div className="col-span-4 mt-4 sm:mt-0 first:mt-0">
      {props.children}
    </div>
  )
}

export function TwoThirdsWidth({...props}) {
  return (
    <div className="col-span-8 mt-4 sm:mt-0 first:mt-0">
      {props.children}
    </div>
  )
}

export function QuarterWidth({...props}) {
  return (
    <div className="col-span-3 mt-4 sm:mt-0 first:mt-0">
      {props.children}
    </div>
  )
}
