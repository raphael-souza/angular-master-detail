import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError, flatMap } from "rxjs/operators";

import { Category } from "./category.model";
import { element } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // tslint:disable-next-line:no-inferrable-types
  private apipath: string = 'api/categories';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get(this.apipath).pipe(
      catchError(this.handlerError),
      map(this.jsonDataToCategories)
    );
  }

  getById(id: number): Observable<Category> {
    const url = `${this.apipath}/${id}`.pipe(
      catchError(this.handlerError),
      map(this.jsonDataToCategory)
    );
  }

  // Private Methods

  private jsonDataToCategories(jsonData: any[]): Category[] {
    const categories: Category[] = [];
    // tslint:disable-next-line:no-shadowed-variable
    jsonData.forEach(element => categories.push(element as Category));
    return categories;
  }

  private handlerError(error: any): Observable<any> {
    // tslint:disable-next-line:quotemark
    console.log("Erro na requisição => ", error);
    return throwError(error);
  }

  private jsonDataToCategory(jsonData: any): Category {
    return jsonData as Category;
  }
}
