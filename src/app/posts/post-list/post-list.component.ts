import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { Post } from '../post.model';
import { Subscription } from 'rxjs';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

@Injectable({providedIn: 'root'})
export class PostListComponent implements OnInit, OnDestroy {
posts: Post[] = []; /**adding the model of how post should be*/
private postSub: Subscription;


  ngOnInit() { /** basic initialization tasks here */
    this.postService.getPosts();
    this.postSub = this.postService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      }); /**listener to the Subject,  */
  }

  constructor(public postService: PostService) {}
  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
