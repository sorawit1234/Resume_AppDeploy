import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  today!: Date;
  getToday!: Date;
  showEducation! : Boolean ;
  hoverEducation!:boolean;
  constructor() { 
  }
  data = new FormGroup({
    type : new FormControl(null,null),
    code : new FormControl(null,null),
  })
  img1 ='https://i.ytimg.com/vi/44a8szmH_Cw/maxresdefault.jpg'
  img2 ='https://raiteke.com/img/resume/clicknext.png'
  img3 ='https://www.informatics.buu.ac.th/2020/wp-content/uploads/2018/07/NormalView.jpg'
  img4 ='https://upload.wikimedia.org/wikipedia/commons/e/ec/Buu-logo11.png'
  educationImg='https://upload.wikimedia.org/wikipedia/commons/e/ec/Buu-logo11.png'
  educationImg2='https://www.informatics.buu.ac.th/2020/wp-content/uploads/2018/07/NormalView.jpg'
  profileLinkImg= 'https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.6435-1/p160x160/243572187_4324979440953120_5964307575420966462_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeHCs6jpMPQvJ949-5bfgGxH5WP7MXOf6EvlY_sxc5_oSzwa6ETxz-hTZr8b7LzazL-1-vcV969ySa3Mr78VYJzG&_nc_ohc=_kveYQo3-qYAX-teV6S&_nc_ht=scontent.fbkk5-7.fna&oh=05f54c86bb658bc4e5794a087eb1b9d7&oe=61930955'
  ngOnInit(): void {
  }
  getProfileLinkImg(condition:string){
    if(condition =='#profile'){
      return this.profileLinkImg;
    }
  
    return 0 ;
    }
    setShow(condition:string){
      if(condition =='#eduTab')
      this.showEducation = true
      }
}
