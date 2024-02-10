# Family Reunification Web Service

This project implements a simple web service for family reunification cases using Node.js and Express framework, connected to MongoDB for data storage.

## Overview

The Family Reunification Web Service provides basic CRUD operations for managing family reunification cases. It includes endpoints for creating, reading, updating, and deleting cases.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB (Make sure MongoDB is installed and running on your machine)

## Installation

1. Clone the repository:

```
git clone https://github.com/ranlachmy96/assignment2.git
```

2. Navigate to the project directory:

```
cd /your-path
```

3. Install dependencies:

```
npm install
```

## Usage

To start the server, run the following command:

```
npm start
```

The server will be running at http://localhost:3000/.

## Endpoints

- GET /familyReunification: Retrieve all active family reunification cases.
- GET /familyReunification/{id}: Retrieve details of a specific active family reunification case by ID.
- POST /familyReunification: Create a new family reunification case.
- PUT /familyReunification: Update details of an existing family reunification case.
- DELETE /familyReunification/{id}: Delete an active family reunification case by ID.

## Postman API

[Postman API Documentation](https://documenter.getpostman.com/view/32171508/2sA2r3YQtM)

## Morgan Logging

This project uses Morgan for logging HTTP requests. The logging format includes the date.
