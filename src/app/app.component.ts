import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Manager';

  tasks: { 'id': number, 'task': string}[];

  constructor(private dialog: MatDialog, public snackBar: MatSnackBar, private data: DataService) {
    this.getTasks();
  }

  getTasks() {
    this.tasks = this.data.getTasks();
  }

  updateTask(task) {
    this.data.updateTask(task);
    this.getTasks();
  }

  deleteTask(task) {
    this.data.deleteTask(task);
    this.getTasks();
  }

  addTask() {
    const dialogRef = this.dialog.open(AppAddTaskComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getTasks();
    });
  }

  errorHandle() {
    this.snackBar.openFromComponent(ErrorHandleComponent, {
      duration: 500,
    });
  }
}

@Component({
  selector: 'app-add-task',
  templateUrl: 'app-add-task.html',
})
export class AppAddTaskComponent {

  task = { 'id': 0, 'task': '' };

  constructor(
    public dialogRef: MatDialogRef<AppAddTaskComponent>,
    private dataservice: DataService,
    public snackBar: MatSnackBar
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addTask() {
    if (!this.task.task) {
      this.errorHandle();
      this.dialogRef.close();
      return;
    }
    this.dataservice.postTask(this.task);
    this.dialogRef.close();
  }

  errorHandle() {
    this.snackBar.openFromComponent(ErrorHandleComponent, {
      duration: 500,
    });
  }

}

@Component({
  selector: 'app-error-handle',
  templateUrl: 'error-handle.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class ErrorHandleComponent { }
