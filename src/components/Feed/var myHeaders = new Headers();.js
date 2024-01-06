var myHeaders = new Headers();
myHeaders.append("authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHRvc1dhbGxldCI6IjB4NGQzYTRkYTk0ODg2NzYxMzEwYmVhNTNmMTI0MzlmOGVhYjZhYmU5MTRhNTk4MjY2ZTFlMGFjYmU0NGNjNzIyZCIsImlhdCI6MTcwNDQ0MzE4M30.w343UG40U0WBkMTXckaax3szEUU4opWYDosHlsQJIDE");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const call = () => {
    fetch("http://backend.townesquare.xyz/posts/findAll?page=1&limit=10&search=&userId=", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}