import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles/program.css'

import p1 from '../assets/images/program1.jpg'
import p2 from '../assets/images/program2.jpg'
import p3 from '../assets/images/program1.jpg'
import p4 from '../assets/images/program2.jpg'


export default function ProgramPage() {
  return (
    <>
      <Header />

      <section className="sub-hero">
        <div className="sub-hero-inner">
          <p className="breadcrumb">HOME · 프로그램</p>

          <h1>프로그램</h1>
        </div>
      </section>

      <section className="program-page">

        <div className="program-top">
          <p className="section-label">
            CARE PROGRAM
          </p>

          <h2>
            다양한 활동을 통해
            <br />
            즐겁고 의미있는 일상을 만듭니다
          </h2>
        </div>

        <div className="program-grid">

          <div className="program-card">
            <img src={p1} alt="" />

            <div className="program-card-content">
              <h3>사회성 향상 활동</h3>

              <p>
                다양한 그룹 활동과 체험을 통해
                소통 능력과 자신감을 키웁니다.
              </p>
            </div>
          </div>

          <div className="program-card">
            <img src={p2} alt="" />

            <div className="program-card-content">
              <h3>미술 및 창작 활동</h3>

              <p>
                만들기와 표현 활동을 통해
                창의성과 성취감을 경험합니다.
              </p>
            </div>
          </div>

          <div className="program-card">
            <img src={p3} alt="" />

            <div className="program-card-content">
              <h3>생활 자립 훈련</h3>

              <p>
                일상생활에 필요한 기본 생활습관과
                자립 능력을 향상시킵니다.
              </p>
            </div>
          </div>

          <div className="program-card">
            <img src={p4} alt="" />

            <div className="program-card-content">
              <h3>여가 및 체육 활동</h3>

              <p>
                신체 활동과 여가 프로그램을 통해
                활기찬 일상을 지원합니다.
              </p>
            </div>
          </div>

        </div>

      </section>

      <Footer />
    </>
  )
}