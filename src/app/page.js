'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

import { FaPlay, FaPause } from 'react-icons/fa'
import Footer from './footer.js'

import styles from './page.module.scss'

const IMAGE_URL = 'https://alandouglasphotography.s3.eu-central-1.amazonaws.com'
const AUDIO_URL =
  'https://alandouglasphotography.s3.eu-central-1.amazonaws.com/sir_duke.mp3'

const IMAGE_SRC = {
  LAYER_1:
    'https://cdn.sanity.io/images/7og2dskj/production/44dabe5455dda333e31c6956435a0f8b912f3113-1920x1080.png',
  LAYER_2:
    'https://cdn.sanity.io/images/7og2dskj/production/cc6ec055ddd8036e545e468ac5e31fb1926145e5-1920x1080.png',
  LAYER_3:
    'https://cdn.sanity.io/images/7og2dskj/production/5b1345c219fe0267cadbbe5f059e4b5786d5bc6c-1920x1080.png',
  LAYER_4:
    'https://cdn.sanity.io/images/7og2dskj/production/47113b75e44c69170f16afe9ebe5cbe5a6c5f98b-1920x1080.png',
  LAYER_5:
    'https://cdn.sanity.io/images/7og2dskj/production/79819fb6136056ebcffa47390dc542170c0be73e-1920x1080.png',
  LAYER_6:
    'https://cdn.sanity.io/images/7og2dskj/production/9b24070235e6dc58cbf3b646cf79a2d41be229a6-1920x1080.png',
  NAME: 'https://cdn.sanity.io/images/7og2dskj/production/cd30abebf5f45ada63211c5f97777cbc8a7e1615-1920x1080.png',
  TITLE:
    'https://cdn.sanity.io/images/7og2dskj/production/30cb663575c72a804d4a1a459de362b0d0d56789-1920x1080.png',
}

const useAudio = (url) => {
  const [playing, setPlaying] = useState(false)

  const [audio, setAudio] = useState(null)

  useEffect(() => {
    // iframe detection
    if (window.location == window.parent.location) {
      setAudio(new Audio(url))
    }
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

  // iframe detection
  const [isIframe, setIsIframe] = useState(false)

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [playing, toggle] = useAudio(AUDIO_URL)

  function handleMove(e) {
    const mouseX = e.clientX
    const mouseY = e.clientY

    const rekt = anchorRef.current.getBoundingClientRect()

    setPosition({ x: mouseX - rekt.x, y: mouseY - rekt.y })
  }

  useEffect(() => {
    setIsIframe(window.location !== window.parent.location)

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <main className={styles.main}>
      {!playing ? (
        <FaPlay className={styles.musicIcon} onClick={toggle} size={30} />
      ) : (
        <FaPause className={styles.musicIcon} onClick={toggle} size={30} />
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
        // src={`${IMAGE_URL}/layer_1.png`}
        src={IMAGE_SRC.LAYER_1}
        quality={100}
        fill={true}
        style={{
          objectFit: 'cover',
          zIndex: 10,
        }}
        alt="Layer 1"
      />
      <Image
        // src={`${IMAGE_URL}/layer_2.png`}
        src={IMAGE_SRC.LAYER_2}
        quality={100}
        fill={true}
        style={{
          objectFit: 'cover',
          zIndex: 9,
          transform: isIframe
            ? ''
            : `translate(${position.x / 18}px, ${position.y / 18}px)`,
        }}
        alt="Layer 2"
        className={isIframe ? styles.layer2 : ''}
      />
      <Image
        // src={`${IMAGE_URL}/stevie_name.png`}
        src={IMAGE_SRC.NAME}
        quality={100}
        fill={true}
        style={{
          objectFit: 'cover',
          zIndex: 8,
          transform: isIframe
            ? ''
            : `translate(${-(position.x / 30)}px, ${position.y / 30}px)`,
          top: '10%',
        }}
        alt="Name"
        className={isIframe ? styles.name : ''}
      />
      <Image
        // src={`${IMAGE_URL}/layer_3.png`}
        src={IMAGE_SRC.LAYER_3}
        quality={100}
        fill={true}
        style={{
          objectFit: 'cover',
          zIndex: 7,
          transform: isIframe
            ? ''
            : `translate(${position.x / 12.5}px, ${position.y / 12.5}px)`,
        }}
        alt="Layer 3"
        className={isIframe ? styles.layer3 : ''}
      />
      <Image
        // src={`${IMAGE_URL}/stevie_title.png`}
        src={IMAGE_SRC.TITLE}
        quality={100}
        fill={true}
        style={{
          objectFit: 'cover',
          zIndex: 6,
          transform: isIframe
            ? ''
            : `translate(${-(position.x / 30)}px, ${position.y / 30}px)`,
          top: '-4%',
        }}
        alt="Title"
        className={isIframe ? styles.title : ''}
      />
      <Image
        // src={`${IMAGE_URL}/layer_4.png`}
        src={IMAGE_SRC.LAYER_4}
        quality={100}
        fill={true}
        style={{
          objectFit: 'cover',
          zIndex: 5,
          transform: isIframe
            ? ''
            : `translate(${position.x / 8}px, ${position.y / 8}px)`,
        }}
        alt="Layer 4"
        className={isIframe ? styles.layer4 : ''}
      />
      <Image
        // src={`${IMAGE_URL}/layer_5.png`}
        src={IMAGE_SRC.LAYER_5}
        quality={100}
        fill={true}
        style={{
          objectFit: 'cover',
          zIndex: 4,
          transform: isIframe
            ? ''
            : `translate(${position.x / 4.5}px, ${position.y / 4.5}px)`,
        }}
        alt="Layer 5"
        className={isIframe ? styles.layer5 : ''}
      />
      <Image
        // src={`${IMAGE_URL}/layer_6.png`}
        src={IMAGE_SRC.LAYER_6}
        quality={100}
        fill={true}
        style={{
          objectFit: 'cover',
          zIndex: 3,
          transform: isIframe
            ? ''
            : `translate(${position.x / 2}px, ${position.y / 2}px)`,
        }}
        alt="Layer 6"
        className={isIframe ? styles.layer6 : ''}
      />
      <Footer />
    </main>
  )
}
