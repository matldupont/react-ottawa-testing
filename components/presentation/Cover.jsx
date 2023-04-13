import React from 'react'

export default function Cover() {
  return (
    <div className="flex flex-col items-center sm:flex-row">
      <img
        className="mx-0 block h-40 w-40 shrink-0 rounded-full border-4 border-slate-600/50 dark:border-yellow-600/50 sm:h-48 sm:w-48"
        alt="Mat's headshot"
        height={48}
        width={48}
        srcSet={`https://raw.githubusercontent.com/matldupont/matdupont-dev/main/src/assets/headshot-400w.jpeg 1x, https://raw.githubusercontent.com/matldupont/matdupont-dev/main/src/assets/headshot-600w.jpeg 2x`}
        src="https://raw.githubusercontent.com/matldupont/matdupont-dev/main/src/assets/headshot-400w.jpeg"
      />
      <div className="flex flex-col items-start text-xl sm:ml-20">
        <h1 className="mb-8 flex flex-col space-y-2 text-xl font-semibold text-neutral-700  dark:text-neutral-200 sm:mt-0 sm:text-4xl">
          <div className="text-center">{`Hi, I'm Mat Dupont 👋`}</div>
        </h1>
        <ul className="mb-8 text-start">
          <li>@ReactOttawa 🤘</li>
          <li>Senior Product Engineer @ GlossGenius</li>
          <li>
            <i>Prev. Auth0/Okta Fine Grained Authorization - OpenFGA</i>
          </li>
        </ul>

        <ul className="flex flex-col items-start text-slate-600 dark:text-slate-300">
          <li className="">
            github.com/<strong className="text-stale-900 underline dark:text-slate-50"> matldupont</strong>
          </li>
          <li>
            linkedin.com/in/ <strong className="text-stale-900 underline dark:text-slate-50"> matldupont</strong>
          </li>
          <li>
            <strong className="text-stale-900 underline dark:text-slate-50">@matldupont </strong>@indieweb.social
          </li>
        </ul>
      </div>
    </div>
  )
}
