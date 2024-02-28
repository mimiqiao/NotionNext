import React from 'react'
import Link from 'next/link'
import styles from './AgiButton.module.css'

const AgitButton = () => {
  return (
    <Link href="https://waytoagi.feishu.cn/wiki/QPe5w5g7UisbEkkow8XcDmOpn8e" className={styles.button} rel="nofollow">
      直达知识库
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="14"
        height="14"
        fill="none"
        viewBox="0 0 28 28"
      >
        <mask id="bg-mask-0" fill="#fff">
          <use xlinkHref="#path_0"></use>
        </mask>
        <g mask="url(#bg-mask-0)">
          <path
            fill="#FFF"
            fillRule="evenodd"
            d="M14 25.667c6.444 0 11.667-5.223 11.667-11.667 0-6.443-5.223-11.666-11.667-11.666C7.557 2.334 2.334 7.557 2.334 14c0 6.444 5.223 11.667 11.666 11.667z"
            opacity="1"
          ></path>
          <path
            fill="#FFF"
            d="M14 24.5c5.8 0 10.5-4.7 10.5-10.5 0-5.799-4.7-10.5-10.5-10.5C8.201 3.5 3.5 8.201 3.5 14c0 5.8 4.701 10.5 10.5 10.5zm0 2.334C6.913 26.834 1.167 21.088 1.167 14 1.167 6.913 6.913 1.167 14 1.167c7.088 0 12.834 5.746 12.834 12.833 0 7.088-5.746 12.834-12.834 12.834z"
            opacity="1"
          ></path>
          <path
            fill="#7358F8"
            d="M11.425 18.425l5.25-5.25.825.825-.825.825-5.25-5.25q-.04-.04-.077-.085-.036-.044-.068-.092-.032-.047-.059-.098-.027-.05-.049-.104-.022-.052-.038-.107-.017-.055-.028-.111-.011-.057-.017-.114-.006-.057-.006-.114t.006-.114q.006-.057.017-.114.01-.056.028-.11.016-.056.038-.108.022-.053.05-.104.026-.05.058-.098t.068-.092q.036-.044.077-.085.04-.04.085-.077.044-.036.092-.068.047-.032.098-.059.05-.027.104-.049.053-.022.107-.038.055-.017.111-.028.057-.011.114-.017.057-.006.114-.006t.114.006q.057.006.114.017.056.01.11.028.056.016.109.038.052.022.103.05.05.026.098.058t.092.068q.044.037.085.077l5.25 5.25a1.167 1.167 0 010 1.65l-5.25 5.25q-.04.04-.085.077-.044.036-.092.068-.047.032-.098.059-.05.027-.104.049-.053.022-.107.038-.055.017-.111.028-.057.011-.114.017-.057.006-.114.006t-.114-.006q-.057-.006-.114-.017-.056-.01-.11-.028-.056-.016-.109-.038-.052-.022-.103-.05-.05-.026-.098-.058t-.092-.068q-.044-.037-.085-.077-.04-.04-.077-.085-.036-.044-.068-.092-.032-.047-.059-.098-.027-.05-.049-.104-.022-.053-.038-.107-.017-.055-.028-.111-.011-.057-.017-.114-.006-.057-.006-.114t.006-.114q.006-.057.017-.114.01-.056.028-.11.016-.055.038-.108t.05-.104q.026-.05.058-.098t.068-.092q.036-.044.077-.085z"
            opacity="1"
          ></path>
        </g>
        <defs>
          <rect
            id="path_0"
            width="28"
            height="28"
            x="0"
            y="0"
            rx="0"
            ry="0"
          ></rect>
        </defs>
      </svg>
    </Link>
  )
}

export default React.memo(AgitButton)
