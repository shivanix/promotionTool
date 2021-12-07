https://user-images.githubusercontent.com/68128553/144969960-d7d3de2d-1ce3-4bc9-9ae9-7c4838260bb2.mp4

# promotionTool

promotionTool is a web application built using React and Mapbox GL JS

## What is promotionTool
It is a web app simulation that allows a marketer to send promotional offers that a user can see based on their current location.

## Getting Started

### Execute the following to set up promotionTool:

```sh
cd <project-directory>
https://github.com/shivanix/promotionTool.git
cd promotionTool
npm install
```

### Run the server

```sh
npm start
```


## More info

- A 'Find my location' button is available in the top-right corner of the maps.

- The coordinates are in the sequence - Longitude and Latitude - in the End-User UI page. 

- Invalid coordinates do not throw any errors at this time, however the map zooms into a water body.

- Mouse scroll wheel can be used to zoom in/zoom out in the map.

- Invalid input in the Marketer UI's new-branch form generates an empty branch at the chosen location without displaying any warnings at this time.


## Dependencies

- React
- react-router-dom
- mapbox-gl
- uuidv4

