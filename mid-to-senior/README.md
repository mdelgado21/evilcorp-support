Mid to Senior
=============

The competencies that a senior level developer are describe in [link goes here]()

The following exercise its a tool to assess that you as developer is in the technical level required to advance to this title.

General instructions
--------------------

1. There is no limit of time to finish the test, the main goal is for people to adquire, grow and get prepared in all the topics mentioned below, so the person feel confident to defend the proposal and to take Senior responsibilities.
2. You need to clone this repo, under the ```mid-to-senior``` folder you need to create a new folder with your name in the following format ```firstName.lastName``` same way as your Edify's email address. All your work must go into that folder.
3. You need to create a branch with the same name format as the folder in step ```2```
3. All the work needs to be push to the your branch using pull requests out of feature branches that describe a concrete functionality that you develop.
4. ```Mentors and Career Path folks``` would be supporting the person during this process.
5. Once the person feels ready/prepared to present the work done, a session would be scheduled to defend the proposal in front of a small panel of 3 other developers.

### Deliverables
* Written proposal including the aspects mentioned in the description section below.
* A presentation of the proposal to a panel of 3 reviewers.
* It is not necessary to develop a POC for this test, but it is expected for Senior Developer to be able to start an application from scratch following good practices and standards.


### Description

Evil Corp is looking for a software development vendor to build a front end application which will be integrated to their in house services.The company is looking for a vendor with plenty of experience in software development, it is asking for a written proposal (high level design document) about how the topics mentioned below would be covered, the document should include, technologies, frameworks, libraries, methodologies, design patterns and strategies proposed to achieve the goal.

1. **Authentication and authorization:** all the company services are secured using JWT,  the FE app should handle the authentication and authorization based on user roles. The company already has endpoints for login, logout and refresh token. All services return the corresponding 401 and 403 error codes when necessary. Google sign in is also desired.

2. **Integrating BE services:** some services are still at a design/development phase, some others are documented but not implemented, a few are not designed yet; but this should not block the vendor progress. At this point the company has a QA environment for testing but the system should be deployed to any future environment (including dev machines)

3. **Error handling:** All services follow HTTP Response codes to indicate application errors, the FE application should handle it gracefully. Unexpected errors should also be handled/tracked correctly for bug fixing, the company expects the vendor to provide some inputs about how to do so.

4. **High Performance:** the application loading time should not exceed 5 seconds, subsequent pages should load within a lapse of 2-3 seconds. The app should not overload the company services.

5. **Development processes:** the vendor should demonstrate high knowledge on development processes, i.e documentation, source management, project structure, builds, releases, etc. 

6. **Quality:** High code quality is expected, a low bug ratio is expected as well at every release.

7. **Design patterns and good practices:** the vendor should demonstrate high knowledge on front end development design patterns and good practices.

8. **Theming and i18n:** the application will be delivered to different organizations, each with its own theme (fonts, colors, borders, shapes, logos, labels, etc), adding a new organization should not be a time consuming task.

9. **Realtime information:** the company services will provide real time notifications to the front end application 

10. **Timezone Management:** the application would be used around the world so that handling timezones properly is key for the success of the project.

11. **Customization and configuration:** the application should be customizable and configurable so that new deployments are not required when a property value needs to be modified.

12. **Direct app linking:** some application pages could be shared at social networks or between app users, so that authorized users can access then directly.

13. **Application usage:** it is important for marketing and researchers to know how users use the application over the time.

14. **Accessibility:** this is a plus, but the app should be designed taking this topic in consideration

15. **Maintainability:** the application should not get obsolete, the vendor should demonstrate their ability to prevent this kind of situations.

16. **Leadership and team effort:** it is likely the vendor will provide a team of 4-5 developers and will coordinate with the company Project Manager, it is expected from the vendor to manage and follow their team work, the vendor should demonstrate experience at leading development teams and remote communication/coordination

17. **Security:** the vendor should demonstrate experience on implementing the security of software, so that common attacks and hacks are avoided.