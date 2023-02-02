import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubmissionDialogComponent } from '../../components/submission-dialog/submission-dialog.component'


export interface DialogData {
  title: string;
  description: string;
  website: string;
  rows: number;
}


@Component({
  selector: 'app-smart-matches',
  templateUrl: './smart-matches.component.html',
  styleUrls: ['./smart-matches.component.scss']
})
export class SmartMatchesComponent implements OnInit {

  constructor(public dialog: MatDialog, public submitDialog: MatDialog) { }

  openDialog(index): void {
    const dialogRef = this.dialog.open(FiDialog, {
      width: '500px',
      data: { title: rawData[index]["title"], description: rawData[index]["description"], website: rawData[index]["website"], rows: rawData[index]["rows"]}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
  }

  submit() {
    const dialogRef = this.submitDialog.open(SubmissionDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


@Component({
  selector: 'fi-dialog',
  templateUrl: 'fi-dialog.html',
})
export class FiDialog {

  constructor(
    public dialogRef: MatDialogRef<FiDialog>,  
    public submitDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    const dialogRef = this.submitDialog.open(SubmissionDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}







var rawData = [
  {
    "title": "Commonwealth Credit Union",
    "description": `Commonwealth Credit Union is a cooperative, not-for-profit financial institution owned and operated by its members exclusively to meet their financial needs. Currently, over 100,000 people from across Kentucky are Commonwealth Credit Union members. <br/><br/>
    Commonwealth Credit Union is now a Community Chartered financial institution, which has expanded our reach to include the 24 Kentucky counties that make up the KIPDA and Bluegrass Area Development Districts. If you live, work, worship, attend school, or volunteer in one of the counties in our charter, you can join and enjoy the many benefits of credit union membership. Anyone related to someone who qualifies for membership can also join, as well as anyone related to one of our current members.
    <br/><br/>NCUA and EHO
    `,
    "website": "https://ccuky.org/",
    "rows": 4,
    "logos":["https://www.ncua.gov/files/graphics/BluENGinsurlabel.jpg", "https://www.kalvan.com/wp-content/uploads/sites/17/2016/03/EHO-logo.jpg"]
  },
  {
    "title": "Park Community Credit Union",
    "description": `Park Community was established in 1965 to serve the employees of General Electric’s Appliance Park in Louisville, Kentucky, hence the name “Park” Community Credit Union. Now we serve the larger communities we’re in. 
    <br/><br/>Our mission is to provide exceptional service and a full range of financial products has not. Our philosophy continues to focus on the credit union motto of “people helping people” as we STRIVE (Serve you, Thank you, Respect you, Inform you, Value your time, Exceed your expectation) to be a full-service financial institution where it’s always your life, your money, and your way.
    <br/><br/>NCUA and EHO
    `,
    "website": "",
    "rows": 4,
    "logos":["https://www.ncua.gov/files/graphics/BluENGinsurlabel.jpg", "https://www.kalvan.com/wp-content/uploads/sites/17/2016/03/EHO-logo.jpg"]
  },
  {
    "title": "L&N Federal Credit Union",
    "description": `Established in 1954, the credit union was founded to serve the L&N Railroad workers in Louisville, Kentucky. In 1982, the credit union converted to a Multi-Group Charter and went on to serve various businesses throughout Kentucky, Southern Indiana, and Tennessee. If you live, work, worship, attend school, or belong to any legal entity in the Southeast KY Area, the Northern KY Area, or the Louisville Area, you can now join L&N!
    <br/><br/>With assets over $1.5 billion dollars and an array of products and services, L&N can offer everything necessary for someone's personal or business finances. Over 96,000 people have taken advantage of flexible mortgage and consumer loans, free online/mobile banking, free checking, business accounts and more. Credit union profits are given back to individuals by way of better interest rates, lower fees, convenience services, and resource programs. 
    <br/><br/>NCUA, EHO
    `,
    "website": "",
    "rows": 5,
    "logos":["https://www.ncua.gov/files/graphics/BluENGinsurlabel.jpg", "https://www.kalvan.com/wp-content/uploads/sites/17/2016/03/EHO-logo.jpg"]
  },
  {
    "title": "Community Financial Services Bank",
    "description": `We're all about value at Community Financial Services Bank. Because our clients are so important to us, we focus all our energy on providing additional value to you. For over 125 years, this added value has come in the form of exceptional checking and savings accounts, personalized loan offerings, state-of-the-art services, and (of course) friendly, customized service every step of the way.
    <br/><br/>Since becoming the first bank established in Marshall County in 1890, our community has always come first to us. That's why you, the community members, have been central to forming our mission statement from day one, that continues to this day.
    <br/><br/>NCUA, EHO
    `,
    "website": "",
    "rows": 4,
    "logos":["https://www.ncua.gov/files/graphics/BluENGinsurlabel.jpg", "https://www.kalvan.com/wp-content/uploads/sites/17/2016/03/EHO-logo.jpg"]
  },
  {
    "title": "Citizens Bank of Kentucky",
    "description": `At Citizens Bank of Kentucky we believe banking is an experience. Our pledge to you is that we will continually find ways to create more value for your banking relationships. The Citizens Experience involves an unwavering commitment to providing outstanding products and services through fair business practices. It is our belief that each and every business and consumer deserves the right to be treated fairly. Our experienced and knowledgeable banking team members are dedicated to conducting themselves ethically and responsibly as they work to help you to identify solutions to your specific needs. We choose to demonstrate our commitment to fair business practices by equipping our banking associates with training and skills essential to providing you, our valued customers, with what we call The Citizens Experience.
    <br/><br/>FDIC, EHO
    `,
    "website": "",
    "rows": 4,
    "logos":["https://upload.wikimedia.org/wikipedia/commons/e/e6/US-FDIC-Logo.svg", "https://www.kalvan.com/wp-content/uploads/sites/17/2016/03/EHO-logo.jpg"]
  },
  {
    "title": "FNB Bank",
    "description": `In 1875 when FNB Bank was established in Mayfield, Kentucky, banks printed their own local money. Now being a great local bank means empowering customers to make more of their own. Through our over 145-year history, we’ve stayed locally owned and operated, serving the customers we saw in our neighborhoods, on the ball fields and in church. We’re one of Kentucky’s seven oldest banks because we never forgot the power of personal connections. In our nine offices in Western Kentucky, we help customers make a way. With customers like ours, keeping up means going out of our way. You don’t follow the crowd. FNB is the leader with customers who follow their heart.
    <br/><br/>FDIC, EHO
    `,
    "website": "",
    "rows": 4,
    "logos":["https://upload.wikimedia.org/wikipedia/commons/e/e6/US-FDIC-Logo.svg","https://www.kalvan.com/wp-content/uploads/sites/17/2016/03/EHO-logo.jpg"]
  },
  {
    "title": "Independence Bank ",
    "description": `Long before the days of government bailouts, Independence Bank sought to create a banking revolution. Taking its name from Independence Hall in Philadelphia, Independence Bank remains unyielding in keeping “community” at the forefront of everything we do. Decision making is kept at the local level so customers can get answers from someone in their community, not a faceless number cruncher from the corporate office. We possess the means to serve the largest and most complex clients in our markets, with expertise as diverse as the communities we serve. We invest in the newest products and technologies so the experience we provide can stand up to and surpass the big banks.
    <br/><br/>Most central to our mission is doing what’s right and fair for our customers, communities and employees. If this sounds like the kind of revolution you’d like to be a part of, maybe it’s time you joined our revolution.
    <br/><br/>FDIC, EHO
    `,
    "website": "",
    "rows": 5,
    "logos":["https://upload.wikimedia.org/wikipedia/commons/e/e6/US-FDIC-Logo.svg","https://www.kalvan.com/wp-content/uploads/sites/17/2016/03/EHO-logo.jpg"]
  },
  {
    "title": "First Kentucky Bank",
    "description": `First Kentucky Bank promises to provide a personal approach to your finances. We are committed to bringing you simple ways to connect, grow and protect your financial health in both personal and business endeavors. We will serve you at each of our branches, online or on the phone, so you always have an easy way to connect with us. Plus, you’ll see us around the community helping with different events and projects. We know our communities are only as successful as the work we put into them. Our focus is on the future and adapting to the ever-changing financial environment.
    <br/><br/>FDIC, EHO
    `,
    "website": "",
    "rows": 4,
    "logos":["https://upload.wikimedia.org/wikipedia/commons/e/e6/US-FDIC-Logo.svg","https://www.kalvan.com/wp-content/uploads/sites/17/2016/03/EHO-logo.jpg"]
  },
  {
    "title": "Wilson & Muir Bank & Trust Co",
    "description": `Wilson & Muir Bank & Trust Company is dedicated to professional and reliable service, delivered with integrity, to fulfill the banking needs of its clients and the financial welfare of its communities, while nurturing opportunity and growth for its employees and assuring shareholder value. 
    <br/><br/>With our rich history and generations of experience, WMB continues to guide our clients toward their financial objectives. Wilson & Muir Bank is a long way from Wall Street, physically and philosophically. We are a bank based on conservative business practices with a commitment to serve our clients with sound financial products and services. Exceptional customer service is one of the secrets to our success. We are very fortunate to have a strong and growing base of loyal clients that share our conservative business values. Building strong relationships, providing excellent service and remaining focused on the community are qualities that couldn't be more important any time in our history as they are today.
    <br/><br/>FDIC, EHO
    `,
    "website": "",
    "rows": 5,
    "logos":["https://upload.wikimedia.org/wikipedia/commons/e/e6/US-FDIC-Logo.svg","https://www.kalvan.com/wp-content/uploads/sites/17/2016/03/EHO-logo.jpg"]
  },
  {
    "title": "Limestone Bank",
    "description": `Limestone Bank traces its history back more than 110 years — we’re no strangers to planting seeds and growing with the communities we serve. Even through our transitions from Bullitt County Bank to PBI Bank to Limestone Bank, we’ve kept relationships alive with our rural Kentucky communities, and we extend that same, empowering hospitality and service to others in urban areas. No matter how we evolve, we always focus on building and maintaining the types of steadfast relationships that keep us — and our clients — on sturdy ground.
    <br/><br/>Our markets include metropolitan Louisville in Jefferson County and the surrounding counties of Henry and Bullitt, and they extend south along the Interstate 65 corridor. We serve south central Kentucky and southern Kentucky with banking centers in Butler, Green, Hart, Edmonson, Barren, Warren, Ohio, and Daviess counties. We also have a banking center in Lexington, the second largest city in Kentucky.
    <br/><br/>FDIC, EHO
    `,
    "website": "",
    "rows": 5,
    "logos":["https://upload.wikimedia.org/wikipedia/commons/e/e6/US-FDIC-Logo.svg","https://www.kalvan.com/wp-content/uploads/sites/17/2016/03/EHO-logo.jpg"]
  },
]