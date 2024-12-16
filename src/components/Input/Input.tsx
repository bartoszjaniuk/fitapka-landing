import * as React from "react";
import type { RegisterOptions } from "react-hook-form";

export type InputProps<T> = {
	id: string;
	name: string;
	label?: string | React.ReactNode;
	className?: string;
	rules?: RegisterOptions;
	isError?: boolean;
	errorMessage?: string;
	isTextArea?: boolean;
	value?: string;
	useFormGroup?: boolean;
	rows?: number;
	register: any;
	options?: { value: number; label: string; description?: string }[];
} & Omit<
	React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	>,
	"size"
>;

export const Input = ({
	id,
	name,
	label,
	className = "",
	placeholder,
	isError,
	errorMessage,
	rules,
	isTextArea,
	register,
	value = "",
	rows = 3,
	required,
	...props
}: InputProps<any>) => {
	return (
		<div className="flex flex-col gap-1">
			<input
				{...props}
				placeholder={placeholder}
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
				id={id}
				aria-invalid={isError}
				{...(register && register(name, rules))}
			/>
			{isError ? (
				<p className="text-red-700 text-sm text-left pt-1">{errorMessage}</p>
			) : null}
		</div>
	);
};
