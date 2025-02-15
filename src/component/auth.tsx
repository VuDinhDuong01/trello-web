'use client';

import { Button, Form, FormProps, Input, Space, notification } from 'antd';
import React from 'react';
import { images } from '../../public';
import Image from 'next/image';
import Link from 'next/link';
import { Routes } from '@/constant/Routes';
import { usePathname, useRouter } from 'next/navigation';
import { login, register, verifyEmail } from '@/Utils/api/callApi/user';
import { useMutation } from '@tanstack/react-query';
import { Register } from '@/types/auth.types';
import { useContextApp } from '@/hook/useContext';
import { useAppDispatch } from '@/lib/redux/hook';
import { user } from '@/lib/redux/features/user/userSlice';
const Auth = () => {
	const router = useRouter();
	const verifyEmailMutation = useMutation({
		mutationFn: (body: Pick<Register, 'email'>) => verifyEmail(body),
		onSuccess:()=>{
			router.push(Routes.VERIFY_TOKEN);
		}
	});

	const loginMutation = useMutation({
		mutationFn: (body: Omit<Register, 'username'>) => login(body),
		onSuccess:()=>{
			router.push(Routes.BOARDS);
		}
	});

	const registerMutation = useMutation({
		mutationFn: (body: Register) => register(body),
		onSuccess:()=>{
			router.push(Routes.LOGIN);
		}
	});

	const pathname = usePathname();
	const { setEmailContext, emailContext } = useContextApp();
	const dispatch = useAppDispatch();
	const onFinish: FormProps['onFinish'] = async (values) => {
		switch (pathname) {
			case Routes.VERIFY_EMAIL:
				try {
					const response = await verifyEmailMutation.mutateAsync(values);
					setEmailContext(response?.data?.email);
					
				} catch (error: any) {
					notification.error({
						message: error.message,
						duration: 2,
					});
				}
				break;
			case Routes.REGISTER:
				try {
					const payload = Object.assign(
						{
							email: emailContext,
						},
						values
					);

					await registerMutation.mutateAsync(payload);
					
				} catch (error: any) {
					notification.error({
						message: error.message,
						duration: 2,
					});
				}
				break;
			case Routes.LOGIN:
				try {
					const response = await loginMutation.mutateAsync(values);
					dispatch(user(response?.data.record));
					
					
				} catch (error: any) {
					notification.error({
						message: error.message,
						duration: 2,
					});
				}
				break;
		}
	};

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
					maxHeight: '750px',
					borderRadius: '5px',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Image
					width={150}
					height={70}
					src={images.logoTrello}
					alt=""
					style={{ padding: '15px 0px' }}
				/>
				<Space
					style={{
						fontSize: '22px',
						textAlign: 'center',
						display: 'flex',
						justifyContent: 'center',
						fontWeight: 600,
					}}
				>
					{pathname === Routes.REGISTER
						? 'Đăng ký để tiếp tục'
						: 'Đăng nhập để tiếp tục'}
				</Space>
				<Form
					name="basic"
					style={{
						marginTop: '30px',
						alignItems: 'center',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
					initialValues={{ remember: true }}
					onFinish={onFinish}
					autoComplete="off"
				>
					{pathname !== Routes.REGISTER && (
						<Form.Item
							style={{ textAlign: 'left', width: '90%' }}
							name="email"
							rules={[
								{ required: true, message: 'Trường nay không được bỏ trống!' },
								{
									pattern:
										/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
									message: 'Bạn phải nhập đúng định dạng email!',
								},
							]}
						>
							<Input
								style={{
									// width: "90%",
									height: '40px',
								}}
								placeholder="Nhập email của bạn"
							/>
						</Form.Item>
					)}
					{pathname === Routes.REGISTER && (
						<Form.Item
							style={{ textAlign: 'left', width: '90%' }}
							name="username"
							rules={[
								{ required: true, message: 'Please input your username!' },
							]}
						>
							<Input
								style={{
									// width: "90%",
									height: '40px',
									textAlign: 'left',
								}}
								placeholder="Nhập username của bạn"
							/>
						</Form.Item>
					)}
					{(pathname === Routes.LOGIN ||
						pathname === Routes.REGISTER ||
						loginMutation.isPending) && (
						<Form.Item
							name="password"
							style={{ textAlign: 'left', width: '90%' }}
							rules={[
								{ required: true, message: 'Please input your password!' },
							]}
						>
							<Input.Password
								placeholder="Nhập password của bạn"
								style={{
									// width: "90%",
									height: '40px',
									textAlign: 'left',
								}}
							/>
						</Form.Item>
					)}
					<Form.Item label={null} style={{ width: '100%' }}>
						<Button
							loading={
								verifyEmailMutation.isPending ||
								registerMutation.isPending ||
								loginMutation.isPending
							}
							htmlType="submit"
							style={{
								width: '90%',
								fontSize: '17px',
								fontWeight: 600,
								height: '40px',
								background: '#0C66E4',
								color: '#fff',
							}}
						>
							Submit
						</Button>
					</Form.Item>
				</Form>
				<Space style={{ fontSize: '13px', width: '90%', lineHeight: '17px' }}>
					Bằng việc đăng ký, tôi chấp nhận Điều khoản dịch vụ của Atlassian
					Cloud và công nhận Chính sách quyền riêng tư.
				</Space>
				<Space
					style={{
						fontSize: '20px',
						color: 'rgb(94,108,132)',
						margin: '30px 0',
					}}
				>
					Hoặc tiếp tục với:
				</Space>
				<Button
					style={{
						width: '90%',
						height: '50px',
						marginBottom: '20px',
					}}
				>
					<Space>
						<Image src={images.google} height={30} width={40} alt="" />
					</Space>
					<Space style={{ fontSize: '20px' }}>Google</Space>
				</Button>
				<Button
					style={{
						width: '90%',
						height: '50px',
						marginBottom: '20px',
					}}
				>
					<Space>
						<Image src={images.facebook} height={30} width={40} alt="" />
					</Space>
					<Space style={{ fontSize: '20px' }}>Facebook</Space>
				</Button>
				<Button
					style={{
						width: '90%',
						height: '50px',
						marginBottom: '20px',
					}}
				>
					<Space>
						<Image src={images.github} height={30} width={40} alt="" />
					</Space>
					<Space style={{ fontSize: '20px' }}>Github</Space>
				</Button>
				<Space style={{ margin: '20px 40px' }}>
					<Link
						href={
							pathname === Routes.LOGIN ? Routes.VERIFY_EMAIL : Routes.LOGIN
						}
						style={{ fontSize: '15px' }}
					>
						{pathname === Routes.VERIFY_EMAIL
							? 'Bạn đã có tài khoản Atlassian? Đăng nhập'
							: 'Bạn không đăng nhập được? • Tạo tài khoản'}
					</Link>
				</Space>
			</div>
		</div>
	);
};

export default Auth;
