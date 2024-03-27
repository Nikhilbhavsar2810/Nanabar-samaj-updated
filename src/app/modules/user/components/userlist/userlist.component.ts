import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LookupService } from 'src/app/services/lookup.service';
import { NotificationsService } from 'src/app/services/notifications.service';

import { UserService } from 'src/app/services/user.service';




@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  // p: string | number | undefined;
  p: number = 1;

  /**
   * Life Cycle Method
   */
  public constructor(
    public notificationsService: NotificationsService,
    private user: UserService,
    private lookupService: LookupService
  ) {

  }

  /**
   * Angular Life Cycle Method
   */
  public ngOnInit(): void {
    // this.getData();


  }

  filterString: any = '';
  users = new Array<any>();
  @ViewChild('userform') userform!: NgForm;




  userarray: any =
    {
      name: '',
      fathername: '',
      surname: '',
      mobilenumber: '',
      email: '',
      gender: '',
      address: '',
      zip: '',
      password: '',
      image: '',
    }

  usersobj = [
    {
      photo: '',
      name: 'Nikhil',
      Email: 'abc@gmail.com',
      Gender: 'Male',
      Country: 'india',
      State: 'gujrat',
      City: 'ahmedbad',
    },
  ]

  userobj1 = [
    {
      id: '',
      username: 'string',
      father_name: 'string',
      surname: 'string',
      mobile_number: "+919898986565",
      email: 'string',
      gender: 'string',
      address: 'string',
      city_name: 'string',
      lookup_city_id: '',
      state_name: 'string',
      lookup_state_id: '',
      country_name: 'string',
      lookup_country_id: '',
      pincode: 'string',
      sakh_name: 'string',
      lookup_sakh_id: '',
      password: '',
      is_terms: true,
      image: ".jpeg",
      is_active: true,
      is_verify: true,
      created_by_id: '',
      created_on: '',
      updated_by_id: null,
      updated_on: '',
      role_name: 'string',
      lookup_role_id: ''
    }
  ]


  onFetchuser(_data: NgForm) {
    this.user.getalluser(this.usersobj).subscribe(
      (res: any) => {
        debugger
        console.log(res);
        this.usersobj = res.data;
      }
    )
  }


  OngetALluser(userobj1: any) {
    this.user.getalluser(this.userobj1).subscribe(
      (res: any) => {
        console.log(res);
        this.userobj1 = res.data;
      }
    )
  }


  openEditModal(user: any): void {
    this.userform.form.patchValue({
      name: user.username,
      fathername: user.father_name,
      surname: user.surname,
      mobilenumber: user.mobile_number,
      email: user.email,
      gender: user.gender,
      address: user.address,
      zip: user.pincode,
      image: user.image

    });


  }

  items!: any[];
  pagedItems: any[] = []; // Array to store items for the current page
  pageSize = 1; // Number of items per page
  currentPage = 3; // Current page number
  userfilter: any;
  namesearch: any = ''
  countries: any = []
  states: any = []
  cities: any = []
  selectedCountryName: string = '';
  selectedStatedName = ''



  request: any = [
    {
      pageNumber: 1,
      pageSize: 3,
      search: "tirth",
      countryId: null,
      stateId: null,
      cityId: null,

    //  
      isactive: null,
      is_admin_approve: null,
      is_verify: null,
      // 


      is_Karobari_Member: null,
      sortBy: "string"
    }
  ]

  getData(request: any): void {

    this.user.postData(request).subscribe((response: any) => {

      this.items = response.data;
      this.pagedItems = this.items;

    });
  }







  pageChanged(event: number): void {
    this.currentPage = event;
    this.getData(this.request);
  }



  //get to All countries 
  getCountryData() {
    this.lookupService.Country().subscribe(
      (res: any) => {
        console.log(res);
        this.countries = res.data;
        // this.states=null
        this.cities = null
      }
    )
  }


  //Change the name using the function 
  selectCountry(country: any): void {

    this.selectedCountryName = country.name;
    sessionStorage.setItem("Coutry_Id", country.id);
    this.onChangeCountry(this.states)


  }


  //On the change the counties get the Id : 
  onChangeCountry(country: any): any {

    this.lookupService.State(sessionStorage.getItem("Coutry_Id")).subscribe(
      (res: any) => {
        console.log(res);

        this.states = res.data;
        this.cities = null;
      }
    )
  }






  selectState(state: any) {
    this.selectedStatedName = state.name;
    sessionStorage.setItem("State_Id", state.id);
    this.onChangeState(this.cities)
  }


  //Changin the state using the state id
  onChangeState(state: any) {
    this.lookupService.Cities(sessionStorage.getItem("State_Id")).subscribe(
      (res: any) => {
        console.log(res);

        this.cities = res.data;

      }
    )
  }

  Cityname: any;
  selectCity(city: any) {
    this.Cityname = city.name
  }

  itemsActive!: any[];
  itemInActive!: any[];


  activeuser() {
    const requestData = {
      pageNumber: null,
      pageSize: null,
      search: 'string',
      countryId: null,
      stateId: null,
      cityId: null,
      is_Karobari_Member: null,
      sortBy: 'string',
      // is_verify:true

    };

    this.user.postData(requestData).subscribe(
      (response: any) => {
        // this.itemsActive = response.data;
        this.itemsActive = response.data.filter((user: any) => user.is_verify === true);
        this.pagedItems = this.items;



      });

  }


  InActiveUser() {
    const requestData = {
      pageNumber: null,
      pageSize: null,
      search: 'string',
      countryId: null,
      stateId: null,
      cityId: null,
      is_Karobari_Member: null,
      sortBy: 'string',
      // is_verify:false

    };

    this.user.postData(requestData).subscribe(
      (response: any) => {
        // this.itemInActive = response.data;
        this.itemInActive = response.data.filter((user: any) => user.is_verify === false);
        this.pagedItems = this.items;



      });
  }



}
