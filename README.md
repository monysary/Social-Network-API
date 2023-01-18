# Social Network API

## Description
The Social Network API is a back-end system that utilizes express and MongoDB to give users the ability perform CRUD for users and thoughts.

## Installation
To observe the back end, users must install dependencies by running the following command in terminal: 
```
npm i
```

## Usage
The back-end is built by initialize a User and Thought model. The User model schema contains user information such as username, email, thoughts (referencing Thought model), and friends (referencing other users). The Thought model schema contains the thought text, created timestamp, username of user that created the thought, and reactions (referencing the reaction schema). The reaction schema contains the reaction body, username of user that submitted the reaction, and created timestamp.

Launch the application by entering the following command in terminal:
```
node server.js
```
This will open a local host connection and allow users to perform basic CRUD on users and thoughts. User models can store an array of thoughts and other user's ID in the form of a friends list array. A video demonstration on how the back-end works can be found below:

Demo video: 

## Credits
N/A

## License
N/A

## Questions
For questions, please email me at sary.mony@gmail.com

For other projects, please check out my GitHub at [github.com/monysary](github.com/monysary)