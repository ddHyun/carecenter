import about1 from '../assets/images/about1.jpg'
import about2 from '../assets/images/about2.jpg'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-text">
        <p className="section-label">CARE CENTER</p>

        <h2>
          일상 속 자립과 성장을
          <br />
          함께 만들어가는 공간
        </h2>

        <p>
          다양한 활동과 맞춤형 돌봄 프로그램을 통해
          이용자들이 보다 안정적이고 즐거운 일상을
          경험할 수 있도록 지원합니다
        </p>

        <button>더보기</button>
      </div>

      <div className="about-images">
        <img src={about1} alt="" className="img1" />
        <img src={about2} alt="" className="img2" />
      </div>
    </section>
  )
}