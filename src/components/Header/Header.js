import "./__Header.scss";
import { Link } from "react-router-dom";

// IMG
import logo from "../../assets/img/logo.svg";

function Header() {
	return (
		<header>
			<div className="header__inner container">
				<Link className="header__logo" to="/main">
					<img src={logo} alt="doubleBe" />
				</Link>
				<div className="header__nav">
					<button className="header__navItem">
                        <Link to="/items">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23.607" height="23.607" viewBox="0 0 23.607 23.607">
						    	<path d="M23.4,21.358a.721.721,0,0,1,0,1.019L22.377,23.4a.721.721,0,0,1-1.019,0l-7.132-7.132A.7.7,0,0,1,14.063,16,8.875,8.875,0,1,1,16,14.063a.7.7,0,0,1,.266.164ZM8.852,2.951a5.9,5.9,0,1,0,5.9,5.9A5.9,5.9,0,0,0,8.852,2.951Z" />
						    </svg>
                        </Link>
					</button>
					<button className="header__navItem">
						<svg xmlns="http://www.w3.org/2000/svg" width="23.641" height="23.607" viewBox="0 0 23.641 23.607">
							<path d="M23.641,18.442c0-6.639-5.9-5.164-5.9-10.328a4.719,4.719,0,0,0-.117-1.105,6.4,6.4,0,0,0-4.374-5.333,1.314,1.314,0,0,0,.03-.282,1.478,1.478,0,0,0-2.951,0,1.319,1.319,0,0,0,.03.282A6.527,6.527,0,0,0,5.9,7.979c0,.044,0,.089,0,.135C5.9,13.278,0,11.8,0,18.442c0,1.757,3.933,3.227,9.2,3.6a2.951,2.951,0,0,0,5.211,0c5.265-.371,9.2-1.841,9.2-3.6,0-.005,0-.01,0-.015Zm-4.594,1.247a25.264,25.264,0,0,1-4.306.707,2.95,2.95,0,0,0-5.878,0,25.2,25.2,0,0,1-4.306-.707,7.211,7.211,0,0,1-2.844-1.247,7.234,7.234,0,0,1,2.844-1.247,29.207,29.207,0,0,1,7.244-.828,29.2,29.2,0,0,1,7.244.828,7.211,7.211,0,0,1,2.844,1.247,7.234,7.234,0,0,1-2.844,1.247Z" transform="translate(0 0.001)"
							/>
						</svg>
					</button>
					<button className="header__navItem">
						<svg xmlns="http://www.w3.org/2000/svg" width="14.754" height="23.606" viewBox="0 0 14.754 23.606">
							<path d="M19.278,23.606l-5.9-8.115-5.9,8.115A1.476,1.476,0,0,1,6,22.131V1.475A1.476,1.476,0,0,1,7.475,0h11.8a1.476,1.476,0,0,1,1.475,1.475V22.131A1.476,1.476,0,0,1,19.278,23.606ZM18.91,1.475H7.844a.369.369,0,1,0,0,.738H18.91a.369.369,0,0,0,0-.738Z" transform="translate(-6)" />
						</svg>
					</button>
					<button className="header__navItem">
						<svg xmlns="http://www.w3.org/2000/svg" width="22.346" height="23.361" viewBox="0 0 22.346 23.361">
							<path d="M12.506,15.553s-8.126,0-11.173,7.11a33.6,33.6,0,0,0,11.173,2.032,33.6,33.6,0,0,0,11.173-2.032C20.632,15.553,12.506,15.553,12.506,15.553Zm0-1.015c3.047,0,5.079-3.047,5.079-8.126s-5.079-5.079-5.079-5.079-5.079,0-5.079,5.079S9.459,14.537,12.506,14.537Z" transform="translate(-1.333 -1.333)" />
						</svg>
					</button>
				</div>
			</div>
		</header>
	);
}

export default Header;