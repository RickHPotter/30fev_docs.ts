import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sidebar menu items
const sidebarItems = [
  { label: "Introduction", path: "/introduction" },
  { label: "Getting Started", path: "/getting-started" },
  { label: "Video Guide", path: "/video-guide" },
  { label: "Advanced Topics", path: "/advanced-topics" },
  { label: "FAQ", path: "/faq" },
];

// Breadcrumb component
function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="flex items-center text-sm text-gray-500 space-x-2">
      <Link to="/" className="flex items-center hover:underline">
        <Home className="w-4 h-4" />
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return (
          <React.Fragment key={to}>
            <ChevronRight className="w-4 h-4" />
            {isLast ? (
              <span className="text-gray-800 font-semibold capitalize">{value.replace(/-/g, " ")}</span>
            ) : (
              <Link to={to} className="hover:underline capitalize">
                {value.replace(/-/g, " ")}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

// Fixed Sidebar component
function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r px-4 py-6 fixed top-0 left-0 h-full overflow-auto">
      <nav className="space-y-2">
        {sidebarItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium transition"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

// Main content with routes
function Content() {
  return (
    <main className="flex-1 px-6 py-8 ml-64">
      <Routes>
        <Route
          path="/introduction"
          element={
            <section>
              <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
              <p className="text-gray-700">
                Welcome to this static documentation site example with routing! This page demonstrates navigation, dynamic breadcrumbs, and a fixed sidebar.
              </p>
            </section>
          }
        />
        <Route
          path="/getting-started"
          element={
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
          }
        />
        <Route
          path="/video-guide"
          element={
            <section>
              <h2 className="text-xl font-semibold mb-2">Video Guide</h2>
              <div className="aspect-w-16 aspect-h-9 mb-4 rounded overflow-hidden shadow">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Video Guide"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="text-gray-700">
                Watch this video for a quick walkthrough of the setup and features.
              </p>
            </section>
          }
        />
        <Route
          path="/advanced-topics"
          element={
            <section>
              <h2 className="text-xl font-semibold mb-2">Advanced Topics</h2>
              <p className="text-gray-700 mb-2">
                Dive deeper into advanced usage, including custom theming, adding more shadcn/ui components, and optimizing your build for production.
              </p>
              <Button className="mt-2">Learn More</Button>
            </section>
          }
        />
        <Route
          path="/faq"
          element={
            <section>
              <h2 className="text-xl font-semibold mb-2">FAQ</h2>
              <div className="space-y-2">
                <div>
                  <strong>Q: Can I deploy this site for free?</strong>
                  <p className="text-gray-700">Yes! You can use platforms like Vercel, Netlify, or GitHub Pages.</p>
                </div>
                <div>
                  <strong>Q: How do I add more pages?</strong>
                  <p className="text-gray-700">Just add new sections or use a router for multi-page setups.</p>
                </div>
              </div>
            </section>
          }
        />
        <Route
          path="/"
          element={<h2 className="text-2xl font-semibold">Welcome! Select a topic from the sidebar.</h2>}
        />
      </Routes>
    </main>
  );
}

// Main App
export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <header className="bg-white fixed top-0 left-0 w-full shadow px-6 py-4 ml-64">
          <Breadcrumb />
          <h1 className="text-3xl font-bold mt-2 text-gray-900">Static Docs Site Example with Routing</h1>
        </header>

        <div className="flex flex-1">
          <Sidebar />
          <Content />
        </div>

        <footer className="bg-white border-t px-6 py-4 text-center text-sm text-gray-500 ml-64">
          Made with ❤️ by Lovelace &middot; <a href="https://github.com/yourusername" className="underline hover:text-blue-600">GitHub</a>
        </footer>
      </div>
    </Router>
  );
}
