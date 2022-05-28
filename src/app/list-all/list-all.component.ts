import { Component, OnInit } from '@angular/core';
import { UsersService } from '../serices/users.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { Blog } from '../Model/blog';
@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.scss']
})
export class ListALLComponent implements OnInit {
  blogList: any[] = [];
  allBlogs: any[] = [];
  searchBlogList: any[] = [];
  selectedblog: any;
  searchText:'';
  style:any;
  constructor(private blogService: UsersService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.blogService.getAllusers().subscribe(result => {
      if (result) {
        this.allBlogs=result;
        this.blogList = this.allBlogs;
        console.log(result)
      }
    });
    
  }
  SearchResult(){
    console.log(this.searchText)
    if(this.SearchResult!=undefined)
    {
      this.searchBlogList=[];
      for(let blog of this.allBlogs){
        if(blog.title.indexOf(this.searchText)>-1 || blog.author.indexOf(this.searchText)>-1 ||blog.content.indexOf(this.searchText)>-1)
        {
          this.searchBlogList.push(blog)
        }
      }
      this.blogList=this.searchBlogList;
    }
    else
    {
      this.blogList=this.allBlogs;
    }
  }
  deleteblog() {
    console.log(this.selectedblog, 'xxxxxxxxxxx');
    this.blogService.deleteuser(this.selectedblog._id).subscribe(result => {
      if (result) {
        this.getAll();
      }
    });
  }

  selectblog(blog) {
    console.log(blog, 'xxxxxxxxxxx');
    this.selectedblog = blog;
  }
}
