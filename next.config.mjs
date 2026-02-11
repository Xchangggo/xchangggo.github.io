/** @type {import('next').NextConfig} */
const repository = process.env.GITHUB_REPOSITORY ?? "";
const repoName = repository.split("/")[1] ?? "";
const isUserOrOrgSite = repoName.endsWith(".github.io");
const basePath = repoName && !isUserOrOrgSite ? `/${repoName}` : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  basePath,
  assetPrefix: basePath || undefined
};

export default nextConfig;
