exports.handler = (event, context, callback) => {
//   // accesscode
//   console.log("---Event---");
//   console.log(event);  

//   console.log("---Context---");
//   console.log(context);

  console.log("---Form Data---");
  console.log(event.body)

  let result = "/"

  if (event.body == "accesscode=demo") {
    result = "/super-long-url-here/"
  }

  callback(null, {
    statusCode: 200,
    body: result
  });
}
