import program1 from '../assets/images/program1.jpg'
import program2 from '../assets/images/program2.jpg'

export default function Program() {
  return (
    <section className="program" id="program">
      <div className="section-header">
        <p className="section-label">PROGRAM</p>

        <h2>
          CARE CENTER의
          <br />
          맞춤 활동 프로그램
        </h2>
      </div>

      <div className="program-grid">
        <div className="program-card">
          <img src={program1} alt="" />

          <div className="program-content">
            <h3>정서 안정 및 여가 프로그램</h3>

            <p>
              즐겁고 편안한 활동을 통해
              정서적 안정과 활기찬 일상을 지원합니다
            </p>
          </div>
        </div>

        <div className="program-card">
          <img src={program2} alt="" />

          <div className="program-content">
            <h3>사회성 향상 활동</h3>

            <p>
              다양한 체험과 소통 활동을 통해
              사회성과 자신감을 키울 수 있도록 지원합니다
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}