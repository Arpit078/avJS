
//use inline html vs code extension to write html like these in template strings. Don't forget write /*html*/ or /*css*/
//before template string after installing inline html extention.
import Navbar from "../components/Navbar/Navbar.js"
const Home = /*html*/ `
<div class="Text">
<div id="headAndNav">
    <h1 class="title">Welcome to Pre-ReactJS ✌️ </h1>
    <div class="bg">${Navbar()}</div>
</div>
    <p class="subHead">Why Pre-ReactJS</p>
    <p class="paragraph">
        The main Idea behind developing pre-reactJS was to use plain old VanillaJS for developing single page applications for my hobby projects but still have the goodness the industry level frameworks offered such as ReactJS and NextJS.
    </p>
    <p class="subHead">
        What Pre-ReactJS provides 
    </p>
    <p class="paragraph">
        • Power to create single page apps using simple HTML,CSS and Javascript stack.
        <br>   
        • Component based architecture.
        <br>
        • Inhouse file based routing.
        <br>
        • Dom and window api access in a single page application😲.
        <br>
        • Extremely light weight and made for indie and hobby projects.
    </p>

    </div>
</div>
`;
export default Home;
