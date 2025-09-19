import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <>
      <div className="mt-32 flex flex-col md:flex-row items-center justify-center">
        <Image
          className="max-w-2xl w-[550px] rounded-lg"
          src={assets.pasta_keju}
          alt=""
        />
        <div className="ml-20 space-y-6 px-4 md:px-0">
          <div className="flex items-center justify-center rounded-xl py-4 pr-4 gap-6 max-w-md">
            <div className="p-6 aspect-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="currentColor"
                className="bi bi-fork-knife"
                viewBox="0 0 16 16"
              >
                <path d="M13 .5c0-.276-.226-.506-.498-.465-1.703.257-2.94 2.012-3 8.462a.5.5 0 0 0 .498.5c.56.01 1 .13 1 1.003v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM4.25 0a.25.25 0 0 1 .25.25v5.122a.128.128 0 0 0 .256.006l.233-5.14A.25.25 0 0 1 5.24 0h.522a.25.25 0 0 1 .25.238l.233 5.14a.128.128 0 0 0 .256-.006V.25A.25.25 0 0 1 6.75 0h.29a.5.5 0 0 1 .498.458l.423 5.07a1.69 1.69 0 0 1-1.059 1.711l-.053.022a.92.92 0 0 0-.58.884L6.47 15a.971.971 0 1 1-1.942 0l.202-6.855a.92.92 0 0 0-.58-.884l-.053-.022a1.69 1.69 0 0 1-1.059-1.712L3.462.458A.5.5 0 0 1 3.96 0z" />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-slate-700">
                Island Breakfasts
              </h3>
              <p className="text-sm text-slate-600">
                Start your day with plates of eggs, greens and local fruit. Fuel
                up for the beach with a hearty breakfast just steps from Crystal
                Bay.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-xl py-4 pr-4 gap-6 max-w-md">
            <div className="p-6 aspect-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="currentColor"
                className="bi bi-basket2-fill"
                viewBox="0 0 16 16"
              >
                <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-slate-700">
                Handcrafted Starters
              </h3>
              <p className="text-sm text-slate-600">
                Share handcrafted cocktails, crispy prawns and seafood platters
                seasoned with island herbs and spices.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-xl py-4 pr-4 gap-6 max-w-md">
            <div className="p-6 aspect-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="currentColor"
                className="bi bi-cloud-sun-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z" />
                <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708zm1.734 3.374a2 2 0 1 1 3.296 2.198q.3.423.516.898a3 3 0 1 0-4.84-3.225q.529.017 1.028.129m4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377M14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-slate-700">
                Sunset Dining
              </h3>
              <p className="text-sm text-slate-600">
                Join us for golden‑hour specials and hearty Indonesian classics
                as the day fades. The perfect end to a Crystal Bay adventure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
