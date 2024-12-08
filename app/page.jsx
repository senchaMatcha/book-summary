'use client';
import { BOOKS_QUERY } from '@/utils/gql';
import { useQuery } from '@apollo/client';

const Page = () => {
	let { data, loading, error } = useQuery(BOOKS_QUERY);
	{
		!loading && <div>...loading</div>;
	}
	{
		error && <div>{error.message}</div>;
	}
	if (data) {
		return (
			<div
				initial={{}}
				animate={{}}
				exit={{}}
				transition={{}}
				className='bg-white w-screen min-h-screen h-auto'>
				<header className='bg-gradient-to-br from-yellow-800 via-orange-500 to-orange-100 bg-clip-text text-transparent text-gray-700 font-semibold sm:text-4xl text-2xl text-center w-full flex justify-between px-4 border-2  py-8'>
					<span>Summarize.io</span>
				</header>

				<div className='w-full max-w-5xl h-screen mx-auto justify-center items-center flex flex-col  gap-4'>
					<h1 className='sm:text-3xl text-2xl text-gray-500'>
						Summarize, Recall, Learn, Grow...
					</h1>
				</div>
			</div>
		);
	}
};
export default Page;
