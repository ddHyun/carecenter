import Header from "../components/Header"
import Footer from "../components/Footer"

import '../styles/about.css'

import about1 from '../assets/images/about1.jpg'
import about2 from '../assets/images/about2.jpg'
import about3 from '../assets/images/about1.jpg'

export default function AboutPage(){
    return (
        <>
            <Header />

            <section className="sub-hero">
                <div className="sub-hero-inner">
                    <p className="breadcrumb">HOME · 소개</p>
                    <h1>소개</h1>
                </div>
            </section>

            <section className="about-page">
                <div className="about-intro">
                <div>
                    <p className="section-label">CARE CENTER</p>

                    <h2>
                    함께 배우고
                    함께 성장하는 공간
                    </h2>
                </div>

                <p>
                    CARE CENTER는 지적장애인을 위한
                    주간보호 및 활동지원 서비스를 제공하며,
                    이용자 개개인의 특성과 가능성을 존중합니다.
                </p>
                </div>

                <div className="about-gallery">
                <img src={about1} alt="" />
                <img src={about2} alt="" />
                <img src={about3} alt="" />
                </div>
            </section>

            <Footer />
        </>
    )
}