//router.js
module.exports = app=> {
	const { router, controller } = app;
	//ajax请求的path
	router.get('/getString.do', controller.ajaxController.getString);
	router.post('/getNumber.do', controller.ajaxController.getNumber);
	router.get('/getStu.do', controller.ajaxController.getStu);
	router.get("/getStringArray.do",  controller.ajaxController.getStringArray)
	router.get("/getObjectArray.do",  controller.ajaxController.getObjectArray);
	
	router.post("/upload.do",  controller.uploadController.upload);
	 
};