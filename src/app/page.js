'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

const IMAGE_URL = `https://alandouglasphotography.s3.eu-central-1.amazonaws.com`

export default function Home() {
  const anchorRef = useRef()

  const [position, setPosition] = useState({ x: 0, y: 0 })

  function handleMove(e) {
    const mouseX = e.clientX
    const mouseY = e.clientY

    const rekt = anchorRef.current.getBoundingClientRect()

    setPosition({ x: mouseX - rekt.x, y: mouseY - rekt.y })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  // if (window.innerWidth <= 450) {
  //   return (
  //     <main className={styles.main}>
  //       <div
  //         ref={anchorRef}
  //         style={{
  //           backgroundColor: 'transparent',
  //           height: '10px',
  //           width: '10px',
  //           zIndex: 1,
  //           top: '36.1%',
  //           left: '48.38%',
  //           position: 'absolute',
  //         }}
  //       />
  //       <Image
  //         src={layer1}
  //         fill={true}
  //         style={{
  //           objectFit: 'cover',
  //           zIndex: 10,
  //         }}
  //         alt="Layer 1"
  //       />
  //       <Image
  //         src={layer2}
  //         fill={true}
  //         style={{
  //           objectFit: 'cover',
  //           zIndex: 9,
  //           transform: `translate(${position.x / 18}px, ${position.y / 18}px)`,
  //         }}
  //         alt="Layer 2"
  //       />
  //       <Image
  //         src={name}
  //         // Aspect ratio: 2.77
  //         width={120 * 2.77}
  //         height={120}
  //         style={{
  //           zIndex: 8,
  //           position: 'absolute',
  //           width: `${120 * 2.77}px`,
  //           height: `${120}px`,
  //           top: '52%',
  //           left: '37%',
  //         }}
  //         alt="Name"
  //       />
  //       <Image
  //         src={layer3}
  //         fill={true}
  //         style={{
  //           objectFit: 'cover',
  //           zIndex: 7,
  //         }}
  //         alt="Layer 3"
  //       />
  //       <Image
  //         src={title}
  //         // Aspect ratio: 2,27
  //         width={120 * 2.27}
  //         height={120}
  //         style={{
  //           zIndex: 6,
  //           position: 'absolute',
  //           width: `${120 * 2.27}px`,
  //           height: `${120}px`,
  //           top: '41%',
  //           left: '44%',
  //         }}
  //         alt="Title"
  //       />
  //       <Image
  //         src={layer4}
  //         fill={true}
  //         style={{
  //           objectFit: 'cover',
  //           zIndex: 5,
  //         }}
  //         alt="Layer 4"
  //       />
  //       <Image
  //         src={layer5}
  //         fill={true}
  //         style={{
  //           objectFit: 'cover',
  //           zIndex: 4,
  //         }}
  //         alt="Layer 5"
  //       />
  //       <Image
  //         src={layer6}
  //         fill={true}
  //         style={{
  //           objectFit: 'cover',
  //           zIndex: 3,
  //         }}
  //         alt="Layer 6"
  //       />
  //     </main>
  //   )
  // } else {
  return (
    <main className={styles.main}>
      <div
        ref={anchorRef}
        style={{
          backgroundColor: 'transparent',
          height: '10px',
          width: '10px',
          zIndex: 1,
          top: '36.1%',
          left: '48.38%',
          position: 'absolute',
        }}
      />
      <Image
        src={`${IMAGE_URL}/layer_1.png`}
        quality={100}
        fill={true}
        style={{
          objectFit: 'cover',
          zIndex: 10,
        }}
        alt="Layer 1"
      />
      <Image
        src={`${IMAGE_URL}/layer_2.png`}
        quality={100}
        fill={true}
        style={{
          objectFit: 'cover',
          zIndex: 9,
          transform: `translate(${position.x / 18}px, ${position.y / 18}px)`,
        }}
        alt="Layer 2"
      />
      <Image
        src={`${IMAGE_URL}/stevie_name.png`}
        quality={100}
        fill={true}
        // Aspect ratio: 2.77
        // width={120 * 2.77}
        // height={120}
        style={{
          objectFit: 'cover',
          zIndex: 8,
          transform: `translate(${-(position.x / 30)}px, ${position.y / 30}px)`,
          // position: 'absolute',
          // width: `${120 * 2.77}px`,
          // height: `${120}px`,
          top: '10%',
          // left: '39%',
        }}
        alt="Name"
      />
      <Image
        src={`${IMAGE_URL}/layer_3.png`}
        quality={100}
        fill={true}
        style={{
          objectFit: 'cover',
          zIndex: 7,
          transform: `translate(${position.x / 12.5}px, ${
            position.y / 12.5
          }px)`,
        }}
        alt="Layer 3"
      />
      <Image
        src={`${IMAGE_URL}/stevie_title.png`}
        quality={100}
        // Aspect ratio: 2,27
        // width={120 * 2.27}
        // height={120}
        fill={true}
        style={{
          objectFit: 'cover',
          zIndex: 6,
          transform: `translate(${-(position.x / 30)}px, ${position.y / 30}px)`,
          // position: 'absolute',
          // width: `${120 * 2.27}px`,
          // height: `${120}px`,
          top: '-4%',
          // left: '41%',
        }}
        alt="Title"
      />
      <Image
        src={`${IMAGE_URL}/layer_4.png`}
        quality={100}
        fill={true}
        style={{
          objectFit: 'cover',
          zIndex: 5,
          transform: `translate(${position.x / 8}px, ${position.y / 8}px)`,
        }}
        alt="Layer 4"
      />
      <Image
        src={`${IMAGE_URL}/layer_5.png`}
        quality={100}
        fill={true}
        style={{
          objectFit: 'cover',
          zIndex: 4,
          transform: `translate(${position.x / 4.5}px, ${position.y / 4.5}px)`,
        }}
        alt="Layer 5"
      />
      <Image
        src={`${IMAGE_URL}/layer_6.png`}
        quality={100}
        fill={true}
        style={{
          objectFit: 'cover',
          zIndex: 3,
          transform: `translate(${position.x / 2}px, ${position.y / 2}px)`,
        }}
        alt="Layer 6"
      />
    </main>
  )
  // }
}

/*
Window height: 648
Window width: 1207

top: 234
left: 596


Percentage top: 36,1%
Percentage left: 48,38%
*/
