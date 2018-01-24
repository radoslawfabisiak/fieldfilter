##Angular2 filter data by many fields
It helps you sort data by one or many fields

##Usage
`<ul>
  <li *ngFor="let item of items | filterByField: {
    name: filterName.name,
    lastName: filterName.lastName
  }"></li>
</ul>`

##License
MIT

