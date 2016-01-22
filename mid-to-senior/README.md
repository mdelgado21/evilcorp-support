Mid to Senior
=============

The competencies that a senior level developer are describe in [link goes here]()

The following exercise its a tool to assess that you as developer is in the technical level required to advance to this title.

General instructions
--------------------

1. You have ```4 weeks``` to resolve this exercise, during those you can spend up to ```2 hours``` a week of Edify's time to resolve it, the rest has to be in your own time.
2. You need to clone this repo, under the ```mid-to-senior``` folder you need to create a new folder with your name in the following format ```firstName.lastName``` same way as your Edify's email address. All your work must go into that folder.
3. You need to create a branch with the same name format as the folder in step ```2```
3. All the work needs to be push to the your branch using pull requests out of feature branches that describe a concrete functionality that you develop.
4. ```Julio Arias``` would be product owner and software architect during the ```4 weeks``` time as if this was a real project.
5. Once you finish the exercise you need to present your work to a small panel of 3 other developers.

### Exercise description

EdiTickets is a new startup in Costa Rica and they want to disrupt the current event ticket sales business in the country by offering a real robust REST API that then they can skin with different front-ends for many different clients or particular events. They just hire Edify to build such system, they require that you and a software architect first define that REST API and base architecture or the application with all the best industry practices.

EdiTickets send us the following high level requirements:

1. A venue is basically the place where an event can take place, for example a movie theater or a football stadium. It should have a name, an address an GPS coordinates.
2. A venue can be split into sub-venues, for example each room at a multiplex cinema.
3. A venue or sub-venue can have a limited capacity, and can have optional numbered seating, like in a movie theater or theater.
4. A venue or sub-venue can hold multiple events which should not overlap at the sub-venue level if available or at the venue level if it doesn't have any sub-venues.
5. An event has a description, title, a schedule, an event poster and a specific capacity/seating that overrides the venue/sub-venue.
6. There should be 3 types of users to the system.
  - Super user, has read/write access to all the data in system.
  - A venue manager, which has read/write access to the venue data only.
  - And a costumer user which buys tickets to any event.
7. A customer would have access to all his previous and current orders.
8. An order for a given customer holds basic data like the event, total cost, cost per ticket if he purchase more than one, a validation code and the virtual ticket which is basically an image with the ticket info plus a secure bar code, qr code or anything similar that can validate the ticket authenticity based out the validation code.
9. The should always respond a valid JSON doc even in case of errors, the JSON for the error needs to be simple for a machine to parse but also human readable.
9. The application needs to audit almost all the events that occur, like ticket purchases, event cancellations, etc. All the events should be trigger asynchronously and persisted, and also be able to analyze them in real time. This doesn't get reflected in the REST API but needs to be taken into account as part of the architecture.
10. As part of the architecture we need to monitor different metrics of the application, same as the auditing this is not a functional requirement but, it needs to be taken into account in the general architecture of the app.

Again the idea is to create the API spec only + basic architecture of the application. If time permits an implementation can be done of a part of the API but it must contain all non functional requirements, authentication, auditing and metrics.

The architectural document should be simple, and should include recommendations for the main datastore, metrics analytics, event pipeline and datastore.

EdiTickets wants to be really successful and crash its competitors so any suggestions on the data model and requirements would be greatly appreciated.
