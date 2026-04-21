import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post{
  id:number;
  title:string;
  body:string;
  userId : number;
}


@Injectable({
  providedIn: 'root',
})
export class Postss {

  private apiUrl = 'http://localhost:8080/posts';

  constructor(private http:HttpClient){}

  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl);
  }

  getPost(id:number):Observable<Post>{
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }

  addPost(posts:Partial<Post>):Observable<Post>{
    return this.http.post<Post>(this.apiUrl,posts);
  }

  updatePost(posts:Post):Observable<Post>{
    return this.http.put<Post>(`${this.apiUrl}/${posts.id}`,posts)
  }

  deletePost(id:number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
