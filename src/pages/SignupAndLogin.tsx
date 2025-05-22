import React from "react"

const SignupAndLogin: React.FC = () => (
  <section>
    <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
    <p className="text-gray-700 mb-2">
      To get started, clone the repo, install dependencies with <code className="bg-gray-100 px-1 rounded">yarn install</code>, and run <code className="bg-gray-100 px-1 rounded">yarn dev</code>.
    </p>
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      <li>Clone the repository</li>
      <li>Start the development server</li>
    </ul>
  </section>
)

export default SignupAndLogin
