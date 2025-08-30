
# HRMS

A simple Human Resource Management System (HRMS) built with React and Redux that allows performing basic CRUD operations. The system manages employee data such as name, email, role, department, date of joining, and status. Features include adding new employees, updating existing records and searching/filtering the employee list


## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Mock Json Data


## Features

- Add employee
- Edit Employee
- Search by name or email
- Filter by Department
- localstorage for persisting employee data


## Run Locally

Clone the project

```bash
  git clone https://github.com/BalavigneshRajasekar/HRMS.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Demo

Insert gif or link to demo
https://hrms-benoummkd-balavigneshrajasekars-projects.vercel.app/

## Optimizations

Debouncing the search query ensures that the API call is triggered only after the user stops typing for a specified delay. This eliminates unnecessary API requests on every keystroke, reduces server load, and improves application performance.

