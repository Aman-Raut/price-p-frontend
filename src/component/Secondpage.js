import Find from "./image/find.jpg";
import "./Seconpage.css";
function Secondpage() {
  return (
    <>
      <div className="hello">
        <div>
          <img src={Find} />
        </div>
        <div>
          <ul className="verticle">
          <li >
            <h3>Easy on the Pocket , Easy on the Mind</h3> <br />
          </li>
          <li>
            <p>
            We are dedicated to making the process of finding your ideal room or PG accommodation near your university easier and more affordable. Our goal is to assist you in locating the perfect living space that meets your preferences and budget, all within close proximity to your university.
            </p>
          </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Secondpage;
