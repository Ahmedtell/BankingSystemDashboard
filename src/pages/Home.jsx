import DateTime from "../components/DateTime";
import Charts from "../assets/Chart";
import {
  AlertTriangle,
  CheckCircle2,
  LockKeyhole,
  MonitorSmartphone,
  ShieldCheck,
  UserCheck,
  UsersRound,
  Wifi,
  XCircle,
} from "lucide-react";

const customerData = [400, 300, 200, 100];

const registrationRows = [
  {
    label: "Today",
    value: "0",
    detail: new Date().toLocaleDateString("en-US", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  },
  { label: "Last Week", value: "2", detail: "Recent registrations" },
  { label: "Last Month", value: "27", detail: "Monthly total" },
  { label: "Last Year", value: "555", detail: "Annual total" },
];

const mobileRows = [
  { label: "Individual", status: "Active", value: "1032", tone: "green" },
  { label: "Common", status: "Active", value: "9", tone: "green" },
  { label: "Individual", status: "Inactive", value: "0", tone: "red" },
  { label: "Common", status: "Inactive", value: "0", tone: "red" },
  { label: "Corporate", status: "Inactive", value: "0", tone: "red" },
  { label: "Representative", status: "Inactive", value: "0", tone: "red" },
];

const internetActive = [
  ["Individual", "1007"],
  ["Common", "10"],
  ["Corporate", "196"],
  ["Representative", "101"],
];

const blockedRows = ["Individual", "Common", "Corporate", "Representative"];

function StatusPill({ tone, children }) {
  const styles =
    tone === "green"
      ? "bg-emerald-50 text-emerald-700"
      : "bg-red-50 text-red-700";

  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${styles}`}>
      {children}
    </span>
  );
}

function InfoRow({ label, value, detail, status, tone }) {
  return (
    <div className="flex min-h-14 items-center justify-between gap-4 rounded-lg border border-gray-100 bg-gray-50 px-3 py-2.5">
      <div className="min-w-0">
        <p className="font-bold text-gray-900">{label}</p>
        {detail && <p className="mt-1 text-xs text-gray-500">{detail}</p>}
        {status && (
          <div className="mt-2">
            <StatusPill tone={tone}>{status}</StatusPill>
          </div>
        )}
      </div>
      <p className="text-lg font-extrabold text-gray-800">{value}</p>
    </div>
  );
}

function Panel({ title, icon, children, action }) {
  const PanelIcon = icon;

  return (
    <section className="flex flex-col h-full p-4 bg-white border border-gray-100 rounded-lg shadow-sm sm:p-5">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 text-gray-700 bg-gray-100 rounded-lg">
            <PanelIcon size={20} />
          </div>
          <h2 className="text-sm font-extrabold text-gray-950 sm:text-base">
            {title}
          </h2>
        </div>
        {action}
      </div>
      <div className="flex-1">{children}</div>
    </section>
  );
}

export default function Home({ title }) {
  return (
    <div className="w-full text-gray-900">
      <section className="overflow-hidden bg-white border border-red-100 rounded-lg shadow-sm">
        <div className="relative px-5 py-5 sm:px-6 lg:px-7">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#D01030] via-[#FF5000] to-amber-400" />
          <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)_auto] xl:items-center">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-extrabold rounded-full bg-emerald-50 text-emerald-700">
                  <CheckCircle2 size={14} />
                  General system information
                </span>
              </div>

              <h1 className="text-2xl font-semibold tracking-normal text-gray-900 sm:text-3xl">
                {title}
              </h1>
            </div>

            <div className="grid gap-2 p-3 border border-gray-100 rounded-lg bg-gray-50 sm:grid-cols-2 xl:grid-cols-1">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center min-w-0 gap-2">
                  <CheckCircle2
                    className="shrink-0 text-emerald-600"
                    size={18}
                  />
                  <span className="text-xs font-extrabold text-gray-800">
                    Last Successful Login
                  </span>
                </div>
                <span className="text-xs font-bold text-gray-500 shrink-0">
                  23/4/2026 - 8:32:10
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center min-w-0 gap-2">
                  <XCircle className="text-red-600 shrink-0" size={18} />
                  <span className="text-xs font-extrabold text-gray-800">
                    Last Unsuccessful Login
                  </span>
                </div>
                <span className="text-xs font-bold text-gray-500 shrink-0">
                  23/4/2026 - 8:32:10
                </span>
              </div>
            </div>

            <div className="p-3 border border-gray-100 rounded-lg bg-gray-50">
              <DateTime />
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-5 mt-5 auto-rows-fr lg:grid-cols-2">
        <div>
          <Panel title="Registration On E-Channels" icon={UserCheck}>
            <div className="grid content-start h-full gap-3">
              {registrationRows.map((row) => (
                <InfoRow key={row.label} {...row} />
              ))}
            </div>
          </Panel>
        </div>

        <div>
          <Panel title="All Customers" icon={UsersRound}>
            <div className="grid h-full gap-4 md:grid-cols-[minmax(220px,1fr)_0.85fr] md:items-center">
              <div className="h-56 min-h-56">
                <Charts dataValues={customerData} />
              </div>
              <div className="grid gap-3">
                {[
                  ["Individual", "400", "bg-blue-500"],
                  ["Representative", "300", "bg-emerald-500"],
                  ["Corporate", "200", "bg-amber-500"],
                  ["Common", "100", "bg-red-500"],
                ].map(([label, value, dot]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between px-3 py-3 border border-gray-100 rounded-lg"
                  >
                    <span className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
                      {label}
                    </span>
                    <span className="font-extrabold text-gray-950">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Panel>
        </div>

        <div>
          <Panel title="Mobile Customers" icon={MonitorSmartphone}>
            <div className="grid content-start h-full gap-3 sm:grid-cols-2">
              {mobileRows.map((row, index) => (
                <InfoRow key={`${row.label}-${index}`} {...row} />
              ))}
            </div>
          </Panel>
        </div>

        <div>
          <Panel title="Internet Customers" icon={Wifi}>
            <div className="grid h-full gap-4 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-2 mb-3 text-sm font-extrabold text-emerald-700">
                  <CheckCircle2 size={16} />
                  Active
                </div>
                <div className="grid gap-3">
                  {internetActive.map(([label, value]) => (
                    <InfoRow key={label} label={label} value={value} />
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3 text-sm font-extrabold text-red-700">
                  <AlertTriangle size={16} />
                  Inactive
                </div>
                <div className="grid gap-3">
                  {internetActive.map(([label]) => (
                    <InfoRow key={label} label={label} value="0" />
                  ))}
                </div>
              </div>
            </div>
          </Panel>
        </div>

        <div>
          <Panel title="Blocked Mobile Customers" icon={LockKeyhole}>
            <div className="grid content-start h-full gap-3">
              {blockedRows.map((label) => (
                <InfoRow key={label} label={label} value="0" />
              ))}
            </div>
          </Panel>
        </div>

        <div>
          <Panel title="Blocked Internet Customers" icon={ShieldCheck}>
            <div className="grid content-start h-full gap-3">
              {blockedRows.map((label) => (
                <InfoRow key={label} label={label} value="0" />
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
