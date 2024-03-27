import { HttpHeaders } from '@angular/common/http';

export const API_HEADERS = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${sessionStorage.getItem("Token")}`,
});


export const API_BASE_URL = 'http://nanabarsamaj-001-site1.htempurl.com/api/';
