import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NqfdI } from './interfaces/nqfd.interface';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-nqfd',
  imports: [NgClass],
  templateUrl: './nqfd.html',
  styleUrl: './nqfd.scss'
})
export class Nqfd implements OnInit {
  data: NqfdI[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchNqfds();
    this.currentPage = 1
  }
  currentPage: number = 1;

  pageSize: number = 15;
  totalPages: number = 0;

  fetchNqfds() {
    const apiUrl = `https://68de185cd7b591b4b78e5ef2.mockapi.io/nqfd?page=${this.currentPage}&limit=${this.pageSize}`;

    this.http.get<NqfdI[]>(apiUrl).subscribe(
      (response) => {
        this.data = response;
        console.log('Data fetched successfully:', this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      },)

  }

  deleteNqdf(dItem:any){
    this.http.delete(dItem)
    this.fetchNqfds()

  }
 
  previousePage() {
    if (this.currentPage - 1 > 0) {
      this.currentPage--;
    }
    console.log(this.currentPage);
    this.fetchNqfds();
  }
  
  previousePages() {
    if (this.currentPage - 5 > 0) {
      this.currentPage -= 5;
    } else {
      this.currentPage = 1;
    }
    this.fetchNqfds();
  }

  nextPage() {
    this.currentPage++;
    this.fetchNqfds();
    
  }
  nextPages(){
    this.currentPage+=5 ; 
    this.fetchNqfds(); 
  }



}
