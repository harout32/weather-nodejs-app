var getUser =  (id, callback) => {
  var user = {
    id: id,
    name: 'varo'
  };
  callback(user);
};

getUser(21 , (user) => {
  console.log(user);
});
