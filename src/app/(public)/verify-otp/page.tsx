
import dynamic from 'next/dynamic';

const ClientComponent = dynamic(() => import('./_component/verifyOTP'), {
	ssr: false,
});

const VerifyTokenPage = () => {
	return (
		<>
			<ClientComponent />
		</>
	);

};
export default VerifyTokenPage;