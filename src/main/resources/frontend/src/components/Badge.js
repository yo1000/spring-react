import React from 'react'

export default function Badge({color, width, height, ...props}) {
  const colors = {
    gray  : { bg: "bg-gray-50"  , text: "text-gray-600"  , ring: "ring-gray-500/10"   },
    red   : { bg: "bg-red-50"   , text: "text-red-700"   , ring: "ring-red-600/10"    },
    yellow: { bg: "bg-yellow-50", text: "text-yellow-800", ring: "ring-yellow-600/20" },
    green : { bg: "bg-green-50" , text: "text-green-700" , ring: "ring-green-600/20"  },
    blue  : { bg: "bg-blue-50"  , text: "text-blue-700"  , ring: "ring-blue-700/10"   },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-700", ring: "ring-indigo-700/10" },
    purple: { bg: "bg-purple-50", text: "text-purple-700", ring: "ring-purple-700/10" },
    pink  : { bg: "bg-pink-50"  , text: "text-pink-700"  , ring: "ring-pink-700/10"   },
  }

  return (
    <span className={`block ${width ? `w-${width}` : ""} ${height ? `h-${height}` : ""} items-center rounded-md ${colors[color].bg} px-2 py-1 text-xs font-medium ${colors[color].text} ring-1 ring-inset ${colors[color].ring}`}>
      {props.children}
    </span>
  )
}
