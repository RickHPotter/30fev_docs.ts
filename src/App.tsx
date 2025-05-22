import React from "react"
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom"
import { Home, ChevronRight } from "lucide-react"

import Introduction from "@/pages/Introduction"
import SignupAndLogin from "@/pages/SignupAndLogin"
import BankAccounts from "@/pages/BankAccounts"
import UserCards from "@/pages/UserCards"
import CardTransactions from "@/pages/CardTransactions"
import CashTransactions from "@/pages/CashTransactions"
import Budgets from "@/pages/Budgets"
import Investments from "@/pages/Investments"
import Donation from "@/pages/Donation"
import Categories from "@/pages/Categories"
import Entities from "@/pages/Entities"

// Sidebar menu items
const sidebarItems = [
  { label: "Introduction", path: "/introduction" },
  { label: "Signup and Login", path: "/sign-up-and-log-in" },
  { label: "Bank Accounts", path: "/bank-accounts" },
  { label: "User Cards", path: "/user-cards" },
  { label: "Categories", path: "/categories" },
  { label: "Entities", path: "/entities" },
  { label: "Card Transactions", path: "/card-transactions" },
  { label: "Cash Transactions", path: "/cash-transactions" },
  { label: "Budgets", path: "/budgets" },
  { label: "Investments", path: "/investments" },
  { label: "Donation", path: "/donation" },
]

// Breadcrumb component
function Breadcrumb() {
  const location = useLocation()
  const pathnames = location.pathname.split("/").filter((x) => x)

  return (
    <nav className="flex items-center text-sm text-gray-500 space-x-2">
      <Link to="/" className="flex items-center hover:underline">
        <Home className="w-4 h-4" />
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`
        const isLast = index === pathnames.length - 1
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
        )
      })}
    </nav>
  )
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
  )
}

// Main content with routes
function Content() {
  return (
    <main className="flex-1 px-6 py-8 ml-64">
      <Routes>
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/sign-up-and-log-in" element={<SignupAndLogin />} />
        <Route path="/bank-accounts" element={<BankAccounts />} />
        <Route path="/user-cards" element={<UserCards />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/entities" element={<Entities />} />
        <Route path="/card-transactions" element={<CardTransactions />} />
        <Route path="/cash-transactions" element={<CashTransactions />} />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/donation" element={<Donation />} />

        <Route path="*" element={
          <section>
            <p className="text-gray-700 mb-2"> Select a Topic on the Sidebar </p>
          </section>
        } />
      </Routes>
    </main>
  )
}

// Main App
export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <header className="bg-white fixed top-0 left-0 w-full shadow px-6 py-4 ml-64">
          <Breadcrumb />
          <h1 className="text-3xl font-bold mt-2 text-gray-900">30/Fev Docs Guide</h1>
        </header>

        <div className="flex flex-1 pt-20">
          <Sidebar />
          <Content />
        </div>

        <footer className="bg-white border-t px-6 py-4 text-center text-sm text-gray-500 ml-64">
          Made with ❤️ by Rikki &middot; <a href="https://github.com/RickHPotter" className="underline hover:text-blue-600" target="_blank"> GitHub</a>
        </footer>
      </div>
    </Router>
  )
}
