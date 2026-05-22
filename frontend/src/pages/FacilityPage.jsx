import Header from "../components/Header"
import Footer from "../components/Footer"

import '../styles/facility.css'

import facility1 from '../assets/images/facility1.jpg'
import facility2 from '../assets/images/facility2.jpg'
import facility3 from '../assets/images/facility3.jpg'
import facility4 from '../assets/images/facility1.jpg'

export default function FacilityPage(){
    return (
        <>
            <Header />

            <section className="sub-hero">
                <div className="sub-hero-content">
                    <p>HOME · 시설</p>
                    <h1>시설</h1>
                </div>
            </section>

            <section className="facility-page">
                <div className="facility-grid">
                <img src={facility1} alt="" />
                <img src={facility2} alt="" />
                <img src={facility3} alt="" />
                <img src={facility4} alt="" />
                </div>

                <div className="facility-desc">
                <h2>
                    안전하고 쾌적한
                    활동 공간
                </h2>

                <p>
                    이용자들이 편안하게 생활할 수 있도록
                    안전하고 쾌적한 환경을 제공합니다.
                </p>
                </div>
            </section>
            <Footer />        
        </>
    )
}