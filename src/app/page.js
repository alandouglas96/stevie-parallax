'use client'

import Footer from './footer.js'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { FaPlay, FaPause } from 'react-icons/fa'
import styles from './page.module.css'

const IMAGE_URL = 'https://alandouglasphotography.s3.eu-central-1.amazonaws.com'
const AUDIO_URL =
  'https://alandouglasphotography.s3.eu-central-1.amazonaws.com/sir_duke.mp3'

const useAudio = (url) => {
  const [playing, setPlaying] = useState(false)

  const [audio, setAudio] = useState(null)

  useEffect(() => {
    setAudio(new Audio(url))
    // only run once on the first render on the client
  }, [])

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    if (audio) {
      playing ? audio.play() : audio.pause()
      audio.addEventListener('ended', () => setPlaying(false))
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false))
      }
    }
  }, [playing])

  return [playing, toggle]
}

export default function Home() {
  const anchorRef = useRef()

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [playing, toggle] = useAudio(AUDIO_URL)

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

  useEffect(() => {
    window.addEventListener('click', toggle)
    return () => window.removeEventListener('click', toggle)
  })

  return (
    <main className={styles.main}>
      {!playing ? (
        <FaPlay className={styles.musicIcon} size={30} />
      ) : (
        <FaPause className={styles.musicIcon} size={30} />
      )}
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
        style={{
          objectFit: 'cover',
          zIndex: 8,
          transform: `translate(${-(position.x / 30)}px, ${position.y / 30}px)`,
          top: '10%',
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
        fill={true}
        style={{
          objectFit: 'cover',
          zIndex: 6,
          transform: `translate(${-(position.x / 30)}px, ${position.y / 30}px)`,
          top: '-4%',
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
      <Footer />
    </main>
  )
}
