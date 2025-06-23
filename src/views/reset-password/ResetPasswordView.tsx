import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "../../components/Input/Input";
import * as React from "react";
import { useEffect } from "react";

// const BASE_URL = "http://3.79.57.202";
const BASE_URL = "https://fitapka.pl";
const RESET_PASSWORD = "api/user/reset-password";
const VERIFY_TOKEN = "api/user/verify-token";

const resetPasswordFormSchema = z
	.object({
		password: z.string().min(3, "Hasło musi posiadać conajmniej 3 znaków"),
		confirmPassword: z
			.string()
			.min(3, "Hasło musi posiadać conajmniej 3 znaków"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Hasła muszą być identyczne",
		path: ["confirmPassword"],
	});

type ResetPasswordPayload = {
	email: string;
	password: string;
};

const useResetPasswordMutation = () => {
	const [isLoading, setIsLoading] = React.useState(false);

	const resetPassword = async (payload: ResetPasswordPayload) => {
		try {
			setIsLoading(true);
			const response = await fetch(`${BASE_URL}/${RESET_PASSWORD}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(payload),
			});

			await response.json();
		} catch (error) {
			console.log("Wystapil error", error);
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, resetPassword };
};

type ResetPasswordFormFieldValues = z.infer<typeof resetPasswordFormSchema>;

// export const Content = (props: { token: string; email: string }) => {
// 	const { token, email } = props;
// 	const { resetPassword, isLoading } = useResetPasswordMutation();
// 	const {
// 		handleSubmit,
// 		reset,
// 		register,
// 		formState: { isValid, errors },
// 	} = useForm<ResetPasswordFormFieldValues>({
// 		resolver: zodResolver(resetPasswordFormSchema),
// 		defaultValues: {
// 			password: "",
// 			confirmPassword: "",
// 		},
// 	});

// 	const onSubmit = handleSubmit(async (data) => {
// 		if (!isValid) return;
// 		await resetPassword({
// 			email,
// 			password: data.password,
// 		});
// 		reset();
// 	});

// 	useEffect(() => {
// 		if (token && email) {
// 			console.log("Przekierowanie");
// 			window.location.href = `fitapka://?token=${token}&email=${email}&action=reset-password`;
// 		}
// 	}, [token, email]);

// 	return (
// 		<form className="flex flex-col gap-4" onSubmit={onSubmit}>
// 			{/* <button
//                 onClick={() =>
//                     (window.location.href = `fitapka://?token=${token}&email=${email}`)
//                 }
//                 className="text-background bg-primary hover:opacity-90 focus:ring-4 focus:ring-primary font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2"
//                 type="button"
//             >
//                 Przejdź do aplikacji
//             </button> */}
// 			<Input
// 				required
// 				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
// 				type="password"
// 				id="password"
// 				name="password"
// 				register={register}
// 				placeholder="Hasło"
// 				isError={!!errors.password}
// 				errorMessage={errors.password?.message}
// 			/>

// 			<Input
// 				register={register}
// 				id="confirmPassword"
// 				name="confirmPassword"
// 				required
// 				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
// 				type="password"
// 				placeholder="Powtórz hasło"
// 				isError={!!errors.password}
// 				errorMessage={errors.password?.message}
// 			/>

// 			<button
// 				className="text-background bg-primary hover:opacity-90 focus:ring-4 focus:ring-primary font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2"
// 				type="submit"
// 			>
// 				{isLoading ? "Trwa resetowanie hasła..." : "Resetuj hasło"}
// 			</button>
// 		</form>
// 	);
// };

const useVerifyTokenMutation = () => {
	const [isLoading, setIsLoading] = React.useState(false);
	const [isVerified, setIsVerified] = React.useState(false);

	const mutate = async (token: string) => {
		try {
			setIsLoading(true);
			const response = await fetch(`${BASE_URL}/${VERIFY_TOKEN}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({ token }),
			});

			if (response.ok) {
				setIsVerified(true);
			} else {
				setIsVerified(false);
			}
		} catch (error) {
			console.log("Wystapil error", error);
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, isVerified, mutate };
};

// export const ResetPasswordView = (props: { token: string; email: string }) => {
// 	const { token, email } = props;
// 	const verifyTokenMutation = useVerifyTokenMutation();

// 	useEffect(() => {
// 		if (token) verifyTokenMutation.mutate(token);
// 	}, [token]);

// 	if (verifyTokenMutation.isLoading) {
// 		return <p>Trwa ładowanie...</p>;
// 	}

// 	if (!verifyTokenMutation.isLoading && !verifyTokenMutation.isVerified) {
// 		return <p>Token wygasł lub jest nieprawidłowy</p>;
// 	}

// 	return <Content token={token} email={email} />;
// };

export const ResetPasswordView = (props: { token: string; email: string }) => {
	const { token, email } = props;

	useEffect(() => {
		if (token && email) {
			console.log("Przekierowanie");
			window.location.href = `fitapka://?token=${token}&email=${email}&action=reset-password`;
		}
	}, [token, email]);

	return (
		<div>
			<p>Otwórz tę witrynę w mobilnej przeglądarce, aby zresetować hasło.</p>
		</div>
	);
};
