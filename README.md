# Cestou Web Application

The front-end web application code of Cestou.

A build of this project is live and can be found [here](https://cestou.netlify.app/).

## Installation and Setup Instructions

#### Example:  

Clone down this repository. You will need `node` and either `npm` or `yarn` installed globally on your machine.  

Installation:

`npm install` or `yarn install`

To Start Server:

`npm start` or `yarn start`

To Visit App:

Access [localhost:3000](localhost:3000) on your web browser of preference.  

## Reflection:

This project was built for [Ioasys Camp 2022](https://camp.ioasys.com.br/) as part of the final challenge of the bootcamp, that was to be done in a team. Because of that, there were certain requirements to be met in this project, even though most requierments were set by the team itself, such as: 
 
- Following the layout designed by our team's designer
- A landing page, displaying basic information about the product and relevant links.
- An "About" page, informing what the product (Cestou) consists of .
- A "Sign Up" page where the user can register as a consumer, producer or auxiliary institution (such as NGOs) of familial agricultural products.
- A "Login" page where users can authenticate themselves 
- A dashboard page for the institutions that partner up with Cestou can access (this page is still static unfortunately, because the backend still doesn't support the registration of these institutions).
- A contact form that allows users to e-mail Cestou's team directly from the web page.
- The project had to be done by 22/04/2022, giving the development team about 3 weeks and a half to write the code.

Because of these requirements, there weren't many decisions to be made about the project by the front-end developer, but there were some important ones, such as what state management tool to use and how to handle API requests. I chose to use React's `Context API` for state management, because the only global state that needed to be managed was related to authentication, which tends not change much and was very simple to implement using Context (I had some experience using Context to mange authentication), a more sophisticated tool like Redux didn't feel necessary.  I chose `axios` to handle my API requests because I have some experience with it and I think `axios` helps keep the code more organized by instantiating objects to represent the APIs you might access.

One of the main challenges I ran into was Responsiveness. Because of the predetermined design, it was challenging to make the layout responsive as the mobile design of the website was quite different from the desktop design in many aspects. Specifically, the design team requested that some sections of the page that displayed a series of elements horizontally be sustituted by carousels in the mobile design. These carousels were implemented from scratch.

Another issue was finding a way of sending the e-mails from the contact forms. After using [EmailJS](https://www.emailjs.com/) (which is very good, but has a 200 e-mail per month limit for the free tier of the service), I swtiched to using [FormSubmit](https://formsubmit.co/), which is HTML based, and has some disadvantages, but is completely free, doesn't any e-mails limit and is incredibly simple to use.

Also, because I'm not very used to Redux, I had some difficulty with it, especially when dealing with asynchronous data.

Overall, I was satisfied with this project, it was certainly challenging at times, but I think I learned a lot while making it, especially about how to develop software within a team and how to deal with time restraints.

Although it seems that all the requirements have been met, it would certainly add a lot to the application if it is possible to include a dashboard for all users. Even with that in mind, I think the final product is very good (specially if we consider the time restraints) and the whole team should be proud of it!