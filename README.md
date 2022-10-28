# Housez

Getting an estimate of house price in certain areas is painful. All you can get is the individual house prices and decide upon the the scattered information.

To solve the problem this project "Housez" is made to bring to you the exact brief price prediction of a place.

## Demo

Project Demo

https://user-images.githubusercontent.com/76695320/198582878-2c8b817b-3102-4b71-a34e-f7ad91f5effe.mp4

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## API Reference

api → https://bapp-api.onrender.com

#### Get Locations

```http
  GET /api/getlocation
```

#### Get Predicted Price

```http
  POST /api/getpredictedprice
```

| Parameter    | Type     | Description                       |
| :----------- | :------- | :-------------------------------- |
| `total_sqft` | `number` | **Required**. Sqft of house       |
| `bath`       | `number` | **Required**. Number of bathrooms |
| `bhk`        | `number` | **Required**. Number of BHK       |
| `balcony`    | `number` | **Required**. Number of balconies |
| `location`   | `string` | **Required**. Search Location     |

## Installation

Clone Project :

```bash
git clone https://github.com/saikatXshrey/college-major-project.git
```

Install project epenencies with npm/yarn

```bash
cd college-major-project
npm install
```

Start the server

```bash
npm run start
```

## Deployment

To deploy this project run

```bash
npm run build
```
