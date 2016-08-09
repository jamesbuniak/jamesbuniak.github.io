**Camera Access - Describe image**


**Ideal goal** 
	Take a picture with the users camera and describe what it is through an API.

**Next Steps**
	Take picture, send data to API
	I assume parsing and returning the data will be easy.


**Issues & Solutions**
	Did some research on googles vision services - API is paid - which pushed me into another path for the project.

	Had trouble finding a working camera lib. Very new technology 8/9/16. Used GetUserMedia(), but this did not work in many browsers. Switched to WebRTC which seems to have many new features that while are still experimental.

	Could not find an easy way to take a screenshot, this proved easy with the existing lib webRTC. The capturescreen() function made this easy. 


 
