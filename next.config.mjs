import dotenv from "dotenv";
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {};
// const withCSS = require("@zeit/next-css");
// module.exports = withCSS({});

console.log("Resend API Key :", process.env.RESEND_API_KEY);

export default nextConfig;
