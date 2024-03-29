import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Appointment } from 'src/app/dao/appointment';
import { AppointmentService } from 'src/app/services/appointmentservices/appointment.service';
// import { AppoinmentService } from 'src/app/services/appoinmentservices/appoinment.service';

@Component({
  selector: 'app-viewaallappoinment',
  templateUrl: './viewaallappoinment.component.html',
  styleUrls: ['./viewaallappoinment.component.css']
})
export class ViewaallappoinmentComponent {
  p : number =1;
  count : number =20;
  appointments:Appointment[]=[];
  
  // appointmentidstr=sessionStorage.getItem("appointmentid");
  // appointmentid=parseInt(this.appointmentidstr);
  useridstr=sessionStorage.getItem("userid").toString();
  userid=parseInt(this.useridstr);
  username: string;
  // appointment:Appointment;
  constructor(private appointmentdataservice: AppointmentService
    ){}

  // ngOnInit(){
  //   this.appointmentdataservice.getAppointmentByAppointmentId(this.appointmentid).subscribe(
  //         data=>{this.appointment=data,
  //                this.updateBooking(),
  //                this.getAllBookedAppointment()
  //               }
  //      )
    
    
  //   }

  // getAllBookedAppointment(){
  //   this.appointmentdataservice.getAllBookedAppointments(this.userid).subscribe(
  //     data => {this.appointments =data, 
  //               console.log(this.appointments);
  //            })
  // }
  // updateBooking() {
  //   this.appointmentdataservice.updateBooking(this.appointmentid,this.appointment);
  // }
  
  //   // errorHandling(banckenderror: any): void {
  //   //   this.matDialog.open(InvalidcomponentComponent,{
  //   //   width: '250px', data: banckenderror.response}
  //   //   );
  //   // }

  ngOnInit(){
    this.username = sessionStorage.getItem("username");
    this.appointmentdataservice.getAppointmentsByUserId(this.userid).subscribe(
      data=>{
        this.appointments=data
      }
    )
  }
}
