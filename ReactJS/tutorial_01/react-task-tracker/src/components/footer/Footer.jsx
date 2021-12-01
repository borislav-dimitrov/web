import { useState } from "react"

const Footer = () => {
    const [showAbt, setshowAbt] = useState(false)
    const abtTxt = !showAbt ? 'Show About' : 'Close About'

    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <button type="button" className="btn" onClick={() => setshowAbt(!showAbt)} >{abtTxt}</button>
            {showAbt && (
                <div id="about" show='hide'>
                    <p>Version 1.0.0.1</p>
                </div>
            )}


        </footer>
    )
}

export default Footer
