import { Link, useLocation } from "react-router-dom"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Banknote, CreditCard, CircleUser, FolderOpen, HandCoins, Menu, NotebookPen, PiggyBank, User, UserPlus, Wallet, WalletCards } from "lucide-react"

const sidebarStructure = [
  { label: "Introduction", icon: NotebookPen, path: "/30fev_docs.ts/introduction" },
  { label: "Sign up", icon: UserPlus, path: "/30fev_docs.ts/sign-up" },
  { label: "Log in", icon: User, path: "/30fev_docs.ts/log-in" },
  {
    label: "Bank Accounts",
    icon: Banknote,
    path: "/30fev_docs.ts/bank-accounts/create",
    children: [
      { label: "Create", path: "/30fev_docs.ts/bank-accounts/create" },
      { label: "Edit", path: "/30fev_docs.ts/bank-accounts/edit" },
      { label: "Create Inactive", path: "/30fev_docs.ts/bank-accounts/create-inactive" },
      { label: "Delete", path: "/30fev_docs.ts/bank-accounts/delete" },
      { label: "Create Cash Transaction", path: "/30fev_docs.ts/bank-accounts/create-cash-transaction" },
      { label: "Delete Failure", path: "/30fev_docs.ts/bank-accounts/delete-failure" },
    ],
  },
  {
    label: "User Cards",
    icon: CreditCard,
    path: "/30fev_docs.ts/user-cards/create",
    children: [
      { label: "Create", path: "/30fev_docs.ts/user-cards/create" },
      { label: "Edit", path: "/30fev_docs.ts/user-cards/edit" },
      { label: "Create Card Transaction", path: "/30fev_docs.ts/user-cards/create-card-transaction" },
    ],
  },
  {
    label: "Categories",
    icon: FolderOpen,
    path: "/30fev_docs.ts/categories/create",
    children: [
      { label: "Create", path: "/30fev_docs.ts/categories/create" },
      { label: "Edit", path: "/30fev_docs.ts/categories/edit" },
      { label: "Create Transaction", path: "/30fev_docs.ts/categories/create-transaction" },
      { label: "Edit Transaction", path: "/30fev_docs.ts/categories/edit-transaction" },
    ],
  },
  {
    label: "Entities",
    icon: CircleUser,
    path: "/30fev_docs.ts/entities/create",
    children: [
      { label: "Create", path: "/30fev_docs.ts/entities/create" },
      { label: "Edit", path: "/30fev_docs.ts/entities/edit" },
      { label: "Create Transaction", path: "/30fev_docs.ts/entities/create-transaction" },
      { label: "Edit Transaction", path: "/30fev_docs.ts/entities/edit-transaction" },
    ],
  },
  {
    label: "Card Transactions",
    icon: WalletCards,
    path: "/30fev_docs.ts/card-transactions/create",
    children: [
      { label: "Create", path: "/30fev_docs.ts/card-transactions/create" },
      { label: "Edit", path: "/30fev_docs.ts/card-transactions/edit" },
      { label: "Reference Month Year", path: "/30fev_docs.ts/card-transactions/reference-month-year" },
      { label: "Card Installments", path: "/30fev_docs.ts/card-transactions/card-installments" },
      { label: "Card Payment", path: "/30fev_docs.ts/card-transactions/card-payment" },
      { label: "Card Advance", path: "/30fev_docs.ts/card-transactions/card-advance" },
      { label: "Entities", path: "/30fev_docs.ts/card-transactions/entities" },
      { label: "Exchanges", path: "/30fev_docs.ts/card-transactions/exchanges" },

    ],
  },
  {
    label: "Cash Transactions",
    icon: Wallet,
    path: "/30fev_docs.ts/cash-transactions/create",
    children: [
      { label: "Create", path: "/30fev_docs.ts/cash-transactions/create" },
      { label: "Edit", path: "/30fev_docs.ts/cash-transactions/edit" },
      { label: "Reference Month Year", path: "/30fev_docs.ts/cash-transactions/reference-month-year" },
      { label: "Cash Installments", path: "/30fev_docs.ts/cash-transactions/cash-installments" },
      { label: "Entities", path: "/30fev_docs.ts/cash-transactions/entities" },
      { label: "Exchanges", path: "/30fev_docs.ts/cash-transactions/exchanges" },
    ],
  },
  {
    label: "Budgets",
    icon: PiggyBank,
    path: "/30fev_docs.ts/budgets/create",
    children: [
      { label: "Create", path: "/30fev_docs.ts/budgets/create" },
      { label: "Edit", path: "/30fev_docs.ts/budgets/edit" },
      { label: "Create Transaction", path: "/30fev_docs.ts/budgets/create-transaction" },
      { label: "Edit Transaction", path: "/30fev_docs.ts/budgets/edit-transaction" },
      { label: "Delete Transaction", path: "/30fev_docs.ts/budgets/delete-transaction" },
      { label: "Exceed Limit", path: "/30fev_docs.ts/budgets/exceed-limit" },
    ],
  },
  {
    label: "Investments",
    icon: PiggyBank,
    path: "/30fev_docs.ts/investments/create",
    children: [
      { label: "Create", path: "/30fev_docs.ts/investments/create" },
      { label: "Edit", path: "/30fev_docs.ts/investments/edit" },
    ],
  },
  { label: "Donation", icon: HandCoins, path: "/30fev_docs.ts/donation" },
]

export default function Sidebar({ collapsed, setCollapsed }: { collapsed: boolean; setCollapsed: (v: boolean) => void }) {
  const location = useLocation()

  const isChildRouteActive = (parent: typeof item) => {
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
          const Icon = item.icon
          const isActive = isChildRouteActive(item)

          return item.children ? (
            <Accordion key={idx} type="single" collapsible className="w-full" defaultValue={isActive ? item.label : undefined} >
              <AccordionItem value={item.label}>
                {collapsed ? (
                  <Link
                    to={item.path}
                    className={`flex items-center justify-center px-3 py-2 rounded text-gray-700 hover:bg-gray-100 ${
                      isActive ? "bg-gray-100 font-semibold" : "font-medium"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                ) : (
                  <AccordionTrigger
                    className={`flex justify-between items-center w-full px-3 py-2 rounded text-md text-gray-700 hover:no-underline hover:bg-gray-100 ${
                      isActive ? "bg-gray-100 font-semibold" : "font-medium"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5" />
                      {item.label}
                    </div>
                  </AccordionTrigger>
                )}

                <AccordionContent className="pl-4">
                  {!collapsed &&
                    item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`block px-3 py-1.5 m-0.5 rounded text-sm text-gray-600 hover:bg-gray-100 ${
                          location.pathname === child.path ? "bg-gray-100 font-semibold" : ""
                        }`}
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
              className={`flex items-center gap-3 px-3 py-2 rounded text-gray-700 hover:bg-gray-100 ${isActive ? "bg-gray-100 font-semibold" : "font-medium"} ${collapsed ? "justify-center" : ""}`}
            >
              <Icon className="w-5 h-5" />
              {!collapsed && item.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
