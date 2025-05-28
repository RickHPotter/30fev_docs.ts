import { Link, useLocation } from "react-router-dom"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { LucideIcon } from "lucide-react"
import { Banknote, CreditCard, CircleUser, FolderOpen, HandCoins, Menu, NotebookPen, PiggyBank, User, UserPlus, Wallet, WalletCards } from "lucide-react"

type SidebarItem = {
  label: string
  icon?: LucideIcon
  path: string
  children?: SidebarItem[]
}

const sidebarStructure: SidebarItem[] = [
  { label: "Introduction", icon: NotebookPen, path: "/introduction" },
  { label: "Sign up", icon: UserPlus, path: "/sign-up" },
  { label: "Log in", icon: User, path: "/log-in" },
  {
    label: "Bank Accounts",
    icon: Banknote,
    path: "/bank-accounts/create",
    children: [
      { label: "Create", path: "/bank-accounts/create" },
      { label: "Edit", path: "/bank-accounts/edit" },
      { label: "Create Inactive", path: "/bank-accounts/create-inactive" },
      { label: "Create Cash Transaction", path: "/bank-accounts/create-cash-transaction" },
      { label: "Delete", path: "/bank-accounts/delete" },
    ],
  },
  {
    label: "User Cards",
    icon: CreditCard,
    path: "/user-cards/create",
    children: [
      { label: "Create", path: "/user-cards/create" },
      { label: "Edit", path: "/user-cards/edit" },
      { label: "Create Card Transaction", path: "/user-cards/create-card-transaction" },
      { label: "Delete", path: "/user-cards/delete" },
    ],
  },
  {
    label: "Categories",
    icon: FolderOpen,
    path: "/categories/create",
    children: [
      { label: "Create", path: "/categories/create" },
      { label: "Edit", path: "/categories/edit" },
      { label: "Create Transaction", path: "/categories/create-transaction" },
      { label: "Edit Transaction", path: "/categories/edit-transaction" },
    ],
  },
  {
    label: "Entities",
    icon: CircleUser,
    path: "/entities/create",
    children: [
      { label: "Create", path: "/entities/create" },
      { label: "Edit", path: "/entities/edit" },
      { label: "Create Transaction", path: "/entities/create-transaction" },
      { label: "Edit Transaction", path: "/entities/edit-transaction" },
    ],
  },
  {
    label: "Card Transactions",
    icon: WalletCards,
    path: "/card-transactions/create",
    children: [
      { label: "Create", path: "/card-transactions/create" },
      { label: "Edit", path: "/card-transactions/edit" },
      { label: "Reference Month Year", path: "/card-transactions/reference-month-year" },
      { label: "Card Installments", path: "/card-transactions/card-installments" },
      { label: "Card Payment", path: "/card-transactions/card-payment" },
      { label: "Card Advance", path: "/card-transactions/card-advance" },
      { label: "Entities", path: "/card-transactions/entities" },
      { label: "Exchanges", path: "/card-transactions/exchanges" },

    ],
  },
  {
    label: "Cash Transactions",
    icon: Wallet,
    path: "/cash-transactions/create",
    children: [
      { label: "Create", path: "/cash-transactions/create" },
      { label: "Edit", path: "/cash-transactions/edit" },
      { label: "Reference Month Year", path: "/cash-transactions/reference-month-year" },
      { label: "Cash Installments", path: "/cash-transactions/cash-installments" },
      { label: "Entities", path: "/cash-transactions/entities" },
      { label: "Exchanges", path: "/cash-transactions/exchanges" },
    ],
  },
  {
    label: "Budgets",
    icon: PiggyBank,
    path: "/budgets/create",
    children: [
      { label: "Create", path: "/budgets/create" },
      { label: "Edit", path: "/budgets/edit" },
      { label: "Create Transaction", path: "/budgets/create-transaction" },
      { label: "Edit Transaction", path: "/budgets/edit-transaction" },
      { label: "Delete Transaction", path: "/budgets/delete-transaction" },
      { label: "Exceed Limit", path: "/budgets/exceed-limit" },
    ],
  },
  {
    label: "Investments",
    icon: PiggyBank,
    path: "/investments/create",
    children: [
      { label: "Create", path: "/investments/create" },
      { label: "Edit", path: "/investments/edit" },
    ],
  },
  { label: "Donation", icon: HandCoins, path: "/donation" },
]

export default function Sidebar({ collapsed, setCollapsed }: { collapsed: boolean; setCollapsed: (v: boolean) => void }) {
  const location = useLocation()

  const isChildRouteActive = (parent: SidebarItem) => {
    if (parent.children) {
      return parent.children.some((child) => location.pathname === child.path)
    }
    return location.pathname === parent.path
  }

  return (
    <aside className={`bg-white border-r py-2 fixed top-0 left-0 h-full overflow-auto transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex items-center justify-between px-4 pb-2 pt-0 border-b">
        {!collapsed && <span className="text-lg font-semibold">Docs</span>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded hover:bg-gray-100"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <nav className="space-y-2 px-2 py-4">
        {sidebarStructure.map((item, idx) => {
          const isActive = isChildRouteActive(item)

          return item.children ? (
            <Accordion key={idx} type="single" collapsible className="w-full" defaultValue={isActive ? item.label : undefined} >
              <AccordionItem value={item.label}>
                <AccordionTrigger
                  className={`w-full px-3 py-2 rounded hover:no-underline hover:bg-gray-100 text-gray-900
                              ${collapsed ? "flex flex-col items-center gap-1" : "flex justify-between items-center"}
                              ${isActive ? "bg-gray-100 font-semibold" : "font-medium"}`}
                >
                  <div className={`flex ${collapsed ? "flex-col items-center" : "flex-row items-center gap-3"}`}>
                    {item.icon && <item.icon className="w-5 h-5" />}
                    <span className={`${collapsed ? "text-[6px] leading-tight text-center" : ""}`}>
                      {item.label}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className={`${collapsed ? "" : "pl-4"}`}>
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className={`block px-3 py-1.5 m-0.5 rounded text-sm text-gray-600 hover:bg-gray-100 
                                  ${location.pathname === child.path ? "bg-gray-100 font-semibold" : ""}
                                  ${collapsed ? "text-[6px]" : ""}`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded text-gray-900 hover:bg-gray-100
                           ${isActive ? "bg-gray-100 font-semibold" : "font-medium" }
                           ${collapsed ? "w-full" : "flex-row gap-3 justify-start"}`}
              >
                {item.icon && <item.icon className="w-5 h-5" />}
                <span className={`${collapsed ? "text-[6px] leading-tight text-center" : "hidden"}`}>
                  {item.label}
                </span>
                {!collapsed && <span>{item.label}</span>}
              </Link>
            )
        })}
      </nav>
    </aside>
  )
}
