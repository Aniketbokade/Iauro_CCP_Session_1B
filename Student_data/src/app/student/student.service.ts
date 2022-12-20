import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

    students: Student[] = [{
        id: 1,
        name: 'Aniket',
        regno: '2020BIT022',
        mobileno: 9404745344,
        city: 'Chandrapur',
        college: 'SGGSIE&T'
    },
    {
        id: 2,
        name: 'Pranav',
        regno: '2020BIT039',
        mobileno: 9404745344,
        city: 'Wardha',
        college: 'SGGSIE&T'
    },
    {
        id: 3,
        name: 'Prajwal',
        regno: '2020BIT032',
        mobileno: 9404745344,
        city: 'Nagpur',
        college: 'SGGSIE&T'
    }];

    constructor() { }

    public getStudents(): any {
        const studentsObservable = new Observable(observer => {
            setTimeout(() => {
                observer.next(this.students);
            }, 1000);
        });

        return studentsObservable;
    }
}