# Property Manager System Plan

## Project Overview

The Property Manager System is a web-based management platform designed to help an owner or property manager manage 5 properties from one central dashboard. The system will organize property information, tenants, rent payments, leases, maintenance requests, expenses, documents, and reports.

The goal is to make daily property management easier, reduce missed payments or lease deadlines, and give the manager a clear view of how each property is performing.

## Main Objectives

- Manage 5 properties in one system.
- Track units, tenants, leases, rent payments, and maintenance requests.
- Monitor property income and expenses.
- Store important property and tenant documents.
- Provide reports for rent collection, occupancy, expenses, and profit.
- Give tenants a simple way to submit maintenance requests and view basic account information.

## User Roles

### Admin / Owner

The Admin has full access to the system. This user can manage all properties, add or remove users, view reports, track payments, update leases, manage documents, and control system settings.

### Property Manager

The Property Manager can manage daily operations such as tenants, rent payments, maintenance requests, expenses, and lease records. Access can be limited to assigned properties if needed.

### Tenant

The Tenant can log in to view rent status, submit maintenance requests, upload documents, receive notices, and view lease information.

## Core Features

### 1. Dashboard

The dashboard is the main screen of the system. It should show a quick overview of all 5 properties.

Dashboard information should include:

- Total rent expected this month
- Total rent collected
- Outstanding rent balance
- Occupancy rate
- Number of occupied and vacant units
- Open maintenance requests
- Upcoming lease expirations
- Monthly expenses
- Net income by property

### 2. Property Management

The system should allow the manager to create and manage each property profile.

Each property record should include:

- Property name
- Property address
- Property type
- Number of units
- Owner name
- Assigned manager
- Property photos
- Notes
- Related documents

Each property should also have a unit list showing:

- Unit number
- Unit type
- Rent amount
- Occupancy status
- Current tenant
- Lease status
- Maintenance status

### 3. Tenant Management

The tenant section should keep all tenant information organized in one place.

Tenant records should include:

- Full name
- Phone number
- Email address
- Emergency contact
- Assigned property
- Assigned unit
- Lease start date
- Lease end date
- Monthly rent amount
- Security deposit amount
- Payment history
- Maintenance history
- Notes
- Uploaded documents

### 4. Rent and Payment Tracking

The rent module should help the manager track rent collection for all tenants.

The system should support:

- Monthly rent records
- Paid, unpaid, partial, and late statuses
- Late fees
- Payment dates
- Payment methods
- Rent receipts
- Tenant balances
- Rent collection summaries by property

Payment statuses:

- Paid
- Unpaid
- Partial
- Late
- Overdue

### 5. Lease Management

The lease module should help the manager track lease agreements and important dates.

Lease records should include:

- Tenant name
- Property and unit
- Lease start date
- Lease end date
- Monthly rent
- Security deposit
- Renewal status
- Move-in date
- Move-out date
- Signed lease document
- Lease notes

The system should send reminders before leases expire.

Recommended reminders:

- 90 days before expiration
- 60 days before expiration
- 30 days before expiration

### 6. Maintenance Management

The maintenance module should allow tenants and managers to create and track repair requests.

Maintenance requests should include:

- Property
- Unit
- Tenant
- Issue category
- Description
- Photos
- Priority level
- Assigned contractor
- Estimated cost
- Final cost
- Status
- Completion date

Maintenance statuses:

- New
- In Progress
- Waiting for Parts
- Completed
- Cancelled

Priority levels:

- Low
- Medium
- High
- Emergency

### 7. Expense Tracking

The expense section should track money spent on each property.

Expense categories should include:

- Repairs
- Utilities
- Insurance
- Taxes
- Cleaning
- Landscaping
- Contractor payments
- Supplies
- Management fees
- Other

Each expense should include:

- Property
- Category
- Amount
- Date
- Vendor
- Receipt or document
- Notes

### 8. Document Management

The system should store important documents for properties, tenants, leases, and expenses.

Document types may include:

- Lease agreements
- Tenant IDs
- Inspection reports
- Payment receipts
- Repair invoices
- Property insurance documents
- Tax documents
- Move-in forms
- Move-out forms
- Notices

Documents should be searchable and connected to the correct property, tenant, or unit.

### 9. Reports and Analytics

The reporting section should help the owner understand property performance.

Reports should include:

- Monthly rent collection report
- Unpaid rent report
- Occupancy report
- Expense report
- Profit and loss report
- Maintenance cost report
- Lease expiration report
- Tenant balance report

Each report should be filterable by:

- Property
- Month
- Year
- Tenant
- Status

### 10. Notifications

The system should send reminders and alerts for important tasks.

Notification examples:

- Rent is due soon
- Rent is late
- Lease is expiring soon
- Maintenance request has been created
- Maintenance request has been completed
- New document uploaded
- Tenant balance is overdue

## Main Pages

The system should include the following pages:

1. Login
2. Dashboard
3. Properties
4. Property Detail
5. Units
6. Tenants
7. Tenant Detail
8. Rent Payments
9. Leases
10. Maintenance Requests
11. Expenses
12. Documents
13. Reports
14. Notifications
15. Settings

## Suggested Database Tables

### users

Stores login accounts and user roles.

Fields:

- id
- name
- email
- password
- role
- phone
- status
- created_at

### properties

Stores property information.

Fields:

- id
- name
- address
- property_type
- total_units
- owner_name
- manager_id
- notes
- created_at

### units

Stores unit information for each property.

Fields:

- id
- property_id
- unit_number
- unit_type
- rent_amount
- status
- notes
- created_at

### tenants

Stores tenant profiles.

Fields:

- id
- name
- email
- phone
- emergency_contact_name
- emergency_contact_phone
- status
- notes
- created_at

### leases

Stores lease agreements.

Fields:

- id
- property_id
- unit_id
- tenant_id
- start_date
- end_date
- monthly_rent
- security_deposit
- renewal_status
- document_id
- status
- created_at

### payments

Stores rent payment records.

Fields:

- id
- tenant_id
- lease_id
- property_id
- unit_id
- amount_due
- amount_paid
- due_date
- paid_date
- payment_method
- status
- late_fee
- notes
- created_at

### maintenance_requests

Stores repair and maintenance requests.

Fields:

- id
- property_id
- unit_id
- tenant_id
- title
- description
- category
- priority
- status
- assigned_to
- estimated_cost
- final_cost
- completed_at
- created_at

### expenses

Stores property expenses.

Fields:

- id
- property_id
- category
- amount
- expense_date
- vendor
- receipt_document_id
- notes
- created_at

### documents

Stores uploaded document records.

Fields:

- id
- property_id
- unit_id
- tenant_id
- document_type
- file_name
- file_url
- uploaded_by
- created_at

### notifications

Stores alerts and reminders.

Fields:

- id
- user_id
- title
- message
- type
- status
- created_at

## Recommended Technology

For a modern web application, the recommended technology stack is:

- Frontend: React or Next.js
- Backend: Node.js with Express, Laravel, or Django
- Database: PostgreSQL or MySQL
- Authentication: Email and password login with role-based access
- File Storage: Local file storage at first, cloud storage later
- Hosting: Vercel, Render, Railway, or a VPS

For the first version, a simple web-based admin dashboard is recommended. Mobile-friendly design should be included so the manager can use the system from a phone or tablet.

## Development Phases

### Phase 1: Foundation

Set up the basic system with login, user roles, property records, unit records, tenant profiles, and a simple dashboard showing the status of all 5 properties.

Deliverables:

- Login page
- Admin dashboard
- User roles
- Property list
- Unit list
- Tenant list

### Phase 2: Property and Tenant Management

Allow the admin or manager to add, edit, and view properties, units, tenants, lease dates, rent amounts, contact information, and occupancy status.

Deliverables:

- Add/edit property forms
- Add/edit unit forms
- Add/edit tenant forms
- Assign tenant to unit
- Occupancy tracking

### Phase 3: Rent and Payment Tracking

Add monthly rent tracking, payment history, unpaid balance alerts, late payment status, receipts, and rent collection summaries by property.

Deliverables:

- Rent payment records
- Payment status tracking
- Late payment tracking
- Tenant balance view
- Rent collection summary

### Phase 4: Lease and Document Management

Store lease agreements, move-in forms, IDs, inspection reports, notices, and renewal dates. The system should notify the manager when a lease is close to expiring.

Deliverables:

- Lease records
- Lease document upload
- Lease expiration reminders
- Tenant document storage
- Property document storage

### Phase 5: Maintenance Management

Create a maintenance request system where issues can be reported, assigned, tracked, updated, and marked as completed. Each request should include property, unit, priority, photos, notes, and repair cost.

Deliverables:

- Maintenance request form
- Maintenance status tracking
- Priority levels
- Contractor assignment
- Repair cost tracking

### Phase 6: Expense Tracking

Track property expenses such as repairs, utilities, insurance, taxes, cleaning, landscaping, and contractor payments. Expenses should be connected to each property.

Deliverables:

- Expense entry form
- Expense categories
- Receipt upload
- Expense list by property
- Monthly expense summary

### Phase 7: Reports and Analytics

Generate simple reports for rent collected, unpaid rent, property expenses, occupancy rate, lease expirations, maintenance costs, and monthly profit or loss.

Deliverables:

- Rent report
- Expense report
- Occupancy report
- Maintenance report
- Profit and loss report

### Phase 8: Tenant Portal

Allow tenants to log in, view rent status, submit maintenance requests, upload documents, receive notices, and view lease information.

Deliverables:

- Tenant login
- Tenant dashboard
- Maintenance request submission
- Rent balance view
- Lease document view

### Phase 9: Notifications

Add automatic reminders for rent due dates, late payments, lease expirations, open maintenance requests, and important manager tasks.

Deliverables:

- Rent due reminders
- Late payment alerts
- Lease expiration alerts
- Maintenance status alerts
- Dashboard notification list

### Phase 10: Final Testing and Launch

Test the system with all 5 properties, make sure data is accurate, fix bugs, improve the interface, and prepare the system for daily use.

Deliverables:

- Full system testing
- Bug fixes
- User testing
- Final data review
- Launch-ready system

## Minimum Viable Product

The first version should focus on the most important features:

- Login
- Dashboard
- Manage 5 properties
- Manage units
- Manage tenants
- Track leases
- Track rent payments
- Track maintenance requests
- Track expenses
- View basic reports

The tenant portal, automatic notifications, and advanced reports can be added after the basic system is working.

## Example Workflow

1. Admin logs in.
2. Admin adds the 5 properties.
3. Admin adds units under each property.
4. Admin adds tenants and assigns them to units.
5. Admin creates lease records for each tenant.
6. System tracks monthly rent due.
7. Manager records payments as they are received.
8. Tenant submits a maintenance request.
9. Manager updates the maintenance status.
10. Owner reviews monthly income, expenses, and profit reports.

## Success Criteria

The project is successful when:

- All 5 properties can be managed from one dashboard.
- Each property has accurate unit, tenant, lease, payment, and expense records.
- The manager can quickly see unpaid rent and open maintenance requests.
- Lease expiration dates are easy to track.
- Monthly reports show income, expenses, and profit.
- The system is simple enough for daily use.

## Final Recommendation

Start with a simple admin dashboard first. Build the system around the daily tasks that matter most: properties, tenants, rent, leases, maintenance, and expenses. Once those are working well, add tenant login, automatic reminders, and advanced reports.

This approach keeps the project affordable, organized, and useful from the first version.
