NODE + Angular connection
 ##RESTful API

SPA RESTful API stores and fetch data but never renders an second HTML page. RESTful sends requests to paths ('/', '/posts') . Within these paths, you can have `GET`, `POST` and `DELETE`. Client sends a request to the API by 'adding' (`POST`) a new post. Then getting a JSON response to the client.  


##getPost

```
getPosts() {
    this.http.get<`{message: string, posts: Post[]}`>data format explained ('http://localhost:3000/posts')/**this listens to the response*/
      .subscribe((postData) => { this is the body of the response 
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);[..]is a copy of the post service 
      });
  }
```
