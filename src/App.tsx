import React, { useState, useEffect } from "react"
import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom"
import { Home, ChevronRight } from "lucide-react"

import Sidebar from "@/components/Sidebar"

import Introduction from "@/pages/Introduction"
import Signup from "@/pages/Signup"
import Login from "@/pages/Login"
import BankAccounts from "@/pages/BankAccounts"
import UserCards from "@/pages/UserCards"
import CardTransactions from "@/pages/CardTransactions"
import CashTransactions from "@/pages/CashTransactions"
import Budgets from "@/pages/Budgets"
import Investments from "@/pages/Investments"
import Donation from "@/pages/Donation"
import Categories from "@/pages/Categories"
import Entities from "@/pages/Entities"

function Breadcrumb() {
  const location = useLocation()
  const pathnames = location.pathname.split("/").filter((x) => x)

  return (
    <nav className="flex items-center text-sm text-gray-500 space-x-2">
      <Link to="/introduction" className="flex items-center hover:underline">
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

function Content({ sidebarWidth }: { sidebarWidth: string }) {
  return (
    <main className={`flex-1 px-6 py-8 ${sidebarWidth}`}>
      <Routes>
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/bank-accounts/:section" element={<BankAccounts />} />
        <Route path="/user-cards/:section" element={<UserCards />} />
        <Route path="/categories/:section" element={<Categories />} />
        <Route path="/entities/:section" element={<Entities />} />
        <Route path="/card-transactions/:section" element={<CardTransactions />} />
        <Route path="/cash-transactions/:section" element={<CashTransactions />} />
        <Route path="/budgets/:section" element={<Budgets />} />
        <Route path="/investments/:section" element={<Investments />} />
        <Route path="/donation" element={<Donation />} />

        <Route path="*" element={
          <section>
            <p className="text-gray-900 mb-2"> Select a Topic on the Sidebar </p>
          </section>
        } />
      </Routes>
    </main>
  )
}

export default function App() {
  const [collapsed, setCollapsed] = useState(false)
  const sidebarWidth = collapsed ? "ml-16" : "ml-64"

  useEffect(() => {
    if (window.innerWidth < 768) {
      setCollapsed(true)
    }
  }, [])

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 noticia-text-regular">
        <header className={`bg-white fixed z-50 top-0 left-0 w-full shadow px-6 py-4 ${sidebarWidth}`}>
          <Breadcrumb />
          <h1 className="text-2xl hidden md:block font-bold mt-2 text-gray-900">30/Fev Docs Guide</h1>
        </header>

        <div className="flex flex-1 pt-6 md:pt-20">
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content sidebarWidth={sidebarWidth} />
        </div>

        <footer className={`bg-white border-t px-6 py-4 text-sm text-gray-500 ${sidebarWidth}`}>
          Made with ❤️ by Rikki &middot; <a href="https://github.com/RickHPotter" className="underline hover:text-blue-600" target="_blank"> GitHub</a>
        </footer>
      </div>
    </Router>
  )
}
