import Header from "../components/Header"
import Footer from "../components/Footer"

import '../styles/program.css'

import program1 from '../assets/images/program1.jpg'
import program2 from '../assets/images/program2.jpg'
import program3 from '../assets/images/program1.jpg'
import program4 from '../assets/images/program2.jpg'

export default function ProgramPage(){
    return (
        <>
            <Header />

            <section className="sub-hero">
                <div className="sub-hero-content">
                    <p>HOME · 프로그램</p>
                    <h1>프로그램</h1>
                </div>
            </section>

            <section className="program-page">
                <div className="program-box">
                <img src="{program1}" alt="" />
                <h3>사회성 향상 활동</h3>

                <p>
                    다양한 체험 및 그룹 활동을 통해
                    사회성과 자신감을 키울 수 있도록 지원합니다.
                </p>
                </div>

                <div className="program-box">
                <h3>미술 및 창작 활동</h3>
                <img src="{program2}" alt="" />

                <p>
                    다양한 만들기와 표현 활동을 통해
                    창의성과 성취감을 경험합니다.
                </p>
                </div>

                <div className="program-box">
                <h3>생활 자립 훈련</h3>
                <img src="{program3}" alt="" />

                <p>
                    일상생활에 필요한 기본 생활습관과
                    자립 능력을 향상시킵니다.
                </p>
                </div>

                <div className="program-box">
                <h3>여가 및 체육 활동</h3>
                <img src="{program4}" alt="" />

                <p>
                    신체 활동과 여가 프로그램을 통해
                    활기찬 일상을 지원합니다.
                </p>
                </div>
            </section>

            <Footer />        
        </>
    )
}