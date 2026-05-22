import heroImg from '../assets/images/hero.jpg'

export default function Hero() {
    return (
        <section
            className="hero"
            style={{
                backgroundImage: `url(${heroImg})`
            }}
        >
            <div className="overlay"></div>

            <div className="hero-content">
                <p className="hero-sub">
                    함께 성장하고 즐거움을 나누는
                </p>

                <h1>CARE CENTER</h1>

                <p className="hero-desc">
                    한 사람 한 사람의 특성과 가능성을 존중하며
                    안전하고 따뜻한 환경 속에서 다양한 활동과 돌봄 서비스를 제공합니다
                </p>
            </div>
            <div className="hero-indicator">
                <span></span>
                <span className="active"></span>
            </div>
        </section>
    )
}