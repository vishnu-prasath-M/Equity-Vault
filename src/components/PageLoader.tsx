import { useState, useEffect } from 'react';
import { LumaSpin } from '@/components/ui/luma-spin';

interface PageLoaderProps {
	children: React.ReactNode;
}

export function PageLoader({ children }: PageLoaderProps) {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Show loader for 3 seconds then reveal content
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	if (isLoading) {
		return (
			<div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-slate-950">
				<LumaSpin />
			</div>
		);
	}

	return <>{children}</>;
}
