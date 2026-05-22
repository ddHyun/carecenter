import facility1 from '../assets/images/facility1.jpg'
import facility2 from '../assets/images/facility2.jpg'
import facility3 from '../assets/images/facility3.jpg'

export default function Facility() {
  return (
    <section className="facility" id="facility">
      <div className="facility-left">
        <p className="section-label">FACILITY</p>

        <h2>
          편안하고 안전한
          <br />
          활동 공간
        </h2>

        <p>
          보다 편안하고 안정적인 환경에서
          다양한 활동과 일상을 경험할 수 있도록
          쾌적한 공간을 제공합니다
        </p>
      </div>

      <div className="facility-gallery">
        <img src={facility1} alt="" className="facility-large" />

        <div className="facility-small-group">
          <img src={facility2} alt="" />
          <img src={facility3} alt="" />
        </div>
      </div>
    </section>
  )
}