'use client';
import { BOOKS_QUERY } from '@/utils/gql';
import { gql, useQuery } from '@apollo/client';

const Page = () => {
	let { data, loading, error } = useQuery(BOOKS_QUERY);
	if (!loading && !error) {
		console.log(data);
	}

	return (
		<div
			initial={{}}
			animate={{}}
			exit={{}}
			transition={{}}
			className='bg-yellow-500 w-screen  min-h-screen h-auto overflow-x-hidden'>
			<header className='text-gray-700 font-semibold text-5xl text-center w-full max-w-4xl px-4 py-8'>
				The Book Summary App
			</header>
		</div>
	);
};
export default Page;
