import '../styles/Page404.css'
import { useNavigate } from "react-router-dom";
export default function Page404() {
    const navigate = useNavigate();
  const home = () => {
    navigate('/')
  }
    return <>
        <div className="color-bg-yellow horizontal">
            <div className="vertical extrapadding">
                <h1>
                    404 Page not found
                </h1>
                <div className="horizontal">
                    <button id="toHome" onClick={home}>
                        <h2>Click here to go to the HomePage</h2>
                    </button>
                </div>
            </div>
        </div>
    </>;
}