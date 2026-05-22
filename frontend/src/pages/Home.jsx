import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import About from '../components/About'
import Program from '../components/Program'
import Facility from '../components/Facility'

import '../styles/home.css'

// 뼈대
export default function Home(){
    return (
        <div className='layout'>
            <Header />
            <Hero />
            <About />
            <Program />
            <Facility />
            <Footer />
        </div>
    )
}