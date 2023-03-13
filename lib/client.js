import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";


export const clientConfig = {
  projectId: 'o39w5al2',
  dataset: 'production',
}

export const client = sanityClient({
  projectId: clientConfig.projectId,
  dataset: clientConfig.dataset,
  apiVersion: '2023-03-09',
  token: process.env.MAIN_TOKEN,
  useCdn: true,
  ignoreBrowserTokenWarning: true,
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);