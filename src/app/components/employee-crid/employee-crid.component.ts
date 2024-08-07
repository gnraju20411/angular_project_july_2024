import { Component } from '@angular/core';
import * as data from './employeeData.json';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-crid',
  standalone: true,
  imports: [NgxPaginationModule, CommonModule],
  templateUrl: './employee-crid.component.html',
  styleUrl: './employee-crid.component.css'
})
export class EmployeeCridComponent {
  employees = (data as any).default;

  f1(index: any, item: any)
  {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert " + item.FIRST_NAME + " " +item.LAST_NAME + "!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: item.id,
          text: item.FIRST_NAME + +item.LAST_NAME,
          icon: "success",
        });
        this.employees.splice(index,1);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });

      ////this.employees.splice(item,1);
  }

  view(index:any, item:any)
  {
    Swal.fire({
      title: "Full Name: " +item.FIRST_NAME + " " + item.LAST_NAME,
      text: "Email: " + item.EMAIL + ", Phome: " + item.PHONE_NUMBER + ", Hire Date: " + item.HIRE_DATE + ", Salart: " + item.SALARY,
      imageUrl: item.imageUrl,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image"
    });
  }

  ASC()
  {
    this.employees.sort((a:any, b:any)=> b.FIRST_NAME - a.FIRST_NAME);
  };
  
  DES()
  {
    this.employees.sort((a:any, b:any)=> a.FIRST_NAME - b.FIRST_NAME);
  };
}
