Junior to Mid
=============

The competencies that a mid level developer are describe in [link goes here]()

The following exercise its a tool to assess that you as developer is in the technical level required to advance to this title.

General instructions
--------------------

1. You have ```4 weeks``` to resolve this exercise, during those you can spend up to ```2 hours``` a week of Edify's time to resolve it, the rest has to be in your own time.
2. You need to clone this repo, under the ```junior-to-mid``` folder you need to create a new folder with your name in the following format ```firstName.lastName``` same way as your Edify's email address. All your work must go into that folder.
3. You need to create a branch with the same name format as the folder in step ```2```
3. All the work needs to be push to the your branch using pull requests out of feature branches that describe a concrete functionality that you develop.
4. ```Julio Arias``` would be the your mentor during the ```4 weeks``` time and would act as your ```team lead``` if this was a real project.
5. Once you finish the exercise you need to present your work to a small panel of 3 other developers.

### Exercise description

Evil Corp. requires that you build a small support like chat for a website, in which you as a user can start a chat session with a support representative of the Evil Corp. Evil Corp also requires that the chat app uses the [websockets](https://en.wikipedia.org/wiki/WebSocket) technology but is open to any programming language or framework in both the front-end and back-end.

Evil Corp also requires that all chat sessions are stored somewhere so they can be evaluate their support team. But they don't have a preference on the storage it can go from files in the file system to a proper database.

Evil Corp currently has 1 support person and won't hire more in the near future, even if its just one the support representative he or she requires a separate web interface in which they would be prompted when a customer wants to start a new chat session, he can accept and start the session or decline it, in that case the customer would get a message saying "I'm sorry we don't care about your questions at this time". If more than 1 customer starts a chat session those sessions must queue up and the support representative must click on the session name to attend or cancel it, and he or she can only have 1 session open at any moment.

Evil Corp doesn't believe in security so don't worry about logins authorization or authentication. Anyone can get to both the product site and start a customer chat session and anyone can get into the support site and act as a support representative but only one at support site session can be active at a time, remember they only have 1 support rep, if a second support session tries to start they should get an error message saying "Who are you are only support rep is already working, go away.". Sessions should close when the browser closes.

By the way Evil Corp doesn't even have a product site nor a real product so you are free to build the product site as you wish and sell what ever you want, remember they are evil so even if you don't like the product they would force you to buy it.

Evil Corp as evil as they are they require good quality in their technology solutions so they recommend that you implement good patterns and practices or they will do something evil to you, one of those practices that must be follow is code testing and they also require at least a 10% of the code is cover by tests (SO EVIL!!!).
