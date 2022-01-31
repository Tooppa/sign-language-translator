<div id='top'></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h2 align="center">Lost in Translation</h2>
  <p align="center">
    English to sign language translation app made in React
    <br />
    <a href="https://super-sign-language-translator.herokuapp.com">View Demo</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About

Group project made during Experis Academy Full-Stack Developer course. Courses are hosted by [Noroff](https://www.noroff.no/en/). Project members are listed on the <a href="#collaborators">collaborators</a> section.

Purpose of this assignement was to learn different aspects of React and Redux. Data is accessed via `Users API`, which is pre-made by Noroff.

`Users API` is pre-made backend service made by Noroff, which is used to handle stored user data. 


<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [JavaScript](https://javascript.com/)
- [React](https://reactjs.org)
- [Redux](https://redux.js.org)
- [React Router DOM](https://reactrouter.com/)
- [Noroff Assignment API](https://github.com/dewald-els/noroff-assignment-api/blob/master/docs/lost-in-translation.md)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- Have npm installed. npm comes pre installed with NodeJs, Please go [here](https://nodejs.org/en/download/) to download it. 
- Follow [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) guide on how to get started with react


### Installation

API hosting portion uses [Heroku](https://heroku.com), but your may use hosting provider 

1. Generate random base64 string. This is your API key, save it for later. 

2. Clone the repo
   ```sh
   git clone https://github.com/Tooppa/sign-language-translator.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create `.env.local` file on your project root directory.

5. Paste the following text to the create file:
   ```
    VUE_APP_USERS_API_KEY={your-api-key}
    REACT_APP_USERS_BASE_URL={base-url-to-your-hosted-api}/translations
   ```
6. Deploy backend api. Follow this [repository](https://github.com/dewald-els/noroff-assignment-api) for guidance
7. Your generated base64 string is your `API_KEY`. Add it as your Config Vars on [Heroku Dashboard](https://dashboard.heroku.com) 
8. Add your generated API key string to `REACT_APP_USERS_API_KEY` section of your `.env.local` file
9. Run the app locally with:
```
npm start
```


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage


Firstly the app asks you to input your name. This name can be used later to 'log-in' to your previous account. 

If you have already logged in previously, You are redirected immidiately to the translation page.

![screenshot-login]

After you have entered your name, you are presented with an empty translation page. On top you can enter word or sentence you wish to have translated. After doing so, pressing Enter or arrow button to start translating. App populates the white box below to indicate the translated input.

![screenshot-translation]

You can access your Profile page from the button top right, where it says 'Profile'. On your Profile page you can see all of your previous translations. You may also delete all of your previously made translations by pressing the 'Clean translations' button. 

On the top of the page, you can also see our username, quick link back to the translation page and logout button. Upon loggin out, if you wish to access your account again, you may do so by entering the same username that you chose in the beginning.

![screenshot-profile]


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Collaborators

<div id='collaborators'></div>

Tomas Valkendorff
[![LinkedIn][linkedin-shield]][linkedin-url-tomas] [![GitHub][github-badge]][github-url-tomas]

Mikko Ryynänen
[![LinkedIn][linkedin-shield]][linkedin-url-mikko] [![GitHub][github-badge]][github-url-mikko]

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[github-badge]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[linkedin-url-tomas]: https://www.linkedin.com/in/tomasvalkendorff/
[linkedin-url-mikko]: https://www.linkedin.com/in/mikko-ryynanen
[github-url-tomas]: https://github.com/Tooppa
[github-url-mikko]: https://github.com/mikkoryynanen
[screenshot-login]: screenshots/screenshot-login.png
[screenshot-profile]: screenshots/screenshot-profile.png
[screenshot-translation]: screenshots/screenshot-translation.png
