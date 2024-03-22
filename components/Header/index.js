/* eslint-disable @next/next/no-img-element */
import { Navs, MainHost } from './constants'
import React from 'react'
import MobileMenu from './MobileMenu'
import AgiButton from './AgiButton'

const Header = ({ currentNav }) => {
  return (
    <header>
      <div className="bg-white mx-auto py-2.5 px-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href={MainHost}>
            <img
              src="/logo-header.png"
              className="mr-3 h-8"
              alt="Flowbite React Logo"
            />
          </a>

          <ul className="hidden md:flex gap-8 items-center ml-20">
            {Navs.map(nav => (
              <li key={nav.href}>
                <a
                  href={nav.href}
                  className={`flex items-center gap-1 text-base md:hover:text-blue-600 ${
                    nav.className || ''
                  } ${currentNav === nav.href ? 'md:text-blue-600' : ''}`}
                  // target={nav.href.startsWith("http") ? "_blank" : "_self"}
                >
                  {nav.name}
                  {/* {nav.href.startsWith("http") && (
                    <svg
                      width="13.5"
                      height="13.5"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"
                    >
                      <path
                        fill="currentColor"
                        d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                      ></path>
                    </svg>
                  )} */}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block">
          <AgiButton />
        </div>
        <MobileMenu />
      </div>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4820812869251361"
           crossorigin="anonymous"></script>
        <!-- Blog 侧栏 -->
          <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-4820812869251361"
           data-ad-slot="8072332992"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
          <script>
           (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </header>
  )
}

export default React.memo(Header)
