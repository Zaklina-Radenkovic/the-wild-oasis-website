/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ygzdfmdqrttszxvtnyxj.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  //for exporting site as static but with this we need to disable Image Optimization
  //output: "export",
};

export default nextConfig;
