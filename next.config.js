/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  env: {
    RAPID_API_KEY: "75bda6add9mshfac7473f9fed0f0p1e37f6jsnf3e2095d3652",
    RAPID_API_HOST: "netflix54.p.rapidapi.com",
    MONGODB_URL: "mongodb+srv://hamzaazam411:Frontier123@cluster0.rknqfcj.mongodb.net/h-flix"
  },
  images: {
    domains: ["occ-0-3933-116.1.nflxso.net"]
  }

}

module.exports = nextConfig
