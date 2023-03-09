import SanityClient from "@sanity/client";
import ImageUrlBuilder from "next-sanity-image";

export const clientConfig = {
  projectId: 'o39w5al2',
  dataset: 'production',
}

export const client = sanityClient({
  projectId: 'your-project-id',
  dataset: 'bikeshop',
  apiVersion: '2023-03-09',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  iseCdn: true,
  ignoreBrowserTokenWarning: true,
})