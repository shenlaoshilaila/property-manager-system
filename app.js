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
    { id: "m1", propertyId: "p1", tenantId: "t2", unit: "2B", title: "Kitchen faucet leak", category: "Plumbing", priority: "Medium", status: "In Progress", assignedTo: "ClearFlow Plumbing", estimatedCost: 240, finalCost: 0, description: "Faucet leaking under sink cabinet." },
    { id: "m2", propertyId: "p3", tenantId: "t5", unit: "A", title: "Bedroom outlet not working", category: "Electrical", priority: "High", status: "New", assignedTo: "Unassigned", estimatedCost: 180, finalCost: 0, description: "One outlet stopped working after storm." },
    { id: "m3", propertyId: "p5", tenantId: "t7", unit: "L2", title: "Hallway light replacement", category: "Common Area", priority: "Low", status: "Waiting for Parts", assignedTo: "Building Tech", estimatedCost: 95, finalCost: 0, description: "Fixture replacement ordered." },
    { id: "m4", propertyId: "p2", tenantId: "t3", unit: "3", title: "HVAC filter service", category: "HVAC", priority: "Low", status: "Completed", assignedTo: "North Air", estimatedCost: 120, finalCost: 115, description: "Routine filter service complete." }
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
    render();
  });
}

function bindActions() {
  document.body.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    const id = event.target.dataset.id;
    if (!action) return;

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
  });

  $("#saveRecordBtn").addEventListener("click", saveDialogRecord);

  $("#resetDataBtn").addEventListener("click", () => {
    data = structuredClone(sampleData);
    selectedProperty = "all";
    saveData();
    populatePropertyFilter();
    render();
    showToast("Sample data restored");
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
  return items.filter((item) => item.propertyId === selectedProperty || item.id === selectedProperty);
}

function getProperty(id) {
  return data.properties.find((property) => property.id === id);
}

function getTenant(id) {
  return data.tenants.find((tenant) => tenant.id === id);
}

function propertyMetrics(propertyId) {
  const property = getProperty(propertyId);
  const tenants = data.tenants.filter((tenant) => tenant.propertyId === propertyId && tenant.status === "Active");
  const payments = data.payments.filter((payment) => payment.propertyId === propertyId);
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
  $("#paymentsTable").innerHTML = filtered(data.payments).map((payment) => {
    const tenant = getTenant(payment.tenantId);
    const balance = Number(payment.amountDue || 0) - Number(payment.amountPaid || 0);
    return `
      <tr>
        <td><strong>${tenant ? escapeHtml(tenant.name) : "Unassigned"}</strong><br><span>${payment.method || "No method"}</span></td>
        <td>${propertyName(payment.propertyId)}</td>
        <td>${money.format(payment.amountDue)}</td>
        <td>${money.format(payment.amountPaid)}</td>
        <td>${money.format(balance)}</td>
        <td>${formatDate(payment.dueDate)}</td>
        <td>${statusBadge(payment.status)}</td>
        <td><button class="button compact ghost" data-action="edit-payment" data-id="${payment.id}" type="button">Edit</button></td>
      </tr>
    `;
  }).join("");
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
  $("#expensesTable").innerHTML = filtered(data.expenses).map((expense) => `
    <tr>
      <td>${formatDate(expense.date)}</td>
      <td>${propertyName(expense.propertyId)}</td>
      <td>${escapeHtml(expense.category)}</td>
      <td>${escapeHtml(expense.vendor)}</td>
      <td>${money.format(expense.amount)}</td>
      <td><button class="button compact ghost" data-action="edit-expense" data-id="${expense.id}" type="button">Edit</button></td>
    </tr>
  `).join("");
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
  const properties = filtered(data.properties);
  const rows = properties.map((property) => ({ property, metrics: propertyMetrics(property.id) }));
  const maxNet = Math.max(...rows.map((row) => Math.abs(row.metrics.net)), 1);

  $("#profitBars").innerHTML = rows.map(({ property, metrics }) => `
    <div class="bar-row">
      <strong>${escapeHtml(property.name)}</strong>
      <div class="bar-track"><div class="bar-fill" style="width:${Math.max(4, Math.round((Math.abs(metrics.net) / maxNet) * 100))}%"></div></div>
      <span>${money.format(metrics.net)}</span>
    </div>
  `).join("");

  const metrics = portfolioMetrics();
  $("#portfolioSummary").innerHTML = [
    summaryItem("Expected Rent", money.format(metrics.expected)),
    summaryItem("Collected Rent", money.format(metrics.collected)),
    summaryItem("Outstanding Rent", money.format(metrics.outstanding)),
    summaryItem("Expenses", money.format(metrics.expenses)),
    summaryItem("Net Income", money.format(metrics.net))
  ].join("");

  $("#reportsTable").innerHTML = rows.map(({ property, metrics }) => `
    <tr>
      <td><strong>${escapeHtml(property.name)}</strong></td>
      <td>${money.format(metrics.expected)}</td>
      <td>${money.format(metrics.collected)}</td>
      <td>${money.format(metrics.outstanding)}</td>
      <td>${money.format(metrics.expenses)}</td>
      <td>${money.format(metrics.net)}</td>
      <td>${Math.round(metrics.occupancy * 100)}%</td>
    </tr>
  `).join("");
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
        <button class="button compact danger-button" data-action="delete-maintenance" data-id="${request.id}" type="button">Delete</button>
      </div>
      <p>${propertyName(request.propertyId)} Unit ${escapeHtml(request.unit)} - ${escapeHtml(request.assignedTo || "Unassigned")}</p>
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

function maintenanceCard(request) {
  return `
    <article class="request-card">
      <h3>${escapeHtml(request.title)}</h3>
      <p>${propertyName(request.propertyId)} Unit ${escapeHtml(request.unit)}</p>
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

function openDialog(type, id = null) {
  dialogMode = { type, id };
  const record = findRecord(type, id);
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
    return [
      selectField("Tenant", "tenantId", optionsForTenants(record.tenantId)),
      selectField("Property", "propertyId", optionsForProperties(record.propertyId)),
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
    const due = Number(payload.amountDue || 0);
    const paid = Number(payload.amountPaid || 0);
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
