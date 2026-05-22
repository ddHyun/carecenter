import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="header">
            <div className="logo">CARE CENTER</div>

            <nav>
                <Link to="/about">소개</Link>
                <Link to="/program">프로그램</Link>
                <Link to="/facility">시설</Link>
                <Link to="/contact">문의</Link>
            </nav>
        </header>
    )
}