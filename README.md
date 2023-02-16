# mern_youtube_clone
Youtube Clone built with Mern Stack
#
![image](https://user-images.githubusercontent.com/75252077/215504244-3c88e023-4749-4366-99f5-b50575440c94.png)
#

![image](https://user-images.githubusercontent.com/75252077/215592578-6ba38684-3016-45c9-9c5f-05e620f91227.png)

#

![image](https://user-images.githubusercontent.com/75252077/215592676-c3456e26-73e0-4b17-9236-ae1199ddc4c1.png)

#

![image](https://user-images.githubusercontent.com/75252077/215592772-3840835c-d298-41b8-9f12-a23c0d633f47.png)


```
# ReactJS in the frontend
# State management in the frontend using Redux & Redux Toolkit
# Styled components with more emphasis on custom CSS & little bit of Material UI & Icons
# Video & Image upload using firebase storage
# Search, Like & Dislike, Subscribe a channel & Comment a video features
# Video recommendations on the video page
# Light / Dark Mode toggling
# Axios http client
# JWT cookie authentication
# Hashed password saving in the MongoDB database
# Login & Signup with custom Email & Password, Google OAuth using firebase authentication
# RESTful API using ExpressJS and MongoDB with mongoose
# Error handler & Protected routes
```

# Contribute

1. Fork the Repository

2. Clone the Forked Repository to your local machine.
	```
	git clone https://github.com/<your GitHub user name>/mern_youtube_clone.git.
	```

3. Change the directory to Data structure and algorithm.
	```bash
	cd mern_youtube_clone
	```

4. Add remote to the Original Repository.
	```
	git remote add upstream https://github.com/mnnkhndlwl/mern_youtube_clone.git
	```

5. Check the remotes for this repository.
```
git remote -v
```

6. Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).

```
git pull upstream main
```

7. Create a new branch.

```
git checkout -b <your_branch_name>
```

8. Perform your desired changes to the code base.


9. Track your changes:heavy_check_mark: .

```
git add . 
```

10. Commit your changes .

```
git commit -m "Relevant message"
```

11. Push the committed changes in your feature branch to your remote repo.
```
git push -u origin <your_branch_name>
```

12. To create a pull request, click on `compare and pull requests`. Please ensure you compare your feature branch to the desired branch of the repository you are supposed to make a PR to.


13. Add appropriate title and description to your pull request explaining your changes and efforts done.


14. Click on `Create Pull Request`.


15. Voila! You have made a PR to this repo. Sit back patiently and relax while your PR is reviewed

## Usage

Create .env file in the server folder and add the following environment variables:
```
# MONGO = 
# JWT = 
# PORT = 3001
```

Create .env file in the client folder and add the following environment variables, values can be found from firebase project setup
```
# REACT_APP_FIREBASE_KEY = 
# GENERATE_SOURCEMAP=false
```

### Install dependencies

```
# Backend deps
cd server
npm install

# client deps
cd client
npm install
```

### Run Server

```
# Backend Server (Local)
cd server
npm start

# client Server (Local)
cd client
npm start
```

you need to setup new project in firebase and enable storage and signin with google option

# Show your support

Give a ⭐ if you like this repo.

## Contributors
<a href="https://github.com/mnnkhndlwl/mern_youtube_clone/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=mnnkhndlwl/mern_youtube_clone" />
</a>


