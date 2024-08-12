import { Component } from '@angular/core';
import * as data from './employeeData.json';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-crid',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, FormsModule],
  templateUrl: './employee-crid.component.html',
  styleUrl: './employee-crid.component.css'
})
export class EmployeeCridComponent {
  employees = (data as any).default;
  ////DataSet
  ////https://www.kaggle.com/datasets/oyekanmiolamilekan/fake-employee-dataset?resource=download
  filteEmployees = this.employees;
  searchText:string="";

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

  // // async updateEmployee(index:any, item:any)
  // // {
  // //   const { value: formValues } = await Swal.fire({
  // //     title: "Multiple inputs",
  // //     html: `
  // //       <input id="swal-input1" class="swal2-input" value="Testing">
  // //       <input id="swal-input2" class="swal2-input">
  // //     `,
  // //     focusConfirm: false,
  // //     preConfirm: () => {
  // //       return [
  // //         (document.getElementById("swal-input1") as HTMLInputElement).value,
  // //         (document.getElementById("swal-input2") as HTMLInputElement).value
  // //       ];
  // //     }
  // //   });
  // //   if (formValues) {
  // //     Swal.fire(JSON.stringify(formValues));
  // //   }
  // //   ////a:string= 
  // // }

  ASC()
  {
    //localeCompare is for comparing the strings...
    this.employees.sort((a:any, b:any)=> a.FIRST_NAME.localeCompare(b.FIRST_NAME));
  };
  
  DES()
  {
    this.employees.sort((a:any, b:any)=> b.FIRST_NAME.localeCompare(a.FIRST_NAME));
  };

  ngOnInit(): void {
    this.search();
    this.search_FullName();
  }


  searchKey(data: string) {
    this.searchText = data;
    this.search();
    this.search_FullName();
  }

  search() {
      this.filteEmployees = this.searchText === ""? this.employees : this.employees.filter((element:any) => {
      ////return element.FIRST_NAME.toLowerCase() == this.searchText.toLowerCase();
      return JSON.stringify(element.FIRST_NAME.toLowerCase()).includes(this.searchText.toLowerCase());
    });
  }

  search_FullName() {
    this.filteEmployees = this.searchText === ""? this.employees : this.employees.filter((element:any) => {
    return element.FIRST_NAME.toLowerCase() == this.searchText.toLowerCase();
    ////return JSON.stringify(element.FIRST_NAME.toLowerCase()).includes(this.searchText.toLowerCase());
  });
}

  // // searchProducts(searchText: string) {
  // //   this.filteEmployees = this.employees.filter((prod: any) => {
  // //     return JSON.stringify(prod).includes(searchText);
  // //   })
  // //   console.log(this.filteEmployees)
  // // }
}
