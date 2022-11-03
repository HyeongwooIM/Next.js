import "../styles/globals.css";
import 'semantic-ui-css/semantic.min.css'
import Footer from "../src/component/Footer";
import Top from "../src/component/Top";

function MyApp({ Component, pageProps }) {
	return (
	<div style={{ wdith: 1000, margin: "0 auto"}}>
		<Top />;
		<Component {...pageProps} />;
		<Footer />
	</div>
	);
}

export default MyApp;

/**
 * 페이지 전환 시 레이아웃을 유지할 수 있습니다.
 * 페이지 전환 시 상태값을 유지할 수 있습니다,.
 * componentDidCatch를 이용해서 커스텀 에러를 핸들링 할 수 있습니다. 
 * 추가적인 데이터를 페이지로 주입시켜주는게 가능합니다.
 * 글로벌 css를 여기서 선언합니다. 
 */