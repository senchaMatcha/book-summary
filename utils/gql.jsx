import { gql } from '@apollo/client';

export const BOOKS_QUERY = gql`
	query MyQuery {
		books {
			book_publisher
			book_name
			book_genre
			id
			book_author
		}
	}
`;
