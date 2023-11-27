import Image from 'next/image'

//Components
import { Start } from './components/screen-start/screen-start'

//Styles home
import "./styles-home/home.scss"

export default function Home() {
  return (
    <main className="home-container">

      <Start/>

    </main>
  )
}
