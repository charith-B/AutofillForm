# PROJECT REPORT

 CPS	596 - Z1

Source: 

University of Dayton

Department of Computer Science

CPS	596 - Z1,Summer 2023


Instructor(s):

- James Buckley

##  Project Title : Online Auto-Fill Forms Using Images

# Team members

1.  Charith Boddu , bodduc1@udayton.edu

## Table of contents:

| S.no | Description |
| --- | --- |
|1 | Project Management Information |
|2 | Overview |
|3 | Project Context and Scope |
|4 | Environment Setup |
|5 | Project files Descriptions |
|6 |  System Design |
|7 | Description |
|8 | Demo |



#  Project Management Information

Source code repository (private access): https://github.com/charith-B/AutofillForm.git

Power-point presentation: https://www.canva.com/design/DAFc0O8X960/TJGVTa15g3iiFY5Y52OHYw/edit?utm_content=DAFc0O8X960&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

Project TimeSheet: https://1drv.ms/x/s!Aln4QU2sXfSYgvgnYMEqwJZjizvb_A?e=aKfe3K

#  Overview

AutoFill Forms
Project Requirement: Develop an autofill capability for a web page based on a scanned Image. 

Functionalities:
The application should be allowed to access the camera to capture or extract key information from an uploaded Image (ex: driver license, credit cards etc.) and auto fill information on the targeted form.

Any additional or unmapped fields should be made available for the user to manually enter.


#  Project Context and Scope

*	This project could be useful in simplifying and streamlining the process of filling out online forms, by leveraging technology to automatically extract text from images and populate the corresponding form fields.This could save time, reduce errors, and provide a more convenient and accessible way for users to complete online forms

* The Autofill Forms project is a web-based application, that allows users to quickly and easily fill out online forms. It extracts text from a picture and automatically populating the form fields with the extracted information.

* The application would allow users to take a picture of a document, and use optical character recognition (OCR) technology to extract the text from the image. Then extracted text is used to automatically fill in the corresponding fields in the online form.
 

#  Environment Setup

* First step is to Install  Node.js  from the link  ===>   https://nodejs.org/en/download/

* To verify proper installations Open terminal and type ===> npm -v

![Check npm version](src/assets/img/image-ref/check-npm-version.png )

* Next Install VSCODE using ==> https://code.visualstudio.com/Download

* Then open VSCODE and  from the VSCODE terminal Install Angular CLI using command "npm install -g @angular/cli"

![Angular Install](src/assets/img/image-ref/Angular-installation.png  )


* To verify proper installations in the terminal and type ==>ng v

![Angular version check](src/assets/img/image-ref/Angular-version.png  )


* Now Clone the project from the git repository from the link mentioned above or by typing ==> "git clone https://github.com/charith-B/AutofillForm.git" in the VSCODE terminal
![Git clone](src/assets/img/image-ref/clone-project.png  )


* Once cloned open the project folder and Install Node-modules using "npm install" in the VScode terminal.
  
  ![Npm Install](src/assets/img/image-ref/npm-install.png  )


* Then to run the project open new terminal in VScode and type==> "Ng serve"

![Ng serve](src/assets/img/image-ref/ng-serve.png  )


* This will execute the code and run the project hosting it in localhost with URL==> "http://localhost:4200/" using which we can access the project in any browser on the system.

![Hosting  project](src/assets/img/image-ref/host-project.png  )

* Now open a new terminal and enter ==>'json-server --watch db.json' to run the backend server that accepts Json requests.


#  Project files Descriptions:

* node modules:

     The node_modules file in an Angular project is a folder that contains all the dependencies and packages needed for the project to run.
     These dependencies are installed via the npm (Node Package Manager) tool, which downloads and installs the packages specified in the project's package.json file.

* src: 

     The src file in an Angular project is a directory that contains all the source code for the project. It is the main source of the Angular application and holds the main code for the components, services, models, directives, and other essential elements of the project.
     The src file is where developers write the main logic of the application, create and modify components, and write code to make the application work as intended. It is crucial to the overall functioning and success of an Angular project.

* angular.json:

     The angular.json file is a configuration file that is automatically generated in an Angular project when you use the Angular CLI to create a new project. It is used to store various settings and configuration options for the Angular project.

* package.json:

     The package.json file in an Angular project is a configuration file that contains information about the project and its dependencies. It is used by npm (Node Package Manager) to manage the project's dependencies and scripts. 
     The file is located at the root of the Angular project and contains information such as the name of the project, version number, author, description, and scripts. 
     The dependencies section of the file lists all the npm packages that the project depends on, including Angular itself and any other libraries or plugins that the project requires. 
     The scripts section contains a list of npm scripts that can be run to perform various tasks, such as building the project, starting the development server, or running tests. 
     The package.json file is an important part of the Angular project and helps to ensure that the project can be easily maintained and developed over time.

* tsconfig.json:

     The tsconfig.json file in an Angular project is a configuration file for TypeScript that provides information about how TypeScript should compile your code.
     It specifies the root directory for TypeScript files, the compiler options to use, the target version of JavaScript to generate, and the files and folders to include or exclude from the compilation. 
     This file is important for ensuring that TypeScript is compiling your code correctly and providing you with the desired outputs. It helps ensure consistency in your code by enforcing certain coding standards and practices.
     It also helps with debugging, as errors will be caught at compile-time rather than at runtime. Overall, the tsconfig.json file plays a crucial role in helping Angular projects maintain quality and maintainable code.
     
#  System Design

* Project Flow diagram


![UML Diagram](src/assets/img/UML-diagram.png  )

* Sequence diagram


![Sequence Diagram](src/assets/img/Sequence-Diagram.png  )

* Use-case Diagram

![Use-case Diagram](src/assets/img/usecase.png  )



  #  Description:
  
  * After the Project is deployed the the first component that executes is the Home component in which the user has to login or create a new user credetils to login securely by clicking on the signup button. Then once the user has proper login credentials the user can login as a authorised user.
    
  * Then that leads us to the Forms component where the user can either manually enter the form data or can choose to click on the "Camera" button to use the auto-fill        feature.
 
  * If the User selects to manually enter the date then he/she can fill the form and press submit or else he can press the camera button to access the camera plug-in       which opens a pop-up from which we can access the camera to take picture from which the picture is scanned and the text is extracted and filtered and will be auto     filled into the form fields.
 
  * Once the form is filled the user can press "Submit" button and that will redirect us to the review page where the user can verify the data that is displayed in a       table format one last time before submitting the data.



#  Demo

* Home component :

			Initial page that is loaded when the project is hosted. User can log in or sign up if its a new user then login to their account
      
![Home component](src/assets/img/image-ref/home-component.png  )


* Forms component: 

			here the user can select the form that he is going to upload using autofill feature. The fields for the form are listed out here with vaidations. 
               A button on the right of the forms with a camera icon by clicking on will redirect to a new window to Camera component.
               Another button for submitting the form values.
      
![Form component](src/assets/img/image-ref/Forms-component.png  )
![Credit card Form ](src/assets/img/image-ref/creditform.png  )
![Passport Form](src/assets/img/image-ref/passport-form.png  )

                     
* Camera component: 

			This will redirect to a new window where the user can take a picture of the document to auto-fill the form. 
      
![Camera component](src/assets/img/image-ref/camera-component.png  )


* Review component: 

			In this page the user can review the form details for the last time before submitting the details.
      
![Review component](src/assets/img/image-ref/Review-component.png  )

* Short Video Demo:

    Click on the Image to Redirect to the youtube video
    
[![ Youtube Demo Video](src/assets/img/image-ref/youtube_video_thumbnail.png  ) ](https://youtu.be/u9elN-NXHeA) 







