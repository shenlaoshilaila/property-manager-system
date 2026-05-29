const STORAGE_KEY = "five-property-manager-data-v1";

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const sampleData = {
  settings: {
    managerName: "Property Manager",
    managerEmail: "manager@example.com",
    lateFee: 75,
    rentDueDay: 1
  },
  properties: [
    {
      id: "p1",
      name: "Maple Court",
      address: "120 Maple Street",
      type: "Apartment",
      units: 10,
      manager: "Jordan Lee",
      notes: "Central location with two vacant units scheduled for showing.",
      tone: "tone-1"
    },
    {
      id: "p2",
      name: "Riverside Flats",
      address: "88 River Road",
      type: "Townhomes",
      units: 8,
      manager: "Jordan Lee",
      notes: "Strong rent collection, roof inspection due this quarter.",
      tone: "tone-2"
    },
    {
      id: "p3",
      name: "Oak Terrace",
      address: "45 Oak Avenue",
      type: "Duplexes",
      units: 6,
      manager: "Mia Chen",
      notes: "Several lease renewals due within 90 days.",
      tone: "tone-3"
    },
    {
      id: "p4",
      name: "Cedar Heights",
      address: "310 Cedar Lane",
      type: "Single Family",
      units: 5,
      manager: "Mia Chen",
      notes: "Landscaping vendor contract renewal pending.",
      tone: "tone-4"
    },
    {
      id: "p5",
      name: "Market Street Lofts",
      address: "19 Market Street",
      type: "Mixed Use",
      units: 7,
      manager: "Avery Smith",
      notes: "Ground-floor commercial unit has a maintenance request open.",
      tone: "tone-5"
    }
  ],
  tenants: [
    {
      id: "t1",
      name: "Amelia Reed",
      email: "amelia.reed@example.com",
      phone: "(555) 010-1130",
      propertyId: "p1",
      unit: "1A",
      leaseStart: "2025-08-01",
      leaseEnd: "2026-07-31",
      rent: 1450,
      deposit: 1450,
      status: "Active"
    },
    {
      id: "t2",
      name: "Marcus Brown",
      email: "marcus.brown@example.com",
      phone: "(555) 010-2240",
      propertyId: "p1",
      unit: "2B",
      leaseStart: "2025-06-01",
      leaseEnd: "2026-05-31",
      rent: 1525,
      deposit: 1525,
      status: "Active"
    },
    {
      id: "t3",
      name: "Priya Shah",
      email: "priya.shah@example.com",
      phone: "(555) 010-3350",
      propertyId: "p2",
      unit: "3",
      leaseStart: "2025-09-15",
      leaseEnd: "2026-09-14",
      rent: 1725,
      deposit: 1725,
      status: "Active"
    },
    {
      id: "t4",
      name: "Noah Ellis",
      email: "noah.ellis@example.com",
      phone: "(555) 010-4460",
      propertyId: "p2",
      unit: "5",
      leaseStart: "2025-04-01",
      leaseEnd: "2026-06-30",
      rent: 1680,
      deposit: 1680,
      status: "Active"
    },
    {
      id: "t5",
      name: "Sofia Garcia",
      email: "sofia.garcia@example.com",
      phone: "(555) 010-5570",
      propertyId: "p3",
      unit: "A",
      leaseStart: "2025-07-01",
      leaseEnd: "2026-06-30",
      rent: 1350,
      deposit: 1350,
      status: "Active"
    },
    {
      id: "t6",
      name: "Ethan Brooks",
      email: "ethan.brooks@example.com",
      phone: "(555) 010-6680",
      propertyId: "p4",
      unit: "101",
      leaseStart: "2025-11-01",
      leaseEnd: "2026-10-31",
      rent: 2100,
      deposit: 2100,
      status: "Active"
    },
    {
      id: "t7",
      name: "Lena Martin",
      email: "lena.martin@example.com",
      phone: "(555) 010-7790",
      propertyId: "p5",
      unit: "L2",
      leaseStart: "2025-05-15",
      leaseEnd: "2026-05-14",
      rent: 1850,
      deposit: 1850,
      status: "Active"
    }
  ],
  payments: [
    { id: "pay1", tenantId: "t1", propertyId: "p1", amountDue: 1450, amountPaid: 1450, dueDate: "2026-05-01", paidDate: "2026-05-01", method: "ACH", status: "Paid" },
    { id: "pay2", tenantId: "t2", propertyId: "p1", amountDue: 1525, amountPaid: 900, dueDate: "2026-05-01", paidDate: "2026-05-02", method: "Card", status: "Partial" },
    { id: "pay3", tenantId: "t3", propertyId: "p2", amountDue: 1725, amountPaid: 1725, dueDate: "2026-05-01", paidDate: "2026-04-30", method: "ACH", status: "Paid" },
    { id: "pay4", tenantId: "t4", propertyId: "p2", amountDue: 1680, amountPaid: 1680, dueDate: "2026-05-01", paidDate: "2026-05-01", method: "Check", status: "Paid" },
    { id: "pay5", tenantId: "t5", propertyId: "p3", amountDue: 1350, amountPaid: 0, dueDate: "2026-05-01", paidDate: "", method: "", status: "Late" },
    { id: "pay6", tenantId: "t6", propertyId: "p4", amountDue: 2100, amountPaid: 2100, dueDate: "2026-05-01", paidDate: "2026-05-01", method: "ACH", status: "Paid" },
    { id: "pay7", tenantId: "t7", propertyId: "p5", amountDue: 1850, amountPaid: 1850, dueDate: "2026-05-01", paidDate: "2026-04-29", method: "ACH", status: "Paid" }
  ],
  maintenance: [
    { id: "m1", propertyId: "p1", tenantId: "t2", unit: "2B", title: "Kitchen faucet leak", date: "2026-05-02", category: "Plumbing", priority: "Medium", status: "In Progress", assignedTo: "ClearFlow Plumbing", estimatedCost: 240, finalCost: 0, description: "Faucet leaking under sink cabinet." },
    { id: "m2", propertyId: "p3", tenantId: "t5", unit: "A", title: "Bedroom outlet not working", date: "2026-05-03", category: "Electrical", priority: "High", status: "New", assignedTo: "Unassigned", estimatedCost: 180, finalCost: 0, description: "One outlet stopped working after storm." },
    { id: "m3", propertyId: "p5", tenantId: "t7", unit: "L2", title: "Hallway light replacement", date: "2026-05-01", category: "Common Area", priority: "Low", status: "Waiting for Parts", assignedTo: "Building Tech", estimatedCost: 95, finalCost: 0, description: "Fixture replacement ordered." },
    { id: "m4", propertyId: "p2", tenantId: "t3", unit: "3", title: "HVAC filter service", date: "2026-04-29", category: "HVAC", priority: "Low", status: "Completed", assignedTo: "North Air", estimatedCost: 120, finalCost: 115, description: "Routine filter service complete." }
  ],
  expenses: [
    { id: "e1", propertyId: "p1", date: "2026-05-02", category: "Repairs", vendor: "ClearFlow Plumbing", amount: 240, notes: "Kitchen leak estimate." },
    { id: "e2", propertyId: "p2", date: "2026-05-01", category: "Landscaping", vendor: "GreenLine", amount: 420, notes: "Monthly service." },
    { id: "e3", propertyId: "p3", date: "2026-04-28", category: "Insurance", vendor: "Shield Mutual", amount: 680, notes: "Monthly premium." },
    { id: "e4", propertyId: "p4", date: "2026-05-01", category: "Utilities", vendor: "City Water", amount: 310, notes: "Water service." },
    { id: "e5", propertyId: "p5", date: "2026-04-30", category: "Cleaning", vendor: "Bright Crew", amount: 260, notes: "Common area cleaning." }
  ],
  documents: [
    { id: "d1", propertyId: "p1", tenantId: "t1", type: "Lease", name: "Amelia Reed Lease", date: "2025-08-01", notes: "Signed lease agreement." },
    { id: "d2", propertyId: "p2", tenantId: "t3", type: "Inspection", name: "Riverside Unit 3 Inspection", date: "2026-03-20", notes: "Move-in condition record." },
    { id: "d3", propertyId: "p5", tenantId: "t7", type: "Notice", name: "Lease Renewal Notice", date: "2026-04-15", notes: "Renewal sent before expiration." }
  ]
};

let data = loadData();
let activeView = "dashboard";
let selectedProperty = "all";
let selectedExpenseYear = null;
let selectedExpenseMonth = "all";
let selectedExpenseProperty = null;
let selectedProfitYear = null;
let selectedProfitMonth = "all";
let dialogMode = null;

const viewTitles = {
  dashboard: "Dashboard",
  properties: "Properties",
  tenants: "Tenants",
  payments: "Payments",
  maintenance: "Maintenance",
  expenses: "Expenses",
  documents: "Documents",
  reports: "Reports",
  settings: "Settings"
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

document.addEventListener("DOMContentLoaded", () => {
  bindNavigation();
  bindActions();
  bindSettings();
  populatePropertyFilter();
  render();
});

function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return structuredClone(sampleData);
  try {
    return JSON.parse(saved);
  } catch {
    return structuredClone(sampleData);
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function bindNavigation() {
  $$(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      activeView = button.dataset.view;
      $$(".nav-item").forEach((item) => item.classList.toggle("active", item === button));
      $$(".view").forEach((view) => view.classList.remove("active"));
      $(`#${activeView}View`).classList.add("active");
      $("#pageTitle").textContent = viewTitles[activeView];
      render();
    });
  });

  $("#propertyFilter").addEventListener("change", (event) => {
    selectedProperty = event.target.value;
    selectedExpenseProperty = null;
    render();
  });

  $("#expenseYearFilter").addEventListener("change", (event) => {
    selectedExpenseYear = event.target.value;
    selectedExpenseMonth = "all";
    renderExpenses();
  });

  $("#expenseMonthFilter").addEventListener("change", (event) => {
    selectedExpenseMonth = event.target.value;
    renderExpenses();
  });

  $("#profitYearFilter").addEventListener("change", (event) => {
    selectedProfitYear = event.target.value;
    selectedProfitMonth = "all";
    renderReports();
  });

  $("#profitMonthFilter").addEventListener("change", (event) => {
    selectedProfitMonth = event.target.value;
    renderReports();
  });
}

function bindActions() {
  document.body.addEventListener("click", (event) => {
    const actionTarget = event.target.closest("[data-action]");
    if (!actionTarget) return;

    const action = actionTarget.dataset.action;
    const id = actionTarget.dataset.id;
    if (!action) return;
    if (event.target.closest(".property-expense-detail") && action === "select-expense-property") return;

    if (action === "add-property") openDialog("property");
    if (action === "edit-property") openDialog("property", id);
    if (action === "add-tenant") openDialog("tenant");
    if (action === "edit-tenant") openDialog("tenant", id);
    if (action === "add-payment") openDialog("payment");
    if (action === "edit-payment") openDialog("payment", id);
    if (action === "add-maintenance") openDialog("maintenance");
    if (action === "edit-maintenance") openDialog("maintenance", id);
    if (action === "add-expense") openDialog("expense");
    if (action === "edit-expense") openDialog("expense", id);
    if (action === "add-document") openDialog("document");
    if (action === "edit-document") openDialog("document", id);
    if (action === "close-dialog") closeDialog();
    if (action === "delete-maintenance") deleteMaintenance(id);
    if (action === "add-expense-for-property") openExpenseForProperty(id);
    if (action === "delete-expense") deleteExpense(id);
    if (action === "select-expense-property") selectExpenseProperty(id);
  });

  document.body.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    const actionTarget = event.target.closest('[data-action="select-expense-property"]');
    if (!actionTarget) return;

    event.preventDefault();
    selectExpenseProperty(actionTarget.dataset.id);
  });

  $("#saveRecordBtn").addEventListener("click", saveDialogRecord);

  $("#resetDataBtn").addEventListener("click", () => {
    data = structuredClone(sampleData);
    selectedProperty = "all";
    selectedExpenseProperty = null;
    saveData();
    populatePropertyFilter();
    render();
    showToast("Sample data restored");
  });
}

function selectExpenseProperty(propertyId) {
  if (!propertyId) return;
  selectedExpenseProperty = selectedExpenseProperty === propertyId ? null : propertyId;
  renderExpenses();
}

function openExpenseForProperty(propertyId) {
  if (!propertyId) return;

  const defaultDate = selectedExpenseMonth !== "all"
    ? `${selectedExpenseMonth}-01`
    : selectedExpenseYear && selectedExpenseYear !== "all"
      ? `${selectedExpenseYear}-01-01`
      : todayDate();

  openDialog("expense", null, {
    propertyId,
    date: defaultDate,
    category: "Repairs",
    amount: 0
  });
}

function bindSettings() {
  $("#settingsForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    data.settings = {
      managerName: formData.get("managerName"),
      managerEmail: formData.get("managerEmail"),
      lateFee: Number(formData.get("lateFee")),
      rentDueDay: Number(formData.get("rentDueDay"))
    };
    saveData();
    showToast("Settings saved");
  });
}

function populatePropertyFilter() {
  const options = [
    `<option value="all">All Properties</option>`,
    ...data.properties.map((property) => `<option value="${property.id}">${escapeHtml(property.name)}</option>`)
  ];
  $("#propertyFilter").innerHTML = options.join("");
  $("#propertyFilter").value = selectedProperty;
}

function render() {
  renderDashboard();
  renderProperties();
  renderTenants();
  renderPayments();
  renderMaintenance();
  renderExpenses();
  renderDocuments();
  renderReports();
  renderSettings();
}

function filtered(items) {
  if (selectedProperty === "all") return items;
  return items.filter((item) => itemPropertyId(item) === selectedProperty || item.id === selectedProperty);
}

function getProperty(id) {
  return data.properties.find((property) => property.id === id);
}

function getTenant(id) {
  return data.tenants.find((tenant) => tenant.id === id);
}

function itemPropertyId(item) {
  if ("amountDue" in item && "amountPaid" in item) return paymentPropertyId(item);
  return item.propertyId || item.id;
}

function paymentPropertyId(payment) {
  const tenant = getTenant(payment.tenantId);
  return tenant?.propertyId || payment.propertyId;
}

function propertyMetrics(propertyId) {
  const property = getProperty(propertyId);
  const tenants = data.tenants.filter((tenant) => tenant.propertyId === propertyId && tenant.status === "Active");
  const payments = data.payments.filter((payment) => paymentPropertyId(payment) === propertyId);
  const expenses = data.expenses.filter((expense) => expense.propertyId === propertyId);
  const maintenance = data.maintenance.filter((request) => request.propertyId === propertyId);
  const expected = payments.reduce((sum, payment) => sum + Number(payment.amountDue || 0), 0);
  const collected = payments.reduce((sum, payment) => sum + Number(payment.amountPaid || 0), 0);
  const expenseTotal = expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
  const openRequests = maintenance.filter((request) => request.status !== "Completed" && request.status !== "Cancelled").length;

  return {
    units: property?.units || 0,
    occupied: tenants.length,
    expected,
    collected,
    outstanding: expected - collected,
    expenses: expenseTotal,
    net: collected - expenseTotal,
    openRequests,
    occupancy: property?.units ? tenants.length / property.units : 0
  };
}

function portfolioMetrics() {
  const properties = selectedProperty === "all" ? data.properties : data.properties.filter((property) => property.id === selectedProperty);
  return properties.reduce(
    (acc, property) => {
      const metrics = propertyMetrics(property.id);
      acc.units += metrics.units;
      acc.occupied += metrics.occupied;
      acc.expected += metrics.expected;
      acc.collected += metrics.collected;
      acc.outstanding += metrics.outstanding;
      acc.expenses += metrics.expenses;
      acc.net += metrics.net;
      acc.openRequests += metrics.openRequests;
      return acc;
    },
    { units: 0, occupied: 0, expected: 0, collected: 0, outstanding: 0, expenses: 0, net: 0, openRequests: 0 }
  );
}

function renderDashboard() {
  const metrics = portfolioMetrics();
  const occupancy = metrics.units ? Math.round((metrics.occupied / metrics.units) * 100) : 0;

  $("#kpiGrid").innerHTML = [
    kpi("Rent Collected", money.format(metrics.collected), `${money.format(metrics.outstanding)} outstanding`),
    kpi("Monthly Net", money.format(metrics.net), `${money.format(metrics.expenses)} expenses`),
    kpi("Occupancy", `${occupancy}%`, `${metrics.occupied} of ${metrics.units} units occupied`),
    kpi("Open Requests", metrics.openRequests, "maintenance items need attention")
  ].join("");

  $("#dashboardProperties").innerHTML = filtered(data.properties).map(propertyCard).join("");

  const openMaintenance = filtered(data.maintenance)
    .filter((request) => request.status !== "Completed" && request.status !== "Cancelled")
    .slice(0, 5);
  $("#openMaintenance").innerHTML = openMaintenance.length
    ? openMaintenance.map(maintenanceListItem).join("")
    : emptyState("No open maintenance requests");

  const expiring = filtered(data.tenants)
    .map((tenant) => ({ ...tenant, daysLeft: daysUntil(tenant.leaseEnd) }))
    .filter((tenant) => tenant.daysLeft <= 120)
    .sort((a, b) => a.daysLeft - b.daysLeft)
    .slice(0, 5);

  $("#leaseExpirations").innerHTML = expiring.length
    ? expiring.map((tenant) => `
        <div class="list-item">
          <h3>${escapeHtml(tenant.name)}</h3>
          <p>${propertyName(tenant.propertyId)} Unit ${escapeHtml(tenant.unit)} - ${formatDate(tenant.leaseEnd)}</p>
          <span class="status ${tenant.daysLeft < 30 ? "danger" : "warn"}">${tenant.daysLeft} days</span>
        </div>
      `).join("")
    : emptyState("No leases expiring soon");
}

function renderProperties() {
  $("#propertiesGrid").innerHTML = filtered(data.properties).map(propertyCard).join("");
}

function renderTenants() {
  $("#tenantsTable").innerHTML = filtered(data.tenants).map((tenant) => `
    <tr>
      <td><strong>${escapeHtml(tenant.name)}</strong><br><span>${escapeHtml(tenant.email)}</span></td>
      <td>${propertyName(tenant.propertyId)}</td>
      <td>${escapeHtml(tenant.unit)}</td>
      <td>${formatDate(tenant.leaseStart)} to ${formatDate(tenant.leaseEnd)}</td>
      <td>${money.format(tenant.rent)}</td>
      <td>${statusBadge(tenant.status)}</td>
      <td><button class="button compact ghost" data-action="edit-tenant" data-id="${tenant.id}" type="button">Edit</button></td>
    </tr>
  `).join("");
}

function renderPayments() {
  const properties = filtered(data.properties);
  $("#paymentsTable").innerHTML = properties.length
    ? properties.map(paymentPropertySection).join("")
    : emptyState("No properties to show");
}

function paymentPropertySection(property) {
  const propertyPayments = data.payments
    .filter((payment) => paymentPropertyId(payment) === property.id)
    .sort((a, b) => String(b.dueDate || b.paidDate).localeCompare(String(a.dueDate || a.paidDate)));
  const amountDue = propertyPayments.reduce((sum, payment) => sum + Number(payment.amountDue || 0), 0);
  const amountPaid = propertyPayments.reduce((sum, payment) => sum + Number(payment.amountPaid || 0), 0);
  const balance = amountDue - amountPaid;

  return `
    <section class="property-payment-card">
      <div class="property-payment-head">
        <div>
          <h3>${escapeHtml(property.name)}</h3>
          <p>${propertyPayments.length} ${propertyPayments.length === 1 ? "payment" : "payments"}</p>
        </div>
        <div class="property-payment-summary">
          <span><strong>${money.format(amountDue)}</strong> due</span>
          <span><strong>${money.format(amountPaid)}</strong> paid</span>
          <span><strong>${money.format(balance)}</strong> balance</span>
        </div>
      </div>
      <div class="table-shell property-payment-table">
        <table>
          <thead>
            <tr>
              <th>Unit / Tenant</th>
              <th>Due</th>
              <th>Paid</th>
              <th>Balance</th>
              <th>Due Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${propertyPayments.length ? propertyPayments.map(paymentPropertyRow).join("") : `<tr><td colspan="7">No payments recorded for this property.</td></tr>`}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function paymentPropertyRow(payment) {
  const tenant = getTenant(payment.tenantId);
  const balance = Number(payment.amountDue || 0) - Number(payment.amountPaid || 0);

  return `
    <tr>
      <td><strong>${escapeHtml(tenant?.unit || "No unit")}</strong><br><span>${tenant ? escapeHtml(tenant.name) : "Unassigned"} - ${payment.method || "No method"}</span></td>
      <td>${money.format(payment.amountDue)}</td>
      <td>${money.format(payment.amountPaid)}</td>
      <td>${money.format(balance)}</td>
      <td>${formatDate(payment.dueDate)}</td>
      <td>${statusBadge(payment.status)}</td>
      <td><button class="button compact ghost" data-action="edit-payment" data-id="${payment.id}" type="button">Edit</button></td>
    </tr>
  `;
}

function renderMaintenance() {
  const statuses = ["New", "In Progress", "Waiting for Parts", "Completed"];
  $("#maintenanceBoard").innerHTML = statuses.map((status) => {
    const requests = filtered(data.maintenance).filter((request) => request.status === status);
    return `
      <section class="board-column">
        <h3>${status} (${requests.length})</h3>
        ${requests.length ? requests.map(maintenanceCard).join("") : emptyState("No requests")}
      </section>
    `;
  }).join("");
}

function renderExpenses() {
  const yearOptions = expenseYearOptions();
  if (!selectedExpenseYear || !yearOptions.some((option) => option.key === selectedExpenseYear)) {
    selectedExpenseYear = yearOptions[0]?.key || "all";
  }

  $("#expenseYearFilter").innerHTML = yearOptions.map((option) => `
    <option value="${option.key}" ${option.key === selectedExpenseYear ? "selected" : ""}>${option.label}</option>
  `).join("");

  const yearExpenses = expensesForSelectedYear();
  const monthOptions = expenseMonthOptions(yearExpenses);
  if (!monthOptions.some((option) => option.key === selectedExpenseMonth)) {
    selectedExpenseMonth = "all";
  }

  $("#expenseMonthFilter").innerHTML = monthOptions.map((option) => `
    <option value="${option.key}" ${option.key === selectedExpenseMonth ? "selected" : ""}>${option.label}</option>
  `).join("");

  const detailExpenses = expensesForSelectedMonth(yearExpenses);
  const yearlyTotals = expenseTotalsByProperty(yearExpenses);
  const monthlyTotals = expenseTotalsByProperty(detailExpenses);
  const yearRanked = [...yearlyTotals].sort((a, b) => b.total - a.total);
  const rankingExpenses = selectedExpenseMonth === "all" ? yearExpenses : detailExpenses;
  const rankingTotals = selectedExpenseMonth === "all" ? yearlyTotals : monthlyTotals;
  const ranked = [...rankingTotals].sort((a, b) => b.total - a.total);
  if (selectedExpenseProperty && !ranked.some((item) => item.property.id === selectedExpenseProperty)) {
    selectedExpenseProperty = null;
  }
  const monthlyRanked = [...monthlyTotals].sort((a, b) => b.total - a.total);
  const yearTop = yearRanked.find((item) => item.total > 0);
  const monthTop = monthlyRanked.find((item) => item.total > 0);
  const totalSpent = yearExpenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
  const monthSpent = detailExpenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
  const expenseCount = yearExpenses.length;
  const monthCount = detailExpenses.length;
  const periodLabel = selectedExpenseYear === "all" ? "all years" : selectedExpenseYear;
  const monthPeriodLabel = selectedExpenseMonth === "all" ? `all months in ${periodLabel}` : monthLabel(selectedExpenseMonth);

  $("#expenseInsights").innerHTML = [
    expenseInsightCard("Year Total", money.format(totalSpent), `${expenseCount} expense ${expenseCount === 1 ? "entry" : "entries"} in ${periodLabel}`),
    expenseInsightCard("Year Highest Property", yearTop ? escapeHtml(yearTop.property.name) : "None", yearTop ? `${money.format(yearTop.total)} in ${periodLabel}` : "No expenses recorded"),
    expenseInsightCard("Month Total", money.format(monthSpent), `${monthCount} expense ${monthCount === 1 ? "entry" : "entries"} for ${monthPeriodLabel}`),
    expenseInsightCard("Month Highest Property", monthTop ? escapeHtml(monthTop.property.name) : "None", monthTop ? `${money.format(monthTop.total)} for ${monthPeriodLabel}` : "No expenses recorded")
  ].join("");

  $("#expenseRankingNote").textContent = selectedExpenseMonth === "all"
    ? (selectedExpenseYear === "all" ? "All recorded expenses" : selectedExpenseYear)
    : monthPeriodLabel;

  const maxTotal = Math.max(...ranked.map((item) => item.total), 1);
  $("#expenseRanking").innerHTML = ranked.length
    ? ranked.map((item, index) => expenseRankRow(item, index, maxTotal, rankingExpenses)).join("")
    : emptyState("No property expenses to rank");

  const monthlyCosts = expenseTotalsByMonth(yearExpenses);
  const maxMonthTotal = Math.max(...monthlyCosts.map((item) => item.total), 1);
  $("#expenseMonthNote").textContent = selectedExpenseYear === "all" ? "All years" : selectedExpenseYear;
  $("#expenseMonthBreakdown").innerHTML = monthlyCosts.length
    ? monthlyCosts.map((item, index) => expenseMonthRow(item, index, maxMonthTotal)).join("")
    : emptyState("No monthly expenses to show");

  const sortedExpenses = [...detailExpenses].sort((a, b) => String(b.date).localeCompare(String(a.date)));
  $("#expensesTable").innerHTML = sortedExpenses.length
    ? sortedExpenses.map((expense) => `
      <tr>
        <td>${formatDate(expense.date)}</td>
        <td>${propertyName(expense.propertyId)}</td>
        <td>${escapeHtml(expense.category)}</td>
        <td>${escapeHtml(expense.vendor)}</td>
        <td>${money.format(expense.amount)}</td>
        <td><button class="button compact ghost" data-action="edit-expense" data-id="${expense.id}" type="button">Edit</button></td>
      </tr>
    `).join("")
    : `<tr><td colspan="6">No expenses for this period.</td></tr>`;
}

function expenseYearOptions() {
  const years = new Set(filtered(data.expenses).map((expense) => yearKey(expense.date)).filter(Boolean));
  const yearOptions = [...years].sort().reverse().map((key) => ({ key, label: key }));
  return yearOptions.length ? [...yearOptions, { key: "all", label: "All Years" }] : [{ key: "all", label: "All Years" }];
}

function expensesForSelectedYear() {
  const expenses = filtered(data.expenses);
  if (selectedExpenseYear === "all") return expenses;
  return expenses.filter((expense) => yearKey(expense.date) === selectedExpenseYear);
}

function expenseMonthOptions(expenses) {
  const months = new Set(expenses.map((expense) => monthKey(expense.date)).filter(Boolean));
  const monthOptions = [...months].sort().reverse().map((key) => ({ key, label: monthLabel(key) }));
  return [{ key: "all", label: "All Months" }, ...monthOptions];
}

function expensesForSelectedMonth(expenses) {
  if (selectedExpenseMonth === "all") return expenses;
  return expenses.filter((expense) => monthKey(expense.date) === selectedExpenseMonth);
}

function expenseTotalsByProperty(expenses) {
  const visibleProperties = filtered(data.properties);
  return visibleProperties.map((property) => {
    const propertyExpenses = expenses.filter((expense) => expense.propertyId === property.id);
    const total = propertyExpenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
    const biggestExpense = propertyExpenses.reduce((largest, expense) => {
      if (!largest || Number(expense.amount || 0) > Number(largest.amount || 0)) return expense;
      return largest;
    }, null);

    return {
      property,
      total,
      count: propertyExpenses.length,
      biggestExpense
    };
  });
}

function expenseTotalsByMonth(expenses) {
  const monthMap = new Map();

  expenses.forEach((expense) => {
    const key = monthKey(expense.date);
    if (!key) return;
    const current = monthMap.get(key) || { key, total: 0, count: 0, expenses: [] };
    current.total += Number(expense.amount || 0);
    current.count += 1;
    current.expenses.push(expense);
    monthMap.set(key, current);
  });

  return [...monthMap.values()].sort((a, b) => b.key.localeCompare(a.key)).map((month) => {
    const rankedProperties = expenseTotalsByProperty(month.expenses).sort((a, b) => b.total - a.total);
    return {
      ...month,
      topProperty: rankedProperties.find((item) => item.total > 0)
    };
  });
}

function expenseInsightCard(label, value, note) {
  return `
    <article class="expense-insight-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${note}</small>
    </article>
  `;
}

function expenseRankRow(item, index, maxTotal, periodExpenses) {
  const percentage = item.total ? Math.max(4, Math.round((item.total / maxTotal) * 100)) : 0;
  const topClass = index === 0 && item.total > 0 ? " top" : "";
  const isSelected = selectedExpenseProperty === item.property.id;
  const selectedClass = isSelected ? " selected" : "";
  const biggest = item.biggestExpense
    ? `${escapeHtml(item.biggestExpense.category)} - ${money.format(item.biggestExpense.amount)}`
    : "No expenses";
  const detailTable = isSelected ? propertyDailyExpenseTable(item.property, periodExpenses) : "";

  return `
    <article
      class="expense-rank-row${topClass}${selectedClass}"
      data-action="select-expense-property"
      data-id="${escapeHtml(item.property.id)}"
      role="button"
      tabindex="0"
      aria-expanded="${isSelected}"
      aria-label="${escapeHtml(item.property.name)} total costs"
    >
      <div class="rank-number">${index + 1}</div>
      <div class="rank-main">
        <div class="rank-title">
          <strong>${escapeHtml(item.property.name)}</strong>
          <span>${item.count} ${item.count === 1 ? "expense" : "expenses"}</span>
        </div>
        <div class="expense-bar-track">
          <div class="expense-bar-fill" style="width:${percentage}%"></div>
        </div>
        <p>${biggest}</p>
      </div>
      <div class="rank-total">${money.format(item.total)}</div>
      ${detailTable}
    </article>
  `;
}

function propertyDailyExpenseTable(property, expenses) {
  const propertyExpenses = expenses.filter((expense) => expense.propertyId === property.id);
  const dailyCosts = expenseTotalsByDay(propertyExpenses);
  const periodLabel = selectedExpenseMonth === "all"
    ? (selectedExpenseYear === "all" ? "all years" : selectedExpenseYear)
    : monthLabel(selectedExpenseMonth);
  const propertyTotal = propertyExpenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);

  return `
    <div class="property-expense-detail">
      <div class="property-expense-detail-head">
        <div>
          <h3>${escapeHtml(property.name)} Total Costs</h3>
          <p>${periodLabel}</p>
        </div>
        <div class="property-expense-detail-actions">
          <strong>${money.format(propertyTotal)}</strong>
          <button class="button compact" data-action="add-expense-for-property" data-id="${escapeHtml(property.id)}" type="button">Add Cost</button>
        </div>
      </div>
      <div class="daily-cost-table-shell">
        <table class="daily-cost-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Total Cost</th>
              <th>Expenses</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${dailyCosts.length ? dailyCosts.map(dailyCostRow).join("") : `<tr><td colspan="4">No expenses for this property in ${periodLabel}.</td></tr>`}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function expenseTotalsByDay(expenses) {
  const dayMap = new Map();

  expenses.forEach((expense) => {
    const key = expense.date || "Not set";
    const current = dayMap.get(key) || { date: key, total: 0, expenses: [] };
    current.total += Number(expense.amount || 0);
    current.expenses.push(expense);
    dayMap.set(key, current);
  });

  return [...dayMap.values()].sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

function dailyCostRow(day) {
  const sortedExpenses = [...day.expenses].sort((a, b) => Number(b.amount || 0) - Number(a.amount || 0));
  const entries = sortedExpenses.map(expenseChip).join("");
  const actionButtons = sortedExpenses.map((expense) => `
    <span class="daily-expense-action-set">
      <button class="button compact ghost" data-action="edit-expense" data-id="${escapeHtml(expense.id)}" type="button">
        Edit ${escapeHtml(expense.category || "Cost")}
      </button>
      <button class="button compact danger-button" data-action="delete-expense" data-id="${escapeHtml(expense.id)}" type="button">
        Delete ${escapeHtml(expense.category || "Cost")}
      </button>
    </span>
  `).join("");

  return `
    <tr>
      <td><strong>${day.date === "Not set" ? "Not set" : formatDate(day.date)}</strong></td>
      <td>${money.format(day.total)}</td>
      <td><div class="daily-expense-list">${entries}</div></td>
      <td><div class="daily-expense-actions">${actionButtons}</div></td>
    </tr>
  `;
}

function expenseChip(expense) {
  const vendor = expense.vendor ? ` - ${escapeHtml(expense.vendor)}` : "";
  return `<span class="daily-expense-chip">${escapeHtml(expense.category)}${vendor} - ${money.format(expense.amount)}</span>`;
}

function expenseMonthRow(item, index, maxTotal) {
  const percentage = item.total ? Math.max(4, Math.round((item.total / maxTotal) * 100)) : 0;
  const topClass = index === 0 && item.total > 0 ? " top" : "";
  const topProperty = item.topProperty
    ? `${escapeHtml(item.topProperty.property.name)} - ${money.format(item.topProperty.total)}`
    : "No property costs";

  return `
    <article class="expense-rank-row${topClass}">
      <div class="rank-number">${index + 1}</div>
      <div class="rank-main">
        <div class="rank-title">
          <strong>${monthLabel(item.key)}</strong>
          <span>${item.count} ${item.count === 1 ? "expense" : "expenses"}</span>
        </div>
        <div class="expense-bar-track">
          <div class="expense-bar-fill" style="width:${percentage}%"></div>
        </div>
        <p>Highest property: ${topProperty}</p>
      </div>
      <div class="rank-total">${money.format(item.total)}</div>
    </article>
  `;
}

function renderDocuments() {
  $("#documentsGrid").innerHTML = filtered(data.documents).map((document) => {
    const tenant = getTenant(document.tenantId);
    return `
      <article class="document-card">
        <div class="doc-type">${escapeHtml(document.type)}</div>
        <h3>${escapeHtml(document.name)}</h3>
        <p>${propertyName(document.propertyId)}${tenant ? ` - ${escapeHtml(tenant.name)}` : ""}</p>
        <p>${formatDate(document.date)}</p>
        <button class="button compact ghost" data-action="edit-document" data-id="${document.id}" type="button">Edit</button>
      </article>
    `;
  }).join("");
}

function renderReports() {
  const yearOptions = profitYearOptions();
  if (!selectedProfitYear || !yearOptions.some((option) => option.key === selectedProfitYear)) {
    selectedProfitYear = yearOptions[0]?.key || "all";
  }

  $("#profitYearFilter").innerHTML = yearOptions.map((option) => `
    <option value="${option.key}" ${option.key === selectedProfitYear ? "selected" : ""}>${option.label}</option>
  `).join("");

  const yearPayments = paymentsForSelectedProfitYear();
  const yearExpenses = expensesForSelectedProfitYear();
  const monthOptions = profitMonthOptions(yearPayments, yearExpenses);
  if (!monthOptions.some((option) => option.key === selectedProfitMonth)) {
    selectedProfitMonth = "all";
  }

  $("#profitMonthFilter").innerHTML = monthOptions.map((option) => `
    <option value="${option.key}" ${option.key === selectedProfitMonth ? "selected" : ""}>${option.label}</option>
  `).join("");

  const detailPayments = paymentsForSelectedProfitMonth(yearPayments);
  const detailExpenses = expensesForSelectedProfitMonth(yearExpenses);
  const yearlyTotals = profitTotalsByProperty(yearPayments, yearExpenses);
  const periodTotals = profitTotalsByProperty(detailPayments, detailExpenses);
  const ranked = [...yearlyTotals].sort((a, b) => b.profit - a.profit);
  const periodRanked = [...periodTotals].sort((a, b) => b.profit - a.profit);
  const yearTop = ranked[0];
  const periodTop = periodRanked[0];
  const yearSummary = profitSummary(yearPayments, yearExpenses);
  const periodSummary = profitSummary(detailPayments, detailExpenses);
  const yearLabel = selectedProfitYear === "all" ? "all years" : selectedProfitYear;
  const periodLabel = selectedProfitMonth === "all" ? `all months in ${yearLabel}` : monthLabel(selectedProfitMonth);

  $("#profitInsights").innerHTML = [
    expenseInsightCard("Year Profit", money.format(yearSummary.profit), `${money.format(yearSummary.income)} rent - ${money.format(yearSummary.expenses)} expenses`),
    expenseInsightCard("Year Top Property", yearTop ? escapeHtml(yearTop.property.name) : "None", yearTop ? `${money.format(yearTop.profit)} in ${yearLabel}` : "No profit recorded"),
    expenseInsightCard("Month Profit", money.format(periodSummary.profit), `${money.format(periodSummary.income)} rent - ${money.format(periodSummary.expenses)} expenses`),
    expenseInsightCard("Month Top Property", periodTop ? escapeHtml(periodTop.property.name) : "None", periodTop ? `${money.format(periodTop.profit)} for ${periodLabel}` : "No profit recorded")
  ].join("");

  $("#profitRankingNote").textContent = selectedProfitYear === "all" ? "All recorded years" : selectedProfitYear;
  const maxYearProfit = Math.max(...ranked.map((item) => Math.abs(item.profit)), 1);
  $("#profitRanking").innerHTML = ranked.length
    ? ranked.map((item, index) => profitRankRow(item, index, maxYearProfit)).join("")
    : emptyState("No property profit to rank");

  const monthlyProfits = profitTotalsByMonth(yearPayments, yearExpenses);
  const maxMonthProfit = Math.max(...monthlyProfits.map((item) => Math.abs(item.profit)), 1);
  $("#profitMonthNote").textContent = selectedProfitYear === "all" ? "All years" : selectedProfitYear;
  $("#profitMonthBreakdown").innerHTML = monthlyProfits.length
    ? monthlyProfits.map((item, index) => profitMonthRow(item, index, maxMonthProfit)).join("")
    : emptyState("No monthly profit to show");

  $("#reportsTable").innerHTML = periodRanked.map(({ property, expected, income, outstanding, expenses, profit }) => `
    <tr>
      <td><strong>${escapeHtml(property.name)}</strong></td>
      <td>${money.format(expected)}</td>
      <td>${money.format(income)}</td>
      <td>${money.format(outstanding)}</td>
      <td>${money.format(expenses)}</td>
      <td>${money.format(profit)}</td>
      <td>${Math.round(propertyMetrics(property.id).occupancy * 100)}%</td>
    </tr>
  `).join("");
}

function profitYearOptions() {
  const years = new Set([
    ...filtered(data.payments).map((payment) => yearKey(paymentDate(payment))).filter(Boolean),
    ...filtered(data.expenses).map((expense) => yearKey(expense.date)).filter(Boolean)
  ]);
  const yearOptions = [...years].sort().reverse().map((key) => ({ key, label: key }));
  return yearOptions.length ? [...yearOptions, { key: "all", label: "All Years" }] : [{ key: "all", label: "All Years" }];
}

function paymentsForSelectedProfitYear() {
  const payments = filtered(data.payments);
  if (selectedProfitYear === "all") return payments;
  return payments.filter((payment) => yearKey(paymentDate(payment)) === selectedProfitYear);
}

function expensesForSelectedProfitYear() {
  const expenses = filtered(data.expenses);
  if (selectedProfitYear === "all") return expenses;
  return expenses.filter((expense) => yearKey(expense.date) === selectedProfitYear);
}

function profitMonthOptions(payments, expenses) {
  const months = new Set([
    ...payments.map((payment) => monthKey(paymentDate(payment))).filter(Boolean),
    ...expenses.map((expense) => monthKey(expense.date)).filter(Boolean)
  ]);
  const monthOptions = [...months].sort().reverse().map((key) => ({ key, label: monthLabel(key) }));
  return [{ key: "all", label: "All Months" }, ...monthOptions];
}

function paymentsForSelectedProfitMonth(payments) {
  if (selectedProfitMonth === "all") return payments;
  return payments.filter((payment) => monthKey(paymentDate(payment)) === selectedProfitMonth);
}

function expensesForSelectedProfitMonth(expenses) {
  if (selectedProfitMonth === "all") return expenses;
  return expenses.filter((expense) => monthKey(expense.date) === selectedProfitMonth);
}

function profitTotalsByProperty(payments, expenses) {
  return filtered(data.properties).map((property) => {
    const propertyPayments = payments.filter((payment) => paymentPropertyId(payment) === property.id);
    const propertyExpenses = expenses.filter((expense) => expense.propertyId === property.id);
    const expected = propertyPayments.reduce((sum, payment) => sum + Number(payment.amountDue || 0), 0);
    const income = propertyPayments.reduce((sum, payment) => sum + Number(payment.amountPaid || 0), 0);
    const expenseTotal = propertyExpenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);

    return {
      property,
      expected,
      income,
      outstanding: expected - income,
      expenses: expenseTotal,
      profit: income - expenseTotal,
      paymentCount: propertyPayments.length,
      expenseCount: propertyExpenses.length
    };
  });
}

function profitSummary(payments, expenses) {
  const income = payments.reduce((sum, payment) => sum + Number(payment.amountPaid || 0), 0);
  const expenseTotal = expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
  return {
    income,
    expenses: expenseTotal,
    profit: income - expenseTotal
  };
}

function profitTotalsByMonth(payments, expenses) {
  const months = new Set([
    ...payments.map((payment) => monthKey(paymentDate(payment))).filter(Boolean),
    ...expenses.map((expense) => monthKey(expense.date)).filter(Boolean)
  ]);

  return [...months].sort().reverse().map((key) => {
    const monthPayments = payments.filter((payment) => monthKey(paymentDate(payment)) === key);
    const monthExpenses = expenses.filter((expense) => monthKey(expense.date) === key);
    const rankedProperties = profitTotalsByProperty(monthPayments, monthExpenses).sort((a, b) => b.profit - a.profit);
    const summary = profitSummary(monthPayments, monthExpenses);

    return {
      key,
      ...summary,
      topProperty: rankedProperties[0],
      payments: monthPayments.length,
      expenseCount: monthExpenses.length
    };
  });
}

function profitRankRow(item, index, maxProfit) {
  const percentage = Math.max(4, Math.round((Math.abs(item.profit) / maxProfit) * 100));
  const topClass = index === 0 && item.profit > 0 ? " top" : "";
  const fillClass = item.profit < 0 ? " loss" : "";

  return `
    <article class="expense-rank-row${topClass}">
      <div class="rank-number">${index + 1}</div>
      <div class="rank-main">
        <div class="rank-title">
          <strong>${escapeHtml(item.property.name)}</strong>
          <span>${item.paymentCount} rent / ${item.expenseCount} expenses</span>
        </div>
        <div class="expense-bar-track">
          <div class="expense-bar-fill profit-bar-fill${fillClass}" style="width:${percentage}%"></div>
        </div>
        <p>${money.format(item.income)} rent - ${money.format(item.expenses)} expenses</p>
      </div>
      <div class="rank-total">${money.format(item.profit)}</div>
    </article>
  `;
}

function profitMonthRow(item, index, maxProfit) {
  const percentage = Math.max(4, Math.round((Math.abs(item.profit) / maxProfit) * 100));
  const topClass = index === 0 && item.profit > 0 ? " top" : "";
  const fillClass = item.profit < 0 ? " loss" : "";
  const topProperty = item.topProperty
    ? `${escapeHtml(item.topProperty.property.name)} - ${money.format(item.topProperty.profit)}`
    : "No property profit";

  return `
    <article class="expense-rank-row${topClass}">
      <div class="rank-number">${index + 1}</div>
      <div class="rank-main">
        <div class="rank-title">
          <strong>${monthLabel(item.key)}</strong>
          <span>${item.payments} rent / ${item.expenseCount} expenses</span>
        </div>
        <div class="expense-bar-track">
          <div class="expense-bar-fill profit-bar-fill${fillClass}" style="width:${percentage}%"></div>
        </div>
        <p>Highest property: ${topProperty}</p>
      </div>
      <div class="rank-total">${money.format(item.profit)}</div>
    </article>
  `;
}

function renderSettings() {
  const form = $("#settingsForm");
  form.managerName.value = data.settings.managerName || "";
  form.managerEmail.value = data.settings.managerEmail || "";
  form.lateFee.value = data.settings.lateFee || 0;
  form.rentDueDay.value = data.settings.rentDueDay || 1;
}

function propertyCard(property) {
  const metrics = propertyMetrics(property.id);
  return `
    <article class="property-card">
      <div class="property-visual ${property.tone || ""}"></div>
      <div class="property-body">
        <h3>${escapeHtml(property.name)}</h3>
        <div class="property-meta">${escapeHtml(property.address)} - ${escapeHtml(property.type)}</div>
        <div class="mini-metrics">
          <div class="metric"><span>Occupancy</span><strong>${metrics.occupied}/${metrics.units}</strong></div>
          <div class="metric"><span>Collected</span><strong>${money.format(metrics.collected)}</strong></div>
          <div class="metric"><span>Open</span><strong>${metrics.openRequests}</strong></div>
        </div>
        <div class="row-actions" style="margin-top:12px">
          <button class="button compact ghost" data-action="edit-property" data-id="${property.id}" type="button">Edit</button>
        </div>
      </div>
    </article>
  `;
}

function maintenanceListItem(request) {
  return `
    <div class="list-item">
      <div class="list-item-head">
        <h3>${escapeHtml(request.title)}</h3>
        <div class="row-actions">
          <button class="button compact ghost" data-action="edit-maintenance" data-id="${request.id}" type="button">Edit</button>
          <button class="button compact danger-button" data-action="delete-maintenance" data-id="${request.id}" type="button">Delete</button>
        </div>
      </div>
      <p>${propertyName(request.propertyId)} Unit ${escapeHtml(request.unit)} - ${escapeHtml(request.assignedTo || "Unassigned")}</p>
      <p class="muted-line">${request.date ? formatDate(request.date) : "Date not set"}</p>
      ${statusBadge(request.priority)}
    </div>
  `;
}

function deleteMaintenance(id) {
  const request = data.maintenance.find((item) => item.id === id);
  if (!request) return;

  const confirmed = window.confirm(`Delete maintenance request "${request.title}"?`);
  if (!confirmed) return;

  data.maintenance = data.maintenance.filter((item) => item.id !== id);
  saveData();
  render();
  showToast("Maintenance request deleted");
}

function deleteExpense(id) {
  const expense = data.expenses.find((item) => item.id === id);
  if (!expense) return;

  const confirmed = window.confirm(`Delete cost "${expense.category}" for ${money.format(expense.amount)}?`);
  if (!confirmed) return;

  data.expenses = data.expenses.filter((item) => item.id !== id);
  saveData();
  render();
  showToast("Cost deleted");
}

function maintenanceCard(request) {
  return `
    <article class="request-card">
      <h3>${escapeHtml(request.title)}</h3>
      <p>${propertyName(request.propertyId)} Unit ${escapeHtml(request.unit)}</p>
      <p class="muted-line">${request.date ? formatDate(request.date) : "Date not set"}</p>
      <p>${escapeHtml(request.description || "")}</p>
      <div class="row-actions">
        ${statusBadge(request.priority)}
        <button class="button compact ghost" data-action="edit-maintenance" data-id="${request.id}" type="button">Edit</button>
      </div>
    </article>
  `;
}

function kpi(label, value, note) {
  return `
    <article class="kpi-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${note}</small>
    </article>
  `;
}

function summaryItem(label, value) {
  return `
    <div class="list-item">
      <p>${label}</p>
      <h3>${value}</h3>
    </div>
  `;
}

function emptyState(message) {
  return `<div class="list-item"><p>${message}</p></div>`;
}

function statusBadge(status) {
  const normalized = String(status || "").toLowerCase();
  let className = "";
  if (["paid", "active", "completed", "low"].includes(normalized)) className = "good";
  if (["partial", "in progress", "waiting for parts", "medium"].includes(normalized)) className = "warn";
  if (["late", "overdue", "emergency", "high"].includes(normalized)) className = "danger";
  return `<span class="status ${className}">${escapeHtml(status || "Unknown")}</span>`;
}

function propertyName(id) {
  return escapeHtml(getProperty(id)?.name || "Unassigned");
}

function formatDate(value) {
  if (!value) return "Not set";
  const date = new Date(`${value}T00:00:00`);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function paymentDate(payment) {
  return payment.paidDate || payment.dueDate || "";
}

function yearKey(value) {
  if (!value) return "";
  return String(value).slice(0, 4);
}

function monthKey(value) {
  if (!value) return "";
  return String(value).slice(0, 7);
}

function monthLabel(key) {
  if (key === "all") return "All Months";
  const date = new Date(`${key}-01T00:00:00`);
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function todayDate() {
  return new Date().toISOString().slice(0, 10);
}

function daysUntil(value) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(`${value}T00:00:00`);
  return Math.ceil((target - today) / 86400000);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function optionsForProperties(selected = "") {
  return data.properties.map((property) => `
    <option value="${property.id}" ${property.id === selected ? "selected" : ""}>${escapeHtml(property.name)}</option>
  `).join("");
}

function optionsForTenants(selected = "") {
  return data.tenants.map((tenant) => `
    <option value="${tenant.id}" ${tenant.id === selected ? "selected" : ""}>${escapeHtml(tenant.name)}</option>
  `).join("");
}

function selectOptions(values, selected = "") {
  return values.map((value) => `
    <option value="${value}" ${value === selected ? "selected" : ""}>${value}</option>
  `).join("");
}

function field(label, name, type = "text", value = "", options = {}) {
  const full = options.full ? " full" : "";
  const attrs = [
    `name="${name}"`,
    `type="${type}"`,
    options.required ? "required" : "",
    options.min !== undefined ? `min="${options.min}"` : "",
    options.max !== undefined ? `max="${options.max}"` : "",
    options.step !== undefined ? `step="${options.step}"` : ""
  ].filter(Boolean).join(" ");

  return `
    <label class="${full}">
      ${label}
      <input ${attrs} value="${escapeHtml(value)}">
    </label>
  `;
}

function selectField(label, name, optionsHtml, full = false) {
  return `
    <label class="${full ? "full" : ""}">
      ${label}
      <select name="${name}">${optionsHtml}</select>
    </label>
  `;
}

function textareaField(label, name, value = "") {
  return `
    <label class="full">
      ${label}
      <textarea name="${name}">${escapeHtml(value)}</textarea>
    </label>
  `;
}

function openDialog(type, id = null, defaults = {}) {
  dialogMode = { type, id };
  const record = { ...defaults, ...findRecord(type, id) };
  $("#dialogTitle").textContent = `${id ? "Edit" : "Add"} ${titleForType(type)}`;
  $("#dialogFields").innerHTML = fieldsForType(type, record);
  $("#recordDialog").showModal();
}

function closeDialog() {
  $("#recordDialog").close();
  dialogMode = null;
}

function titleForType(type) {
  return {
    property: "Property",
    tenant: "Tenant",
    payment: "Payment",
    maintenance: "Maintenance Request",
    expense: "Expense",
    document: "Document"
  }[type];
}

function findRecord(type, id) {
  if (!id) return {};
  const map = {
    property: "properties",
    tenant: "tenants",
    payment: "payments",
    maintenance: "maintenance",
    expense: "expenses",
    document: "documents"
  };
  return data[map[type]].find((item) => item.id === id) || {};
}

function fieldsForType(type, record) {
  if (type === "property") {
    return [
      field("Property Name", "name", "text", record.name, { required: true }),
      field("Address", "address", "text", record.address, { required: true }),
      field("Property Type", "type", "text", record.type || "Apartment"),
      field("Units", "units", "number", record.units || 1, { min: 1, step: 1 }),
      field("Manager", "manager", "text", record.manager || data.settings.managerName),
      selectField("Visual Tone", "tone", selectOptions(["tone-1", "tone-2", "tone-3", "tone-4", "tone-5"], record.tone || "tone-1")),
      textareaField("Notes", "notes", record.notes)
    ].join("");
  }

  if (type === "tenant") {
    return [
      field("Full Name", "name", "text", record.name, { required: true }),
      field("Email", "email", "email", record.email),
      field("Phone", "phone", "text", record.phone),
      selectField("Property", "propertyId", optionsForProperties(record.propertyId)),
      field("Unit", "unit", "text", record.unit),
      field("Monthly Rent", "rent", "number", record.rent || 0, { min: 0, step: 1 }),
      field("Security Deposit", "deposit", "number", record.deposit || 0, { min: 0, step: 1 }),
      selectField("Status", "status", selectOptions(["Active", "Pending", "Moved Out"], record.status || "Active")),
      field("Lease Start", "leaseStart", "date", record.leaseStart),
      field("Lease End", "leaseEnd", "date", record.leaseEnd)
    ].join("");
  }

  if (type === "payment") {
    const paymentProperty = paymentPropertyId(record);
    return [
      selectField("Tenant", "tenantId", optionsForTenants(record.tenantId)),
      selectField("Property", "propertyId", optionsForProperties(paymentProperty)),
      field("Amount Due", "amountDue", "number", record.amountDue || 0, { min: 0, step: 1 }),
      field("Amount Paid", "amountPaid", "number", record.amountPaid || 0, { min: 0, step: 1 }),
      field("Due Date", "dueDate", "date", record.dueDate),
      field("Paid Date", "paidDate", "date", record.paidDate),
      field("Payment Method", "method", "text", record.method),
      selectField("Status", "status", selectOptions(["Paid", "Unpaid", "Partial", "Late", "Overdue"], record.status || "Paid"))
    ].join("");
  }

  if (type === "maintenance") {
    return [
      field("Title", "title", "text", record.title, { required: true }),
      field("Request Date", "date", "date", record.date || todayDate()),
      selectField("Property", "propertyId", optionsForProperties(record.propertyId)),
      selectField("Tenant", "tenantId", optionsForTenants(record.tenantId)),
      field("Unit", "unit", "text", record.unit),
      field("Category", "category", "text", record.category || "Repair"),
      selectField("Priority", "priority", selectOptions(["Low", "Medium", "High", "Emergency"], record.priority || "Medium")),
      selectField("Status", "status", selectOptions(["New", "In Progress", "Waiting for Parts", "Completed", "Cancelled"], record.status || "New")),
      field("Assigned To", "assignedTo", "text", record.assignedTo || "Unassigned"),
      field("Estimated Cost", "estimatedCost", "number", record.estimatedCost || 0, { min: 0, step: 1 }),
      field("Final Cost", "finalCost", "number", record.finalCost || 0, { min: 0, step: 1 }),
      textareaField("Description", "description", record.description)
    ].join("");
  }

  if (type === "expense") {
    return [
      selectField("Property", "propertyId", optionsForProperties(record.propertyId)),
      field("Date", "date", "date", record.date),
      field("Category", "category", "text", record.category || "Repairs"),
      field("Vendor", "vendor", "text", record.vendor),
      field("Amount", "amount", "number", record.amount || 0, { min: 0, step: 1 }),
      textareaField("Notes", "notes", record.notes)
    ].join("");
  }

  if (type === "document") {
    return [
      field("Document Name", "name", "text", record.name, { required: true }),
      field("Document Type", "type", "text", record.type || "Lease"),
      selectField("Property", "propertyId", optionsForProperties(record.propertyId)),
      selectField("Tenant", "tenantId", optionsForTenants(record.tenantId)),
      field("Date", "date", "date", record.date),
      textareaField("Notes", "notes", record.notes)
    ].join("");
  }

  return "";
}

function saveDialogRecord() {
  const { type, id } = dialogMode;
  const formData = new FormData($("#recordDialog form"));
  const payload = Object.fromEntries(formData.entries());
  const collectionName = {
    property: "properties",
    tenant: "tenants",
    payment: "payments",
    maintenance: "maintenance",
    expense: "expenses",
    document: "documents"
  }[type];

  const record = normalizePayload(type, payload);
  if (id) {
    data[collectionName] = data[collectionName].map((item) => item.id === id ? { ...item, ...record, id } : item);
  } else {
    data[collectionName].push({ ...record, id: createId(type) });
  }

  saveData();
  populatePropertyFilter();
  render();
  closeDialog();
  showToast(`${titleForType(type)} saved`);
}

function normalizePayload(type, payload) {
  const numberFields = {
    property: ["units"],
    tenant: ["rent", "deposit"],
    payment: ["amountDue", "amountPaid"],
    maintenance: ["estimatedCost", "finalCost"],
    expense: ["amount"],
    document: []
  }[type];

  numberFields.forEach((fieldName) => {
    payload[fieldName] = Number(payload[fieldName] || 0);
  });

  if (type === "payment") {
    const tenant = getTenant(payload.tenantId);
    if (tenant?.propertyId) payload.propertyId = tenant.propertyId;

    const due = Number(payload.amountDue || 0);
    let paid = Number(payload.amountPaid || 0);

    if (payload.status === "Paid" && due > 0 && paid < due) {
      payload.amountPaid = due;
      paid = due;
      if (!payload.paidDate) payload.paidDate = todayDate();
    }

    if (payload.status === "Unpaid") {
      payload.amountPaid = 0;
      paid = 0;
    }

    if (paid >= due && due > 0) payload.status = "Paid";
    if (paid > 0 && paid < due) payload.status = "Partial";
    if (paid === 0 && payload.status === "Paid") payload.status = "Unpaid";
  }

  return payload;
}

function createId(type) {
  return `${type}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}
