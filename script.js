const MyReactApp=()=>{

    return(
      <div>
      <h1>Topics covered</h1>
      <p>The following is a list of all the topics we cover in the MDN learning area.</p>
      <div class="div">
      <a href="#">Getting started with the web</a>
      <p>Provides a practical introduction to web development for complete beginners</p>
      </div>
      <div class="div">
      <a href="#">HTML- Structuring the web</a>
      <p>HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.</p>
      </div>
      
      <div class="div">
      <a href="#">CSS-Styling the web</a>
      <p>CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.</p>
      </div>
      
      </div>
    )
};
const rootDiv = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootDiv);
reactRoot.render(<MyReactApp/>)