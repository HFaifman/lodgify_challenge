Just do an npm install, followed by an npm start and enjoy!
Some (boring) key technical notes:

1. I didn´t implement lazy loading for the images, because it seemed to be out of the scope for this project. I can, however, tell you that I would have implemented it using the Intersection Observer API.
2. I tried to turn every text in the project into a constant. I couldn´t find a good abstraction for the booked text one, so I left it inside the component. I figured that´s the only use case for that text anyway.
   That´s it. Thanks for reading :)
