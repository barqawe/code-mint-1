import { Component, OnInit, OnDestroy, DestroyRef, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NqfdI } from './interfaces/nqfd.interface';
import { NgClass } from "@angular/common";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-nqfd',
  imports: [NgClass],
  templateUrl: './nqfd.html',
  styleUrl: './nqfd.scss'
})
export class Nqfd implements OnInit , OnDestroy {
  nqfds: NqfdI[] = [];
  private destroyRef = inject(DestroyRef);

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchNqfds();
    this.getPagesCount();
    
    this.currentPage = 1
  }
  currentPage: number = 1;

  pageSize: number = 15;
  totalPages: number = 0;
  nqfdsCount: number = 0;

  fetchNqfds() {
    const apiUrl = `https://68de185cd7b591b4b78e5ef2.mockapi.io/nqfd?page=${this.currentPage}&limit=${this.pageSize}`;

    this.http.get<NqfdI[]>(apiUrl).pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next:(response)=>{
        this.nqfds = response;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
      

    })

  }
  getPagesCount(){
    let apiUrl='https://68de185cd7b591b4b78e5ef2.mockapi.io/nqfd'
    this.http.get(apiUrl).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next:(response)=>{
        this.nqfdsCount = (response as []).length;
        this.totalPages = Math.ceil(this.nqfdsCount / this.pageSize);

      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    })
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
   if (this.currentPage + 1 <= this.totalPages) {
      this.currentPage++;
      this.fetchNqfds();
   }
    
  }
  nextPages(){
    if (this.currentPage + 5 <= this.totalPages) {
      this.currentPage += 5;
    } else {
      this.currentPage = this.totalPages;
    }
    this.fetchNqfds();
  }

ngOnDestroy(){

    }
}


