
export default function H3Content({ content } : {
	content: string
}) {
	return (
		<div className="flex-wrap">
			<h3 className="text-4xl font-bold">
				{content}
			</h3>
		</div>
	)
}