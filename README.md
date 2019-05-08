# Demo RESTful Web Service using Node, Docker, JSON

This is a REST API created for a CS 612 assignment.

## Data Model:

The data is stored inside `/animals.json` and contains an array (`animals`) of objects. Each object contains information about an animal and a unique `id`.

```javascript
{
  "animals" : [
    {
      "id": 1,
      "type" : "giraffe",
      "fact": "Baby giraffes can stand up and even run within a hour of being born.",
      "lifespan-time": 25,
      "lifespan-range": "years"
    },
        {
      "id": 2,
      "type" : "chameleon",
      "fact": "The world's tiniest chameleon has been found on Madagascar.",
      "lifespan-time": 5,
      "lifespan-range": "years"
    },
    ...
  ]
}
```

## API Endpoints

You can utilize two `GET` endpoints:

[1] `/animals` - returns the full JSON object

[2] `/animals:id` - returns the animal object for the `id` requested

## Setup Instructions

[without Docker]
- Clone or download the repo
- `cd` into the project root directory
- Run `npm install` to install all dependencies
- Run `npm run start` to start the server and build the service
- Go to `http://localhost:3000/[endpoint]` to view the data you want

[with Docker]
- Clone or download the repo
- `cd` into the project root directory
- Install Docker if you don't already have it: visit installation instructions for [Mac](https://docs.docker.com/docker-for-mac/install/) or [Windows](https://docs.docker.com/docker-for-windows/install/)
- Run Docker:
  - Build your container: `docker build -t [container-name] .`
  - Start your container:
    - (a) run without a volume: `docker run -it -p 3002:3000 [container-name]` OR
    - (b) run with a volume (this commands enables your container to listen for changes and refresh): `docker run -it -p 3002:3000 -v $(pwd):/app [container-name]`
- Go to `http://localhost:3002/[endpoint]` to view the data you want