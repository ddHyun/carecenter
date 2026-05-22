import Header from "../components/Header"
import Footer from "../components/Footer"

import '../styles/contact.css'

export default function ContactPage(){
    return (
        <>
            <Header />

            <section className="sub-hero">
                <div className="sub-hero-content">
                    <p>HOME · 문의</p>
                    <h1>문의</h1>
                </div>
            </section>

            <section className="contact-page">
                <div className="contact-info">
                <h2>CARE CENTER</h2>

                <p>서울특별시 ○○구 ○○로 123</p>

                <p>02-123-4567</p>

                <p>carecenter@email.com</p>
                </div>

                <form className="contact-form">
                <input type="text" placeholder="이름" />

                <input type="text" placeholder="연락처" />

                <textarea placeholder="문의 내용을 입력해주세요." />

                <button type="submit">문의하기</button>
                </form>
            </section>
            <Footer />        
        </>
    )
}