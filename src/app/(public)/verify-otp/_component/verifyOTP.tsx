'use client';

import { Button, notification, Space } from 'antd';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import OTPInput from 'react-otp-input';
import { images } from '../../../../../public';
import { Routes } from '@/constant/Routes';
import { useContextApp } from '@/hook/useContext';
import { VerifyToken } from '@/types/auth.types';
import { sendToken, verifyToken } from '@/Utils/api/callApi/user';
import { useMutation } from '@tanstack/react-query';
import { usePathname, useRouter } from 'next/navigation';
import { countDownApp } from '@/hook/useCountDown';
import { localStorageData } from '@/Utils/local-storage';

const TIME_COUNT_DOWN = 300;
const CLOSE_COUNT_DOWN = ['00:00', '0', null];

const VerifyTokenComponent = () => {
	const pathname = usePathname();

	// const countDownLocalStorage =
	// 	typeof window !== 'undefined'
	// 		? localStorageData.getTokenToLS('count_down')
	// 		: null;
	const [countDownLocalStorage] = useState(() =>
		localStorageData.getTokenToLS('count_down')
	);

	const [otp, setOtp] = useState<string>('');
	const [countDown, setCountDown] = useState<number>(
		CLOSE_COUNT_DOWN.includes(countDownLocalStorage as string)
			? TIME_COUNT_DOWN
			: Number(countDownLocalStorage)
	);

	const router = useRouter();

	const { emailContext, setEmailContext } = useContextApp();

	const timesCountDown = countDownApp(countDown, setCountDown);

	const verifyTokenMutation = useMutation({
		mutationFn: (body: VerifyToken) => verifyToken(body),
		onSuccess: () => {
			localStorageData.removeItemInLS('count_down');
		},
	});

	const sendTokenMutation = useMutation({
		mutationFn: (body: VerifyToken) => sendToken(body),
	});

	const handleVerifyToken = async () => {
		try {
			const payload = {
				email: emailContext,
				token: otp,
			};
			const response = await verifyTokenMutation.mutateAsync(payload);
			setEmailContext(response?.data?.email);
			router.push(Routes.REGISTER);
		} catch (error: unknown) {
			console.log(error);
		}
	};

	const handleSendToken = async () => {
		setCountDown(
			CLOSE_COUNT_DOWN.includes(countDownLocalStorage as string)
				? TIME_COUNT_DOWN
				: Number(countDownLocalStorage)
		);
		try {
			const payload = {
				email: emailContext,
				token: otp,
			};
			await sendTokenMutation.mutateAsync(payload);
			notification.success({
				message: 'Mã xác thực đã được gửi về email của bạn',
				duration: 3,
			});
		} catch (error: unknown) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (
			verifyTokenMutation.isSuccess ||
			CLOSE_COUNT_DOWN.includes(countDownLocalStorage as string) ||
			pathname !== Routes.VERIFY_TOKEN
		) {
			localStorageData.removeItemInLS('count_down');
		}
	}, [countDownLocalStorage, verifyTokenMutation.isSuccess, pathname]);

	return (
		<div
			style={{
				width: '100%',
				height: '100vh',
				display: 'flex',
				textAlign: 'center',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div
				style={{
					width: '400px',
					background: 'white',
					boxShadow: '0px 4px 10px #d1dae3',
					maxHeight: '720px',
					borderRadius: '5px',
					alignItems: 'center',
					justifyContent: 'center',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				{' '}
				<Image
					width={150}
					height={70}
					src={images.logoTrello}
					alt=""
					style={{ padding: '15px 0px' }}
				/>{' '}
				<Space
					style={{
						fontSize: '20px',
						textAlign: 'center',
						display: 'flex',
						justifyContent: 'center',
						width: '80%',
						alignItems: 'center',
						fontWeight: 600,
						marginBottom: '20px',
					}}
				>
					Chúng tôi đã gửi cho bạn một mã qua email
				</Space>
				<Space
					style={{
						fontSize: '13px',
						width: '80%',
						textAlign: 'left',
					}}
				>
					Để hoàn tất quá trình thiết lập tài khoản, hãy nhập mã chúng tôi đã
					gửi đến:
				</Space>
				<Space
					style={{
						fontSize: '15px',
						textAlign: 'left',
						width: '80%',
						marginTop: '20px',
						color: 'rgb(60,60,146)',
					}}
				>
					{emailContext}
				</Space>
				<OTPInput
					value={otp}
					onChange={setOtp}
					numInputs={6}
					inputStyle={{
						width: '40px',
						height: '40px',
						fontSize: '18px',
						display: 'flex',
						alignItems: 'center',
						textAlign: 'center',
						justifyContent: 'center',
						margin: '20px 0',
						fontWeight: 500,
					}}
					renderSeparator={<span>-</span>}
					renderInput={(props) => <input {...props} />}
				/>
				<Button
					style={{
						width: '90%',
						fontSize: '17px',
						fontWeight: 600,
						height: '40px',
						background: `${CLOSE_COUNT_DOWN.includes(countDownLocalStorage as string) ? '#aacaf6' : '#0463e7'}`,
						color: '#fff',
					}}
					onClick={handleVerifyToken}
					disabled={CLOSE_COUNT_DOWN.includes(countDownLocalStorage as string)}
				>
					Xác minh {timesCountDown}
				</Button>
				<Button
					style={{
						width: '90%',
						fontSize: '17px',
						fontWeight: 600,
						height: '40px',
						background: `${!CLOSE_COUNT_DOWN.includes(countDownLocalStorage as string) ? '#aacaf6' : '#0463e7'}`,
						color: '#fff',
						margin: '20px 0',
					}}
					onClick={handleSendToken}
					disabled={
						sendTokenMutation.isPending ||
						!CLOSE_COUNT_DOWN.includes(countDownLocalStorage as string)
					}
				>
					Gửi lại mã xác thực
				</Button>
			</div>
		</div>
	);
};

export default VerifyTokenComponent;
