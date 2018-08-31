import { Post } from './post.model';
import { Subject } from 'rxjs'; /**event emmiter for broader use */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new Subject <Post[]>();

  constructor (private http: HttpClient) {}

  getPosts() {
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/posts')
      .subscribe((postData) => {
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable(); /**returns object to listen but not emit, so it just shows it*/
  }

  addPost(title: string, content: string) {
    const post: Post = {id: null, title: title, content: content};
    this.http
      .post<{ message: string }>('http://localhost:3000/posts', post)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]); /** pushes new value to subject after updated posts list
    */});
  }
}
