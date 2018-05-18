import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import {UserService} from '../../user/shared/user.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent {

  constructor(public dialogRef: MatDialogRef<PopupComponent>,
              @Inject
              (MAT_DIALOG_DATA) public data: any,
              private userService: UserService,
              private snack: MatSnackBar) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete() {
    this.userService.deleteUser();
    this.snack.open('User deleted', '', {
      duration: 2000
    });
  }

}
