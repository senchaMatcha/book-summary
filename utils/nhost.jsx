import { NhostClient } from '@nhost/nextjs';
let nhost = new NhostClient({
	region: 'eu-west-2',
	subdomain: 'fjxyezhyddcwejusthlr',
	graphqlUrl: 'https://fjxyezhyddcwejusthlr.graphql.eu-west-2.nhost.run/v1',
	autoSignIn: 'true',
});

export default nhost;

// const { NhostClient } = require('@nhost/nextjs');

// export const nhost = new NhostClient({
// 	subdomain: 'uvhdixclwxvoqptvnugj',
// 	region: 'eu-central-1',
// 	graphqlUrl:
// 		'https://uvhdixclwxvoqptvnugj.hasura.eu-central-1.nhost.run/v1/graphql',
// });
