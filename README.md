<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Waiter App</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> WaiterApp is an online app, designed to help all restaurants in the world!.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

WaiterApp is an online application designed to streamline the ordering process in restaurants by allowing waiters to manage orders directly through their devices. Developed using Node.js, React, and React Native, the app aims to enhance efficiency in restaurants worldwide.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

You'll need the following software installed on your machine:

- Node.js (version 18 or higher)
- Docker
- MongoDB (via Docker)

To start MongoDB, use the following command:

```
docker run --name mongo -p 27017:27017 -d mongo
```

### Installing

Navigate to the `api` directory and install the backend dependencies:

```
cd api
yarn
yarn dev
```

Then, navigate to the `fe` directory and install the frontend dependencies:

```
cd fe
yarn
yarn dev
```

## 🎈 Usage <a name="usage"></a>

Add notes about how to use the system.

## 🚀 Deployment <a name = "deployment"></a>

Use the app to manage restaurant orders, view menus, and track customer preferences.

## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [React](https://vitejs.dev/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@lucasmarkes](https://github.com/lucasmarkes) - Development

See also the list of [contributors](https://github.com/lucasmarkes/waiter-app/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Inspiration from various online ordering platforms
- Thanks to the open-source community for their tools and frameworks
