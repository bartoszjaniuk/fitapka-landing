import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "../../components/Input/Input";
import * as React from "react";

const BASE_URL = "http://3.79.57.202";
const ACTIVATE_ACCOUNT = "api/user/activate";

const activateAccountFormSchema = z
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

const useActivateAccountMutation = () => {
	const [isLoading, setIsLoading] = React.useState(false);

	const activateAccount = async (payload: ActivateAccountFormFieldValues) => {
		try {
			setIsLoading(true);
			const response = await fetch(`${BASE_URL}/${ACTIVATE_ACCOUNT}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(payload),
			});

			const data = await response.json();

			console.log(data, "data");
		} catch (error) {
			console.log("Wystapil error", error);
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, activateAccount };
};

type ActivateAccountFormFieldValues = z.infer<typeof activateAccountFormSchema>;

export const ActivateAccountView = ({
	token,
	email,
}: {
	token: string;
	email: string;
}) => {
	const { activateAccount, isLoading } = useActivateAccountMutation();
	const {
		handleSubmit,
		reset,
		register,
		formState: { isValid, errors },
	} = useForm<ActivateAccountFormFieldValues>({
		resolver: zodResolver(activateAccountFormSchema),
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = handleSubmit(async (data) => {
		if (!isValid) return;
		await activateAccount(data);
		reset();
	});

	return (
		<form className="flex flex-col gap-4" onSubmit={onSubmit}>
			<button
				onClick={() =>
					(window.location.href = `fitapka://?token=${token}&email=${email}`)
				}
				className="text-background bg-primary hover:opacity-90 focus:ring-4 focus:ring-primary font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2"
				type="button"
			>
				Przejdź do aplikacji
			</button>
			<Input
				required
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
				type="password"
				id="password"
				name="password"
				register={register}
				placeholder="Hasło"
				isError={!!errors.password}
				errorMessage={errors.password?.message}
			/>

			<Input
				register={register}
				id="confirmPassword"
				name="confirmPassword"
				required
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
				type="password"
				placeholder="Powtórz hasło"
				isError={!!errors.password}
				errorMessage={errors.password?.message}
			/>

			<button
				className="text-background bg-primary hover:opacity-90 focus:ring-4 focus:ring-primary font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2"
				type="submit"
			>
				{isLoading ? "Trwa aktywacja konta..." : "Aktywuj konto"}
			</button>
		</form>
	);
};
