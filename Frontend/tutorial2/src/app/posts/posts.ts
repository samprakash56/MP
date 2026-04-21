import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post,Postss } from '../postss';

@Component({
  selector: 'app-posts',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts {

  posts:Post[] =[];

  isEditMode: boolean = false;
  editingPostId: number | null = null;

  constructor(private postService : Postss){}

  ngOnInit():void{
    this.postService.getPosts().subscribe((data)=>{
      this.posts =data;
    })
  }
  
  newPost:Partial<Post> = {title:"",body:"",userId:1};
  newPost2:Partial<Post>= {title:"",body:"",userId:1};
  
  onSubmit() {

  if (this.isEditMode && this.editingPostId !== null) {

    const updatedPost: Post = {
      id: this.editingPostId,
      title: this.newPost.title!,
      body: this.newPost.body!,
      userId: this.newPost.userId!
    };

    this.postService.updatePost(updatedPost).subscribe((data) => {

      // replace updated item in array
      this.posts = this.posts.map(p =>
        p.id === data.id ? data : p
      );

      this.resetForm();
    });

  } else {

    this.postService.addPost(this.newPost).subscribe((data) => {
      this.posts = [data, ...this.posts];
      this.resetForm();
    });

  }

  }

  back(){
    this.isEditMode=false;
  }

  onEdit(post: Post) {
  this.isEditMode = true;
  this.editingPostId = post.id;

  this.newPost2 = {
    title: post.title,
    body: post.body,
    userId: post.userId
  };

  }

  onDelete(id: number) {

  this.postService.deletePost(id).subscribe(() => {

    // remove from UI
    this.posts = this.posts.filter(p => p.id !== id);

  });
  }

  resetForm() {
  this.newPost = { title: "", body: "", userId: 1 };
  this.isEditMode = false;
  this.editingPostId = null;
  }

  onUpdate() {
  this.isEditMode= false;

  const updatedPost: Post = {
    id: this.editingPostId!,
    title: this.newPost2.title!,
    body: this.newPost2.body!,
    userId: this.newPost2.userId!
  };

  this.postService.updatePost(updatedPost).subscribe((data) => {

    this.posts = this.posts.map(p =>
      p.id === data.id ? data : p
    );

    

  });
  
  }
  refresh(){
    this.postService.getPosts().subscribe((data)=>{
      this.posts =data;
    })
  }

}
