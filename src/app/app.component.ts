import { Component } from '@angular/core';
import { Post } from './posts/post-list/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts: Post[] = []; /**this says that storedPosts are of type Post 'model' */

  onPostAdded(post) {
    this.storedPosts.push(post);
  }
}
