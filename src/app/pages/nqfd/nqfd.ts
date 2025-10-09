import { Component, OnInit, DestroyRef, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NqfdI } from './interfaces/nqfd.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { signal } from '@angular/core';

@Component({
  selector: 'app-nqfd',
  imports: [],
  templateUrl: './nqfd.html',
  styleUrl: './nqfd.scss'
})
export class Nqfd implements OnInit  {
  nqfds: NqfdI[] = [];
  private destroyRef = inject(DestroyRef);
  public http = inject(HttpClient);

  ngOnInit() {
    this.fetchNqfds();
    this.getPagesCount();
      }
  currentPage = signal(1);

  pageSize: number = 15;
  totalPages: number = 0;
  nqfdsCount: number = 0;

  fetchNqfds() {
    const apiUrl = `https://68de185cd7b591b4b78e5ef2.mockapi.io/nqfd?page=${this.currentPage()}&limit=${this.pageSize}`;

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
    if (this.currentPage() - 1 > 0) {
      this.currentPage.set(this.currentPage() - 1);
    }
    console.log(this.currentPage);
    this.fetchNqfds();
  }
  
  previousePages() {
    if (this.currentPage() - 5 > 0) {
      this.currentPage.set(this.currentPage() - 5);
    } else {
      this.currentPage.set(1);
    }
    this.fetchNqfds();
  }

  nextPage() {
   if (this.currentPage() + 1 <= this.totalPages) {
      this.currentPage.set(this.currentPage() + 1);
      this.fetchNqfds();
   }
    
  }
  nextPages(){
    if (this.currentPage() + 5 <= this.totalPages) {
      this.currentPage.set(this.currentPage() + 5);
    } else {
      this.currentPage.set(this.totalPages);
    }
    this.fetchNqfds();
  }


}


