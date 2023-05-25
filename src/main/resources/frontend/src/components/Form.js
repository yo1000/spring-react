import React from 'react';

export default function Form({...props}) {
  return (
    <form className="mt-4 bg-white shadow ring-1 ring-gray-900/5 sm:rounded-lg md:col-span-2">
      {props.children}
    </form>
  )
}

export function InputSection({...props}) {
  return (
    <section className="px-6 py-6 sm:pt-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-12">
        {props.children}
      </div>
    </section>
  )
}

export function FullWidth({...props}) {
  return (
    <div className="sm:col-span-12">
      {props.children}
    </div>
  )
}

export function HalfWidth({...props}) {
  return (
    <div className="sm:col-span-6">
      {props.children}
    </div>
  )
}

export function ThirdWidth({...props}) {
  return (
    <div className="sm:col-span-4">
      {props.children}
    </div>
  )
}

export function TwoThirdsWidth({...props}) {
  return (
    <div className="sm:col-span-8">
      {props.children}
    </div>
  )
}

export function QuarterWidth({...props}) {
  return (
    <div className="sm:col-span-3">
      {props.children}
    </div>
  )
}

export function ButtonSection({...props}) {
  return (
    <section className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-6 sm:px-6">
      {props.children}
    </section>
  )
}
