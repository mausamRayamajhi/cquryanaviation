import React from 'react';
import Navigation from '../container/Navigation';
import Footer from '../container/Footer';
import { connect } from 'react-redux';



const About = (props) => (
    <div>
        <Navigation />
        <section className="section-bg-first">
            <div className="section-bg-content">
                <h1>About us</h1>
                <p>
                    Ryan aviation was started in July 2017 and its main aim was to fill the gap in the market for
    chartered helicopter flights, service the mining sector and also assist the region in bush fire season.
    Ryan Aviation in the short history of two years has won
    - Numerous contracts from Queensland and New South Wales State government
    organisations for assisting during the bush fire season
    - Contracts with mining sector to fly in and fly out workers and equipment’s
    The Australian bushfire season in Queensland and New South Wales generally starts in November
    and ends in the following year’s March, which are the driest months in these regions. Large Bushfires
    can result in a fire storms, which are often named after the day that the firestorm starts, such as
    “Ash Wednesday” and “Black Saturday”, both of which were major bushfires which resulted in
    extensive property damage and loss of life.
    During such firestorms, Ryan Aviation will use its extensive network of helicopters to water bomb
    fires and also to drop fire retardant on bush and properties. Both these activities must be conducted
    in coordination with ground fire fighters so maximum benefit can be achieved out of these air drops.
    Ryan Air aircrafts have an onboard GPS that tracks details such as
    - Where the water was sourced from
    - How much water was sourced
    - Where was it dropped and
    - How much water was dropped
    In addition, it must track how many flights took place on a particular day, who were the flight
    personnel, flight location, flight base, how many flying hours were recorded for each day. These data
    are then used to service Aircrafts, as each aircraft must be serviced after it has completed particular
    number of flying hours. These data are also used to calculate staff pay and any allowances that they
    may receive for being away from home base.
    During a bushfire season, each aircraft often flies for nearly 10 to 12 hours per day, and the staff
    operating each aircraft work long hours to ensure the maximum contribution; therefore, Ryan
    Aviation must track these hours accurately, so that it can compensate staff by either awarding time
    in lieu or overtime payments for its staff.
    All these data are maintained using a spread sheet, and flights appointment and times are organised
    in Microsoft Outlook. Initially, these processes were carried out effectively by using the existing
    technology due to the small client base. At this initial stage, all files were paper based, and staff
    would often need to spend time searching for a particular file.
    However, as Ryan Aviation contracts have expanded, they have built additional bases around
    Queensland and New South Wales, with a view to ensuring quicker response to bush fires and
    becoming responsive to the needs of the communities they serve. Establishing additional bases
    COIT20248 – Term 3, 2019 – Assignment 1 & 2 Case Study Page 2 of 3
    implies, distributing specialist aircrafts to each base, distributing staff, spare parts, maintenance
    personnel and duplicating all related administrative processes.
    Ryan Aviation are keen to expand their organisation to other regions; however, they are
    apprehensive about how they would manage the increase in locations, particularly considering
    current manual processes and systems. For example, Ryan Aviation manually manages staff leave
    requests, payroll and timesheets, therefore duplicating these processes in other locations may
    present a challenge. They are aware that they would need to have regular meetings with staff to
    ensure that a high level of service was maintained.
    These issues needed to be considered from a strategic point of view as Ryan Aviation faces the
    complex challenge of expanding the workforce and increasing the number of locations, while at the
    same time maintaining effective business processes and ensuring a high standard of ethics and
    security in information sharing.
    Accounting
    At the end of each month, the accounts department located at the base in Gold Coast pays all staff
    and also makes a report of all flights conducted, whether group or individual flights, so invoicing can
    be completed to each state government or mining company.
    Accounts department must also keep track and report on aircraft service records, number of spares
    used, number of spares remaining at each location and order / replenish stock. This includes the
    stock of fire-retardant materials.
    Ryan Aviation decide to engage you as an IT consultant. Your job is to provide Ryan Aviation with
    solutions that address the following issues and provide advice on what Ryan Aviation needs to
    implement to secure a successful future.
    Desired System
    Ryan Aviation always wanted a system whereby clients can do online bookings, Flight timetables can
    be done online, Pilot and Maintenance staff details are maintained online, Staff can be allocated
    online and reimbursed through online system. The system must be capable of tracking and
    maintaining stock levels for spare parts, fire retardant materials and water sources. The System
    should assist to do all billing and keep records of flights, including origin, destination, personnel who
    operated the flight, purpose of flight, day and time of flights etc. The system should be able to
    produce basic reports or give out data in excel dumps for easy manipulation.
    Ryan Aviation has earmarked a budget of $200,000 for this project with a discount rate of 9%. They
    estimate that the new system will help in reducing cost by $8,500 per month. Maintenance cost
    could be estimated at around $1500 per month. The System life is estimated at 5 years for
    calculation of return on investment / payback period.
    Data To Be Captured By The Desired System
    1. Helicopter - types, ratings, capacity, licence level, flights, engine hours.
    2. Staff - skills, pilot rating, flight time log.
    3. Spare parts – Part number, description, price
    4. Retardant and water sources - location, litres, kilograms, retardant price
    COIT20248 – Term 3, 2019 – Assignment 1 & 2 Case Study Page 3 of 3
    5. Scheduling
    a) Passenger, helicopters, staff and associated support
    b) Air Attacks - Fire operations, helicopters, staff and associated support
    6. Booking, billing and payments - for above
    7. Tracking of fire retardant/water dumps
    8. Aircraft Maintenance - schedule, parts, ...
    9. Staff scheduling/roster - pilots, ground staff, timesheets, leaves
    10. Staff payroll
                </p>
            </div>
        </section>

        <Footer />
    </div>
);



export default About;