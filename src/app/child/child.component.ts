import {Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  major = 0;

  changeLog!: string;

  ngOnChanges(changes: SimpleChanges) {

    for (const propName in changes) {

      const changedProp = changes[propName];

      this.changeLog = JSON.stringify(changedProp.currentValue);

    }
  }
}
