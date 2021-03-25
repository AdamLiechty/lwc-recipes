import { LightningElement } from 'lwc';

export default class Demo extends LightningElement {
  contacts = [
    {
        Id: '003171931112854375',
        Name: 'Amy Taylor',
        Title: 'VP of Engineering',
        Tags: ['engineering', 'executive'],
        Phone: '6172559632',
        Picture__c:
            'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/amy_taylor.jpg'
    },
    {
        Id: '003192301009134555',
        Name: 'Michael Jones',
        Title: 'VP of Sales',
        Tags: ['sales', 'executive'],
        Phone: '6172551122',
        Picture__c:
            'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg'
    },
    {
        Id: '003848991274589432',
        Name: 'Jennifer Wu',
        Title: 'CEO',
        Tags: ['executive'],
        Phone: '6172558877',
        Picture__c:
            'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg'
    },
    {
      Id: '001',
      Name: 'Jean Valjean',
      Title: 'Developer',
      Tags: ['engineering'],
      Phone: '5555524601',
      Picture__c:
          'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg'
    },
    {
        Id: '002',
        Name: 'Elizabeth Schuyler',
        Title: 'Business Development Representative',
        Tags: ['sales'],
        Phone: '5517571854',
        Picture__c:
            'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg'
    },
    {
        Id: '003',
        Name: 'Camina Drummer',
        Title: 'Architect',
        Tags: ['engineering'],
        Phone: '1234567890',
        Picture__c:
            'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/amy_taylor.jpg'
    }
  ];
}