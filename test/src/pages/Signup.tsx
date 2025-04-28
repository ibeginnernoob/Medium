import { useRef } from "react"
import SignupCard from "@/components/pages/signup/SignupCard"

export default function Signup() {
	const ref = useRef<HTMLInputElement>(null)
	return (
		<div className="flex justify-center items-center h-screen">
			<SignupCard ref={ref} />
		</div>
	)
}