import sanityClient from '@sanity/client';
const client = sanityClient({
  projectId: 'llb7r28p',
  dataset:  'production',
  apiVersion: '2022-09-17',
  useCdn: true
});
export default client;