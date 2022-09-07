import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  loadingSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public setLoading = (isLoading: any) => {
        this.loadingSub.next(isLoading);
    }
}
